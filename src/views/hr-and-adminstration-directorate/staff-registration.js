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
import "./style.css";
import PhtoUpload from "src/assets/images/photoUpload.png";
import { useLocation, useNavigate } from "react-router-dom";
import { newAppointmentAPi, directprateListAPI } from "src/api/utils";
import { newAppointmentValidationSchema } from "src/views/data/validation";

import { useEffect } from "react";

const StaffRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serializedData = searchParams.get("id");
  const visitorId = JSON.parse(decodeURIComponent(serializedData));
  const [disableButton, setDisableButton] = useState(false);
  const [directorateList, setDireactorateList] = useState([]);
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const appointment_typeOptions = [
    { value: "رسمی", label: "رسمی" },
    { value: "غیر رسمی", label: "غیر رسمی" },
  ];
  const directprateList = async () => {
    const response = await directprateListAPI();
    console.log(" Directorates List", response.data);
    setDireactorateList(response.data);
  };

  useEffect(() => {
    directprateList();
  }, []);
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
        className="text-center"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        د فورم ډیتا ثبت شوه!
      </CToastBody>
    </CToast>
  );

  return (
    <>
      <div>
        <CToaster ref={toaster} push={toast} placement="top-center" />
      </div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="bg-warning">
              <h4 className="mb-1 p-2">د کارمندانو ثبت</h4>
            </CCardHeader>
            <CCardBody className="mx-3 ">
              <div className="  border rounded mt-5 mb-5">
                <Formik
                  // onSubmit={newAppointment}
                  initialValues={{
                    purpose: "",
                    number_of_person: "",
                    appointment_type: "",
                    directorate: "",
                    introduced_by: "",
                    attachment: null,
                  }}
                  validationSchema={newAppointmentValidationSchema}
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
                      <CRow className="px-3">
                        <CCol md={6} className="">
                          <div className="image-upload-container test">
                            <div className="box-decoration">
                              <div
                                onClick={handleClick}
                                style={{ cursor: "pointer" }}
                              >
                                {image ? (
                                  <img
                                    src={URL.createObjectURL(image)}
                                    alt="upload image"
                                    className="img-display-after"
                                  />
                                ) : (
                                  <img
                                    src={PhtoUpload}
                                    alt="upload image"
                                    className="img-display-before"
                                  />
                                )}

                                <input
                                  id="image-upload-input"
                                  type="file"
                                  onChange={handleImageChange}
                                  ref={hiddenFileInput}
                                  style={{ display: "none" }}
                                />
                              </div>
                              <label
                                htmlFor="image-upload-input"
                                className="image-upload-label"
                              >
                                انځور
                              </label>
                            </div>
                          </div>
                        </CCol>
                      </CRow>
                      <CRow className="justify-content-center m-4">
                        {/* Name*/}
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
                            id="number_of_person"
                            name="number_of_person"
                            style={{ direction: "rtl", textAlign: "right" }}
                            className={`form-control form-select-lg ${
                              errors.number_of_person &&
                              touched.number_of_person
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.number_of_person}
                            onChange={(e) =>
                              setFieldValue("number_of_person", e.target.value)
                            }
                            onBlur={() =>
                              setFieldTouched("number_of_person", true)
                            }
                          />
                          {errors.number_of_person &&
                          touched.number_of_person ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.number_of_person}
                            </div>
                          ) : null}
                        </CCol>
                        {/* Last Name */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            تخلص
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
                            id="number_of_person"
                            name="number_of_person"
                            style={{ direction: "rtl", textAlign: "right" }}
                            className={`form-control form-select-lg ${
                              errors.number_of_person &&
                              touched.number_of_person
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.number_of_person}
                            onChange={(e) =>
                              setFieldValue("number_of_person", e.target.value)
                            }
                            onBlur={() =>
                              setFieldTouched("number_of_person", true)
                            }
                          />
                          {errors.number_of_person &&
                          touched.number_of_person ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.number_of_person}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>
                      <CRow className="justify-content-center m-4">
                        {/* Hr Code */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            HR-کود
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
                            id="introduced_by"
                            name="introduced_by"
                            className={`form-control form-select-lg ${
                              errors.introduced_by && touched.introduced_by
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.introduced_by}
                            onChange={(e) =>
                              setFieldValue("introduced_by", e.target.value)
                            }
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                        </CCol>
                        {/* عنوان بست */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            عنوان بست
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
                            id="introduced_by"
                            name="introduced_by"
                            className={`form-control form-select-lg ${
                              errors.introduced_by && touched.introduced_by
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.introduced_by}
                            onChange={(e) =>
                              setFieldValue("introduced_by", e.target.value)
                            }
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>

                      <CRow className="justify-content-center m-4">
                        {/* /ریاست مربوطه */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            اړوند ریاست/ مستقل آمریت
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

                            {directorateList?.map((option) => {
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
                        {/* /ریاست آمریت */}
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            آمریت
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

                            {directorateList?.map((option) => {
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
                      </CRow>
                      <CRow className=" m-4">
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            عکس
                          </label>
                          <input
                            class="form-control form-control-l"
                            id="inputField2"
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

export default StaffRegistration;
