import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../../assets/images/afda_logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "src/auth/auth-context";
import { Button, notification } from "antd";
import "./style.css";
import "./../page-style.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import { loginAPI } from "./../../../api/utils";
import { loginValidationSchema } from "./../../data/validation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { logUser, setLogUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(true);
  const [ifneeded, setIfNeeded] = useState(false);

  const handleLogin = async (values) => {
    const data = { username_or_email: values.email, password: values.password };
    try {
      const response = await loginAPI(data);
      const token = response.data.access;
      const userRole = response.data.role;
      setLogUser(response.data);
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user_role", userRole);
        navigate("/dashboard");
        notification.open({
          message: (
            <div style={{ fontSize: "22px", color: "green" }}>بریا!</div>
          ),
          description: (
            <div style={{ fontSize: "18px" }}>سیستم ته ښه راغلاست.</div>
          ),
          duration: 2,
        });
      }
    } catch (error) {
      console.error("Error in server:", error.response.data.detail);
      notification.open({
        message: (
          <div style={{ fontSize: "22px", color: "red" }}>ناکامه هڅه!</div>
        ),
        description: (
          <div style={{ fontSize: "18px" }}>ستاسو/پسورډ سم ندی.</div>
        ),
        duration: 3,
      });
    }
  };

  return (
    <div className="  min-vh-100 d-flex flex-row align-items-center pagesContainer">
      <CContainer className="">
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody className="text-center">
                  <Formik
                    onSubmit={handleLogin}
                    initialValues={{
                      password: "",
                      email: "",
                    }}
                    validationSchema={loginValidationSchema}
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
                        {" "}
                        <img src={LOGO} width={100} height={100} />
                        <p className="text-medium-emphasis pt-3">
                          د خپلې آیډي او پسورد په کارولو سره سیستم ته د ننه شئ
                        </p>
                        <CInputGroup className="mb-3" dir="">
                          <CInputGroupText dir="">
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <input
                            id="email"
                            dir="ltr"
                            placeholder="آیډي"
                            name="email"
                            className={`form-control form-select-md ${
                              errors.email && touched.email
                                ? "is-invalid form-select-md    "
                                : ""
                            }`}
                            value={values.email}
                            onChange={(e) =>
                              setFieldValue("email", e.target.value)
                            }
                            onBlur={() => setFieldTouched("email", true)}
                          />
                          {errors.email && touched.email ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.email}
                            </div>
                          ) : null}
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <input
                            dir="ltr"
                            id="password"
                            placeholder="پسورد"
                            type="password"
                            name="password"
                            className={`form-control form-select-md ${
                              errors.password && touched.password
                                ? "is-invalid form-select-md    "
                                : ""
                            }`}
                            value={values.password}
                            onChange={(e) =>
                              setFieldValue("password", e.target.value)
                            }
                            onBlur={() => setFieldTouched("password", true)}
                          />
                          {errors.password && touched.password ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.password}
                            </div>
                          ) : null}
                        </CInputGroup>
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
                            // value={values.appointment_type}
                            name="appointment_type"
                            onChange={(e) =>
                              setFieldValue("appointment_type", e.target.value)
                            }
                            className={`form-control form-select-md ${
                              errors.appointment_type &&
                              touched.appointment_type
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
                      
                        </CCol> */}
                        <CRow>
                          <CCol xs={8} className="text-right">
                            {/* <Link
                              to="/reset-password"
                              className="px-0 textUunderlinePosition"
                            >
                              آیا پسورد مو هیر شوی؟
                            </Link> */}
                          </CCol>
                          <CCol xs={4}>
                            <CButton
                              color="primary"
                              className="px-4"
                              type="submit"
                            >
                              ننوتل
                            </CButton>
                          </CCol>
                        </CRow>
                      </Form>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                // style={{ width: "50%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2 className="mb-4">سیستم ته ننوتل </h2>
                    <p>د افغانستان د خوړو او درملو ملی اداره</p>
                    <p className="pl">اداره ملی غذا و ادویه افغانستان </p>

                    {ifneeded && isAdmin && (
                      <Link to="/register">
                        <CButton
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          اکونټ جوړ کړئ!
                        </CButton>
                      </Link>
                    )}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
