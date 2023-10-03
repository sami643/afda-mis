import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardFooter,
  CRow,
} from "@coreui/react";
import ProfilePhoto from "./../../assets/images/profile.png";
import { ProfileAPI } from "src/api/utils";
import { useContext, useEffect, useState } from "react";
import AuthContext from "src/auth/auth-context";
const Profile = () => {
  const [profileData, setPorfileData] = useState({});
  const gettingProfileInfo = async () => {
    try {
      const response = await ProfileAPI();
      setPorfileData(response.data.Profile);
      // console.log("Resspone", response.data.Profile);
    } catch (error) {
      console.error("Error in application:", error);
    }
  };

  useEffect(() => {
    gettingProfileInfo();
  }, []);

  return (
    <CCard className="mb-4 profileDIv">
      <CCardHeader>
        <h4 className="mx-4">
          <img src={ProfilePhoto} width={50} /> د اکونټ پروفایل
        </h4>
      </CCardHeader>
      <CCardHeader>
        <CCardBody>
          <CRow className="justify-content-center my-5 mx-2">
            <CCol lg={4} className="">
              <CCard
                style={{
                  minHeight: "23rem",
                  minWidth: "14rem",
                }}
              >
                <CCardBody className="text-center p-0">
                  <img width={200} src={ProfilePhoto} />
                </CCardBody>
                <CCardBody className=" bg-warning">
                  <CRow className="px-3 py-2 bg-warning d-flex">
                    <CCol md={4} className="">
                      <p className="p-0 m-0">نوم:</p>
                    </CCol>
                    <CCol md={7} className="">
                      <strong className="">ربی خان</strong>
                    </CCol>
                  </CRow>

                  <CRow className="px-3 py-2 bg-warning d-flex">
                    <CCol md={4} className="m-0">
                      <p className="m-0 p-0">ریاست:</p>
                    </CCol>
                    <CCol md={8} className="">
                      <strong className="">
                        {profileData?.directorate?.name}
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow md={12} className="p-2  bg-warning d-flex">
                    <CCol md={4} className="">
                      <p className="m-0">برښنالیک:</p>
                    </CCol>
                    <CCol md={8} className="">
                      <strong className=""> {profileData?.email}</strong>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol lg={8} className="">
              {" "}
              <CCard>
                <CCardBody style={{ minHeight: "23rem" }}>
                  <h3 className="px-2">نور معلومات</h3>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCardHeader>
    </CCard>
  );
};
export default Profile;
