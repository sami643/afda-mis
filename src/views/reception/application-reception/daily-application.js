import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CSpinner,
} from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import VisitorData from "../visitor/visitor-view-component";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import $ from "jquery";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import viewAttachments from "./../../../assets/images/viewAttachments.png";
import pashtolang from "./../../data/pashto.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "src/components/loader";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import { TimePicker } from "antd";
import persian_fa from "react-date-object/locales/persian_fa";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CommentValidationSchema } from "../../data/validation";

import "./../../data/views.css";
import {
  approvingAppointmentValidationSchema,
  rejectingReasonValidationSchema,
} from "src/views/data/validation";
import {
  appointmentCheckOutAPI,
  gettingDailyAllStatusAppointmentsAPI,
  gettingDailyAllStatusApplicatoinsAPI,
  updateApplicationStatusAPI,
} from "src/api/utils";

import { user_roles } from "src/views/data/global-data";
import { head_user } from "src/_nav";
const moment = require("moment");
const jalaliMoment = require("moment-jalaali");
// import Loader from "src/components/loader";

var itemdata = [];
const DailyApplications = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logUser = localStorage.getItem("user_role");
  const [loading, setLoading] = useState(true);
  const [checkoutStatus, setCheckoutStatus] = useState({});
  const [applicationModalData, setApplicationModalData] = useState({});
  const [isAcceptionModalOpen, setIsAcceptionModalOpen] = useState(false);
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  const [timeRange1, setTimeRange1] = useState(null);
  const [timeRange, setTimeRange] = useState(null);
  const [updattionMessage, setUpdationMessage] = useState(false);
  const [listData, setListData] = useState([]);
  const [appointmentData, setAppointmentData] = useState({});
  const [isRejectdModalOpen, setIsRejectedModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({});
  const [isRemarksModalOpen, setIsRemarksModalOpen] = useState(false);

  const tableRef = useRef(null);

  const handleTimeRangeChange = (value, timeString) => {
    const temp = timeString[0];
    timeString[0] = timeString[1];
    timeString[1] = temp;
    const updatedRange = timeString.join(" ");
    setTimeRange(updatedRange);
    setTimeRange1(updatedRange);
  };
  const showCancelModal = (item) => {
    setIsCancelModalOpen(true);
    setApplicationData(item);
  };
  const handleCancelModalCancel = () => {
    setIsCancelModalOpen(false);
  };

  const showRejectedModal = (item) => {
    setIsRejectedModalOpen(true);
    setApplicationData(item);
  };
  const handleRejectedModalCancel = () => {
    setIsRejectedModalOpen(false);
  };

  const showRemarksModal = (item) => {
    setIsRemarksModalOpen(true);
    setApplicationData(item);
  };
  const handleRemarksModalCancel = () => {
    setIsRemarksModalOpen(false);
  };

  const showModal = (item) => {
    setIsModalOpen(true);
    setApplicationModalData(item);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const dataTable = $(tableRef.current).DataTable({
      order: [[0, "asc"]],
      pageLength: 25,
      language: pashtolang,
    });
    $(".dataTables_length").addClass("bs-select");

    return () => {
      dataTable.destroy();
    };
  }, [listData]);

  const statusClasses = {
    initial: "bg-initial",
    rejected: "bg-Rejected",
    cancel: "bg-cancelled",
    "in-process": "bg-approved",
    completed: "bg-completed",
    receive: "bg-received",
    check_out: "bg-check_out",
  };

  useEffect(() => {
    const gettingDailyAllApplicaitonList = async () => {
      try {
        const response = await gettingDailyAllStatusApplicatoinsAPI();
        setListData(response.data.data);
      } catch (error) {
        console.error("Error in appointments:", error);
      }
    };
    gettingDailyAllApplicaitonList();
    setLoading(false);
  }, []);

  // For Updated
  const navigateToUpdatePage = (item) => {
    const newItem = {
      ...item,
      isDashboardList: "true",
    };
    const serializedData = encodeURIComponent(JSON.stringify(newItem));
    navigate(`/reception/update-application?id=${serializedData}`);
  };
  const checkingOut = async (item) => {
    const data = {
      status: "check_out",
      id: item.id,
      check_out_date: jalaliMoment().format("jYYYY-jMM-jDD hh:mm A"),
    };
    try {
      const response = await updateApplicationStatusAPI(data);
      console.log("checkOut Response", response);
    } catch (error) {
      console.error("Error in appointments:", error);
    }
  };

  const approvingOrRejectApplication = async (getStatus, itemId, values) => {
    let count = 0;
    const receivingStatusData = {
      status: getStatus,
      id: itemId,
    };
    const rejectStatusData = {
      status: getStatus,
      id: itemId,
      reason: values?.reason,
    };

    let data =
      values?.isRejected === "true" ? rejectStatusData : receivingStatusData;
    try {
      const response = await updateApplicationStatusAPI(data);
      data = response.data;
      if (response) {
        setTimeout(() => {
          setListData(response.data.data);
          setIsLoading(true);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 500);
      }

      setControl(count);
      setUpdationMessage(true);
    } catch (error) {
      console.error("Error in newApplication:", error);
    }
  };

  const cancelApplication = async (getStatus, itemId, values) => {
    console.log("Cancel APplications dATA", values);

    const data = {
      status: getStatus,
      id: itemId,
      reason: values.reason,
    };

    try {
      const response = await updateApplicationStatusAPI(data);
      console.log(response.data, "changeStatus Response");
      if (response) {
        setTimeout(() => {
          setListData(response.data.data);
          setIsLoading(true);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 500);
      }

      setControl(count);
      setUpdationMessage(true);
    } catch (error) {
      console.error("Error in newApplication:", error);
    }
  };

  const completingOrCommentingApplication = async (
    getStatus,
    itemId,
    values
  ) => {
    const commentData = {
      status: getStatus,
      id: itemId,
      comment: values?.comment,
    };

    const completionData = {
      status: getStatus,
      id: itemId,
    };
    const data = getStatus === "completed" ? completionData : commentData;

    try {
      const response = await updateApplicationStatusAPI(data);
      setUpdationMessage(true);
      if (response) {
        setTimeout(() => {
          setIsLoading(true);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 500);
      }
    } catch (error) {
      console.error("Error in newApplication:", error);
    }
  };
  if (loading) {
    return <CSpinner color="info" />;
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h4>د نن ورځې د اسنادو لست</h4>
      </CCardHeader>
      <CCardBody>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container " style={{ marginTop: "50px" }}>
            <table
              ref={tableRef}
              id="dtOrderExample"
              className=" table table-striped table-bordered table-sm"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="text-center">آیډی</th>
                  <th className="text-center">ریاست</th>
                  <th className="text-center"> موخه/هدف</th>
                  <th className="text-center">ضمیمه</th>
                  <th className="text-center">حالت</th>
                  <th className="text-center">نور مالومات</th>
                  <th className="text-center">عملیې</th>
                </tr>
              </thead>
              {/* Your tbody and tfoot sections */}
              <tbody>
                {listData?.map((item, index) => (
                  <>
                    <tr key={index + 1}>
                      <td> {item.id}</td>
                      <td> {item.directorate.name}</td>
                      <td>{item.purpose}</td>
                      {/* Attachment */}
                      <td className="text-center">
                        {item.attachment &&
                        item.attachment !== "/user-media/no_file.pdf" ? (
                          <a
                            href={`http://localhost:8000/${item.attachment}`}
                            target="_blank"
                          >
                            <img
                              src={viewAttachments}
                              width="30"
                              alt="Description of the image"
                            />
                          </a>
                        ) : (
                          <p>اسناد نلري</p>
                        )}
                      </td>
                      {/* Status */}
                      <td className={statusClasses[item.status]}>
                        {item.status == "initial" && "ابتدایی"}
                        {item.status == "in-process" && "جریان"}
                        {item.status == "cancel" && "کنسل"}
                        {item.status == "rejected" && "رد"}
                        {item.status == "completed" && "بشپړ شوی"}
                        {item.status == "check_out" && "تړل شوی"}
                        {item.status == "receive" && "تر لاسه شوی"}
                      </td>
                      {/* View */}
                      <td className="text-center ">
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => showModal(item)}
                          className="text-info me-2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        />

                        {/* <FontAwesomeIcon icon={faTrash} className="text-danger" /> */}
                      </td>
                      {(logUser === user_roles.executive_manager ||
                        logUser === user_roles.reception_application) && (
                        <>
                          <td className="text-center">
                            {logUser === user_roles.executive_manager &&
                            item.status === "initial" ? (
                              <>
                                <CButton
                                  className="btn btn-success p-1 px-3 mx-2"
                                  onClick={() => {
                                    approvingOrRejectApplication(
                                      "receive",
                                      item.id
                                    );
                                  }}
                                >
                                  تائید
                                </CButton>
                                <CButton
                                  className="btn btn-danger p-1 px-3 mx-1"
                                  onClick={() => {
                                    showCancelModal(item);
                                  }}
                                >
                                  کنسل
                                </CButton>
                              </>
                            ) : (
                              <>
                                {logUser ===
                                  user_roles.reception_application && (
                                  <>
                                    {(item.status === "initial" ||
                                      item.status === "cancel" ||
                                      item.status === "rejected") && (
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        className="text-primary me-2"
                                        onClick={() => {
                                          navigateToUpdatePage(item);
                                        }}
                                      />
                                    )}
                                  </>
                                )}

                                {logUser === user_roles.reception_application &&
                                  item.status === "completed" && (
                                    <>
                                      {!checkoutStatus[item.id] ? ( // Use the unique identifier for the item as the key
                                        <td className="text-center">
                                          <CButton
                                            className="btn btn-danger p-1 px-3 mx-1 "
                                            onClick={() => {
                                              // Set checkout status only for the specific item
                                              setCheckoutStatus(
                                                (prevStatus) => ({
                                                  ...prevStatus,
                                                  [item.id]: true, // Set the status to true for the specific item
                                                })
                                              );
                                              checkingOut(item);
                                            }}
                                          >
                                            تړل
                                          </CButton>
                                        </td>
                                      ) : (
                                        <>
                                          <td className="text-center">
                                            <p className=" my-0">
                                              اسناد وسپارل شول
                                              <br />
                                              <span className="bg-success">
                                                {jalaliMoment().format(
                                                  "jYYYY-jMM-jDD hh:mm A"
                                                )}
                                              </span>
                                            </p>
                                          </td>
                                        </>
                                      )}
                                    </>
                                  )}
                              </>
                            )}
                          </td>
                        </>
                      )}
                      {logUser === user_roles.head_user && (
                        <>
                          <td className="text-center">
                            {item.status === "receive" ? (
                              <>
                                <CButton
                                  className="btn btn-success p-1 px-3 mx-2"
                                  onClick={() => {
                                    approvingOrRejectApplication(
                                      "in-process",
                                      item.id
                                    );
                                  }}
                                >
                                  احکام
                                </CButton>
                                <CButton
                                  className="btn btn-danger p-1 px-3 mx-1"
                                  onClick={() => {
                                    showRejectedModal(item);
                                  }}
                                >
                                  رد
                                </CButton>
                              </>
                            ) : null}
                          </td>
                        </>
                      )}
                      {logUser === user_roles.directorate_manager && (
                        <>
                          <td className="text-center">
                            {item.status === "in-process" ? (
                              <>
                                <CButton
                                  className="btn btn-success p-1 px-3 mx-2"
                                  onClick={() => {
                                    completingOrCommentingApplication(
                                      "completed",
                                      item.id
                                    );
                                  }}
                                >
                                  تکمیل
                                </CButton>
                                <CButton
                                  className="btn btn-warning p-1 px-3 mx-1"
                                  onClick={() => {
                                    showRemarksModal(item);
                                  }}
                                >
                                  ملاحظات
                                  {item.comment && <>✓</>}
                                </CButton>
                              </>
                            ) : null}
                          </td>
                        </>
                      )}{" "}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="meetingViewModal"
        >
          {/* Visitor Data Component */}
          <VisitorData data={applicationModalData} />
          <div className="  border rounded mt-2 mb-3 mt-4 ">
            <h6
              className=" meetingview px-2 py-2 "
              style={{ borderRadius: "4px 4px 0px 0px " }}
            >
              د اسناد په اړه مالومات
            </h6>
            <CRow md={12} className=" pt-3 px-3 px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">آیډي نمبر:</p>
                </CCol>
                <CCol md={9} className="">
                  <strong className="">{applicationModalData.id}</strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">ریاست:</p>
                </CCol>
                <CCol md={12}>
                  <strong className="">
                    {applicationModalData?.directorate?.name}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="  px-3 pb-5">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">حالت :</p>
                </CCol>
                <CCol md={9}>
                  <strong className="meetingview p-1 rounded">
                    {/* {applicationModalData.status} */}
                    جریان
                  </strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د ثبت نیټه :</p>
                </CCol>
                <CCol md={12} className="">
                  <strong className="">
                    {applicationModalData.created_date}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="  px-3 pb-5">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">ملاحظات :</p>
                </CCol>
                <CCol md={9}>
                  {applicationModalData.comment && (
                    <strong className="bg-warning p-1 rounded">
                      {applicationModalData.comment}
                    </strong>
                  )}
                </CCol>
              </CCol>
            </CRow>
          </div>
        </Modal>
        <Modal
          open={isRejectdModalOpen}
          onCancel={handleRejectedModalCancel}
          footer={null}
          className="meetingViewModal"
        >
          <div className="  border rounded mt-3 mb-2 mt-4  ">
            <h6 className="meetingview px-2 py-2 ">د اسناد د رد کیدو علت</h6>
            <Formik
              onSubmit={(values) =>
                approvingOrRejectApplication(
                  "rejected",
                  applicationData.id,
                  values
                )
              }
              initialValues={{
                reason: "",
                isRejected: "true",
              }}
              validationSchema={rejectingReasonValidationSchema}
              enableReinitialize={true}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <Form>
                  <CRow className=" pt-3 ">
                    <CRow className="justify-content-center  ">
                      {/* Rejectoin Reason */}
                      <CCol md={10} className="">
                        <label className="form-label mx-3" htmlFor="reason">
                          علت
                          <span
                            style={{
                              color: "red",
                              marginInline: "5px",
                              paddingTop: "5px",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <textarea
                          type="text"
                          id="reason"
                          name="reason"
                          className={`form-control form-select-lg ${
                            errors.reason && touched.reason
                              ? "is-invalid form-select-lg    "
                              : ""
                          }`}
                          value={values.purpose}
                          rows={4}
                          onChange={(e) =>
                            setFieldValue("reason", e.target.value)
                          }
                          onBlur={() => setFieldTouched("reason", true)}
                        />
                        {errors.reason && touched.reason ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.reason}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol md={6} className=""></CCol>
                    </CRow>

                    <CCol md={11} className="text-end pt-5 mb-4 ">
                      {!updattionMessage ? (
                        <CButton className="px-4" type="submit">
                          ثبت
                        </CButton>
                      ) : (
                        <div
                          className="bg-"
                          style={{
                            width: "200px",
                            marginRight: "70%",
                          }}
                        >
                          <h5
                            className="bg-light  "
                            style={{
                              padding: "15px",
                            }}
                          >
                            ✔️اسناد رد شو!
                          </h5>
                        </div>
                      )}
                    </CCol>
                  </CRow>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>

        <Modal
          open={isCancelModalOpen}
          onCancel={handleCancelModalCancel}
          footer={null}
          className="meetingViewModal"
        >
          <div className="  border rounded mt-3 mb-2 mt-4  ">
            <h6 className="meetingview px-2 py-2 ">د اسناد د کنسل کیدو علت</h6>
            <Formik
              onSubmit={(values) =>
                cancelApplication("cancel", applicationData.id, values)
              }
              initialValues={{
                reason: "",
              }}
              validationSchema={rejectingReasonValidationSchema}
              enableReinitialize={true}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <Form>
                  <CRow className=" pt-3 ">
                    <CRow className="justify-content-center  ">
                      {/* Rejectoin Reason */}
                      <CCol md={10} className="">
                        <label className="form-label mx-3" htmlFor="reason">
                          علت
                          <span
                            style={{
                              color: "red",
                              marginInline: "5px",
                              paddingTop: "5px",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <textarea
                          type="text"
                          id="reason"
                          name="reason"
                          className={`form-control form-select-lg ${
                            errors.reason && touched.reason
                              ? "is-invalid form-select-lg    "
                              : ""
                          }`}
                          value={values.purpose}
                          rows={4}
                          onChange={(e) =>
                            setFieldValue("reason", e.target.value)
                          }
                          onBlur={() => setFieldTouched("reason", true)}
                        />
                        {errors.reason && touched.reason ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.reason}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol md={6} className=""></CCol>
                    </CRow>

                    <CCol md={11} className="text-end pt-5 mb-4 ">
                      <CButton className="px-4" type="submit">
                        ثبت
                      </CButton>
                    </CCol>
                  </CRow>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>

        <Modal
          open={isRemarksModalOpen}
          onCancel={handleRemarksModalCancel}
          footer={null}
          className="meetingViewModal"
        >
          <div className="  border rounded mt-3 mb-2 mt-4  ">
            <h6 className="meetingview px-2 py-2 ">ملاحظات ولیکئ</h6>
            <Formik
              onSubmit={(values) =>
                completingOrCommentingApplication(
                  "in-process",
                  applicationData.id,
                  values
                )
              }
              initialValues={{
                comment: "",
              }}
              validationSchema={CommentValidationSchema}
              enableReinitialize={true}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <Form>
                  <CRow className=" pt-3 ">
                    <CRow className="justify-content-center  ">
                      {/* Rejectoin comment */}
                      <CCol md={10} className="">
                        <label className="form-label mx-3" htmlFor="comment">
                          ملاحظات
                          <span
                            style={{
                              color: "red",
                              marginInline: "5px",
                              paddingTop: "5px",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <textarea
                          type="text"
                          id="comment"
                          name="comment"
                          className={`form-control form-select-lg ${
                            errors.comment && touched.comment
                              ? "is-invalid form-select-lg    "
                              : ""
                          }`}
                          value={values.purpose}
                          rows={4}
                          onChange={(e) =>
                            setFieldValue("comment", e.target.value)
                          }
                          onBlur={() => setFieldTouched("comment", true)}
                        />
                        {errors.comment && touched.comment ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.comment}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol md={6} className=""></CCol>
                    </CRow>

                    <CCol md={11} className="text-end pt-5 mb-4 ">
                      {!updattionMessage ? (
                        <CButton className="px-4" type="submit">
                          ثبت
                        </CButton>
                      ) : (
                        <div
                          className="bg-"
                          style={{
                            width: "200px",
                            marginRight: "70%",
                          }}
                        >
                          <h5
                            className="bg-light  "
                            style={{
                              padding: "15px",
                            }}
                          >
                            ملاحظات ثبت شو!
                          </h5>
                        </div>
                      )}
                    </CCol>
                  </CRow>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      </CCardBody>
    </CCard>
  );
};

export default DailyApplications;
