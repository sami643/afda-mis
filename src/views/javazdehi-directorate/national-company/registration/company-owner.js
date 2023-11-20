import { CCard, CCardHeader, CCol, CRow, CButton } from "@coreui/react";
import React, { useState, useRef } from "react";
import { Button, Card } from "antd";
import "./style.css";
import { Formik, Form } from "formik";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
import arabic from "react-date-object/calendars/arabic";
import arabic_ar from "react-date-object/locales/arabic_ar";
const dateFormat = "YYYY/MM/DD";
import PhtoUpload from "src/assets/images/photoUpload.png";
import { provicesGlobalOptions } from "src/views/data/global-data";
import { nationalCompanyValidationSchema } from "src/views/data/validation";

const OwnerDetails = ({ onFormSubmit, onStepBack }) => {
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

  const handleForm = (values) => {
    onFormSubmit({ ...values, step: 3 });
  };

  const stepBack = () => {
    onStepBack();
  };

  return (
    <>
      <CCardHeader className="mx-0">
        <h3 className="mx-0">د فابریکې د مالک مشخصات</h3>
      </CCardHeader>
      <Formik
        onSubmit={handleForm}
        initialValues={{ factory_name: "" }}
        // validationSchema={nationalCompanyValidationSchema}
        enableReinitialize={true}
      >
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form>
            <CRow>
              <CCol md={6} className="">
                <div className="image-upload-container">
                  <div className="box-decoration">
                    <div onClick={handleClick} style={{ cursor: "pointer" }}>
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
            <CRow className="justify-content-center mt-5">
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
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
                  id="factory_name"
                  name="factory_name"
                  className={`form-control form-select-l ${
                    errors.factory_name && touched.factory_name
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.factory_name}
                  onChange={(e) =>
                    setFieldValue("factory_name", e.target.value)
                  }
                  onBlur={() => setFieldTouched("factory_name", true)}
                />
                {errors.factory_name && touched.factory_name ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.factory_name}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
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
                  id="license_number"
                  name="license_number"
                  className={`form-control form-select-l ${
                    errors.license_number && touched.license_number
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.license_number}
                  onChange={(e) =>
                    setFieldValue("license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("license_number", true)}
                />
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  د زیږیدنې نیټه
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
                  id="license_number"
                  name="license_number"
                  className={`form-control form-select-l ${
                    errors.license_number && touched.license_number
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.license_number}
                  onChange={(e) =>
                    setFieldValue("license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("license_number", true)}
                />
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
            </CRow>
            <CRow className="">
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  ولایت- ناحیه/ولسوالی- منطقه
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
                  id="license_number"
                  name="license_number"
                  className={`form-control form-select-l ${
                    errors.license_number && touched.license_number
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.license_number}
                  onChange={(e) =>
                    setFieldValue("license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("license_number", true)}
                />
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
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
                  id="license_number"
                  name="license_number"
                  className={`form-control form-select-l ${
                    errors.license_number && touched.license_number
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.license_number}
                  onChange={(e) =>
                    setFieldValue("license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("license_number", true)}
                />
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  برښنالیک
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
                  id="license_number"
                  name="license_number"
                  className={`form-control form-select-l ${
                    errors.license_number && touched.license_number
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.license_number}
                  onChange={(e) =>
                    setFieldValue("license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("license_number", true)}
                />
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
            </CRow>
            <CRow className="mb-5">
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  د مبایل شمیره
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
                  id="license_number"
                  name="license_number"
                  className={`form-control form-select-l ${
                    errors.license_number && touched.license_number
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.license_number}
                  onChange={(e) =>
                    setFieldValue("license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("license_number", true)}
                />
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-5">
                <label className="form-label mr-5" htmlFor="license_number">
                  د تلفن شمیره
                </label>
                <input
                  type="text"
                  id="license_number"
                  name="license_number"
                  className={`form-control form-select-l ${
                    errors.license_number && touched.license_number
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.license_number}
                  onChange={(e) =>
                    setFieldValue("license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("license_number", true)}
                />
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-5">
                <label className="form-label mx-2" htmlFor="license_number">
                  نوټ
                </label>
                <textarea
                  type="text"
                  id="license_number"
                  name="license_number"
                  className={`form-control form-select-l ${
                    errors.license_number && touched.license_number
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.license_number}
                  onChange={(e) =>
                    setFieldValue("license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("license_number", true)}
                />
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
            </CRow>
            <div
              className={
                "form__item button__items d-flex justify-content-between m-5"
              }
            >
              <Button type={"default"} className="mx-2" onClick={stepBack}>
                شاته
              </Button>

              <CButton type="submit" className="btn-sm btn   px-4 py-2 mx-2 ">
                مخته
              </CButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OwnerDetails;
