import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { Input, InputNumber } from "formik-antd";
import { Formik } from "formik";

const MedicineDetails = () => {
  const { details, setDetails, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.age) errors.age = "Age is required";
        if (values.age > 90) errors.age = "Are you sure you're human?";
        if (!values.profession) errors.profession = "Profession is required";
        if (/^[0-9]+$/.test(values.profession))
          errors.profession =
            "Profession does not require numbers or special characters";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.name && "input__error"}`}>
              <label>Name *</label>
              <Input name={"name"} />
              <p className={"error__feedback"}>{errors.name}</p>
            </div>
            <div className={`form__item ${errors.age && "input__error"}`}>
              <label>Age *</label>
              <InputNumber name={"age"} min={0} />
              <p className={"error__feedback"}>{errors.age}</p>
            </div>
            <div
              className={`form__item ${errors.profession && "input__error"}`}
            >
              <label>Profession *</label>
              <Input name={"profession"} />
              <p className={"error__feedback"}>{errors.profession}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                شاته
              </Button>
              <Button type={"primary"} onClick={next}>
                مخته
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default MedicineDetails;
