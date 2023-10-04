import { Button, Col, Row } from "antd";
import React, { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { Formik, Form } from "formik";
import { Input, InputNumber } from "formik-antd";
import { medicineDetailsValidationSchema } from "../data/validation";

import {
  CButton,
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";

const MedicineDetailsFunc = () => {
  const {
    medicineDetails,
    setMedicineDetails,
    incorporationDetails,
    next,
    prev,
  } = useContext(MultiStepFormContext);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index] = { ...data[index], [event.target.name]: event.target.value };
    setFormFields(data);
  };

  const x = incorporationDetails.number_of_total_items;
  let totalNumberOfInputs = [];
  for (let i = 0; i < x; i++) {
    totalNumberOfInputs.push(i + 1);
  }

  return (
    <>
      <Formik
        initialValues={medicineDetails}
        onSubmit={(values) => {
          setMedicineDetails(values);
          next();
        }}
        validationSchema={medicineDetailsValidationSchema}
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
              <table
                className="table table-striped border mt-5  "
                style={{ minWidth: "500px" }}
              >
                <thead className="">
                  <tr className="">
                    <th
                      colSpan="9"
                      style={{
                        backgroundColor: "#00aae4",
                        border: "1px solid #C0C0C0",
                      }}
                      className="px-3 py-2"
                    >
                      <h3>د تورید کیدونکي درملو لست</h3>
                    </th>
                  </tr>
                  <tr className="">
                    <th style={{ width: "1%", border: "1px solid #C0C0C0" }}>
                      شمیره
                    </th>
                    <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                      د درملو نوم
                    </th>
                    <th style={{ width: "5%", border: "1px solid #C0C0C0" }}>
                      شکل
                    </th>
                    <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                      واحد
                    </th>
                    <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                      مقدار فی واحد
                    </th>
                    <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                      تعداد واحد
                    </th>
                    <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                      قیمت فی واحد
                    </th>
                    <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                      قیمت مجموعی
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    width: "768px",
                  }}
                  className="tableBody"
                >
                  {totalNumberOfInputs.map((form, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="text"
                          id="number_of_person"
                          name="number_of_person"
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                            minWidth: "280px",
                          }}
                          className={`form-control form-select- ${
                            errors.number_of_person && touched.number_of_person
                              ? "is-invalid form-select-    "
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
                        {errors.number_of_person && touched.number_of_person ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.number_of_person}
                          </div>
                        ) : null}
                      </td>

                      <td>
                        <input
                          type="text"
                          id="number_of_person"
                          name="number_of_person"
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                            minWidth: "80px",
                          }}
                          className={`form-control form-select- ${
                            errors.number_of_person && touched.number_of_person
                              ? "is-invalid form-select-    "
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
                        {errors.number_of_person && touched.number_of_person ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.number_of_person}
                          </div>
                        ) : null}
                      </td>
                      <td>
                        <input
                          type="text"
                          id="number_of_person"
                          name="number_of_person"
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                            minWidth: "80px",
                          }}
                          className={`form-control form-select-g ${
                            errors.number_of_person && touched.number_of_person
                              ? "is-invalid form-select-    "
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
                        {errors.number_of_person && touched.number_of_person ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.number_of_person}
                          </div>
                        ) : null}
                      </td>
                      <td>
                        <input
                          type="text"
                          id="number_of_person"
                          name="number_of_person"
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                            minWidth: "0px",
                          }}
                          className={`form-control form-select-l ${
                            errors.number_of_person && touched.number_of_person
                              ? "is-invalid form-select-    "
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
                        {errors.number_of_person && touched.number_of_person ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.number_of_person}
                          </div>
                        ) : null}
                      </td>
                      <td>
                        <input
                          type="number"
                          id="number_of_person"
                          name="number_of_person"
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                            minWidth: "60px",
                          }}
                          className={`form-control form-select-l ${
                            errors.number_of_person && touched.number_of_person
                              ? "is-invalid form-select-    "
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
                        {errors.number_of_person && touched.number_of_person ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.number_of_person}
                          </div>
                        ) : null}
                      </td>
                      <td>
                        <input
                          type="number"
                          id="number_of_person"
                          name="number_of_person"
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                            minWidth: "60px",
                          }}
                          className={`form-control form-select-l ${
                            errors.number_of_person && touched.number_of_person
                              ? "is-invalid form-select-    "
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
                        {errors.number_of_person && touched.number_of_person ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.number_of_person}
                          </div>
                        ) : null}
                      </td>

                      <td>
                        <input
                          type="number"
                          id="number_of_person"
                          name="number_of_person"
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                            minWidth: "80px",
                          }}
                          className={`form-control form-select-l ${
                            errors.number_of_person && touched.number_of_person
                              ? "is-invalid form-select-    "
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
                        {errors.number_of_person && touched.number_of_person ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.number_of_person}
                          </div>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                className="btn-sm btn px-4 py-2"
                onClick={next}
              >
                مخته
              </CButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MedicineDetailsFunc;
