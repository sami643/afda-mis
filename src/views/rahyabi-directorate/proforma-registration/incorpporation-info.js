import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Card } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import {
  currencytypeOptions,
  proformaTypeOptions,
  provicesGlobalOptions,
  importerOptions,
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
const LtdInfo = () => {
  const {
    incorporationDetails,
    setIncorporationDetails,
    companyDetails,
    setProformaType,
    proformaType,
    isLTDProfroma,
    setIsLTDProforma,
    isNGOProforma,
    setIsNGOProforma,

    next,
  } = useContext(MultiStepFormContext);

  const [isSearchTriggered, setIsSearchTriggered] = useState(
    incorporationDetails.appointment_type.length > 1 ? true : false
  );
  const [isIncorporationExist, setIsIncorporationExist] = useState(true);
  const [existuserData, setExistedUserData] = useState({});

  const handleIncorporationSearch = async (values) => {
    setIsSearchTriggered(true);
  };

  const handleProformaTypeFunc = (values) => {
    setProformaType(values);
    if (values.importer === "LTD") {
      setIsLTDProforma(true);
      setIsNGOProforma(false);
    } else if (values.importer === "NGO") {
      setIsNGOProforma(true);
      setIsLTDProforma(false);
    }
  };

  console.log("Incorporation Details", incorporationDetails);
  console.log("kambany Details", companyDetails);
  return (
    <>
      <CRow
        style={{
          minHeight: !isSearchTriggered ? "350px" : null,
        }}
      >
        <CCol style={{ minHeight: !isLTDProfroma ? "350px" : null }}>
          <Formik
            initialValues={{ importer: "", proformaType: "" }}
            onSubmit={handleProformaTypeFunc}
            validationSchema={importerAndProformaTypeValidationSchema}
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
                <div className={"details__wrapper mt-5"}>
                  <CRow className=" justify-content-center">
                    <CCol md={8} className="mt-5">
                      <label className="form-label mx-2" htmlFor="importer">
                        تورید کوونکی
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
                        id="importer"
                        value={values.importer}
                        name="appointment_type"
                        onChange={(e) => {
                          setFieldValue("importer", e.target.value);
                        }}
                        className={`form-control form-select-l ${
                          errors.importer && touched.importer
                            ? "is-invalid form-select    "
                            : ""
                        }`}
                        aria-label=".form-select- example"
                      >
                        <option>وټاکئ/انتخاب</option>

                        {importerOptions.map((option) => {
                          return (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          );
                        })}
                      </select>
                      {errors.importer && touched.importer ? (
                        <div className="invalid-feedback  errorMessageStyle mx-3 mb-3 mt-0">
                          {errors.importer}
                        </div>
                      ) : null}
                    </CCol>

                    <CCol md={8} className="mt-3">
                      <label className="form-label mx-2" htmlFor="proformaType">
                        د پروفورمې ډول
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
                        id="proformaType"
                        value={values.proformaType}
                        name="appointment_type"
                        onChange={(e) => {
                          setFieldValue("proformaType", e.target.value);
                        }}
                        className={`form-control form-select-l ${
                          errors.proformaType && touched.proformaType
                            ? "is-invalid form-select    "
                            : ""
                        }`}
                        aria-label=".form-select- example"
                      >
                        <option>وټاکئ/انتخاب</option>

                        {proformaTypeOptions.map((option) => {
                          return (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          );
                        })}
                      </select>
                      {errors.proformaType && touched.proformaType ? (
                        <div className="invalid-feedback  errorMessageStyle mx-3 mb-3 mt-0">
                          {errors.proformaType}
                        </div>
                      ) : null}
                    </CCol>
                  </CRow>
                  <CRow className="justify-content-center mt-5">
                    <CCol md={8} className="text-end">
                      <CButton type="submit" className="bg-primary px-4">
                        لټون
                      </CButton>
                    </CCol>
                  </CRow>
                </div>
              </Form>
            )}
          </Formik>
        </CCol>

        {isLTDProfroma && (
          <CCol xs={12}>
            <CCardBody className="m-0 p-0">
              <Formik
                onSubmit={handleIncorporationSearch}
                initialValues={{ license_number: "" }}
                validationSchema={incorporationSearchValidationSchema}
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
                      <CCol md={8} className=" mb-5">
                        <label
                          className="form-label mr-5"
                          htmlFor="license_number"
                        >
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
                          className={`form-control form-select-lg ${
                            errors.license_number && touched.license_number
                              ? "is-invalid form-select-lg    "
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
                      <CCol md={8} className=" text-end mt-">
                        <CButton
                          type="submit"
                          className="btn-sm btn  px-4 py-2 mb-4 "
                          onClick={() => setExistedUserData("")}
                        >
                          د جواز لټون
                        </CButton>
                      </CCol>
                    </CRow>
                  </Form>
                )}
              </Formik>

              {/* Search Result */}
              {isSearchTriggered && (
                <div className="  border rounded mt-5 mb-5 p-2">
                  <CCardBody
                    className="p-0 mx-0"
                    style={{ minHeight: "200px" }}
                  >
                    <>
                      <h4
                        className="px-3  py-2 rounded"
                        style={{ backgroundColor: "#00aae4" }}
                      >
                        د شرکت اړه معلومات
                      </h4>
                      {isIncorporationExist && (
                        <div className="my-3">
                          <CRow className="px-3 py-2  d-flex">
                            <CCol md={2} className="">
                              <p className=" mb-1">د شرکت نوم:</p>
                            </CCol>
                            <CCol md={4} className="">
                              <strong className="mx-2  bg-warning rounded p-1">
                                {/* {companyData?.name} */}
                                عمر غزنی غفاری لیمیتید
                              </strong>
                            </CCol>
                            <div className="spacess"></div>
                            <CCol md={3} className="">
                              <p className=" m-0">
                                د تجارتي جواز د اعتبار نیټه:
                              </p>
                            </CCol>
                            <CCol md={3}>
                              <strong className="m-0 p-0">
                                {/* {companyData?.tazkera_number} */}
                                04-06-1404
                              </strong>
                            </CCol>
                          </CRow>
                          <CRow className="px-3 pb-2  d-flex">
                            <CCol md={2} className="">
                              <p className=" mb-0">د شرکت د جواز نمبر:</p>
                            </CCol>
                            <CCol md={4} className="">
                              <strong className="mx-2">
                                {/* {companyData?.name} */}
                                90890
                              </strong>
                            </CCol>
                            <div className="spacess"></div>
                            <CCol md={3} className="">
                              <p className="mb-0">ولایت:</p>
                            </CCol>
                            <CCol md={3} className="">
                              <strong className="">
                                {/* {companyData?.contact} */}
                                کابل
                              </strong>
                            </CCol>
                          </CRow>
                          <CRow className="px-3 pb-2  d-flex">
                            <CCol md={2} className="">
                              <p className=" mb-0"> پته:</p>
                            </CCol>
                            <CCol md={4} className="">
                              <strong className="">
                                {/* {companyData?.father_name} */}
                                هوتل پروان شمشاد مارکیټ
                              </strong>
                            </CCol>
                            <div className="spacess"></div>
                            <CCol md={3} className="">
                              <p className="">د اړیکې شمیره:</p>
                            </CCol>
                            <CCol md={3} className="">
                              <strong className="">
                                {/* {companyData?.occupation} */}
                                077564654656
                              </strong>
                            </CCol>
                          </CRow>
                          <CRow className="px-3 pb-2  d-flex">
                            <CCol md={2} className="">
                              <p className=" mb-0">برښنالیک:</p>
                            </CCol>
                            <CCol md={4} className="">
                              <strong className="">
                                {/* {companyData?.email} */}
                                parviz@farma.gov.af
                              </strong>
                            </CCol>
                            <div className="spacess"></div>
                            <CCol md={3} className="">
                              <p className=" mb-0">د ویبسایټ لینک:</p>
                            </CCol>
                            <CCol md={3} className="">
                              <strong className="">
                                {/* {companyData?.occupation} */}
                                ghafari.frama.com
                              </strong>
                            </CCol>
                          </CRow>
                          <CRow className="px-3 pb-2  d-flex">
                            <CCol md={2} className="">
                              <p className=" mb-0">د شرکت نماینده:</p>
                            </CCol>
                            <CCol md={4} className="">
                              <strong className="">
                                {/* {companyData?.email} */}
                                احمد رحیم
                              </strong>
                            </CCol>
                            <div className="spacess"></div>
                            <CCol md={3} className="">
                              <p className=" mb-0">د نماینده د تذکرې شمیره:</p>
                            </CCol>
                            <CCol md={3} className="">
                              <strong className="">
                                {/* {companyData?.occupation} */}
                                564654654
                              </strong>
                            </CCol>
                          </CRow>
                        </div>
                      )}
                      {!isIncorporationExist && (
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
        )}
        {/* NGO */}
        {isNGOProforma && (
          <Formik
            initialValues={incorporationDetails}
            onSubmit={(values) => {
              setIncorporationDetails(values);
              next();
            }}
            validationSchema={proforamvaIncorporationValidationSchema}
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
                  <div className="  border rounded mt-5 mb-5 p-2">
                    <CCardBody
                      className="p-0 mx-0"
                      style={{ minHeight: "200px" }}
                    >
                      <h4
                        className="px-3  py-2 rounded"
                        style={{ backgroundColor: "#00aae4" }}
                      >
                        مهرباني وکړئ د موسسې اړوند معلومات ثبت کړئ
                      </h4>
                      <CRow className="justify-content-center mt-4 mb-4 ">
                        <CCol md={4} className="">
                          <label className="form-label mx-2" htmlFor="subject">
                            د موسسې نوم
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
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.appointment_type}
                            </div>
                          ) : null}
                        </CCol>

                        <CCol md={4} className="">
                          <label className="form-label mx-2" htmlFor="subject">
                            د جواز شمیره
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
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.appointment_type}
                            </div>
                          ) : null}
                        </CCol>

                        <CCol md={4} className="">
                          <label className="form-label mx-2" htmlFor="subject">
                            د جواز د اعتبار نیټه
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
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.appointment_type}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>
                      <CRow className="mb-3 ">
                        <CCol md={4} className="">
                          <label className="form-label mx-2" htmlFor="subject">
                            د موسسې دقیق آدرس
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
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
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
                          <select
                            id="appointment_type"
                            value={values.appointment_type}
                            name="appointment_type"
                            onChange={(e) =>
                              setFieldValue("appointment_type", e.target.value)
                            }
                            className={`form-control form-select-l ${
                              errors.appointment_type &&
                              touched.appointment_type
                                ? "is-invalid form-select    "
                                : ""
                            }`}
                            aria-label=".form-select- example"
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

                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
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
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.appointment_type}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>
                      <CRow className="justify-content-center mt-4 mb-4 ">
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
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
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
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.appointment_type}
                            </div>
                          ) : null}
                        </CCol>

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
                            onBlur={() =>
                              setFieldTouched("introduced_by", true)
                            }
                          />
                          {errors.introduced_by && touched.introduced_by ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.introduced_by}
                            </div>
                          ) : null}
                          {errors.appointment_type &&
                          touched.appointment_type ? (
                            <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                              {errors.appointment_type}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </div>

                  <CRow className="justify-content-center my-3">
                    <CCol md={4} className="">
                      <label className="form-label mx-2" htmlFor="subject">
                        د انوایس مجموعي قیمت
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

                        {currencytypeOptions.map((option) => {
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
                      <label
                        className="form-label mx-2"
                        htmlFor="number_of_total_items"
                      >
                        د اقلامو تعداد
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
                        id="number_of_total_items"
                        name="number_of_total_items"
                        className={`form-control form-select ${
                          errors.number_of_total_items &&
                          touched.number_of_total_items
                            ? "is-invalid form-select    "
                            : ""
                        }`}
                        value={values.number_of_total_items}
                        onChange={(e) => {
                          setFieldValue(
                            "number_of_total_items",
                            e.target.value
                          );
                        }}
                        onBlur={() =>
                          setFieldTouched("number_of_total_items", true)
                        }
                      />
                      {errors.number_of_total_items &&
                      touched.number_of_total_items ? (
                        <div className="invalid-feedback d-block errorMessageStyle mr-2">
                          {errors.number_of_total_items}
                        </div>
                      ) : null}
                    </CCol>
                  </CRow>
                  <CRow className="my-3">
                    <CCol md={4} className="">
                      <label className="form-label mx-2" htmlFor="subject">
                        متفرقه مصارف
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
                  </CRow>
                  <div
                    className={
                      "form__item button__items d-flex justify-content-end"
                    }
                  >
                    <CButton
                      type="submit"
                      className="btn-sm btn   px-4 py-2 m-4 "
                    >
                      مخته
                    </CButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </CRow>

      {isSearchTriggered && (
        <Formik
          initialValues={incorporationDetails}
          onSubmit={(values) => {
            setIncorporationDetails(values);
            next();
          }}
          validationSchema={proforamvaIncorporationValidationSchema}
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
                <CRow className="justify-content-center my-3">
                  <CCol md={4} className="">
                    <label className="form-label mx-2" htmlFor="subject">
                      د انوایس مجموعي قیمت
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

                      {currencytypeOptions.map((option) => {
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
                    <label
                      className="form-label mx-2"
                      htmlFor="number_of_total_items"
                    >
                      د اقلامو تعداد
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
                      id="number_of_total_items"
                      name="number_of_total_items"
                      className={`form-control form-select ${
                        errors.number_of_total_items &&
                        touched.number_of_total_items
                          ? "is-invalid form-select    "
                          : ""
                      }`}
                      value={values.number_of_total_items}
                      onChange={(e) => {
                        const newValue = Math.min(
                          Math.max(parseInt(e.target.value), 1),
                          50
                        );
                        setFieldValue("number_of_total_items", newValue);
                      }}
                      onBlur={() =>
                        setFieldTouched("number_of_total_items", true)
                      }
                    />
                    {errors.number_of_total_items &&
                    touched.number_of_total_items ? (
                      <div className="invalid-feedback d-block errorMessageStyle mr-2">
                        {errors.number_of_total_items}
                      </div>
                    ) : null}
                  </CCol>
                </CRow>
                <CRow className="my-3">
                  <CCol md={4} className="">
                    <label className="form-label mx-2" htmlFor="subject">
                      متفرقه مصارف
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
                </CRow>
                <div
                  className={
                    "form__item button__items d-flex justify-content-end"
                  }
                >
                  <CButton
                    type="submit"
                    className="btn-sm btn   px-4 py-2 m-4 "
                  >
                    مخته
                  </CButton>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
export default LtdInfo;
