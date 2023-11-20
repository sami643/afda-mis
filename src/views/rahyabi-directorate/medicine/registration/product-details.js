import { CRow, CCol, CButton, CCardHeader } from "@coreui/react";
import React from "react";
import "./style.css";
import { Formik, Form } from "formik";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
import arabic from "react-date-object/calendars/arabic";
import arabic_ar from "react-date-object/locales/arabic_ar";
import { nationalCompanyDetailsValidationSchema } from "src/views/data/validation";
import { provicesGlobalOptions } from "src/views/data/global-data";

import { Button, Card } from "antd";
const dateFormat = "YYYY/MM/DD";

const serviceOptions = [
  {
    value: "1",
    label: "ملی",
  },
  {
    value: "2",
    label: "بین المللی",
  },
];
const productType = [
  {
    value: "1",
    label: "شربت",
  },
  {
    value: "2",
    label: "کپسول ګولئ",
  },
];

const CompanyDetails = ({ onFormSubmit }) => {
  const handleForm = (values) => {
    onFormSubmit({ ...values, step: 1 });
  };

  return (
    <>
      <CCardHeader className="mx-0">
        <h3 className="px-3 pt-4">د درملو مشخصات</h3>
      </CCardHeader>

      <Formik
        onSubmit={handleForm}
        initialValues={{
          generic_name: "",
          brand_name: "",
        }}
        // validationSchema={nationalCompanyDetailsValidationSchema}
        enableReinitialize={true}
      >
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form>
            <CRow className="justify-content-center mt-5">
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  Generic Name
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
                  id="generic_name"
                  value={values.generic_name}
                  name="generic_name"
                  onChange={(e) =>
                    setFieldValue("generic_name", e.target.value)
                  }
                  className={`form-control  ${
                    errors.generic_name && touched.generic_name
                      ? "is-invalid     "
                      : ""
                  }`}
                >
                  <option>وټاکئ/انتخاب</option>

                  {productType.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                {errors.generic_name && touched.generic_name ? (
                  <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                    {errors.generic_name}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  Brand Name
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
                  id="brand_name"
                  name="brand_name"
                  className={`form-control form-select-l ${
                    errors.brand_name && touched.brand_name
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.brand_name}
                  onChange={(e) => setFieldValue("brand_name", e.target.value)}
                  onBlur={() => setFieldTouched("brand_name", true)}
                />
                {errors.brand_name && touched.brand_name ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.brand_name}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  Physical Shape Discription
                  {/* <span
                    style={{
                      color: "red",
                      marginInline: "5px",
                      paddingTop: "5px",
                    }}
                  >
                    *
                  </span> */}
                </label>
                <textarea
                  type="text"
                  id="brand_name"
                  name="brand_name"
                  className={`form-control form-select-l ${
                    errors.brand_name && touched.brand_name
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.brand_name}
                  onChange={(e) => setFieldValue("brand_name", e.target.value)}
                  onBlur={() => setFieldTouched("brand_name", true)}
                />
                {errors.brand_name && touched.brand_name ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.brand_name}
                  </div>
                ) : null}
              </CCol>
            </CRow>
            <CRow className="">
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  Physical Shape
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

                  {productType.map((option) => {
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
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  Recommended Dose
                  {/* <span
                    style={{
                      color: "red",
                      marginInline: "5px",
                      paddingTop: "5px",
                    }}
                  >
                    *
                  </span> */}
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
            <CRow className="">
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  Forensic Classification
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

                  {productType.map((option) => {
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
              <Button type={"default"} className="mx-2" disabled={true}>
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

export default CompanyDetails;
