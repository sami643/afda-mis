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
  // const [isRegisterData, setIsRegisterData] = useState(
  //   JSON.parse(decodeURIComponent(serializedData))
  // );

  const navigateToOTPPartTwo = () => {
    navigate("/otp-part-2");
  };

  return (
    <>
      <div className="  min-vh-100 d-flex flex-row align-items-center pagesContainer">
        <CContainer>
          <CRow className="justify-content-end">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="register_form_body  text-center">
                  <img src={LOGO} width={100} height={100} />
                  <CForm>
                    <h3 className="text-center mb-5">پسورډ ریکور کول</h3>
                    <label className="mx-4 p-1">خپله د تلفن شیمره ولیکئ</label>
                    <CInputGroup className="mb-3 px-4">
                      <CInputGroupText className="no_diplay_on_smaller_than_300">
                        <CIcon icon={cilMobile} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="د تلفن شمیره"
                        autoComplete="email"
                      />
                    </CInputGroup>

                    <CRow className="py-5 justify-content-center d-flex">
                      <CCol md={6} className="py-1">
                        <CButton
                          color="primary"
                          className="px-4 "
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          شاته
                        </CButton>
                      </CCol>
                      <CCol md={6} className="py-1 ">
                        <CButton
                          onClick={() => {
                            navigateToOTPPartTwo(true);
                          }}
                          className="px-5 textUunderlinePosition"
                          color="success"
                          style={{ color: "white" }}
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
    </>
  );
};

export default ResetPassowrd;
