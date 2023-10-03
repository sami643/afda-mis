import React, { useState } from "react";
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
import "./../page-style.css";
import { cilLockLocked, cilUser } from "@coreui/icons";
import LOGO from "../../../assets/images/afda_logo.png";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      {!emailSent ? (
        <div className="  min-vh-100 d-flex flex-row align-items-center pagesContainer">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={9} lg={7} xl={6}>
                <CCard className="mx-4">
                  <CCardBody className="p-4  text-center">
                    <img src={LOGO} width={100} height={100} />
                    <CForm>
                      <h3 className="text-center mb-5">پسورډ ریکور کول</h3>
                      <label className="mx-4">خپل برښنالیک ولیکئ</label>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput
                          placeholder="آیډی/بر ښنالیک"
                          autoComplete="email"
                        />
                      </CInputGroup>

                      <CRow className="py-5">
                        <CCol xs={5} className="mx-4">
                          <CButton
                            color="primary"
                            className="px-4 text-end"
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            شاته مخکنۍ صفحه
                          </CButton>
                        </CCol>
                        <CCol xs={5} className="text-right text-end ">
                          <CButton
                            onClick={() => {
                              setEmailSent(true);
                            }}
                            className="px-5 textUunderlinePosition"
                          >
                            ریکور
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      ) : (
        <div className=" min-vh-100 d-flex flex-row align-items-center pagesContainer">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={9} lg={7} xl={6}>
                <CCard className="mx-4">
                  <CCardBody className="p-4  text-center">
                    <img src={LOGO} width={100} height={100} />
                    <CForm>
                      <CRow className="mx-2 mx-4">
                        <p className="mx-2">
                          خپل برښنالیک چک کړئ او استول شوی نمبر په لاندې برخه کې
                          ولیکئ!
                        </p>
                        <CInputGroup className="mb-3">
                          <CFormInput
                            placeholder="OTP نمبر"
                            autoComplete="username"
                          />
                        </CInputGroup>

                        <CCol xs={11} className="text-right text-end  m-3">
                          <CButton
                            to="/reset-password"
                            className="px-5 textUunderlinePosition"
                          >
                            تصدیق
                          </CButton>
                        </CCol>
                      </CRow>
                      <div className="mx-5">
                        <h4 className="mx-4">نوی پسورډ ولیکئ</h4>
                        <hr />
                        <CRow className="mx-2">
                          <CInputGroup className="mb-3">
                            <CFormInput
                              disabled
                              placeholder=" پسورډ"
                              autoComplete="username"
                            />
                          </CInputGroup>
                        </CRow>

                        <CRow className="mx-2">
                          <CInputGroup className="mb-3">
                            <CFormInput
                              disabled
                              placeholder="  د پسورډ تکرار"
                              autoComplete="username"
                            />
                          </CInputGroup>
                        </CRow>
                        <CRow className="py-5">
                          <CCol xs={5} className="mx-4">
                            <CButton
                              color="primary"
                              className="px-4 text-end"
                              onClick={() => {
                                setEmailSent(false);
                              }}
                            >
                              شاته
                            </CButton>
                          </CCol>
                          <CCol xs={5} className="text-right text-end ">
                            <CButton
                              disabled
                              to="/reset-password"
                              className="px-5 textUunderlinePosition"
                            >
                              ثبت
                            </CButton>
                          </CCol>
                        </CRow>
                      </div>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      )}
    </>
  );
};

export default Register;
