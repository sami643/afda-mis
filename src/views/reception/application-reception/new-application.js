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
import { newApplicationAPI, directprateListAPI } from "../../../api/utils";
import { newApplicationValidationSchema } from "../../data/validation";
import NewApplication from "./../../../assets/images/application.png";
import { useEffect } from "react";

const Application = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serializedData = searchParams.get("id");
  const visitorId = JSON.parse(decodeURIComponent(serializedData));
  const [disableButton, setDisableButton] = useState(false);
  const [directorateList, setDireactorateList] = useState([]);
  const directprateList = async () => {
    const response = await directprateListAPI();
    console.log(" Directorates List!!!!from application", response.data);
    setDireactorateList(response.data);
  };

  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast className="bg-info">
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
        className="text-center toastBody"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        ستاسو د فورم ډیتا ثبت شوه!
      </CToastBody>
    </CToast>
  );
  let propsData = props.data;

  const newApplication = async (values) => {
    const data = {
      purpose: values.purpose,
      directorate: values.directorate,
      attachment: values.attachment,
      visitor: propsData || visitorId,
    };

    try {
      const response = await newApplicationAPI(data);
      console.log("hello0", response);
      if (response.data.message === "New Application is Created") {
        addToast(exampleToast);
        setTimeout(() => {
          navigate("/reception/add-visitor"); // Replace with the actual URL
          window.location.reload();
        }, 2000); // 3000 milliseconds (3 seconds)
        setDisableButton(true);
      }
    } catch (error) {
      // Handle the error here, if needed
      console.error("Error in newApplication:", error);
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
                <img src={NewApplication} className="mx-1 mt-2 mb-0" /> نوی
                اسناد
              </h4>
            </CCardHeader>
            <CCardBody className="mx-3 ">
              {/* Application form */}
              <div className="  border rounded mt-5 mb-5">
                <Formik
                  onSubmit={newApplication}
                  initialValues={{
                    purpose: "",
                    directorate: "",
                    attachment: null,
                  }}
                  validationSchema={newApplicationValidationSchema}
                  enableReinitialize={true}
                >
                  {({
                    values,
                    setFieldValue,
                    setFieldTouched,
                    isSubmitting,
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
                            id="attachment"
                            name="attachment"
                            type="file"
                            onChange={(event) => {
                              setFieldValue(
                                "attachment",
                                event.currentTarget.files[0]
                              );
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
                        <CCol md={5} className="  ">
                          <CButton
                            className="btn-sm btn   px-5 py-2 mb-4 "
                            disabled={!disableButton ? true : false}
                            onClick={() => {
                              navigate("/reception/add-visitor");
                              window.location.reload();
                            }}
                          >
                            تړل
                          </CButton>
                        </CCol>
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
