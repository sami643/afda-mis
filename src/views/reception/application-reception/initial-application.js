import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CSpinner,
  CProgress,
} from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import axios, { isCancel } from "axios";
import $ from "jquery";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import pashtolang from "./../../data/pashto.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./../../data/views.css";
import { useNavigate } from "react-router-dom";
import InitialIcon from "./../../../assets/images/initial.png";
import viewAttachments from "./../../../assets/images/viewAttachments.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import VisitorData from "../visitor/visitor-view-component";
import Loader from "src/components/loader";
import {
  approvingAppointmentValidationSchema,
  rejectingReasonValidationSchema,
} from "../../data/validation";
import {
  gettingAplicationsListAPIS,
  updateApplicationStatusAPI,
} from "./../../../api/utils";
import { user_roles } from "src/views/data/global-data";

const InitialApplication = () => {
  const logUser = localStorage.getItem("user_role");
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applicationModalData, setApplicationModalData] = useState({});
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({});
  const [updattionMessage, setUpdationMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deletedId, setDeletedId] = useState([]);
  const [control, setControl] = useState(0);

  useEffect(() => {
    const dataTable = $("#dtOrderExample").DataTable({
      order: [[0, "desc"]],
      pageLength: 25,
      language: pashtolang,
    });
    $(".dataTables_length").addClass("bs-select");

    return () => {
      dataTable.destroy();
    };
  }, [listData, deletedId]);

  const showModal = (item) => {
    setIsModalOpen(true);
    setApplicationModalData(item);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showCancelModal = (item) => {
    setIsCancelModalOpen(true);
    setApplicationData(item);
  };
  const handleCancellationModalCancel = () => {
    setIsCancelModalOpen(false);
  };

  const gettingInitialAplicationsList = async () => {
    const data = { status: "initial" };
    try {
      const response = await gettingAplicationsListAPIS(data);
      setListData(response.Applications);
    } catch (error) {
      console.error("Error in application:", error);
    }
  };

  const approvingOrCancelApplication = async (getStatus, itemId, values) => {
    let count = 0;
    const receivingStatusData = {
      status: getStatus,
      id: itemId,
    };
    const cancelStatusData = {
      status: getStatus,
      id: itemId,
      reason: values?.reason,
    };

    let data =
      values?.isCancel === "ofCourse" ? cancelStatusData : receivingStatusData;
    try {
      const response = await updateApplicationStatusAPI(data);
      console.log(response.data, "changeStatus Response");
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

  useEffect(() => {
    gettingInitialAplicationsList();
    setLoading(false);
  }, [control]);

  if (loading) {
    return <CSpinner color="info" />;
  }

  const navigateToUpdatePage = (item) => {
    const serializedData = encodeURIComponent(JSON.stringify(item));
    navigate(`/reception/update-application?id=${serializedData}`);
  };
  return (
    <CCard className="mb-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CCardHeader>
            <h4 className="m-2">
              <img src={InitialIcon} width={50} />د اسنادو ابتداي بڼه
              <CProgress
                color="primary"
                variant="striped"
                className="m-4 mx-5"
                animated
                value={25}
              />
            </h4>
          </CCardHeader>
          <CCardBody>
            <div className="container " style={{ marginTop: "50px" }}>
              <table
                ref={tableRef}
                id="dtOrderExample"
                className=" table table-striped table-bordered table-sm"
                width="100%"
              >
                <thead>
                  <tr>
                    {/* <th className="text-center">شماره</th> */}
                    <th className="text-center">آیډي نمبر</th>
                    <th className="text-center">ریاست</th>
                    <th className="text-center">موخه/ هدف</th>
                    <th className="text-center">ضمیمه</th>
                    <th className="text-center">نور مالومات</th>
                    {logUser !== user_roles.head_user && (
                      <th className="text-center">عملیې</th>
                    )}
                  </tr>
                </thead>
                {/* Your tbody and tfoot sections */}
                <tbody>
                  {listData?.map((item, index) => (
                    <tr key={item.id}>
                      {/* <td> {index + 1}</td> */}
                      <td>{item.id}</td>
                      <td> {item.directorate.name}</td>
                      <td> {item.purpose}</td>
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
                      <td className="text-center">
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => showModal(item)}
                          className="text-info me-2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        />
                      </td>
                      {logUser !== user_roles.head_user && (
                        <td className="text-center">
                          {logUser === user_roles.executive_manager ? (
                            <>
                              <CButton
                                className="btn btn-success p-1 px-3 mx-2"
                                onClick={() => {
                                  approvingOrCancelApplication(
                                    "receive",
                                    item.id
                                  );
                                  setDeletedId(item.id);
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
                              <FontAwesomeIcon
                                icon={faEdit}
                                className="text-primary me-2"
                                onClick={() => {
                                  navigateToUpdatePage(item);
                                }}
                              />
                            </>
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* view Information Dat */}
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
                      <strong className="">{applicationModalData?.id}</strong>
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
                        {applicationModalData.status === "cancel" && "کنسل شوی"}
                        {applicationModalData.status === "in-process" &&
                          "جریان"}
                        {applicationModalData.status === "receive" &&
                          "ترلاسه شوی شوی"}
                        {applicationModalData.status === "rejected" && "رد شوی"}
                        {applicationModalData.status === "completed" &&
                          "بشپړ شوی"}
                        {applicationModalData.status === "check_out" &&
                          "تړل شوی"}
                        {applicationModalData.status === "initial" && "ابتدايي"}
                      </strong>
                    </CCol>
                  </CCol>
                  <CCol md={4} className="d-flex">
                    <CCol md={8} className="">
                      <p className="">د ثبت نیټه:</p>
                    </CCol>
                    <CCol md={12} className="">
                      <strong className="">
                        {applicationModalData.created_date}
                      </strong>
                    </CCol>
                  </CCol>
                </CRow>
              </div>
            </Modal>

            {/* Cancellation Modal */}
            <Modal
              open={isCancelModalOpen}
              onCancel={handleCancellationModalCancel}
              footer={null}
              className="meetingViewModal"
            >
              <div className="  border rounded mt-3 mb-2 mt-4  ">
                <h6 className="meetingview px-2 py-2 ">
                  د اسناد د کنسل کیدو علت
                </h6>
                <Formik
                  onSubmit={(values) =>
                    approvingOrCancelApplication(
                      "cancel",
                      applicationData.id,
                      values
                    )
                  }
                  initialValues={{
                    reason: "",
                    isCancel: "ofCourse",
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
                                اسناد کنسل شو!
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
        </>
      )}
    </CCard>
  );
};

export default InitialApplication;
