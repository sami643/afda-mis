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
import {
  createVisitorValidationSchema,
  visitorSearchValidationSchema,
} from "../../data/validation";
import "./../../data/views.css";
import { searchVisitorApi, newVisitorApi } from "../../../api/utils";
import { provicesGlobalOptions } from "src/views/data/global-data";
import NewAppointment from "../appointment-reception/new-appointment";
import NewApplication from "../application-reception/new-application";
import { useContext } from "react";
import { user_roles } from "src/views/data/global-data";

const CreateVisitor = () => {
  const logUser = localStorage.getItem("user_role");
  const navigate = useNavigate();
  const [isVisitorExist, setIsVisitorExist] = useState(false);
  const [isVisitorSearchTriggered, setIsVisitorSearchTriggered] =
    useState(false);
  const [isAppointmentManager, setIsAppointmentManager] = useState(true);
  const [isApplicationManager, setisApplicationManager] = useState(true);
  const [existuserData, setExistedUserData] = useState({});

  console.log("hello34343243", existuserData);
  const [visitor, setVisitor] = useState("");
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
        مراجعه کونکی ثبت شو
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
        مراجعه کوونکی شتون لري
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
        <div>✔️بریا! </div>
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

  const newVisitor = async (values) => {
    const data = {
      name: values.name,
      father_name: values.father_name,
      tazkera_number: values.tazkera_number,
      province: values.province,
      occupation: values.occupation,
      email: values.email,
      contact: values.contact,
    };
    const response = await newVisitorApi(data);
    if (response.data.message === "new visitor is created") {
      const newVisitorId = response.data.New_Visitor.id;
      if (logUser === user_roles.reception_appointment) {
        addToast(exampleToast);
        setTimeout(() => {
          navigate(`/reception/new-appointment?id=${newVisitorId}`);
        }, 2000);
      } else if (logUser === user_roles.reception_application) {
        addToast(exampleToast);
        setTimeout(() => {
          navigate(`/reception/new-application?id=${newVisitorId}`);
        }, 2000);
      }
    }
  };

  const searchVisitor = async (values) => {
    setIsVisitorSearchTriggered(true);
    const data = { tazkera_number: values.tazkera_number };
    try {
      const response = await searchVisitorApi(data);
      if (response.data.Visitors) {
        setExistedUserData(response.data.Visitors);
        setIsVisitorExist(true);
        setVisitor("Exist");
        addToast(searchUserToast);
      }
    } catch (error) {
      console.error("Error in appointments:", error);
      setIsVisitorExist(false);
      setExistedUserData({});
      setVisitor("NotExist");
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
            <CCardHeader>
              <h4 className="mt-2"> 🔎د لیدونکي لټون:</h4>
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
                  initialValues={{ tazkera_number: "" }}
                  validationSchema={visitorSearchValidationSchema}
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
                        <CCol md={8} className="">
                          <label className="form-label mr-5" htmlFor="subject">
                            د تذکرې/پاسپورت شمیره
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
                            id="tazkera_number"
                            name="tazkera_number"
                            className={`form-control form-select-lg ${
                              errors.tazkera_number && touched.tazkera_number
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.tazkera_number}
                            onChange={(e) =>
                              setFieldValue("tazkera_number", e.target.value)
                            }
                            onBlur={() =>
                              setFieldTouched("tazkera_number", true)
                            }
                          />
                          {errors.tazkera_number && touched.tazkera_number ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.tazkera_number}
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
                      <h4 className="px-3"> لټون پایله</h4>
                      {isVisitorExist && (
                        <div className="">
                          <CRow md={12} className=" pt-3 px-3">
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">نوم:</p>
                              </CCol>
                              <CCol md={9} className="">
                                {" "}
                                <strong className="">
                                  {existuserData?.name}
                                </strong>
                              </CCol>
                            </CCol>
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">د تذکرې شمیره:</p>
                              </CCol>
                              <CCol md={9}>
                                {" "}
                                <strong className="">
                                  {" "}
                                  {existuserData?.tazkera_number}
                                </strong>
                              </CCol>
                            </CCol>
                          </CRow>
                          <CRow md={12} className="  px-3">
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">د پلار نوم:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">
                                  {existuserData?.father_name}
                                </strong>
                              </CCol>
                            </CCol>
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">د اړیکې شمیره:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">
                                  {existuserData?.contact}
                                </strong>
                              </CCol>
                            </CCol>
                          </CRow>
                          <CRow md={12} className="  px-3">
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">برښنالیک:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">
                                  {existuserData?.email}
                                </strong>
                              </CCol>
                            </CCol>
                            <CCol md={6} className="d-flex">
                              <CCol md={3} className="">
                                <p className="">دنده:</p>
                              </CCol>
                              <CCol md={9} className="">
                                <strong className="">
                                  {existuserData?.occupation}
                                </strong>
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
                            <CCol md={11} className="text-end">
                              <CButton
                                className="px-3"
                                onClick={() => {
                                  navigateToUpdatePage();
                                }}
                              >
                                اپدیټ
                              </CButton>
                            </CCol>
                          </CRow>
                        </div>
                      )}
                      {!isVisitorExist && (
                        <div style={{ margin: "8% 20%" }}>
                          <h6>په دې مشخصاتو لیدونکی شتون نه لري..</h6>
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
      <CRow>
        {visitor === "NotExist" && (
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <h4>د نوي لیدونکي ثبت </h4>
              </CCardHeader>
              <CCardBody className="mx-3 ">
                <div className="  border rounded mt-5 mb-5">
                  <Formik
                    onSubmit={newVisitor}
                    initialValues={{
                      name: "",
                      father_name: "",
                      tazkera_number: "",
                      contact: "",
                      email: "",
                      occupation: "",
                      province: "",
                    }}
                    validationSchema={createVisitorValidationSchema}
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
                          <CCol md={6} className="">
                            <label
                              className="form-label mx-3"
                              htmlFor="subject"
                            >
                              نوم
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
                              id="name"
                              name="name"
                              className={`form-control form-select-lg ${
                                errors.name && touched.name
                                  ? "is-invalid form-select-lg    "
                                  : ""
                              }`}
                              value={values.name}
                              onChange={(e) =>
                                setFieldValue("name", e.target.value)
                              }
                              onBlur={() => setFieldTouched("name", true)}
                            />
                            {errors.name && touched.name ? (
                              <div className="invalid-feedback d-block errorMessageStyle mr-2">
                                {errors.name}
                              </div>
                            ) : null}
                          </CCol>
                          <CCol md={6} className="">
                            <label
                              className="form-label mx-3"
                              htmlFor="father_name"
                            >
                              د پلار نوم
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
                              id="father_name"
                              name="father_name"
                              className={`form-control form-select-lg ${
                                errors.father_name && touched.father_name
                                  ? "is-invalid form-select-lg    "
                                  : ""
                              }`}
                              value={values.father_name}
                              onChange={(e) =>
                                setFieldValue("father_name", e.target.value)
                              }
                              onBlur={() =>
                                setFieldTouched("father_name", true)
                              }
                            />
                            {errors.father_name && touched.father_name ? (
                              <div className="invalid-feedback d-block errorMessageStyle mr-2">
                                {errors.father_name}
                              </div>
                            ) : null}
                          </CCol>
                        </CRow>
                        <CRow className="justify-content-center m-4">
                          <CCol md={6} className="">
                            <label
                              className="form-label mx-3"
                              htmlFor="tazkera_number"
                            >
                              د تذکرې شمیره
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
                              id="tazkera_number"
                              name="tazkera_number"
                              className={`form-control form-select-lg ${
                                errors.tazkera_number && touched.tazkera_number
                                  ? "is-invalid form-select-lg    "
                                  : ""
                              }`}
                              value={values.tazkera_number}
                              onChange={(e) =>
                                setFieldValue("tazkera_number", e.target.value)
                              }
                              onBlur={() =>
                                setFieldTouched("tazkera_number", true)
                              }
                            />
                            {errors.tazkera_number && touched.tazkera_number ? (
                              <div className="invalid-feedback d-block errorMessageStyle mr-2">
                                {errors.tazkera_number}
                              </div>
                            ) : null}
                          </CCol>
                          <CCol md={6} className="">
                            <label
                              className="form-label mx-3"
                              htmlFor="subject"
                            >
                              د اړیکې شمیره
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
                              id="contact"
                              name="contact"
                              className={`form-control form-select-lg ${
                                errors.contact && touched.contact
                                  ? "is-invalid form-select-lg    "
                                  : ""
                              }`}
                              value={values.contact}
                              onChange={(e) =>
                                setFieldValue("contact", e.target.value)
                              }
                              onBlur={() => setFieldTouched("contact", true)}
                            />
                            {errors.contact && touched.contact ? (
                              <div className="invalid-feedback d-block errorMessageStyle mr-2">
                                {errors.contact}
                              </div>
                            ) : null}
                          </CCol>
                        </CRow>
                        <CRow className="justify-content-center m-4">
                          <CCol md={6} className="">
                            <label className="form-label mx-3" htmlFor="email">
                              برښنالیک
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className={`form-control form-select-lg ${
                                errors.email && touched.email
                                  ? "is-invalid form-select-lg    "
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
                          </CCol>
                          <CCol md={6} className="">
                            <label
                              className="form-label mx-3"
                              htmlFor="occupation"
                            >
                              دنده
                            </label>
                            <input
                              type="text"
                              id="occupation"
                              name="occupation"
                              className={`form-control form-select-lg ${
                                errors.occupation && touched.occupation
                                  ? "is-invalid form-select-lg    "
                                  : ""
                              }`}
                              value={values.occupation}
                              onChange={(e) =>
                                setFieldValue("occupation", e.target.value)
                              }
                              onBlur={() => setFieldTouched("occupation", true)}
                            />
                            {errors.occupation && touched.occupation ? (
                              <div className="invalid-feedback d-block errorMessageStyle mr-2">
                                {errors.occupation}
                              </div>
                            ) : null}
                          </CCol>
                        </CRow>
                        <CRow className=" m-4">
                          <CCol md={6} className="">
                            <label
                              className="form-label mx-3"
                              htmlFor="province"
                            >
                              ولایت
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
                              id="province"
                              value={values.province}
                              name="province"
                              onChange={(e) =>
                                setFieldValue("province", e.target.value)
                              }
                              className={`form-control form-select-lg ${
                                errors.province && touched.province
                                  ? "is-invalid form-select-lg    "
                                  : ""
                              }`}
                            >
                              <option>وټاکئ/انتخاب</option>

                              {provicesGlobalOptions.map((option) => {
                                return (
                                  <option key={option.name} value={option.name}>
                                    {option.label}
                                  </option>
                                );
                              })}
                            </select>
                            {errors.province && touched.province ? (
                              <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                                {errors.province}
                              </div>
                            ) : null}
                          </CCol>
                        </CRow>
                        <CRow className="justify-content-center mx-5 mt-5 mb-5">
                          <CCol md={8} className=" text-end">
                            <CButton
                              type="submit"
                              className="btn-sm btn  px-5 py-2 mb-4 "
                            >
                              مخته
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
        )}
        {logUser === user_roles.reception_appointment &&
          visitor === "Exist" && <NewAppointment data={existuserData.id} />}
        {visitor === "Exist" &&
          logUser === user_roles.reception_application && (
            <NewApplication data={existuserData.id} />
          )}
      </CRow>
    </>
  );
};
export default CreateVisitor;
