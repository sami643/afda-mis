import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import AuthContext from "src/auth/auth-context";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CToast,
  CToaster,
  CToastHeader,
  CToastBody,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { searchEmplyeeValidationSchema } from "../../data/validation";
import "./../../data/views.css";
import { searchVisitorApi, newVisitorApi } from "../../../api/utils";
import CrossIcon from "src/assets/images/1200px-Flat_cross_icon.svg.png";
import PhotoUpload from "src/assets/images/photoUpload.png";
import { useContext } from "react";
import { user_roles } from "src/views/data/global-data";

const CreateVisitor = () => {
  const logUser = localStorage.getItem("user_role");
  const navigate = useNavigate();
  const [isEmployeeExist, setIsEmployeeExist] = useState(false);
  const [isVisitorSearchTriggered, setIsVisitorSearchTriggered] =
    useState(false);
  const [isAppointmentManager, setIsAppointmentManager] = useState(true);
  const [isApplicationManager, setisApplicationManager] = useState(true);
  const [existuserData, setExistedUserData] = useState({});

  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast className="bg-ifo toast-1" delay={2000}>
      <CToastHeader className="toastHeader">
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
      <CToastBody className="text-center toastBody_1">
        کارمند کمیټې ته اضافه شو!
      </CToastBody>
    </CToast>
  );
  const searchUserToast = (
    <CToast className="bg-ifo toast-1" delay={1000}>
      <CToastHeader className="toastHeader">
        <svg
          className="rounded me-2"
          width="20"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        ></svg>
        <div className="" style={{ fontSize: "22px", color: "black" }}>
          ✔️بریا!{" "}
        </div>
      </CToastHeader>
      <CToastBody className="text-center toastBody_1">
        کارمند کوونکی شتون لري
      </CToastBody>
    </CToast>
  );
  const searchUserToast_1 = (
    <CToast className="bg-ifo toast-1" delay={1000}>
      <CToastHeader className="toastHeader">
        <svg
          className="rounded me-2"
          width="20"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        ></svg>
        <div>
          <img src={CrossIcon} width={40} />
        </div>
      </CToastHeader>
      <CToastBody className="text-center toastBody_1">
        په دې مشخصاتو مراجعه کونکی شتون نه لري
      </CToastBody>
    </CToast>
  );

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/reception", // Replace with your backend URL
  });

  // Add a request interceptor to set the token before making a request
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const searchVisitor = async (values) => {
    setIsVisitorSearchTriggered(true);
    const data = { tazkera_number: values.tazkera_number };
    try {
      const response = await searchVisitorApi(data);
      if (response.data.Visitors) {
        setExistedUserData(response.data.Visitors);
        setIsEmployeeExist(true);

        addToast(searchUserToast);
      }
    } catch (error) {
      console.error("Error in appointments:", error);
      setIsEmployeeExist(false);
      setExistedUserData({});

      addToast(searchUserToast_1);
    }
  };

  const navigateToUpdatePage = () => {
    const serializedData = encodeURIComponent(JSON.stringify(existuserData));
    navigate(`/reception/update-visitor?id=${serializedData}`);
  };
  return (
    <>
      <div>
        <CToaster ref={toaster} push={toast} placement="top-center" />
      </div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="bg-warning">
              <h4 className="p-2"> 🔎د کارمند لټون:</h4>
            </CCardHeader>
            <CCardBody>
              <div
                className="rounded"
                style={{
                  minHeight: !isVisitorSearchTriggered ? "350px" : null,
                }}
              >
                <Formik
                  onSubmit={searchVisitor}
                  initialValues={{ hr_code: "" }}
                  validationSchema={searchEmplyeeValidationSchema}
                  enableReinitialize={true}
                >
                  {({
                    values,
                    setFieldValue,
                    setFieldTouched,
                    errors,
                    touched,
                  }) => (
                    <Form>
                      <CRow className="justify-content-center m-4">
                        <CCol md={8} className="mt-4">
                          <label className="form-label mx-3" htmlFor="subject">
                            HR-کود/ تذکره
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
                            id="hr_code"
                            name="hr_code"
                            className={`form-control form-select-lg ${
                              errors.hr_code && touched.hr_code
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.hr_code}
                            onChange={(e) =>
                              setFieldValue("hr_code", e.target.value)
                            }
                            onBlur={() => setFieldTouched("hr_code", true)}
                          />
                          {errors.hr_code && touched.hr_code ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.hr_code}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>

                      <CRow className="justify-content-center mx-5">
                        <CCol md={8} className=" text-end mt-3">
                          <CButton
                            type="submit"
                            className="btn-sm btn  px-5 py-2 mb-4 "
                            onClick={() => setExistedUserData("")}
                          >
                            لټون
                          </CButton>
                        </CCol>
                      </CRow>
                    </Form>
                  )}
                </Formik>
              </div>
              {/* Search Result */}

              {isVisitorSearchTriggered && (
                <div className="  border rounded mt-5 mb-5 mx-5">
                  <CCardHeader className="" style={{ minHeight: "200px" }}>
                    <>
                      <h4 className="px-3 my-2"> لټون پایله</h4>
                      {!isEmployeeExist && (
                        <div className="">
                          <CRow className=" pt-3 px-3 ">
                            <CCol className="my-2  ">
                              <div>
                                <img
                                  src={PhotoUpload}
                                  width={120}
                                  className="border"
                                />
                              </div>
                            </CCol>
                          </CRow>
                          <CRow md={12} className=" pt-3 px-3">
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">نوم:</p>
                              </CCol>
                              <CCol md={9} className="">
                                {" "}
                                <strong className="">Samim</strong>
                              </CCol>
                            </CCol>
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">تخلص:</p>
                              </CCol>
                              <CCol md={9}>
                                {" "}
                                <strong className="">نایبی</strong>
                              </CCol>
                            </CCol>
                          </CRow>
                          <CRow md={12} className="  px-3">
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">HR- کود:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">90-655665-452</strong>
                              </CCol>
                            </CCol>
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">بست:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">دوم /رئیس</strong>
                              </CCol>
                            </CCol>
                          </CRow>
                          <CRow md={12} className="  px-3">
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">ریاست:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">جواز دهی</strong>
                              </CCol>
                            </CCol>
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">آمریت:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">شرکت های داخلی</strong>
                              </CCol>
                            </CCol>
                          </CRow>
                          <CRow md={12} className="pb-3 px-3">
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">ولایت:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">
                                  {existuserData?.province}
                                </strong>
                              </CCol>
                            </CCol>
                          </CRow>
                          <CRow md={12} className="pb-3 px-3">
                            <CCol md={12} className="text-end">
                              <CButton
                                className=" w-100"
                                onClick={() => {
                                  navigateToUpdatePage();
                                }}
                              >
                                کمیټې ته اضافه کول
                              </CButton>
                            </CCol>
                          </CRow>
                        </div>
                      )}
                      {isEmployeeExist && (
                        <div style={{ margin: "8% 20%" }}>
                          <div style={{ margin: "8% 20%" }} className="d-flex">
                            <h6 className="mt-3">
                              په دې مشخصاتو کارمند شتون نه لري..
                            </h6>
                            <img
                              src={CrossIcon}
                              width={50}
                              style={{ marginRight: "10%" }}
                            />
                          </div>
                        </div>
                      )}
                    </>
                  </CCardHeader>
                </div>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};
export default CreateVisitor;
