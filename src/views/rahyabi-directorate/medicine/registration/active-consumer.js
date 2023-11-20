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

const OwnerDetails = ({ onFormSubmit, onStepBack }) => {
  const handleForm = (values) => {
    onFormSubmit({ ...values, step: 4 });
  };

  const stepBack = () => {
    onStepBack();
  };

  return (
    <>
      <CCardHeader className="mx-0">
        <h3 className="mx-0">د یادو درملو فعال کارونکي</h3>
      </CCardHeader>
      <Formik
        onSubmit={handleForm}
        initialValues={{ factory_name: "" }}
        // validationSchema={nationalCompanyValidationSchema}
        enableReinitialize={true}
      >
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form>
            <CRow className="justify-content-center mt-5">
              <CCol md={6} className=" mb-3">
                <label className="form-label mx-2" htmlFor="license_number">
                  هیواد
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
              <CCol md={6} className="  mb-3">
                <label className="form-label mx-2" htmlFor="license_number">
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

                  {serviceOptions.map((option) => {
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
            <CRow className="justify-content-center">
              <CCol md={6} className="mb-3">
                <label className="form-label  mx-2 " htmlFor="license_number">
                  حالت
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

                  {serviceOptions.map((option) => {
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
              <CCol md={6} className="mb-5">
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
