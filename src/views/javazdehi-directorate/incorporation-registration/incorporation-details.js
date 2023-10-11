import React, { useContext, useState } from "react";
import MultiStepFormContext from "../../data/MultiStepFormContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Card } from "antd";
import { Input, InputNumber } from "formik-antd";
import {
  currencytypeOptions,
  proformaTypeOptions,
  provicesGlobalOptions,
  importerOptions,
  productiveCompanyproformaOPtions,
  monthsOptions,
  daysOptions,
  yearOptions,
} from "../../data/global-data";
import {
  proforamvaIncorporationValidationSchema,
  importerAndProformaTypeValidationSchema,
  incorporationSearchValidationSchema,
} from "../../data/validation";
import {
  CButton,
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";
const IncorporationDetails = () => {
  const { LTDDetails, setLTDDetials, next } = useContext(MultiStepFormContext);
  return (
    <>
      <Formik
        // onSubmit={handleIncorporationSearch}
        initialValues={{ license_number: "" }}
        // validationSchema={incorporationSearchValidationSchema}
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
            <CRow className="justify-content-center mt-5">
              <CCol md={6} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  د شرکت نوم
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
              <CCol md={6} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  TIN نمبر
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
                      ? "is-invalid form-select-l   "
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
            <CRow className="justify-content-center ">
              <CCol md={6} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  د شرکت د جواز شمیره
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
              <CCol md={6} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  د دوسیې شمیره
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
            <CRow className=" mt-3 ">
              <CCol md={6} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  دقیق آدرس
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

              <CCol className=" py-1 mx-3 border rounded">
                <label
                  className="form-label mt-2 mx- "
                  htmlFor="subject"
                  style={{ fontWeight: "bolder" }}
                >
                  د تجارتی جواز د صدور نیټه
                </label>
                <CCol md={8} className="d-flex mb-2 ">
                  <div className="mx-1">
                    <select
                      id="issue_day"
                      value={values.issue_day}
                      name="issue_day"
                      onChange={(e) =>
                        setFieldValue("issue_day", e.target.value)
                      }
                      aria-label=".form-select example"
                    >
                      <option disabled selected>
                        ورځ
                      </option>

                      {daysOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mx-1">
                    <select
                      className="issueDateDay"
                      id="appointment_type"
                      value={values.appointment_type}
                      name="appointment_type"
                      onChange={(e) =>
                        setFieldValue("appointment_type", e.target.value)
                      }
                    >
                      <option disabled selected>
                        میاشت
                      </option>

                      {monthsOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                    {errors.introduced_by && touched.introduced_by ? (
                      <div className="invalid-feedback d-block errorMessageStyle mr-2">
                        {errors.introduced_by}
                      </div>
                    ) : null}
                  </div>

                  <div className="mx-1">
                    <select
                      id="appointment_type"
                      value={values.appointment_type}
                      name="appointment_type"
                      onChange={(e) =>
                        setFieldValue("appointment_type", e.target.value)
                      }
                      aria-label=".form-select example"
                    >
                      <option disabled selected>
                        کال
                      </option>

                      {yearOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                    {errors.introduced_by && touched.introduced_by ? (
                      <div className="invalid-feedback d-block errorMessageStyle mr-2">
                        {errors.introduced_by}
                      </div>
                    ) : null}
                  </div>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={6} className=" mt-3 ">
              <CCol md={6} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
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
                  id="medicine_export_purpose"
                  value={values.medicine_export_purpose}
                  name="appointment_type"
                  onChange={(e) =>
                    setFieldValue("medicine_export_purpose", e.target.value)
                  }
                  className={`form-control form-select-l ${
                    errors.medicine_export_purpose &&
                    touched.medicine_export_purpose
                      ? "is-invalid form-select    "
                      : ""
                  }`}
                  aria-label=".form-select- example"
                >
                  <option selected disabled>
                    وټاکئ/انتخاب
                  </option>

                  {provicesGlobalOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                {errors.license_number && touched.license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.license_number}
                  </div>
                ) : null}
              </CCol>
              <CCol md={6} className=" mb-3">
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
                      ? "is-invalid form-select-l "
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
          </Form>
        )}
      </Formik>
      <div className={"form__item button__items d-flex justify-content-end"}>
        <CButton
          type="submit"
          className="btn-sm btn   px-4 py-2 m-4  "
          onClick={next}
        >
          مخته
        </CButton>
      </div>
    </>
  );
};

export default IncorporationDetails;
