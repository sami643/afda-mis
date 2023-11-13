import React, { useState } from "react";
import { CCardBody, CCard, CCardHeader, CRow, CCol } from "@coreui/react";
import CrossIcon from "src/assets/images/1200px-Flat_cross_icon.svg.png";
import TicIcon from "src/assets/images/tic_icon.png";
import Arrow from "src/assets/images/arrow.png";

const Steps = () => {
  const [step, setStep] = useState(3);
  const [active, setActiveStep] = useState(3);
  return (
    <CRow className="justify-content-center border rounded py-3 mx-5">
      {step === 1 ? (
        <CCol
          md={2}
          className="p-2  border rounded text-center"
          style={{ backgroundColor: active === 1 ? "#80cbc4" : "#a7ffeb" }}
        >
          <h5>مشخصات</h5>
          <img src={CrossIcon} width={30} />
        </CCol>
      ) : (
        <CCol
          md={2}
          className="p-2  border rounded text-center "
          style={{ backgroundColor: "#a7ffeb" }}
        >
          <h5>مشخصات</h5>
          <img src={TicIcon} width={30} />
        </CCol>
      )}

      <CCol className=" text-center arrow_div" style={{ maxWidth: "55px" }}>
        <img src={Arrow} width={20} className="" />
      </CCol>
      {step === 2 ? (
        <CCol
          md={2}
          className="p-2  border rounded text-center "
          style={{ backgroundColor: active === 2 ? "#80cbc4" : "#a7ffeb" }}
        >
          <h5>د فابریکې پته</h5>
          <img src={CrossIcon} width={30} />
        </CCol>
      ) : (
        <CCol
          md={2}
          className="p-2  border rounded text-center "
          style={{ backgroundColor: "#a7ffeb" }}
        >
          <h5>د فابریکې پته</h5>
          <img src={TicIcon} width={30} />
        </CCol>
      )}
      <CCol className=" arrow_div " style={{ maxWidth: "55px" }}>
        <img src={Arrow} width={20} className="" />
      </CCol>
      {active <= 3 ? (
        <CCol
          md={2}
          className="p-2  border rounded text-center "
          style={{ backgroundColor: active === 3 ? "#80cbc4" : "#a7ffeb" }}
        >
          <h5>د مالک مشخصات</h5>
          <img src={CrossIcon} width={30} />
        </CCol>
      ) : (
        <CCol
          md={2}
          className="p-2 border rounded text-center "
          style={{ backgroundColor: "#a7ffeb" }}
        >
          <h5>د مالک مشخصات</h5>
          <img src={TicIcon} width={30} />
        </CCol>
      )}
      <CCol className="arrow_div " style={{ maxWidth: "55px" }}>
        <img src={Arrow} width={20} className="" />
      </CCol>
      {active <= 4 ? (
        <CCol
          md={2}
          className="p-2  border rounded text-center "
          style={{ backgroundColor: active === 4 ? "#80cbc4" : "#a7ffeb" }}
        >
          <h5>نماینده مشخصات</h5>
          <img src={CrossIcon} width={30} />
        </CCol>
      ) : (
        <CCol
          md={2}
          className="p-2  border rounded text-center "
          style={{ backgroundColor: "#a7ffeb" }}
        >
          <h5>نماینده مشخصات</h5>
          <img src={TicIcon} width={30} />
        </CCol>
      )}
    </CRow>
  );
};

export default Steps;
