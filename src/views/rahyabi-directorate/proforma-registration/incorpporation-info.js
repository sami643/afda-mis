import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import { currencytypeOptions } from "../../data/global-data";
import { proforamvaIncorporationValidationSchema } from "../../data/validation";
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
    next,
  } = useContext(MultiStepFormContext);

  const [isSearchTriggered, setIsSearchTriggered] = useState(
    incorporationDetails.appointment_type.length > 1 ? true : false
  );
  const [isIncorporationExist, setIsIncorporationExist] = useState(true);
  const [existuserData, setExistedUserData] = useState({});

  const handleIncorporationSearch = async (values) => {
    setIsSearchTriggered(true);

    // const data = { tazkera_number: values.tazkera_number };
    // try {
    //   const response = await searchVisitorApi(data);
    //   if (response.data.Visitors) {
    //     setExistedUserData(response.data.Visitors);
    //     setIsVisitorExist(true);
    //     setVisitor("Exist");
    //     addToast(searchUserToast);
    //   }
    // } catch (error) {
    //   console.error("Error in appointments:", error);
    //   setIsVisitorExist(false);
    //   setExistedUserData({});
    //   setVisitor("NotExist");
    //   addToast(searchUserToast_1);
    // }
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
        <CCol xs={12}>
          <CCardBody className="m-0 p-0">
            <Formik
              onSubmit={handleIncorporationSearch}
              initialValues={{ tazkera_number: "" }}
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
                    <CCol md={8} className="mt-5 mb-5">
                      <label className="form-label mr-5" htmlFor="subject">
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
                        onBlur={() => setFieldTouched("tazkera_number", true)}
                      />
                      {errors.tazkera_number && touched.tazkera_number ? (
                        <div className="invalid-feedback d-block errorMessageStyle mr-2">
                          {errors.tazkera_number}
                        </div>
                      ) : null}
                    </CCol>
                  </CRow>

                  <CRow className="justify-content-center mx-5">
                    <CCol md={8} className=" text-end mt-">
                      <CButton
                        type="submit"
                        className="btn-sm btn  px-4 py-2 mb-4 "
                        onClick={() => setExistedUserData("")}
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
              <div className="  border rounded mt-5 mb-5 p-2">
                <CCardBody className="p-0 mx-0" style={{ minHeight: "200px" }}>
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
                            <p className=" m-0">د تجارتي جواز د اعتبار نیټه:</p>
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
