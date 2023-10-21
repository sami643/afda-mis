import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./incorporation-registration-style.css";
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
import { Provider } from "../../data/MultiStepFormContext";
import LtdInfo from "./incorporation-details";
import OwnerDetials from "./incorporation-owner";
import RepresentativeDetails from "./technical&representator-registration";
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
const representativeInitialState = {
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
      return <LtdInfo />;
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
  const [LTDDetails, setLTDDetails] = useState(ltdInitialState);
  const [ownerDetails, setOwnerDetails] = useState(ownerInitialState);
  const [representativeDetails, setRepresentativeDetails] = useState(
    representativeInitialState
  );
  // const [isLTDProfroma, setIsLTDProforma] = useState(false);
  // const [isNGOProforma, setIsNGOProforma] = useState(false);
  // const [isCompanyProforma, setIsCompanyProforma] = useState(false);
  // const [proformaType, setProformaType] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setLTDDetails(ltdInitialState);
      setOwnerDetails(ownerInitialState);
      setRepresentativeDetails(representativeInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader className="bg-warning">
          <h4 className="mb-1 p-2">د شرکت ثبت</h4>
        </CCardHeader>
        <CCardBody className="my-5 main-container ">
          <Provider
            value={{
              next,
              prev,
              LTDDetails,
              setLTDDetails,
              ownerDetails,
              setOwnerDetails,
              representativeDetails,
              setRepresentativeDetails,
              // setIsCompanyProforma,
              // isCompanyProforma,
              // setProformaType,
              // proformaType,
              // isLTDProfroma,
              // setIsLTDProforma,
              // isNGOProforma,
              // setIsNGOProforma,
            }}
          >
            <Steps current={currentStep}>
              <Step title={"د شرکت معلومات"} />
              <Step title={"د شرکت د رئیس معلومات"} />
              <Step title={"د نماینده او فنی مسؤل معلومات"} />
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
