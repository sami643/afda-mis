import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CToast,
  CToaster,
  CToastHeader,
  CToastBody,
} from "@coreui/react";
import "./../../data/views.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  newAppointmentAPi,
  updateApplicationAPI,
  directprateListAPI,
} from "../../../api/utils";
import { newApplicationValidationSchema } from "../../data/validation";
import NewApplication from "./../../../assets/images/application.png";
import { useEffect } from "react";

const Application = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serializedData = searchParams.get("id");
  const applicationData = JSON.parse(decodeURIComponent(serializedData));
  const [disableButton, setDisableButton] = useState(false);
  const [attachment, setAttachment] = useState(false);
  const [directorateList, setDireactorateList] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const directprateList = async () => {
    const response = await directprateListAPI();
    // console.log(" Directorates List!!!!", response.data);
    setDireactorateList(response.data);
  };

  const handleCloseToast = () => {
    setShowToast(false);
    if (applicationData.isDashboardList === "true") {
      navigate("/dashboard");
    } else {
      if (applicationData.status === "cancel") {
        navigate("/reception/cancel-application");
      } else if (applicationData.status === "rejected") {
        navigate("/reception/rejected-application");
      } else if (applicationData.status === "initial") {
        navigate("/reception/initial-application");
      }
    }
  };

  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast className="toast-1" show={showToast} autohide={false}>
      <CToastHeader>
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
      <CToastBody
        className="d-flex flex-column align-items-center toastBody"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        فورم اپدیټ شو!
        <CButton
          onClick={handleCloseToast}
          className="bg-success m-4 px-4  mt-5  toastButton"
        >
          تړل
        </CButton>
      </CToastBody>
    </CToast>
  );

  const updateApplication = async (values) => {
    const data = {
      id: applicationData.id,
      directorate: values.directorate,
      purpose: values.purpose,
      visitor: applicationData.visitor.id,
      attachment: values.attachment,
    };
    const response = await updateApplicationAPI(data);
    if (response.data.message === "Application is Updated") {
      addToast(exampleToast);
      setShowToast(true);
      setDisableButton(true);
    }
  };

  useEffect(() => {
    directprateList();
  }, []);

  return (
    <>
      <div>
        <CToaster ref={toaster} push={toast} placement="top-center" />
      </div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4 className="mb-1">
                <img src={NewApplication} className="mx-1 mt-2 mb-0" />د اسناد
                اپډیت
              </h4>
            </CCardHeader>
            <CCardBody className="mx-3 ">
              {/* Application form */}
              <div className="  border rounded mt-5 mb-5">
                <Formik
                  onSubmit={updateApplication}
                  initialValues={{
                    purpose: applicationData.purpose,
                    directorate: applicationData?.directorate?.id,
                    attachment: applicationData.attachment,
                  }}
                  validationSchema={newApplicationValidationSchema}
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
                        {/* Presidency */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            ریاست
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
                            id="directorate"
                            value={values.directorate}
                            name="directorate"
                            onChange={(e) =>
                              setFieldValue("directorate", e.target.value)
                            }
                            className={`form-control form-select-lg ${
                              errors.directorate && touched.directorate
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                          >
                            <option>وټاکئ/انتخاب</option>

                            {directorateList.map((option) => {
                              return (
                                <option key={option.id} value={option.id}>
                                  {option.name}
                                </option>
                              );
                            })}
                          </select>
                          {errors.directorate && touched.directorate ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.directorate}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            ضمیمه
                          </label>
                          <input
                            class="form-control form-control-lg"
                            id="formFileLg"
                            multiple
                            type="file"
                            onChange={(e) => {
                              setAttachment([...e.target.files]);
                            }}
                          />
                        </CCol>
                      </CRow>

                      <CRow className="justify-content-center m-4  my-5">
                        {/* Visit Purpose */}
                        <CCol md={12} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            موخه/ هدف
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
                          <textarea
                            type="text"
                            id="purpose"
                            name="purpose"
                            className={`form-control form-select-lg ${
                              errors.purpose && touched.purpose
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.purpose}
                            rows={5}
                            onChange={(e) =>
                              setFieldValue("purpose", e.target.value)
                            }
                            onBlur={() => setFieldTouched("purpose", true)}
                          />
                          {errors.purpose && touched.purpose ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.purpose}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>

                      <CRow className="justify-content-end mx-5 mt-5 mb-5 d-flex">
                        <CCol md={5} className=" text-end  mx-5">
                          <CButton
                            type="submit"
                            className="btn-sm btn   px-5 py-2 mb-4 "
                            disabled={disableButton ? true : false}
                          >
                            ثبت
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
      </CRow>
    </>
  );
};

export default Application;
