import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CToast,
  CToaster,
  CToastHeader,
  CToastBody,
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
} from "src/views/data/global-data";
import "./../../data/views.css";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateTechnicalBoard = (props) => {
  const location = useLocation();
  const BOARD_DATA = new URLSearchParams(location.search);
  const serializedData = BOARD_DATA.get("id");
  const boardData = JSON.parse(decodeURIComponent(serializedData));
  const [disableButton, setDisableButton] = useState(false);
  console.log("BoardData", boardData);
  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast className="bg-info">
      <CToastHeader>
        <svg
          className="rounded me-2"
          width="20"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        ></svg>
        <div className="" style={{ fontSize: "22px" }}>
          ✔️بریا!{" "}
        </div>
      </CToastHeader>
      <CToastBody
        className="text-center"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        د فورم ډیتا ثبت شوه!
      </CToastBody>
    </CToast>
  );

  return (
    <>
      <div>
        <CToaster ref={toaster} push={toast} placement="top-center" />
      </div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="bg-warning">
              <h4 className="m-3">د بورډ اپډیت کول</h4>
            </CCardHeader>
            <CCardBody className="mx-3 ">
              {/* Application form */}
              <div className="  border rounded mt-5 mb-5">
                <Formik
                  // onSubmit={newAppointment}
                  initialValues={{
                    purpose: "",
                    number_of_person: boardData.name,
                    number_of_board_member: boardData.number_of_board_member,
                    directorate: "",
                    introduced_by: "",
                    attachment: null,
                  }}
                  // validationSchema={newAppointmentValidationSchema}
                  enableReinitialize={true}
                >
                  {({
                    values,
                    setFieldValue,
                    setFieldTouched,
                    errors,
                    touched,
                  }) => (
                    <Form>
                      <CRow className="justify-content-center m-4">
                        {/* Subject/purpose of technical Board */}
                        <CCol md={6} className="mb-3">
                          <label className="form-label mx-3" htmlFor="subject">
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
                          <textarea
                            rows={4}
                            type="text"
                            id="number_of_person"
                            name="number_of_person"
                            style={{ direction: "rtl", textAlign: "right" }}
                            className={`form-control form-select-lg ${
                              errors.number_of_person &&
                              touched.number_of_person
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.number_of_person}
                            onChange={(e) =>
                              setFieldValue("number_of_person", e.target.value)
                            }
                            onBlur={() =>
                              setFieldTouched("number_of_person", true)
                            }
                          />
                          {errors.number_of_person &&
                          touched.number_of_person ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.number_of_person}
                            </div>
                          ) : null}
                        </CCol>
                        <CCol md={6} className="">
                          <label className="form-label mx-3" htmlFor="subject">
                            د فنی بورډ د غړو تعداد
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
                            id="number_of_board_member"
                            name="number_of_board_member"
                            style={{ direction: "rtl", textAlign: "right" }}
                            className={`form-control form-select-lg ${
                              errors.number_of_board_member &&
                              touched.number_of_board_member
                                ? "is-invalid form-select-lg    "
                                : ""
                            }`}
                            value={values.number_of_board_member}
                            onChange={(e) =>
                              setFieldValue(
                                "number_of_board_member",
                                e.target.value
                              )
                            }
                            onBlur={() =>
                              setFieldTouched("number_of_board_member", true)
                            }
                          />
                          {errors.number_of_board_member &&
                          touched.number_of_board_member ? (
                            <div className="invalid-feedback d-block errorMessageStyle mr-2">
                              {errors.number_of_board_member}
                            </div>
                          ) : null}
                        </CCol>
                      </CRow>
                      <CRow className="justify-content-center m-4">
                        <CCol className=" py-1 mx-3">
                          <label
                            className="form-label mt-2 mx- "
                            htmlFor="subject"
                            style={{ fontWeight: "bolder" }}
                          >
                            د بورد د اعتبار نیټه
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
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
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
                                  setFieldValue(
                                    "appointment_type",
                                    e.target.value
                                  )
                                }
                              >
                                <option disabled selected>
                                  میاشت
                                </option>

                                {monthsOptions.map((option) => {
                                  return (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
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
                                  setFieldValue(
                                    "appointment_type",
                                    e.target.value
                                  )
                                }
                                aria-label=".form-select example"
                              >
                                <option disabled selected>
                                  کال
                                </option>

                                {yearOptions.map((option) => {
                                  return (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
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

                      <CRow className="justify-content-end mx-5 mt-5 mb-5 d-flex">
                        <CCol md={5} className=" text-end  mx-5">
                          <CButton
                            type="submit"
                            className="btn-sm btn   px-5 py-2 mb-4 "
                            disabled={disableButton ? true : false}
                          >
                            اپډیټ
                          </CButton>
                        </CCol>
                      </CRow>
                    </Form>
                  )}
                </Formik>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UpdateTechnicalBoard;
