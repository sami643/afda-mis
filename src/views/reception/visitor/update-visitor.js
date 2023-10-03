import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { provicesGlobalOptions } from "src/views/data/global-data";
import { updateVisitorAPI } from "../../../api/utils";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const UpdatingVisitor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serializedData = searchParams.get("id");
  const visitorData = JSON.parse(decodeURIComponent(serializedData));
  const [disableButton, setDisableButton] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
    navigate("/reception/add-visitor ");
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

  const UpdateVisitor = async (values) => {
    const data = {
      id: visitorData.id,
      name: values.name,
      father_name: values.father_name,
      tazkera_number: values.tazkera_number,
      province: values.province,
      occupation: values.occupation,
      email: values.email,
      contact: values.contact,
    };
    try {
      const response = await updateVisitorAPI(data);
      console.log("Updation Response", response);
      addToast(exampleToast);
      setDisableButton(true);
    } catch (error) {
      console.error("Error in appointments:", error);
    }
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
              <h4>
                <FontAwesomeIcon icon={faEdit} className="text-primary me-2" />د
                لیدونکي اپدیټ
              </h4>
            </CCardHeader>
            <CCardBody className="mx-3 ">
              <div className="  border rounded mt-5 mb-5">
                <Formik
                  onSubmit={UpdateVisitor}
                  initialValues={{
                    name: visitorData.name,
                    father_name: visitorData.father_name,
                    tazkera_number: visitorData.tazkera_number,
                    contact: visitorData.contact,
                    email: visitorData.email,
                    occupation: visitorData.occupation,
                    province: visitorData.province,
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
                          <label className="form-label mx-3" htmlFor="subject">
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
                            onBlur={() => setFieldTouched("father_name", true)}
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
                          <label className="form-label mx-3" htmlFor="subject">
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
                          <label className="form-label mx-3" htmlFor="province">
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

                      <CRow className="justify-content-end mx-5 mt-5 mb-5 d-flex">
                        {/* <CCol md={5} className="  ">
                          <CButton
                            className="btn-sm btn   px-5 py-2 mb-4 "
                            onClick={() => {
                              navigate("/reception/add-visitor");
                              window.location.reload();
                            }}
                          >
                            شاته
                          </CButton>
                        </CCol> */}
                        <CCol md={5} className=" text-end  mx-5">
                          <CButton
                            type="submit"
                            className="btn-sm btn   px-5 py-2 mb-4 "
                            disabled={disableButton ? true : false}
                          >
                            اپدیټ
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
export default UpdatingVisitor;
