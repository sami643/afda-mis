import React from "react";
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
import { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import LtdInfo from "./ltd-info";
import CompanyDetails from "./company-details";
import MedicineDetails from "./medicine-details";
import Reviews from "./form-review";

const { Step } = Steps;

const detailsInitialState = {
  ltd_license_number: "",
  age: "",
  profession: "",
  appointment_type: "",
};

const addressInitialState = {
  address1: "",
  address2: "",
  city: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <LtdInfo />;
    case 1:
      return <CompanyDetails />;
    case 2:
      return <MedicineDetails />;
    case 3:
      return <Reviews />;
    default:
      return null;
  }
};

const ProformaRegistration = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h4 className="mb-1">د پروفورمې ثبت</h4>
          </CCardHeader>
          <CCardBody className="m-5 ">
            <Provider
              value={{ details, setDetails, next, prev, address, setAddress }}
            >
              <Steps current={currentStep}>
                <Step title={"د شرکت معلومات"} />
                <Step title={"د کمپنی معلومات"} />
                <Step title={"د درملو معلومات"} />
                <Step title={"تأیید او ثبت"} />
              </Steps>
              <main>{renderStep(currentStep)}</main>
            </Provider>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ProformaRegistration;
