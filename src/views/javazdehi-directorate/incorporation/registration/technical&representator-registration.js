import React, { useContext, useState } from "react";
import MultiStepFormContext from "../../../data/MultiStepFormContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Card } from "antd";
import { Input, InputNumber } from "formik-antd";
import {
  CButton,
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";
import {
  currencytypeOptions,
  proformaTypeOptions,
  provicesGlobalOptions,
  importerOptions,
  productiveCompanyproformaOPtions,
  monthsOptions,
  daysOptions,
  yearOptions,
} from "../../../data/global-data";

const TechnicalAndRepresentativeRegistration = () => {
  const { representativeDetails, setRepresentativeDetails, next, prev } =
    useContext(MultiStepFormContext);
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
            <CCard className="my-5 pt-4 ">
              <CCardBody className="pt-0">
                <h5 className="bg-warning p-2 rounded">د فنی مسؤل مشخصات</h5>
                <CRow className=" mt-5">
                  <CCol md={6} className=" mb-3">
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
                <CRow className=" ">
                  <CCol md={6} className=" mb-3">
                    <label className="form-label mr-5" htmlFor="license_number">
                      د پلارنوم
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
                  <CCol className=" py-1 mx-3 border rounded">
                    <label
                      className="form-label mt-2 mx- "
                      htmlFor="subject"
                      style={{ fontWeight: "bolder" }}
                    >
                      د قرارداد د عقد نیټه
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
              </CCardBody>
            </CCard>

            <CCard className="my-5 pt-4 ">
              <CCardBody className="pt-0">
                <h5
                  className=" p-2 rounded"
                  style={{ backgroundColor: "#00aae4" }}
                >
                  د نماینده مشخصات
                </h5>
                <CRow className=" mt-5">
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
                <CRow className="">
                  <CCol md={4} className=" mb-3">
                    <label className="form-label mr-5" htmlFor="license_number">
                      د تلفن شمیره
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
                      ایمیل
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
                  <CCol md={4} className=" mb-3">
                    <label className="form-label mr-5" htmlFor="license_number">
                      د کارت نمبر
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

                <CRow className="">
                  <CCol md={6} className=" mb-3">
                    <label className="form-label mr-5" htmlFor="license_number">
                      موقف په شرکت کې
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
                  <CCol md={6} className="">
                    <label className="form-label mx-3" htmlFor="subject">
                      عکس
                    </label>
                    <input
                      class="form-control form-control-l"
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
              </CCardBody>
            </CCard>
          </Form>
        )}
      </Formik>
      <div
        className={
          "form__item button__items d-flex justify-content-between mt-5"
        }
      >
        <Button type={"default"} onClick={prev}>
          شاته
        </Button>
        <CButton
          type="submit"
          className="btn-sm btn   px-4 py-2  "
          onClick={() => next()}
        >
          مخته
        </CButton>
      </div>
    </>
  );
};

export default TechnicalAndRepresentativeRegistration;
