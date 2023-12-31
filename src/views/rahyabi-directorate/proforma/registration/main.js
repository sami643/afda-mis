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
import { Provider } from "../../../data/MultiStepFormContext";
import LtdInfo from "./incorpporation-info";
import CompanyDetails from "./company-details";
import MedicineDetails from "./medicine-details";
import Reviews from "./form-review";

const { Step } = Steps;

const ltdInitialState = {
  ltd_license_number: "",
  age: "",
  profession: "",
  appointment_type: "",
  introduced_by: "",
};

const companyInitialState = {
  address1: "",
  address2: "",
  medicine_export_purpose: "",
};
const medicineInitialState = {
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
  const [incorporationDetails, setIncorporationDetails] =
    useState(ltdInitialState);
  const [companyDetails, setCompanyDetails] = useState(companyInitialState);
  const [medicineDetails, setMedicineDetails] = useState(medicineInitialState);
  const [isLTDProfroma, setIsLTDProforma] = useState(false);
  const [isNGOProforma, setIsNGOProforma] = useState(false);
  const [isCompanyProforma, setIsCompanyProforma] = useState(false);
  const [proformaType, setProformaType] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setIncorporationDetails(ltdInitialState);
      setCompanyDetails(companyInitialState);
      setMedicineDetails(medicineInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="bg-warning">
            <h4 className="mb-1 p-2">د پروفورمې ثبت</h4>
          </CCardHeader>
          <CCardBody className="m-5 ">
            <Provider
              value={{
                incorporationDetails,
                setIncorporationDetails,
                next,
                prev,
                companyDetails,
                setCompanyDetails,
                setIsCompanyProforma,
                isCompanyProforma,
                medicineDetails,
                setMedicineDetails,
                setProformaType,
                proformaType,
                isLTDProfroma,
                setIsLTDProforma,
                isNGOProforma,
                setIsNGOProforma,
              }}
            >
              <Steps current={currentStep}>
                <Step title={"د تورید کونکي معلومات"} />
                <Step title={"د بهرنۍ کمپنی معلومات"} />
                <Step title={"د درملو/صحی محصولاتو معلومات"} />
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
