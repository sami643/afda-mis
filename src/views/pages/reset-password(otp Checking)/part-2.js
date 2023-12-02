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
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import "./../page-style.css";
import { cilMobile, cilDialpad } from "@coreui/icons";
import LOGO from "../../../assets/images/afda_logo.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ResetPassowrd = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serializedData = searchParams.get("isRegistered");
  const [isRegisterData, setIsRegisterData] = useState(
    JSON.parse(decodeURIComponent(serializedData))
  );

  const navigateToRegister = (even) => {
    isRegisterData === true ? navigate("/register") : navigate("/otp-part-1");
  };

  return (
    <>
      <div className=" min-vh-100 d-flex flex-row align-items-center pagesContainer">
        <CContainer>
          <CRow className="justify-content-end">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4  text-center">
                  <img src={LOGO} width={100} height={100} />
                  <CForm>
                    <CRow className="mx-2 mx-4">
                      <p className="mx-2">
                        خپل تلفن چک کړئ او استول شوی نمبر په لاندې برخه کې
                        ولیکئ!
                      </p>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          placeholder="OTP نمبر"
                          autoComplete="username"
                        />
                      </CInputGroup>

                      <CCol xs={11} className="  m-3">
                        <CButton
                          to="/reset-password"
                          className="px-5 textUunderlinePosition"
                          color="success"
                          style={{ color: "white" }}
                        >
                          تصدیق
                        </CButton>
                      </CCol>
                    </CRow>
                    <div className="mx-5">
                      <h4 className="">نوی پسورډ ولیکئ</h4>
                      <hr />
                      <CRow className="">
                        <CInputGroup className="mb-3">
                          <CFormInput
                            disabled
                            placeholder=" پسورډ"
                            autoComplete="username"
                          />
                        </CInputGroup>
                      </CRow>

                      <CRow className="">
                        <CInputGroup className="mb-3">
                          <CFormInput
                            disabled
                            placeholder="  د پسورډ تکرار"
                            autoComplete="username"
                          />
                        </CInputGroup>
                      </CRow>
                      <CRow className="py-5 justify-content-center d-flex">
                        <CCol md={6} className="py-1">
                          <CButton
                            color="primary"
                            className="px-5 text-end"
                            onClick={() => {
                              navigateToRegister(true);
                            }}
                          >
                            شاته
                          </CButton>
                        </CCol>
                        <CCol md={6} className="py-1">
                          <Link to="/login">
                            <CButton
                              disabled
                              to="/reset-password"
                              className="px-5 textUunderlinePosition"
                              color="success"
                              style={{ color: "white" }}
                            >
                              ثبت
                            </CButton>
                          </Link>
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
    </>
  );
};

export default ResetPassowrd;
