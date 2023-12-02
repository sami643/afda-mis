import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser, cilMobile, cilDialpad } from "@coreui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import LOGO from "../../../assets/images/afda_logo.png";
import "./style.css";
import "./../page-style.css";

const Register = () => {
  const navigate = useNavigate();
  const navigateToUpdatePage = (isRegister) => {
    const serializedData = encodeURIComponent(JSON.stringify(isRegister));
    navigate(`/otp-part-2?isRegistered=${serializedData}`);
  };

  return (
    <div className="  min-vh-100 d-flex flex-row  align-items-center pagesContainer">
      <CContainer>
        <CRow className="justify-content-end">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="register_form_body">
                <Formik
                  // onSubmit={newAppointment}
                  initialValues={{
                    purpose: "",
                    number_of_person: "1",
                    appointment_type: "",
                    directorate: "",
                    introduced_by: "",
                  }}
                  // validationSchema={newAppointmentValidationSchema}
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
                    <Form className="text-center">
                      <img src={LOGO} width={100} height={100} />
                      <h3 className="text-center mb-5">نوی اکونټ</h3>
                      <CInputGroup className="mb-3">
                        <CInputGroupText className="no_diplay_on_smaller_than_300">
                          <CIcon icon={cilMobile} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="د ثبت شوي تلفن شمیره"
                          autoComplete="username"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText className="no_diplay_on_smaller_than_300">
                          <CIcon icon={cilDialpad} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="د جواز شمیره"
                          autoComplete="email"
                        />
                      </CInputGroup>
                      {/* <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="پسورډ"
                          autoComplete="new-password"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="د پسورډ تکرار"
                          autoComplete="new-password"
                        />
                      </CInputGroup> */}
                      {/* <CCol md={12} className="mb-5">
                        <label className="form-label mx-3 " htmlFor="subject">
                          رول/ رتبه
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
                          name="appointment_type"
                          onChange={(e) =>
                            setFieldValue("appointment_type", e.target.value)
                          }
                          className={`form-control form-select-md ${
                            errors.appointment_type && touched.appointment_type
                              ? "is-invalid form-select-sm    "
                              : ""
                          }`}
                          aria-label=".form-select-sm example"
                        >
                          <option>وټاکئ/انتخاب</option>

                          {directorateOptions.map((option) => {
                            return (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            );
                          })}
                        </select>
                        {errors.appointment_type && touched.appointment_type ? (
                      <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                        {errors.appointment_type}
                      </div>
                    ) : null}
                      </CCol> */}
                      <div className="d-grid mb-3 my-5">
                        <CButton
                          color="success d-grid "
                          style={{ color: "white" }}
                          onClick={() => {
                            navigateToUpdatePage(true);
                          }}
                        >
                          اکونټ جوړول
                        </CButton>
                      </div>

                      <div className="d-grid mb-5 ">
                        <Link to="/login" className="d-grid mb-5 no-underline ">
                          <CButton color="primary no-underline ">ننوتل</CButton>
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
