import React, { useState } from "react";
import ProductDetails from "./product-details";
import ActiveComsumner from "./active-consumer";
import CompanyContactAndAddress from "./formulation&packaging";
import Ingrediants from "./ingrediants";
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
    setActiveStep(active - 1);
    setStep(step - 1);
  };
  const handleStepsNext = (dataFromChild) => {
    active !== 5 ? setActiveStep(dataFromChild.step + 1) : null;
    active !== 5 ? setStep(dataFromChild.step + 1) : null;
  };
  return (
    <CCard className="mb-5">
      <h4 className="p-3 bg-warning">د توریدي درملو ثبت</h4>
      <CCardBody>
        {/* Steps Header */}
        <CRow className="justify-content-center border rounded py-3  mx-5 px-3">
          {step === 1 ? (
            <CCol
              md={2}
              className="p-2  border rounded text-center "
              style={{
                backgroundColor: active === 1 ? "#80cbc4" : "#a7ffeb",
              }}
            >
              <h6>د درملو مشخصات</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2  border rounded text-center "
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>د درملو مشخصات</h6>
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
              <h6>فارمولیشن او پکیجنګ</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2  border rounded text-center processheader"
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>فارمولیشن او پکیجنګ</h6>
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
              <h6>Ingrediants</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2 border rounded text-center processheader "
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>Ingrediants</h6>
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
              <h6>Consumers</h6>
              <img src={CrossIcon} width={25} />
            </CCol>
          ) : (
            <CCol
              md={2}
              className="p-2  border rounded text-center  processheader"
              style={{ backgroundColor: "#a7ffeb" }}
            >
              <h6>Consumers</h6>
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
        <CRow className="justify-content-center  border rounded main_container">
          {active === 1 && (
            <ProductDetails
              onFormSubmit={handleStepsNext}
              onStepBack={handleStepsBack}
            />
          )}
          {active === 2 && (
            <CompanyContactAndAddress
              onFormSubmit={handleStepsNext}
              onStepBack={handleStepsBack}
            />
          )}
          {active === 3 && (
            <Ingrediants
              onFormSubmit={handleStepsNext}
              onStepBack={handleStepsBack}
            />
          )}
          {active === 4 && (
            <ActiveComsumner
              onFormSubmit={handleStepsNext}
              onStepBack={handleStepsBack}
            />
          )}
          {active === 5 && (
            <Attachment
              onFormSubmit={handleStepsNext}
              onStepBack={handleStepsBack}
            />
          )}
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default NationalCompanyRegister;
