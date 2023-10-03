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
  // ... (other parts of your code)
  const { medicineDetails, setMedicineDetails, next, prev } =
    useContext(MultiStepFormContext);
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index] = { ...data[index], [event.target.name]: event.target.value };
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
      age: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

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
        <div className={"details__wrapper my-5"}>
          <CRow className="mb-5 ">
            <CCol md={12} className="mb-5">
              <table class="table table-striped border mt-5 ">
                <thead className="">
                  <tr >
                    <th
                      colSpan="9"
                      style={{ backgroundColor: "#00aae4" }}
                      className="p-3"
                    >
                      <h3>د تورید کیدونکي درملو لست</h3>
                    </th>
                  </tr>
                  <tr>
                    <th style={{ width: "1%", border: "1px solid gray" }}>
                      شمیره
                    </th>
                    <th style={{ width: "10%", border: "1px solid gray" }}>
                      د درملو نوم
                    </th>
                    <th style={{ width: "5%", border: "1px solid gray" }}>
                      شکل
                    </th>
                    <th style={{ width: "10%", border: "1px solid gray" }}>
                      واحد
                    </th>
                    <th style={{ width: "10%", border: "1px solid gray" }}>
                      مقدار فی واحد
                    </th>
                    <th style={{ width: "10%", border: "1px solid gray" }}>
                      تعداد واحد
                    </th>
                    <th style={{ width: "10%", border: "1px solid gray" }}>
                      قیمت فی واحد
                    </th>
                    <th style={{ width: "10%", border: "1px solid gray" }}>
                      قیمت مجموعی
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formFields.map((form, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          style={{ width: "100%" }}
                          name="age"
                          // placeholder="Age"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.age || ""}
                        />
                      </td>

                      <td>
                        <input
                          style={{ width: "100%" }}
                          name="unit"
                          // placeholder="Unit"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.unit || ""}
                        />
                      </td>
                      <td>
                        <input
                          style={{ width: "100%" }}
                          name="type"
                          // placeholder="Type"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.type || ""}
                        />
                      </td>
                      <td>
                        <input
                          style={{ width: "100%" }}
                          name="form"
                          // placeholder="Form"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.form || ""}
                        />
                      </td>
                      <td>
                        <input
                          style={{ width: "100%" }}
                          name="amountOfUnit"
                          // placeholder="Amount of Unit"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.amountOfUnit || ""}
                        />
                      </td>
                      <td>
                        <input
                          style={{ width: "100%" }}
                          name="price"
                          // placeholder="Price"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.price || ""}
                        />
                      </td>
                      <td>
                        <button onClick={() => removeFields(index)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CCol>
          </CRow>

          <button onClick={addFields}>Add More</button>
          <br />
          <button onClick={submit}>Submit</button>
        </div>
        {/* ... (rest of your Formik component) */}
      </Formik>
      <div
        className={"form__item button__items d-flex justify-content-between"}
      >
        <Button type={"default"} onClick={prev}>
          شاته
        </Button>
        <CButton type="submit" className="btn-sm btn px-4 py-2" onClick={next}>
          مخته
        </CButton>
      </div>
    </>
  );
};

export default MedicineDetailsFunc;
