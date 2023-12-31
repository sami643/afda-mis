import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "../../../data/MultiStepFormContext";
import {
  drugExportgoalOptions,
  medicalProductOptions,
} from "../../../data/global-data";
import "./proforma-register-style.css";
import {
  CButton,
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";
import {
  proformaCompanyValidationSchema,
  NGOMedicineValidationSchema,
} from "../../../data/validation";
const CompanyDetailsFunc = () => {
  const {
    companyDetails,
    setCompanyDetails,
    incorporationDetails,
    proformaType,
    isLTDProfroma,
    isLTDMedicalProductProforma,
    isNGOProforma,
    isCompanyProforma,
    setIsCompanyProforma,
    next,
    prev,
  } = useContext(MultiStepFormContext);
  const [isSearchTriggered, setIsSearchTriggered] = useState(
    companyDetails.medicine_export_purpose.length > 0 ? true : false
  );
  const [isCompanyExist, setIsCompanyExist] = useState(true);
  const [companyData, setCompanyData] = useState({});

  const handleCompanySearch = async (values) => {
    setIsSearchTriggered(true);
  };

  console.log("Company Detaiils01010110", proformaType);
  const handlecompanyDetialsFunc = (values) => {
    console.log("Vlauedasfsda09090909", values);
  };
  return (
    <>
      {(isLTDProfroma || isCompanyProforma) && (
        <>
          <CRow
            style={{
              minHeight: !isSearchTriggered ? "350px" : null,
            }}
          >
            <CCol xs={12} className="">
              <CCardBody className="m-0 p-0">
                <Formik
                  onSubmit={handleCompanySearch}
                  initialValues={companyDetails}
                  // validationSchema={visitorSearchValidationSchema}
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
                        <CCol md={6} className="mt-5 mb-5">
                          <label
                            className="form-label mx-3"
                            htmlFor="company_register_number"
                          >
                            د کمپنۍ د ثبت نمبر
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
                            id="company_register_number"
                            name="company_register_number"
                            className={`form-control form-select-lg ${
                              errors.company_register_number &&
                              touched.company_register_number
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.company_register_number}
                            onChange={(e) =>
                              setFieldValue(
                                "company_register_number",
                                e.target.value
                              )
                            }
                            onBlur={() =>
                              setFieldTouched("company_register_number", true)
                            }
                          />
                          {errors.company_register_number &&
                          touched.company_register_number ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.company_register_number}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md={6} className="mt-5 mb-5">
                          <label className="form-label mx-3" htmlFor="subject">
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
                      </CRow>

                      <CRow className="justify-content-center mx-5">
                        <CCol md={10} className=" text-end mt-">
                          <CButton
                            type="submit"
                            className="btn-sm btn  px-4 py-2 mb-4 "
                            onClick={() => setCompanyData("")}
                          >
                            لټون
                          </CButton>
                        </CCol>
                      </CRow>
                    </Form>
                  )}
                </Formik>

                {/* Search Result */}
                {isSearchTriggered && (
                  <div className="  border rounded mt-5 mb-2 p-2 mx-0 ">
                    <CCardBody
                      className="p-0 mx-0"
                      style={{ minHeight: "200px" }}
                    >
                      <>
                        <h4
                          className="px-3 bg-warning py-2 rounded"
                          // style={{ backgroundColor: "#00aae4" }}
                        >
                          د تولیدي کمپنۍ په اړه معلومات
                        </h4>
                        {isCompanyExist && (
                          <div className="my-3">
                            <CRow className="px-3 py-2  d-flex">
                              <CCol md={2} className="">
                                <p className=" mb-1">د کمپنۍ نوم:</p>
                              </CCol>
                              <CCol md={4} className="">
                                <strong
                                  className="mx-2 rounded p-1"
                                  style={{ backgroundColor: "#00aae4" }}
                                >
                                  {/* {companyData?.name} */}
                                  Mediun Farma
                                </strong>
                              </CCol>
                              <div className="spacess"></div>
                              <CCol md={2} className="">
                                <p className=" m-0">هیواد:</p>
                              </CCol>
                              <CCol md={4}>
                                <strong className="m-0 p-0">
                                  {/* {companyData?.tazkera_number} */}
                                  پاکستان
                                </strong>
                              </CCol>
                            </CRow>
                            <CRow className="px-3 pb-2  d-flex">
                              <CCol md={2} className="">
                                <p className=" mb-0">ولایت :</p>
                              </CCol>
                              <CCol md={4} className="">
                                <strong className="mx-2">
                                  {/* {companyData?.name} */}
                                  لاهور
                                </strong>
                              </CCol>
                              <div className="spacess"></div>
                              <CCol md={2} className="">
                                <p className="mb-0">پته:</p>
                              </CCol>
                              <CCol md={4} className="">
                                <strong className="">
                                  {/* {companyData?.contact} */}
                                  Johar Town, Phase-3, Lahore
                                </strong>
                              </CCol>
                            </CRow>
                            <CRow className="px-3 pb-2  d-flex">
                              <CCol md={2} className="">
                                <p className=" mb-0"> د اړیکې شمیره:</p>
                              </CCol>
                              <CCol md={4} className="">
                                <strong className="">
                                  {/* {companyData?.father_name} */}
                                  00924654654656
                                </strong>
                              </CCol>
                              <div className="spacess"></div>
                              <CCol md={2} className="">
                                <p className=" mb-0">برښنالیک:</p>
                              </CCol>
                              <CCol md={4} className="">
                                <strong className="">
                                  {/* {companyData?.occupation} */}
                                  parviz@farma.gov.af
                                </strong>
                              </CCol>
                            </CRow>
                            <CRow className="px-3 pb-2  d-flex">
                              <div className="spacess"></div>
                              <CCol md={2} className="">
                                <p className=" mb-0">د ویبسایټ لینک:</p>
                              </CCol>
                              <CCol md={4} className="">
                                <strong className="">
                                  {/* {companyData?.occupation} */}
                                  ghafari.frama.com
                                </strong>
                              </CCol>
                            </CRow>
                          </div>
                        )}
                        {!isCompanyExist && (
                          <div style={{ margin: "13% 20%" }}>
                            <h6>په دې مشخصاتو لیدونکی شتون نه لري..</h6>
                          </div>
                        )}
                      </>
                    </CCardBody>
                  </div>
                )}
              </CCardBody>
            </CCol>
          </CRow>
        </>
      )}
      {isNGOProforma && (
        <>
          <Formik
            initialValues={companyDetails}
            onSubmit={(values) => {
              setCompanyDetails(values);
            }}
            // validationSchema={NGOMedicineValidationSchema}
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
                <div
                  className="  border rounded mb-5 p-2 "
                  style={{ marginTop: "100px" }}
                >
                  <CCardBody
                    className="p-0 mx-0"
                    style={{ minHeight: "200px" }}
                  >
                    <h4
                      className="px-3  py-2 rounded"
                      style={{ backgroundColor: "#00aae4" }}
                    >
                      مهرباني وکړئ د کمپنۍ اړوند معلومات ثبت کړئ
                    </h4>
                    <CRow className="justify-content-center mt-4 mb-4 ">
                      <CCol md={4} className="">
                        <label className="form-label mx-2" htmlFor="subject">
                          د کمپنۍ نوم
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
                        {errors.appointment_type && touched.appointment_type ? (
                          <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                            {errors.appointment_type}
                          </div>
                        ) : null}
                      </CCol>

                      <CCol md={4} className="">
                        <label className="form-label mx-2" htmlFor="subject">
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
                          type=""
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
                        {errors.appointment_type && touched.appointment_type ? (
                          <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                            {errors.appointment_type}
                          </div>
                        ) : null}
                      </CCol>

                      <CCol md={4} className="">
                        <label className="form-label mx-2" htmlFor="subject">
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
                        <input
                          type=""
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
                        {errors.appointment_type && touched.appointment_type ? (
                          <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                            {errors.appointment_type}
                          </div>
                        ) : null}
                      </CCol>
                    </CRow>
                    <CRow className="mb-3 ">
                      <CCol md={4} className="">
                        <label className="form-label mx-2" htmlFor="subject">
                          د کمپنۍ دقیق آدرس
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
                        {errors.appointment_type && touched.appointment_type ? (
                          <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                            {errors.appointment_type}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol md={4} className="">
                        <label className="form-label mx-2" htmlFor="subject">
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
                          type="number"
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
                        <input
                          type="email"
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
                        {errors.appointment_type && touched.appointment_type ? (
                          <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                            {errors.appointment_type}
                          </div>
                        ) : null}
                      </CCol>
                    </CRow>
                    <CRow className=" mt-4 mb-4 ">
                      <CCol md={4} className="">
                        <label className="form-label mx-2" htmlFor="subject">
                          ویب سایټ
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
                          type=""
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
                        {errors.appointment_type && touched.appointment_type ? (
                          <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                            {errors.appointment_type}
                          </div>
                        ) : null}
                      </CCol>
                    </CRow>
                  </CCardBody>
                </div>
                <CRow className="mb-5">
                  {proformaType.proformaType === "medical product proforma" ? (
                    <CCol md={6} className="mb-5">
                      <label className="form-label mx-2" htmlFor="subject">
                        د صحی محصولاتو ډول
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
                          setFieldValue(
                            "medicine_export_purpose",
                            e.target.value
                          )
                        }
                        className={`form-control form-select-l ${
                          errors.medicine_export_purpose &&
                          touched.medicine_export_purpose
                            ? "is-invalid form-select    "
                            : ""
                        }`}
                        aria-label=".form-select- example"
                      >
                        <option>وټاکئ/انتخاب</option>

                        {medicalProductOptions.map((option) => {
                          return (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          );
                        })}
                      </select>
                      {errors.medicine_export_purpose &&
                      touched.medicine_export_purpose ? (
                        <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                          {errors.medicine_export_purpose}
                        </div>
                      ) : null}
                    </CCol>
                  ) : (
                    <CCol md={6} className="mb-5">
                      <label className="form-label mx-2" htmlFor="subject">
                        د محصولاتو د تورید موخه
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
                          setFieldValue(
                            "medicine_export_purpose",
                            e.target.value
                          )
                        }
                        className={`form-control form-select-l ${
                          errors.medicine_export_purpose &&
                          touched.medicine_export_purpose
                            ? "is-invalid form-select    "
                            : ""
                        }`}
                        aria-label=".form-select- example"
                      >
                        <option>وټاکئ/انتخاب</option>

                        {drugExportgoalOptions.map((option) => {
                          return (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          );
                        })}
                      </select>
                      {errors.medicine_export_purpose &&
                      touched.medicine_export_purpose ? (
                        <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                          {errors.medicine_export_purpose}
                        </div>
                      ) : null}
                    </CCol>
                  )}

                  <CCol md={6} className="">
                    <label className="form-label mx-3" htmlFor="subject">
                      د انوایس ضمیمه
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
                <div
                  className={
                    "form__item button__items d-flex justify-content-between"
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
              </Form>
            )}
          </Formik>
        </>
      )}

      {(isLTDProfroma || isCompanyProforma) && (
        <>
          {isSearchTriggered && (
            <Formik
              initialValues={companyDetails}
              onSubmit={(values) => {
                setCompanyDetails(values);
                handleSerafasfd(values);
                next();
              }}
              validationSchema={proformaCompanyValidationSchema}
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
                    <CRow className="mb-5">
                      {proformaType.proformaType ===
                      "medical product proforma" ? (
                        <CCol md={6} className="mb-5">
                          <label className="form-label mx-2" htmlFor="subject">
                            د صحی محصولاتو ډول
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
                              setFieldValue(
                                "medicine_export_purpose",
                                e.target.value
                              )
                            }
                            className={`form-control form-select-l ${
                              errors.medicine_export_purpose &&
                              touched.medicine_export_purpose
                                ? "is-invalid form-select    "
                                : ""
                            }`}
                            aria-label=".form-select- example"
                          >
                            <option>وټاکئ/انتخاب</option>

                            {medicalProductOptions.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </select>
                          {errors.medicine_export_purpose &&
                          touched.medicine_export_purpose ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.medicine_export_purpose}
                            </div>
                          ) : null}
                        </CCol>
                      ) : (
                        <CCol md={6} className="mb-5">
                          <label className="form-label mx-2" htmlFor="subject">
                            د محصولاتو د تورید موخه
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
                              setFieldValue(
                                "medicine_export_purpose",
                                e.target.value
                              )
                            }
                            className={`form-control form-select-l ${
                              errors.medicine_export_purpose &&
                              touched.medicine_export_purpose
                                ? "is-invalid form-select    "
                                : ""
                            }`}
                            aria-label=".form-select- example"
                          >
                            <option>وټاکئ/انتخاب</option>

                            {drugExportgoalOptions.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </select>
                          {errors.medicine_export_purpose &&
                          touched.medicine_export_purpose ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.medicine_export_purpose}
                            </div>
                          ) : null}
                        </CCol>
                      )}

                      <CCol md={6} className="">
                        <label className="form-label mx-3" htmlFor="subject">
                          د انوایس ضمیمه
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
                    <div
                      className={
                        "form__item button__items d-flex justify-content-between"
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
                  </div>
                </Form>
              )}
            </Formik>
          )}
          {!isSearchTriggered && (
            <Button type={"default"} className="mt-5" onClick={prev}>
              شاته
            </Button>
          )}
        </>
      )}
    </>
  );
};
export default CompanyDetailsFunc;
