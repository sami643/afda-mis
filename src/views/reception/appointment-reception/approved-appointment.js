import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CSpinner,
} from "@coreui/react";
const moment = require("moment");
const jalaliMoment = require("moment-jalaali");
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import $ from "jquery";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import pashtolang from "./../../data/pashto.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import viewAttachments from "./../../../assets/images/viewAttachments.png";
// import { appointmentCheckOutAPI } from "src/api/utils";
import "./../../data/views.css";
import Loader from "src/components/loader";
import {
  gettingAppointmentListAPI,
  appointmentCheckOutAPI,
} from "../../../api/utils";

import {
  approvingAppointmentValidationSchema,
  rejectingReasonValidationSchema,
} from "../../data/validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import VisitorData from "../visitor/visitor-view-component";
import { user_roles } from "src/views/data/global-data";
const ApprovedAppointments = () => {
  const logUser = localStorage.getItem("user_role");
  const tableRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appointmentModalData, setAppointmentModalData] = useState({});
  const [appointmentData, setAppointmentData] = useState({});
  const [checkoutStatus, setCheckoutStatus] = useState({});
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  const [updattionMessage, setUpdationMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = (item) => {
    setIsModalOpen(true);
    setAppointmentModalData(item);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showRejectionModal = (item) => {
    setIsRejectionModalOpen(true);
    setAppointmentData(item);
  };

  const handleRejectionModalCancel = () => {
    console.log("hello i am cancelled");
    setIsRejectionModalOpen(false);
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

  const gettingApprovedAppointment = async () => {
    const data = { status: "approved" };
    try {
      const response = await gettingAppointmentListAPI(data);
      setListData(response.data.Appointments);
    } catch (error) {
      console.error("Error in appointments:", error);
    }
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

  const cancelAppointment = async (values) => {
    const data = {
      status: "cancel",
      id: appointmentData.id,
      reason: values.reason,
    };
    try {
      const response = appointmentCheckOutAPI(data);
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

  useEffect(() => {
    gettingApprovedAppointment().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <CSpinner color="info" />;
  }

  return (
    <CCard className="mb-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CCardHeader>
            <h4>✔️ قبول شوي ملاقاتونه/لیدنې </h4>
          </CCardHeader>

          <CCardBody>
            <div className="container my-4">
              <table
                ref={tableRef}
                id="dtOrderExample"
                className=" mb-3 mt-4 table table-striped table-bordered table-sm "
                width="100%"
              >
                <thead>
                  <tr>
                    <th className="text-center">شماره</th>
                    <th className="text-center"> نوم</th>
                    <th className="text-center">ریاست</th>
                    <th className="text-center">د لیدنې نیټه</th>
                    <th className="text-center">د لیدنې موده</th>
                    <th className="text-center">د اړیکې شمیره </th>
                    
                    <th className="text-center">عملیې</th>
                  
                    {logUser === user_roles.reception_appointment && (
                      <th className="text-center">عملیې</th>
                    )}
                    {(logUser === user_roles.head_user ||
                      logUser === user_roles.directorate_manager) && (
                      <th className="text-center">عملیې</th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {listData.map((item, index) => (
                    <tr key={index}>
                      <td> {index + 1}</td>
                      <td>{item.visitor.name}</td>
                      <td>{item.directorate.name}</td>
                      <td>{item.appointment_date}</td>
                      <td>{item.appointment_time_range}</td>
                      <td>{item.visitor.contact}</td>
                      <td className="text-center">
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => showModal(item)}
                          className="text-info me-2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        />
                      </td>
                      {logUser === user_roles.reception_appointment && (
                        <td className="text-center">
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
                        </td>
                      )}
                      {(logUser === user_roles.head_user ||
                        logUser === user_roles.directorate_manager) && (
                        <td className="text-center">
                          <CButton
                            className="btn btn-danger p-1 px-3 mx-1"
                            onClick={() => {
                              showRejectionModal(item);
                            }}
                          >
                            کنسل
                          </CButton>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
                      {" "}
                      <strong className="meetingview p-1 rounded">
                        {/* {appointmentModalData.status} */}
                        قبول شوی
                      </strong>
                    </CCol>
                  </CCol>
                  <CCol md={4} className="d-flex">
                    <CCol md={8} className="">
                      <p className="">د ننوتلو وخت :</p>
                    </CCol>
                    <CCol md={12} className="">
                      {" "}
                      <strong className="">
                        {" "}
                        {appointmentModalData.check_in}
                      </strong>
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
                      <strong className="">
                        {appointmentModalData.purpose}
                      </strong>
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
                <CRow md={12} className="pb-3 px-3">
                  <CCol md={7} className="d-flex">
                    <CCol md={4} className="">
                      <p className="">ضمیمه:</p>
                    </CCol>
                    <CCol md={8} className="">
                      <strong className="">
                        {appointmentModalData.attachment &&
                        appointmentModalData.attachment !==
                          "/user-media/no_file.pdf" ? (
                          <a
                            href={`http://localhost:8000/${appointmentModalData.attachment}`}
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
                      </strong>
                    </CCol>
                  </CCol>
                </CRow>
              </div>
            </Modal>
            <Modal
              open={isRejectionModalOpen}
              onCancel={handleRejectionModalCancel}
              footer={null}
              className="meetingViewModal"
            >
              <div className="  border rounded mt-3 mb-2 mt-4  ">
                <h6 className="meetingview px-2 py-2 ">
                  د لیدنې د کنسل کیدو علت
                </h6>
                <Formik
                  onSubmit={cancelAppointment}
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
        </>
      )}
    </CCard>
  );
};

export default ApprovedAppointments;
