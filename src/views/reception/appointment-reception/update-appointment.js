import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CToast,
  CToaster,
  CToastHeader,
  CToastBody,
} from "@coreui/react";
import "./../../data/views.css";
import { useNavigate } from "react-router-dom";
import { updateAppointmentAPI } from "../../../api/utils";
import { newAppointmentValidationSchema } from "../../data/validation";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { directprateListAPI } from "./../../../api/utils";
import viewAttachments from "./../../../assets/images/viewAttachments.png";

const UpdatingAppointment = () => {
  const appointment_typeOptions = [
    { value: "formal", label: "رسمی" },
    { value: "informal", label: "غیر رسمی" },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serializedData = searchParams.get("id");
  const appointmentData = JSON.parse(decodeURIComponent(serializedData));
  const [disableButton, setDisableButton] = useState(false);
  const [directorateList, setDireactorateList] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
    if (appointmentData.isDashboardList === "true") {
      navigate("/dashboard");
    } else {
      navigate("/reception/pending-appointment");
    }
  };

  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast className="toast-1" show={showToast} autohide={false}>
      <CToastHeader>
        <svg
          className="rounded me-2"
          width="20"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        ></svg>
        <div className="" style={{ fontSize: "22px" }}>
          ✔️بریا!{" "}
        </div>
      </CToastHeader>
      <CToastBody
        className="d-flex flex-column align-items-center toastBody"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        فورم اپدیټ شو!
        <CButton
          onClick={handleCloseToast}
          className="bg-success m-4 px-4  mt-5  toastButton"
        >
          تړل
        </CButton>
      </CToastBody>
    </CToast>
  );

  console.log(appointmentData.attachment, ":appointmentData");

  const directprateList = async () => {
    const response = await directprateListAPI();
    setDireactorateList(response.data);
  };
  const updateAppointment = async (values) => {
    const data = {
      id: appointmentData.id,
      directorate: values.directorate,
      number_of_person: values.number_of_person,
      introduced_by: values.introduced_by,
      purpose: values.purpose,
      visitor: appointmentData.visitor.id,
      appointment_type: values.appointment_type,
      attachment: values.attachment,
    };
    const response = await updateAppointmentAPI(data);
    if (response.data.message === "Appointment is Updated") {
      addToast(exampleToast);
      setShowToast(true);
      setDisableButton(true);
    }
  };

  useEffect(() => {
    directprateList();
  }, []);

  return (
    <>
      <div>
        <CToaster ref={toaster} push={toast} placement="top-center" />
      </div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4>
                <FontAwesomeIcon icon={faEdit} className="text-primary me-2" />د
                لیدنې اپدیټ
              </h4>
            </CCardHeader>
            <CCardBody className="mx-3 ">
              {/* Application form */}
              <div className="  border rounded mt-5 mb-5">
                <Formik
                  onSubmit={updateAppointment}
                  initialValues={{
                    purpose: appointmentData.purpose,
                    number_of_person: appointmentData.number_of_person,
                    appointment_type: appointmentData.appointment_type,
                    directorate: appointmentData.directorate.id,
                    introduced_by: appointmentData.introduced_by,
                    attachment: appointmentData.attachment,
                  }}
                  validationSchema={newAppointmentValidationSchema}
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
                      <CRow className="justify-content-center m-4">
                        {/* Presidency */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            ریاست
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
                          <select
                            id="directorate"
                            value={values.directorate}
                            name="directorate"
                            onChange={(e) =>
                              setFieldValue("directorate", e.target.value)
                            }
                            className={`form-control form-select-lg ${
                              errors.directorate && touched.directorate
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                          >
                            <option>وټاکئ/انتخاب</option>

                            {directorateList.map((option) => {
                              return (
                                <option key={option.id} value={option.id}>
                                  {option.name}
                                </option>
                              );
                            })}
                          </select>
                          {errors.directorate && touched.directorate ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.directorate}
                            </div>
                          ) : null}
                        </CCol>

                        {/* Number Of visitors */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            د اشخاصو تعداد
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
                          <input
                            type="number"
                            id="number_of_person"
                            name="number_of_person"
                            className={`form-control form-select-lg ${
                              errors.number_of_person &&
                              touched.number_of_person
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.number_of_person}
                            onChange={(e) => {
                              const newValue = parseInt(e.target.value, 10); // Parse the input value as an integer
                              if (
                                !isNaN(newValue) &&
                                newValue >= 1 &&
                                newValue <= 10
                              ) {
                                // Check if the value is a number and within the range 1-10
                                setFieldValue("number_of_person", newValue);
                              } else {
                                // Clear the field or display an error message (you can handle this based on your UI design)
                                setFieldValue("number_of_person", ""); // Clear the field
                              }
                            }}
                            onBlur={() =>
                              setFieldTouched("number_of_person", true)
                            }
                            style={{ direction: "rtl", textAlign: "right" }}
                          />
                          {errors.number_of_person &&
                          touched.number_of_person ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.number_of_person}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>
                      <CRow className="justify-content-center m-4">
                        {/* Appointment Type */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            د لیدنې ډول
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
                          <select
                            id="appointment_type"
                            value={values.appointment_type}
                            name="appointment_type"
                            onChange={(e) =>
                              setFieldValue("appointment_type", e.target.value)
                            }
                            className={`form-control form-select-lg ${
                              errors.appointment_type &&
                              touched.appointment_type
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            aria-label=".form-select-lg example"
                          >
                            <option>وټاکئ/انتخاب</option>

                            {appointment_typeOptions.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </select>
                          {errors.appointment_type &&
                          touched.appointment_type ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.appointment_type}
                            </div>
                          ) : null}
                        </CCol>
                        {/* introduced_by */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            معرفي کونکې مرجع
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
                          <input
                            type="text"
                            id="introduced_by"
                            name="introduced_by"
                            className={`form-control form-select-lg ${
                              errors.introduced_by && touched.introduced_by
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.introduced_by}
                            onChange={(e) =>
                              setFieldValue("introduced_by", e.target.value)
                            }
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>

                      <CRow className="justify-content-center m-4">
                        {/* Visit Purpose */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            د لیدنې هدف
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
                            id="purpose"
                            name="purpose"
                            className={`form-control form-select-lg ${
                              errors.purpose && touched.purpose
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.purpose}
                            rows={4}
                            onChange={(e) =>
                              setFieldValue("purpose", e.target.value)
                            }
                            onBlur={() => setFieldTouched("purpose", true)}
                          />
                          {errors.purpose && touched.purpose ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.purpose}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            ضمیمه
                          </label>
                          <input
                            class="form-control form-control-lg"
                            id="attachment"
                            name="attachment"
                            type="file"
                            onChange={(event) => {
                              setFieldValue(
                                "attachment",
                                event.currentTarget.files[0]
                              );
                            }}
                          />
                        </CCol>
                      </CRow>

                      <CRow className="justify-content-end mx-5 mt-5 mb-5 d-flex">
                        {/* <CCol md={5} className="  ">
                          <CButton
                            className="btn-sm btn   px-5 py-2 mb-4 "
                            onClick={() => {
                              navigate("/reception/pending-appointment");
                              window.location.reload();
                            }}
                          >
                            تړل
                          </CButton>
                        </CCol> */}
                        <CCol md={5} className=" text-end  mx-5">
                          <CButton
                            type="submit"
                            className="btn-sm btn   px-5 py-2 mb-4 "
                            disabled={disableButton ? true : false}
                          >
                            ثبت
                          </CButton>
                        </CCol>
                      </CRow>
                    </Form>
                  )}
                </Formik>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UpdatingAppointment;
