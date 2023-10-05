import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./proforma-registration/MultiStepFormContext";
import { CButton, CCol, CRow } from "@coreui/react";
const LtdInfo = () => {
  const appointment_typeOptions = [
    { value: "رسمی", label: "رسمی" },
    { value: "غیر رسمی", label: "غیر رسمی" },
  ];
  const LtdInfoValidationSchema = Yup.object().shape({
    ltd_license_number: Yup.string().required("د شرکت د جواز نمبر اړین دی"),
    introduced_by: Yup.string().required("د ملاقاتونو  ډول اړین دی"),
  });

  const { details, setDetails, next } = useContext(MultiStepFormContext);
  console.log("deataiallls", details);
  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validationSchema={LtdInfoValidationSchema}
    >
      {({
        handleSubmit,
        errors,
        values,
        setFieldValue,
        setFieldTouched,
        touched,
      }) => (
        <Form>
          <div className={"details__wrapper my-5"}>
            <CRow className=" my-3 ">
              {/* ltd license Number */}
              <CCol md={4} className="mx-0">
                <label className="form-label mx-2" htmlFor="ltd_license_number">
                  د شرکت د جواز نمبر
                </label>
                <input
                  type="number"
                  id="ltd_license_number"
                  name="ltd_license_number"
                  style={{ direction: "rtl", textAlign: "right" }}
                  className={`form-control form-select- ${
                    errors.ltd_license_number && touched.ltd_license_number
                      ? "is-invalid form-select-    "
                      : ""
                  }`}
                  value={values.ltd_license_number}
                  onChange={(e) =>
                    setFieldValue("ltd_license_number", e.target.value)
                  }
                  onBlur={() => setFieldTouched("ltd_license_number", true)}
                />
                {errors.ltd_license_number && touched.ltd_license_number ? (
                  <div className="invalid-feedback d-block errorMessageStyle mr-2">
                    {errors.ltd_license_number}
                  </div>
                ) : null}
              </CCol>
            </CRow>

            <CRow className="  mx-0  ">
              <CCol md={5} className=" p-2 m-0  border rounded">
                <label
                  className="form-label mt-2 mx- "
                  htmlFor="subject"
                  style={{ fontWeight: "bolder" }}
                >
                  د تجارتی جواز د اعتبار نیټه
                </label>
                <CCol md={9} className="d-flex mb-2 ">
                  <div className="mx-1">
                    <label className="form-label mx-2 " htmlFor="subject">
                      ورځ
                    </label>
                    <select
                      id="appointment_type"
                      value={values.appointment_type}
                      name="appointment_type"
                      onChange={(e) =>
                        setFieldValue("appointment_type", e.target.value)
                      }
                      className={`form-control form-select-l ${
                        errors.appointment_type && touched.appointment_type
                          ? "is-invalid form-select-    "
                          : ""
                      }`}
                      aria-label=".form-select example"
                    >
                      <option>وټاکئ/انتخاب</option>

                      {appointment_typeOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mx-1">
                    <label className="form-label mx-2 " htmlFor="subject">
                      ماه
                    </label>
                    <input
                      type="text"
                      id="introduced_by"
                      name="introduced_by"
                      className={`form-control form-select ${
                        errors.introduced_by && touched.introduced_by
                          ? "is-invalid form-select-    "
                          : ""
                      }`}
                      value={values.introduced_by}
                      onChange={(e) =>
                        setFieldValue("introduced_by", e.target.value)
                      }
                      onBlur={() => setFieldTouched("introduced_by", true)}
                    />
                    {errors.introduced_by && touched.introduced_by ? (
                      <div className="invalid-feedback d-block errorMessageStyle mr-2">
                        {errors.introduced_by}
                      </div>
                    ) : null}
                  </div>

                  <div className="mx-1">
                    <label className="form-label mx-2 " htmlFor="subject">
                      کال
                    </label>
                    <input
                      type="text"
                      id="introduced_by"
                      name="introduced_by"
                      className={`form-control form-select ${
                        errors.introduced_by && touched.introduced_by
                          ? "is-invalid form-select    "
                          : ""
                      }`}
                      value={values.introduced_by}
                      onChange={(e) =>
                        setFieldValue("introduced_by", e.target.value)
                      }
                      onBlur={() => setFieldTouched("introduced_by", true)}
                    />
                    {errors.introduced_by && touched.introduced_by ? (
                      <div className="invalid-feedback d-block errorMessageStyle mr-2">
                        {errors.introduced_by}
                      </div>
                    ) : null}
                  </div>
                </CCol>
              </CCol>
            </CRow>

            <CRow className="  mx-0 my-4  p-1 m-0  border rounded">
              <label
                className="form-label  m-2 mt-3"
                htmlFor="subject"
                style={{ fontWeight: "bolder" }}
              >
                د شرکت آدرس:
              </label>
              <CCol md={4} className=" mb-2 ">
                <label className="form-label mx-2 " htmlFor="subject">
                  ساحه/منطقه
                </label>
                <select
                  id="appointment_type"
                  value={values.appointment_type}
                  name="appointment_type"
                  onChange={(e) =>
                    setFieldValue("appointment_type", e.target.value)
                  }
                  className={`form-control form-select-l ${
                    errors.appointment_type && touched.appointment_type
                      ? "is-invalid form-select-    "
                      : ""
                  }`}
                  aria-label=".form-select example"
                >
                  <option>وټاکئ/انتخاب</option>

                  {appointment_typeOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </CCol>
              <CCol md={4} className="mb-2 ">
                <label className="form-label mx-2 " htmlFor="subject">
                  ناحیه/ ولسوالۍ
                </label>
                <input
                  type="text"
                  id="introduced_by"
                  name="introduced_by"
                  className={`form-control form-select ${
                    errors.introduced_by && touched.introduced_by
                      ? "is-invalid form-select    "
                      : ""
                  }`}
                  value={values.introduced_by}
                  onChange={(e) =>
                    setFieldValue("introduced_by", e.target.value)
                  }
                  onBlur={() => setFieldTouched("introduced_by", true)}
                />
                {errors.introduced_by && touched.introduced_by ? (
                  <div className="invalid-feedback d-block errorMessageStyle mr-2">
                    {errors.introduced_by}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className="mb-2 ">
                <label className="form-label mx-2 " htmlFor="subject">
                  ولایت
                </label>
                <input
                  type="text"
                  id="introduced_by"
                  name="introduced_by"
                  className={`form-control form-select ${
                    errors.introduced_by && touched.introduced_by
                      ? "is-invalid form-select    "
                      : ""
                  }`}
                  value={values.introduced_by}
                  onChange={(e) =>
                    setFieldValue("introduced_by", e.target.value)
                  }
                  onBlur={() => setFieldTouched("introduced_by", true)}
                />
                {errors.introduced_by && touched.introduced_by ? (
                  <div className="invalid-feedback d-block errorMessageStyle mr-2">
                    {errors.introduced_by}
                  </div>
                ) : null}
              </CCol>
            </CRow>

            <CRow className="justify-content-center my-3">
              {/* Appointment Type */}
              <CCol md={4} className="">
                <label className="form-label mx-2 " htmlFor="subject">
                  داړیکې شمیره
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
                  id="appointment_type"
                  value={values.appointment_type}
                  name="appointment_type"
                  onChange={(e) =>
                    setFieldValue("appointment_type", e.target.value)
                  }
                  className={`form-control form-select-l ${
                    errors.appointment_type && touched.appointment_type
                      ? "is-invalid form-select-   "
                      : ""
                  }`}
                  aria-label=".form-select- example"
                >
                  <option>وټاکئ/انتخاب</option>

                  {appointment_typeOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                {errors.appointment_type && touched.appointment_type ? (
                  <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                    {errors.appointment_type}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className="">
                <label className="form-label mx-2" htmlFor="subject">
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
                <select
                  id="appointment_type"
                  value={values.appointment_type}
                  name="appointment_type"
                  onChange={(e) =>
                    setFieldValue("appointment_type", e.target.value)
                  }
                  className={`form-control form-select-l ${
                    errors.appointment_type && touched.appointment_type
                      ? "is-invalid form-select-    "
                      : ""
                  }`}
                  aria-label=".form-select- example"
                >
                  <option>وټاکئ/انتخاب</option>

                  {appointment_typeOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                {errors.appointment_type && touched.appointment_type ? (
                  <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                    {errors.appointment_type}
                  </div>
                ) : null}
              </CCol>

              <CCol md={4} className="">
                <label className="form-label mx-2" htmlFor="subject">
                  د ویسایټ لینک
                </label>
                <input
                  type="text"
                  id="introduced_by"
                  name="introduced_by"
                  className={`form-control form-select ${
                    errors.introduced_by && touched.introduced_by
                      ? "is-invalid form-select    "
                      : ""
                  }`}
                  value={values.introduced_by}
                  onChange={(e) =>
                    setFieldValue("introduced_by", e.target.value)
                  }
                  onBlur={() => setFieldTouched("introduced_by", true)}
                />
                {errors.introduced_by && touched.introduced_by ? (
                  <div className="invalid-feedback d-block errorMessageStyle mr-2">
                    {errors.introduced_by}
                  </div>
                ) : null}
              </CCol>
            </CRow>

            <CRow className="justify-content-center my-3">
              {/* Appointment Type */}
              <CCol md={4} className="">
                <label className="form-label mx-2" htmlFor="subject">
                  د پروفورمې د انوایس مجموعي قیمت
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
                  id="appointment_type"
                  value={values.appointment_type}
                  name="appointment_type"
                  onChange={(e) =>
                    setFieldValue("appointment_type", e.target.value)
                  }
                  className={`form-control form-select-l ${
                    errors.appointment_type && touched.appointment_type
                      ? "is-invalid form-select-   "
                      : ""
                  }`}
                  aria-label=".form-select- example"
                >
                  <option>وټاکئ/انتخاب</option>

                  {appointment_typeOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                {errors.appointment_type && touched.appointment_type ? (
                  <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                    {errors.appointment_type}
                  </div>
                ) : null}
              </CCol>
              <CCol md={4} className="">
                <label className="form-label mx-2" htmlFor="subject">
                  د پیسو نوعیت
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
                  id="appointment_type"
                  value={values.appointment_type}
                  name="appointment_type"
                  onChange={(e) =>
                    setFieldValue("appointment_type", e.target.value)
                  }
                  className={`form-control form-select-l ${
                    errors.appointment_type && touched.appointment_type
                      ? "is-invalid form-select    "
                      : ""
                  }`}
                  aria-label=".form-select- example"
                >
                  <option>وټاکئ/انتخاب</option>

                  {appointment_typeOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                {errors.appointment_type && touched.appointment_type ? (
                  <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                    {errors.appointment_type}
                  </div>
                ) : null}
              </CCol>
              {/* Total Item Number */}
              <CCol md={4} className="">
                <label className="form-label mx-2" htmlFor="subject">
                  د اقلامو مجموعي تعداد
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
                  className={`form-control form-select ${
                    errors.introduced_by && touched.introduced_by
                      ? "is-invalid form-select    "
                      : ""
                  }`}
                  value={values.introduced_by}
                  onChange={(e) =>
                    setFieldValue("introduced_by", e.target.value)
                  }
                  onBlur={() => setFieldTouched("introduced_by", true)}
                />
                {errors.introduced_by && touched.introduced_by ? (
                  <div className="invalid-feedback d-block errorMessageStyle mr-2">
                    {errors.introduced_by}
                  </div>
                ) : null}
              </CCol>
            </CRow>
            <div
              className={"form__item button__items d-flex justify-content-end"}
            >
              <CButton type="submit" className="btn-sm btn   px-4 py-2 m-4 ">
                مخته
              </CButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default LtdInfo;
