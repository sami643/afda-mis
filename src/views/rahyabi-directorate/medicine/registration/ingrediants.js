import { CCard, CCardHeader, CCol, CRow, CButton } from "@coreui/react";
import { Button, Card } from "antd";
import React, { useState, useRef } from "react";
import "./style.css";
import { Formik, Form } from "formik";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
import arabic from "react-date-object/calendars/arabic";
import arabic_ar from "react-date-object/locales/arabic_ar";
const dateFormat = "YYYY/MM/DD";
import PhtoUpload from "src/assets/images/photoUpload.png";
import { provicesGlobalOptions } from "src/views/data/global-data";

const CompanyRepresenterAndTechnicalStaffDetails = ({
  onFormSubmit,
  onStepBack,
}) => {
  const handleForm = (values) => {
    onFormSubmit({ ...values, step: 3 });
  };
  const stepBack = () => {
    onStepBack();
  };
  return (
    <>
      <CCardHeader className="mx-0">
        <h3 className="mx-0">د فابریکې د نماینده مشخصات</h3>
      </CCardHeader>
      <Formik
        onSubmit={handleForm}
        initialValues={{ license_number: "" }}
        // validationSchema={incorporationSearchValidationSchema}
        enableReinitialize={true}
      >
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form>
            <CRow className="justify-content-center mt-5">
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  quality per unit
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
                  percentage
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
              <CCol md={4} className=" ">
                <label className="form-label mr-5" htmlFor="license_number">
                  Standard Type
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
                  onChange={(e) => setFieldValue("directorate", e.target.value)}
                  className={`form-control  ${
                    errors.directorate && touched.directorate
                      ? "is-invalid     "
                      : ""
                  }`}
                >
                  <option>وټاکئ/انتخاب</option>

                  {provicesGlobalOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
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

            <CRow className="">
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  Supplier name
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
                  Supplier Country
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
                  Supplier Address
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
            </CRow>
            <CRow className="">
              <CCol md={4} className="mb-5">
                <label className="form-label mx-3" htmlFor="subject">
                  ضمیمه
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
                  class="form-control trans form-control-l"
                  id="inputField1"
                  name="attachment"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("attachment", event.currentTarget.files[0]);
                  }}
                />
              </CCol>
              <CCol md={4} className=" ">
                <label className="form-label mr-5" htmlFor="license_number">
                  Functionalities
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
                  onChange={(e) => setFieldValue("directorate", e.target.value)}
                  className={`form-control  ${
                    errors.directorate && touched.directorate
                      ? "is-invalid     "
                      : ""
                  }`}
                >
                  <option>وټاکئ/انتخاب</option>

                  {provicesGlobalOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
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
              <CCol md={4} className=" ">
                <label className="form-label mr-5" htmlFor="license_number">
                  Dosage
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
                  onChange={(e) => setFieldValue("directorate", e.target.value)}
                  className={`form-control  ${
                    errors.directorate && touched.directorate
                      ? "is-invalid     "
                      : ""
                  }`}
                >
                  <option>وټاکئ/انتخاب</option>

                  {provicesGlobalOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
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

export default CompanyRepresenterAndTechnicalStaffDetails;
