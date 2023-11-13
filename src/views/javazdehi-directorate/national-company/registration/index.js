import React, { useState } from "react";
import CompanyDetails from "./company-details";
import CompanyOnwner from "./company-owner";
import CompanyContactAndAddress from "./company-contact&address";
import CompanyRepresenterAndTechnicalManager from "./company-representer&technical-manager";
import { CCardBody, CCard, CRow, CCol, CButton } from "@coreui/react";
import Steps from "./steps";
import { Button, Card } from "antd";
import "./style.css";

const NationalCompanyRegister = () => {
  const [active, setActiveStep] = useState(3);
  return (
    <CCard>
      <h4 className="p-3 bg-warning">د داخلي فابریکې ثبت</h4>
      <CCardBody>
        {/* Steps Header */}
        <Steps />

        <CRow className="justify-content-center my-5  border rounded main_container">
          {active === 1 && <CompanyDetails />}
          {active === 2 && <CompanyContactAndAddress />}
          {active === 3 && <CompanyOnwner />}
          {active === 4 && <CompanyRepresenterAndTechnicalManager />}
        </CRow>
        <div
          className={
            "form__item button__items d-flex justify-content-between m-5"
          }
        >
          <Button type={"default"} className="mx-2">
            شاته
          </Button>
          <CButton type="submit" className="btn-sm btn   px-4 py-2 mx-2 ">
            مخته
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default NationalCompanyRegister;
