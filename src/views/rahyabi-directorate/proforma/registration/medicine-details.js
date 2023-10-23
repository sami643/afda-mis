import { Button, Col, Row } from "antd";
import React, { useContext, useState } from "react";
import MultiStepFormContext from "../../../data/MultiStepFormContext";
import { Formik, Form } from "formik";
import { Input, InputNumber } from "formik-antd";
import { medicineDetailsValidationSchema } from "../../../data/validation";
import "./proforma-register-style.css";
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
    proformaType,
    isLTDProfroma,
    isNGOProforma,

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
            <div class="table-wrapper">
              <table
                className="customers border mt-5  "
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
                      {proformaType.proformaType ===
                      "medical product proforma" ? (
                        <h3>د تورید کیدونکي صحي محصولاتو لست</h3>
                      ) : (
                        <h3>د تورید کیدونکي درملو لست</h3>
                      )}
                    </th>
                  </tr>
                  {proformaType.proformaType === "medical product proforma" ? (
                    <tr className="">
                      <th style={{ width: "1%", border: "1px solid #C0C0C0" }}>
                        شماره
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                        د محصول مشخصات
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                        مودل
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                        تولیدي کمپنۍ
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                        هیواد
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                        تعداد
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                        د فی واحد قیمت
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                        مجموعی قیمت
                      </th>
                    </tr>
                  ) : (
                    <tr className="">
                      <th style={{ width: "2%", border: "1px solid #C0C0C0" }}>
                        شمیره
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
                        د درملو نوم
                      </th>
                      <th style={{ width: "10%", border: "1px solid #C0C0C0" }}>
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
                  )}
                </thead>
                <tbody
                  style={{
                    width: "768px",
                  }}
                  className="table-wrapper"
                >
                  {totalNumberOfInputs.map((form, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <textarea
                          type="textarea"
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
                            minWidth: "70px",
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

                  <tr>
                    <td colSpan={7} className="text-center">
                      <h5>مجموعي قیمت</h5>
                    </td>
                    <td>
                      <b>2132$</b>
                    </td>
                  </tr>
                  {/* <tr>
                    <td colSpan={7} className="text-center">
                      <h5> متفرقه مصارف</h5>
                    </td>
                    <td>
                      <b>220$</b>
                    </td>
                  </tr> */}
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
