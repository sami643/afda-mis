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
import pashtolang from "./../../data/pashto.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "src/components/loader";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import { TimePicker } from "antd";
import persian_fa from "react-date-object/locales/persian_fa";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { gettingDailyAllStatusAppointmentsAPI } from "src/api/utils";
import viewAttachments from "./../../../assets/images/viewAttachments.png";

import "./../../data/views.css";
import {
  approvingAppointmentValidationSchema,
  rejectingReasonValidationSchema,
} from "src/views/data/validation";
import { appointmentCheckOutAPI } from "src/api/utils";
import { user_roles } from "src/views/data/global-data";
const moment = require("moment");
const jalaliMoment = require("moment-jalaali");
// import Loader from "src/components/loader";
var itemdata = [];
const DailyListAppointments = () => {
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logUser = localStorage.getItem("user_role");
  const [loading, setLoading] = useState(true);
  const [checkoutStatus, setCheckoutStatus] = useState({});
  const [appointmentModalData, setAppointmentModalData] = useState({});
  const [isAcceptionModalOpen, setIsAcceptionModalOpen] = useState(false);
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  const [timeRange1, setTimeRange1] = useState(null);
  const [timeRange, setTimeRange] = useState(null);
  const [updattionMessage, setUpdationMessage] = useState(false);
  const [appointmentData, setAppointmentData] = useState({});
  const [isMoqamUser, setIsMoqamUser] = useState(false);
  const [appointmentDataForDash, setAppointmentDataForDash] = useState("");
  const [listData, setListData] = useState([]);
  // const [applicationDataForDash, setApplicationDataForDash] = useState("");

  const handleTimeRangeChange = (value, timeString) => {
    const temp = timeString[0];
    timeString[0] = timeString[1];
    timeString[1] = temp;
    const updatedRange = timeString.join(" ");
    setTimeRange(updatedRange);
    setTimeRange1(updatedRange);
  };

  const showAcceptionModal = (item) => {
    setIsAcceptionModalOpen(true);
    setAppointmentData(item);
  };

  const handleAcceptionModalCancel = () => {
    setIsAcceptionModalOpen(false);
  };

  const showRejectionModal = (item) => {
    setIsRejectionModalOpen(true);
    setAppointmentData(item);
  };
  const handleRejectionModalCancel = () => {
    setIsRejectionModalOpen(false);
  };

  const showModal = (item) => {
    setIsModalOpen(true);
    setAppointmentModalData(item);
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

  useEffect(() => {
    const gettingDailyAllStatesAppointments = async () => {
      try {
        const response = await gettingDailyAllStatusAppointmentsAPI();
        setListData(response.data.data);
      } catch (error) {
        console.error("Error in appointments:", error);
      }
    };
    gettingDailyAllStatesAppointments();
    setLoading(false);
  }, []);
  // console.log( "Dialy APplication repsonse");
  // console.log(listData, "list Data2323");

  const statusClasses = {
    pending: "bg-pending",
    rejected: "bg-Rejected",
    cancel: "bg-cancelled",
    approved: "bg-approved",
    completed: "bg-completed",
  };

  // For Updated
  const navigateToUpdatePage = (item) => {
    const newItem = {
      ...item,
      isDashboardList: "true",
    };
    const serializedData = encodeURIComponent(JSON.stringify(newItem));
    navigate(`/reception/update-appointment?id=${serializedData}`);
  };
  const checkingOut = async (item) => {
    const data = {
      status: "completed",
      id: item.id,
      check_out: jalaliMoment().format("jYYYY-jMM-jDD hh:mm A"),
    };
    try {
      const response = appointmentCheckOutAPI(data);
      console.log(response.data, "changeStatus Response");
    } catch (error) {
      console.error("Error in appointments:", error);
    }
  };

  const approvingAppointment = async (values) => {
    itemdata = appointmentData;
    const rejectionOrCancellationData = {
      id: appointmentData.id,
      reason: values.reason,
      status:
        logUser === user_roles.head_user ||
        logUser === user_roles.directorate_manager
          ? "rejected"
          : "cancel",
    };
    const data = {
      status: "approved",
      id: appointmentData.id,
      appointment_date: values.appointment_date,
      appointment_time_range: timeRange,
    };
    const data_1 =
      values.formType === "reject/cancel" ? rejectionOrCancellationData : data;
    try {
      const response = appointmentCheckOutAPI(data_1);
      setUpdationMessage(true);
      setTimeout(() => {
        setIsLoading(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, 1000);
      console.log(response.data, "changeStatus Response");
    } catch (error) {
      console.error("Error in appointments:", error);
    }
  };
  if (loading) {
    return <CSpinner color="info" />;
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h4>د نن ورځې د لیدنو لست</h4>
      </CCardHeader>
      <CCardBody>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container " style={{ marginTop: "50px" }}>
            <table
              ref={tableRef}
              id="dtOrderExample"
              className=" mb-3 mt-4 table table-striped table-bordered table-sm"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="text-center">شماره</th>
                  <th className="text-center"> نوم</th>
                  <th className="text-center">د لیدنې موخه</th>
                  <th className="text-center">حالت</th>
                  <th className="text-center">ضمیمه</th>
                  <th className="text-center">عملیې</th>

                  <th className="text-center">عملیې</th>
                </tr>
              </thead>
              {/* Your tbody and tfoot sections */}
              <tbody>
                {listData?.map((item, index) => (
                  <>
                    <tr key={index + 1}>
                      <td> {index + 1}</td>
                      <td>{item.visitor.name}</td>
                      <td>{item.purpose}</td>
                      <td className={statusClasses[item.status]}>
                        {item.status == "pending" && "انتظار"}
                        {item.status == "cancel" && "کنسل"}
                        {item.status == "rejected" && "رد"}
                        {item.status == "completed" && "بشپړ شوی"}
                        {item.status == "check_out" && "تړل شوی"}
                        {item.status == "approved" && "قبول شوی"}
                        {/* {item.status == "" && "تر لاسه شوی"} */}
                      </td>
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
                      <td className="text-center ">
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => showModal(item)}
                          className="text-info me-2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        />
                        {logUser === user_roles.reception_appointment &&
                          item.status === "pending" && (
                            <FontAwesomeIcon
                              icon={faEdit}
                              className="text-primary me-2"
                              onClick={() => {
                                navigateToUpdatePage(item);
                              }}
                            />
                          )}

                        {/* <FontAwesomeIcon icon={faTrash} className="text-danger" /> */}
                      </td>
                      <td className="text-center">
                        {logUser === user_roles.head_user ||
                        logUser === user_roles.directorate_manager ? (
                          <>
                            {item.status === "pending" ? (
                              <>
                                <CButton
                                  className="btn btn-success p-1 px-3 mx-2"
                                  onClick={() => {
                                    showAcceptionModal(item);
                                  }}
                                >
                                  قبول
                                </CButton>
                                <CButton
                                  className="btn btn-danger p-1 px-3 mx-1"
                                  onClick={() => {
                                    showRejectionModal(item);
                                  }}
                                >
                                  رد
                                </CButton>
                              </>
                            ) : (
                              <>
                                {item.status === "approved" && (
                                  <>
                                    <CButton
                                      className="btn btn-danger p-1 px-3 mx-1"
                                      onClick={() => {
                                        showRejectionModal(item);
                                      }}
                                    >
                                      کنسل
                                    </CButton>
                                  </>
                                )}
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            {logUser === user_roles.reception_appointment &&
                              item.status === "pending" && (
                                <CButton
                                  className="btn btn-danger p-1 px-3 mx-1"
                                  onClick={() => {
                                    showRejectionModal(item);
                                  }}
                                >
                                  کنسل
                                </CButton>
                              )}

                            {logUser === user_roles.reception_appointment &&
                              item.status === "approved" && (
                                <>
                                  {!checkoutStatus[item.id] ? (
                                    <CButton
                                      className="btn btn-danger p-1 px-3 mx-1"
                                      onClick={() => {
                                        // Set checkout status only for the specific item
                                        setCheckoutStatus((prevStatus) => ({
                                          ...prevStatus,
                                          [item.id]: true, // Set the status to true for the specific item
                                        }));
                                        checkingOut(item);
                                      }}
                                    >
                                      تړل
                                    </CButton>
                                  ) : (
                                    <>
                                      <p className=" my-0">
                                        د لیدنې پروسه بشپړه شوه
                                        <br />
                                        <span className="bg-success">
                                          {jalaliMoment().format(
                                            "jYYYY-jMM-jDD hh:mm A"
                                          )}
                                        </span>
                                      </p>
                                    </>
                                  )}
                                </>
                              )}
                          </>
                        )}
                      </td>
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
          {/* Visitor Data */}
          <VisitorData data={appointmentModalData} />
          <div className="  border rounded mt-2 mb-3 mt-4 ">
            <h6
              className=" meetingview px-2 py-2 "
              style={{ borderRadius: "4px 4px 0px 0px " }}
            >
              د لیدنې په اړه مالومات
            </h6>
            <CRow md={12} className=" pt-3 px-3 px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">معرفي کونکې مرجع:</p>
                </CCol>
                <CCol md={9} className="">
                  {" "}
                  <strong className="">
                    {appointmentModalData.introduced_by}
                  </strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د اشخاصو تعداد:</p>
                </CCol>
                <CCol md={12}>
                  {" "}
                  <strong className="">
                    {" "}
                    {appointmentModalData.number_of_person}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="  px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">د لیدنې حالت :</p>
                </CCol>
                <CCol md={9}>
                  <strong className="meetingview p-1 rounded">
                    {appointmentModalData.status === "cancel" && "کنسل شوی"}
                    {appointmentModalData.status === "pending" && "انتظار"}
                    {appointmentModalData.status === "approved" && "قبول شوی"}
                    {appointmentModalData.status === "rejected" && "رد شوی"}
                    {appointmentModalData.status === "completed" && "بشپړ شوی"}
                    {appointmentModalData.status === "check_out" && "تړل شوی"}
                  </strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د ننوتلو وخت :</p>
                </CCol>
                <CCol md={12} className="">
                  {" "}
                  <strong className=""> {appointmentModalData.check_in}</strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="  px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">ریاست:</p>
                </CCol>
                <CCol md={9} className="">
                  {" "}
                  <strong className="">
                    {" "}
                    {appointmentModalData?.directorate?.name}
                  </strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د لیدنې موده:</p>
                </CCol>
                <CCol md={12} className="">
                  {" "}
                  <strong className="">
                    {appointmentModalData.appointment_time_range}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="pb-3 px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">د لیدنې موخه:</p>
                </CCol>
                <CCol md={8} className="">
                  {" "}
                  <strong className="">{appointmentModalData.purpose}</strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د لیدنې ډول:</p>
                </CCol>
                <CCol md={12} className="">
                  {" "}
                  <strong className="">
                    {appointmentModalData.appointment_type}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
          </div>
        </Modal>

        <Modal
          open={isAcceptionModalOpen}
          onCancel={handleAcceptionModalCancel}
          footer={null} // Remove the footer buttons
          className="meetingViewModal"
        >
          <div className="  border rounded mt-3 mb-2 mt-4  ">
            <h6 className="meetingview px-2 py-2 ">د لیدنې نیټه او وخت</h6>
            <Formik
              onSubmit={approvingAppointment}
              initialValues={{
                id: appointmentData.id,
                status: "approved",
                appointment_date: "",
              }}
              validationSchema={approvingAppointmentValidationSchema}
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
                  <CRow className=" pt-3 px-3 px-3  m-5 ">
                    <CCol xs={12} md={6}>
                      <CCol>د لیدنې نیټه:</CCol>
                      <DatePicker
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                        id="appointment_date"
                        name="appointment_date"
                        style={{ width: "100%", height: "40px" }}
                        onChange={(e) =>
                          setFieldValue(
                            "appointment_date",
                            e.year + "/" + e.month.number + "/" + e.day
                          )
                        }
                      />
                      {errors.appointment_date && touched.appointment_date ? (
                        <div className="invalid-feedback d-block errorMessageStyle mr-2">
                          {errors.appointment_date}
                        </div>
                      ) : null}
                    </CCol>

                    <CCol xs={12} md={6} className="timeRangeLabel">
                      <CCol className="StartAndEndLabel_Top">د لیدنې موده</CCol>
                      <CCol md={4} className="d-flex StartAndEndLabel ">
                        <CCol>شروع:</CCol>
                        <CCol>ختم:</CCol>
                      </CCol>
                      <TimePicker.RangePicker
                        onChange={handleTimeRangeChange}
                      />
                      {errors.appointment_time_range &&
                      touched.appointment_time_range ? (
                        <div className="invalid-feedback d-block errorMessageStyle mr-2">
                          {errors.appointment_time_range}
                        </div>
                      ) : null}
                    </CCol>
                  </CRow>
                  <CRow>
                    {" "}
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
                            ✔️ریکارډ اپدیټ شو!
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
          open={isRejectionModalOpen}
          onCancel={handleRejectionModalCancel}
          footer={null}
          className="meetingViewModal"
        >
          <div className="  border rounded mt-3 mb-2 mt-4  ">
            {isMoqamUser ? (
              <h6 className="meetingview px-2 py-2 ">د لیدنې د رد کیدو علت</h6>
            ) : (
              <h6 className="meetingview px-2 py-2 ">
                د لیدنې د کنسل کیدو علت
              </h6>
            )}

            <Formik
              onSubmit={approvingAppointment}
              initialValues={{
                reason: "",
                formType: "reject/cancel",
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
                            ✔️ریکارډ اپدیټ شو!
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

export default DailyListAppointments;
