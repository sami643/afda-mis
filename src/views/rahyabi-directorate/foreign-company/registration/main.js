import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./company-registration-style.css";
import { CButton, CCard, CCardBody, CCardHeader, CCol } from "@coreui/react";
import { useState } from "react";
import { Steps } from "antd";
import { Provider } from "src/views/data/MultiStepFormContext";
import CompanyPrimaryDetails from "./company-details";
import OwnerDetials from "./company-owner";
import RepresentativeDetails from "./attachments";
import Reviews from "./registration-review";

const { Step } = Steps;

const ltdInitialState = {
  ltd_license_number: "",
  age: "",
  profession: "",
  appointment_type: "",
  introduced_by: "",
};

const ownerInitialState = {
  address1: "",
  address2: "",
  medicine_export_purpose: "",
};
const attachmentInitialState = {
  address1: "",
  address2: "",
  city: "",
  introduced_by: "",
  name_of_medicine: "",
  name: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <CompanyPrimaryDetails />;
    case 1:
      return <OwnerDetials />;
    case 2:
      return <RepresentativeDetails />;
    case 3:
      return <Reviews />;
    default:
      return null;
  }
};

const MainIncorporationRegistration = () => {
  const [companyDetails, setCompanyDetials] = useState(ltdInitialState);
  const [ownerDetails, setOwnerDetails] = useState(ownerInitialState);
  const [companyAttachments, setCompanyAttachments] = useState(
    attachmentInitialState
  );
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setCompanyDetials(ltdInitialState);
      setOwnerDetails(ownerInitialState);
      setCompanyAttachments(attachmentInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader className="bg-warning">
          <h4 className="mb-1 p-2">د کمپنۍ ثبت</h4>
        </CCardHeader>
        <CCardBody className="my-5 main-container ">
          <Provider
            value={{
              next,
              prev,
              companyDetails,
              setCompanyDetials,
              ownerDetails,
              setOwnerDetails,
              companyAttachments,
              setCompanyAttachments,
            }}
          >
            <Steps current={currentStep}>
              <Step title={"د کمپنۍ معلومات"} />
              <Step title={"د کمپنۍ د مالک معلومات"} />
              <Step title={"د کمپنۍ ثبت اسناد"} />
              <Step title={"تأیید او ثبت"} />
            </Steps>
            <main>{renderStep(currentStep)}</main>
          </Provider>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default MainIncorporationRegistration;
