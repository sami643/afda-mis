import { CRow, CCol, CButton, CCardHeader } from "@coreui/react";
import React from "react";
import "./style.css";
import { Formik, Form } from "formik";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
import arabic from "react-date-object/calendars/arabic";
import arabic_ar from "react-date-object/locales/arabic_ar";
import { nationalCompanyDetailsValidationSchema } from "src/views/data/validation";

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
        <h3 className="px-3 pt-4">د فابریکې مشخصات</h3>
      </CCardHeader>

      <Formik
        onSubmit={handleForm}
        initialValues={{
          company_name_in_dari: "",
          company_name_in_english: "",
        }}
        validationSchema={nationalCompanyDetailsValidationSchema}
        enableReinitialize={true}
      >
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form>
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
                  id="company_name_in_dari"
                  name="company_name_in_dari"
                  className={`form-control form-select-l ${
                    errors.company_name_in_dari && touched.company_name_in_dari
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.company_name_in_dari}
                  onChange={(e) =>
                    setFieldValue("company_name_in_dari", e.target.value)
                  }
                  onBlur={() => setFieldTouched("company_name_in_dari", true)}
                />
                {errors.company_name_in_dari && touched.company_name_in_dari ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.company_name_in_dari}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  انګریزي نوم
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
                  id="company_name_in_english"
                  name="company_name_in_english"
                  className={`form-control form-select-l ${
                    errors.company_name_in_english &&
                    touched.company_name_in_english
                      ? "is-invalid form-select-l    "
                      : ""
                  }`}
                  value={values.company_name_in_english}
                  onChange={(e) =>
                    setFieldValue("company_name_in_english", e.target.value)
                  }
                  onBlur={() =>
                    setFieldTouched("company_name_in_english", true)
                  }
                />
                {errors.company_name_in_english &&
                touched.company_name_in_english ? (
                  <div className="invalid-feedback d-block errorMessageStyle mx-3">
                    {errors.company_name_in_english}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  د جواز نمبر
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
                  ابتدایي بودیجه په افغانيو
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
                  د تولیدي اقلامو ډول
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
                  د خدماتو ډول
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
              <CCol md={4} className=" mb-3">
                <label className="form-label mr-5" htmlFor="license_number">
                  د ټکس نیټه
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
                  د تأسیس نیټه
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
                <div className="form-outline " style={{ width: "100%" }}>
                  <DatePicker
                    style={{
                      padding: "16px",
                      border: `${
                        errors.appointment_date && touched.appointment_date
                          ? "1px solid red"
                          : ""
                      }`,
                    }}
                    calendar={arabic}
                    locale={arabic_ar}
                    id="appointment_date"
                    name="appointment_date"
                    value={values.appointment_date}
                    onChange={(e) =>
                      setFieldValue(
                        "appointment_date",
                        e.year + "/" + e.month.number + "/" + e.day
                      )
                    }
                  />
                  {errors.appointment_date && touched.appointment_date ? (
                    <div className="invalid-feedback d-block errorMessageStyle mr-2">
                      {errors.appointment_date}
                    </div>
                  ) : null}
                </div>
              </CCol>
            </CRow>
            <CRow className="mb-5">
              <CCol md={4} className=" mb-3 mt-4 d-flex">
                <div className="mt-1 mx-2">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    className=""
                  />
                </div>
                <label className="form-label mr-5" htmlFor="license_number">
                  open policy
                </label>
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
