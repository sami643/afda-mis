import React, { useContext, useState } from "react";
import MultiStepFormContext from "../../data/MultiStepFormContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Card } from "antd";
import { Input, InputNumber } from "formik-antd";
import {
  CButton,
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";

const IncorporationRegistrationReview = () => {
  const { ownerDetails, representativeDetails, LTDDetails, next, prev } =
    useContext(MultiStepFormContext);
  return (
    <div>
      IncorporationRegistrationReview
      <div
        className={"form__item button__items d-flex justify-content-between"}
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
  );
};

export default IncorporationRegistrationReview;
