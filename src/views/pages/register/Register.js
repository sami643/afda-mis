import React from "react";
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
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import LOGO from "../../../assets/images/afda_logo.png";
import "./../page-style.css";

const Register = () => {
  const directorateOptions = [
    { value: "1", label: "جواز دهی" },
    { value: "2", label: "راهیابی" },
    { value: "3", label: "پلان" },
    { value: "4", label: "اداره و منابع" },
  ];
  return (
    <div className="  min-vh-100 d-flex flex-row  align-items-center pagesContainer">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
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
                      {" "}
                      <img src={LOGO} width={100} height={100} />
                      <h3 className="text-center mb-5">نوی اکونټ</h3>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="نوم" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput
                          placeholder="آیډی/بر ښنالیک"
                          autoComplete="email"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
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
                      </CInputGroup>
                      <CCol md={12} className="mb-5">
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
                          // value={values.appointment_type}
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
                        {/* {errors.appointment_type && touched.appointment_type ? (
                      <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                        {errors.appointment_type}
                      </div>
                    ) : null} */}
                      </CCol>
                      <div className="d-grid mb-3">
                        <CButton color="primary">اکونټ جوړول</CButton>
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
