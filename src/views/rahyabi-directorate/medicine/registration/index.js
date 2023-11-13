import React, { useState } from "react";
import CompanyDetails from "./company-details";
import CompanyOnwner from "./company-owner";
import CompanyContactAndAddress from "./company-contact&address";
import CompanyRepresenterAndTechnicalManager from "./company-representer&technical-manager";
import Attachment from "./attachment";
import { CCardBody, CCard, CRow, CCol, CButton } from "@coreui/react";
import CrossIcon from "src/assets/images/1200px-Flat_cross_icon.svg.png";
import TicIcon from "src/assets/images/tic_icon.png";
import Arrow from "src/assets/images/arrow.png";
import { Button, Card } from "antd";
import "./style.css";

const NationalCompanyRegister = () => {
  const [step, setStep] = useState(1);
  const [active, setActiveStep] = useState(1);

  const handleStepsBack = () => {
    active !== 1 ? setActiveStep(active - 1) : null;
    active !== 1 ? setStep(step - 1) : null;
  };
  const handleStepsNext = () => {
    active !== 5 ? setActiveStep(active + 1) : null;
    active !== 5 ? setStep(step + 1) : null;
  };
  return (
    <CCard>
      <h4 className="p-3 bg-warning">د توریدي درملو ثبت </h4>
      <CCardBody>
        {/* Steps Header */}
        <CRow className="justify-content-center border rounded py-3 mx-5 px-3">
          {step === 1 ? (
            <CCol
              md={2}
              className="p-2  border rounded text-center "
              style={{
                backgroundColor: active === 1 ? "#80cbc4" : "#a7ffeb",
              }}
            >
              <h6>مشخصات</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2  border rounded text-center "
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>مشخصات</h6>
              <img src={TicIcon} width={25} />
            </CCol>
          )}

          <CCol className=" text-center arrow_div" style={{ maxWidth: "55px" }}>
            <img src={Arrow} width={20} className="" />
          </CCol>
          {step <= 2 ? (
            <CCol
              md={2}
              className="p-2  border rounded text-center processheader"
              style={{ backgroundColor: active === 2 ? "#80cbc4" : "#a7ffeb" }}
            >
              <h6>د فابریکې پته</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2  border rounded text-center processheader"
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>د فابریکې پته</h6>
              <img src={TicIcon} width={25} />
            </CCol>
          )}
          <CCol className=" arrow_div " style={{ maxWidth: "55px" }}>
            <img src={Arrow} width={20} className="" />
          </CCol>
          {active <= 3 ? (
            <CCol
              md={2}
              className="p-2  border rounded text-center processheader"
              style={{ backgroundColor: active === 3 ? "#80cbc4" : "#a7ffeb" }}
            >
              <h6>د مالک مشخصات</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2 border rounded text-center processheader "
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>د مالک مشخصات</h6>
              <img src={TicIcon} width={25} />
            </CCol>
          )}
          <CCol className="arrow_div " style={{ maxWidth: "55px" }}>
            <img src={Arrow} width={20} className="" />
          </CCol>
          {active <= 4 ? (
            <CCol
              md={2}
              className="p-2  border rounded text-center processheader "
              style={{ backgroundColor: active === 4 ? "#80cbc4" : "#a7ffeb" }}
            >
              <h6>نماینده مشخصات</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2  border rounded text-center  processheader"
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>نماینده مشخصات</h6>
              <img src={TicIcon} width={25} />
            </CCol>
          )}
          <CCol className="arrow_div " style={{ maxWidth: "55px" }}>
            <img src={Arrow} width={20} className="" />
          </CCol>
          {active <= 5 ? (
            <CCol
              md={2}
              className="p-2  border rounded text-center processheader "
              style={{ backgroundColor: active === 5 ? "#80cbc4" : "#a7ffeb" }}
            >
              <h6>ضمیمه</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2  border rounded text-center processheader "
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>ضمیمه</h6>
              <img src={TicIcon} width={25} />
            </CCol>
          )}
        </CRow>
        {/* Components */}
        <CRow className="justify-content-center my-5  border rounded main_container">
          {active === 1 && <CompanyDetails />}
          {active === 2 && <CompanyContactAndAddress />}
          {active === 3 && <CompanyOnwner />}
          {active === 4 && <CompanyRepresenterAndTechnicalManager />}
          {active === 5 && <Attachment />}
        </CRow>
        <div
          className={
            "form__item button__items d-flex justify-content-between m-5"
          }
        >
          <Button type={"default"} className="mx-2" onClick={handleStepsBack}>
            شاته
          </Button>

          <CButton
            type="submit"
            className="btn-sm btn   px-4 py-2 mx-2 "
            onClick={handleStepsNext}
          >
            {active === 5 ? "ثبت" : "مخته"}
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default NationalCompanyRegister;
