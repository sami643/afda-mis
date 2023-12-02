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
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { loginAPI } from "./../../../api/utils";
import { loginValidationSchema } from "./../../data/validation";
import { useNavigate } from "react-router-dom";
import { ProfileAPI } from "src/api/utils";

const Login = () => {
  const navigate = useNavigate();
  const { logUser, setLogUser } = useContext(AuthContext);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [isAdmin, setIsAdmin] = useState(true);
  const [ifneeded, setIfNeeded] = useState(false);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleLogin = async (values) => {
    const data = { username_or_email: values.email, password: values.password };
    try {
      const response = await loginAPI(data);
      const token = response.data.access;
      const userRole = response.data.role;
      const dirId = response.data.user_directorate.id;
      const dirName = response.data.user_directorate.name;
      const user = response.data.user_id;
      const userLoginId = response.data.user_idd;
      if (token) {
        setLogUser(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user_role", userRole);
        localStorage.setItem("dirId", dirId);
        localStorage.setItem("dirName", dirName);
        localStorage.setItem("user", user);
        localStorage.setItem("userLoginId", userLoginId);
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
        <CRow>
          <CCol>
            <h1>AFDA LOGO</h1>
          </CCol>
        </CRow>
        <CRow className="justify-content-end">
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
                            <span class="flex justify-around items-center">
                              <Icon
                                class="absolute mr-10"
                                onClick={handleToggle}
                                icon={icon}
                                size={16}
                              />
                            </span>
                          </CInputGroupText>
                          <input
                            dir="ltr"
                            id="password"
                            placeholder="پسورد"
                            type={type}
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
                        <CRow>
                          <CCol xs={8} className="text-right">
                            <Link
                              to="/otp-part-1"
                              className="px-0 textUunderlinePosition"
                            >
                              آیا پسورد مو هیر شوی؟
                            </Link>
                          </CCol>
                          <CCol xs={4}>
                            <CButton
                              color="success"
                              style={{ color: "white" }}
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

                    {1 == 1 && (
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
