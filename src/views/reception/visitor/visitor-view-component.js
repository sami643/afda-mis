import React from "react";
import { CRow, CCol } from "@coreui/react";
let modalData = {};
const VisitorData = (props) => {
  modalData = props.data;
  console.log(" modalData. modalData", modalData);

  return (
    <div className="  border rounded mt-3 mb-2 mt-4 ">
      <h6 className="meetingview px-2 py-2 ">د لیدونکي په اړه مالومات</h6>
      <CRow md={12} className=" pt-3 px-3 px-3">
        <CCol md={7} className="d-flex">
          <CCol md={4} className="">
            <p className="">نوم:</p>
          </CCol>
          <CCol md={9} className="">
            {" "}
            <strong className="">{modalData?.visitor?.name}</strong>
          </CCol>
        </CCol>
        <CCol md={4} className="d-flex">
          <CCol md={8} className="">
            <p className="">د تذکرې شمیره:</p>
          </CCol>
          <CCol md={12}>
            {" "}
            <strong className="">{modalData?.visitor?.tazkera_number}</strong>
          </CCol>
        </CCol>
      </CRow>
      <CRow md={12} className="  px-3">
        <CCol md={7} className="d-flex">
          <CCol md={4} className="">
            <p className="">د پلار نوم:</p>
          </CCol>
          <CCol md={9} className="">
            {" "}
            <strong className="">{modalData?.visitor?.father_name}</strong>
          </CCol>
        </CCol>
        <CCol md={4} className="d-flex">
          <CCol md={8} className="">
            <p className="">د اړیکې شمیره:</p>
          </CCol>
          <CCol md={12} className="">
            {" "}
            <strong className=""> {modalData?.visitor?.contact}</strong>
          </CCol>
        </CCol>
      </CRow>
      <CRow md={12} className="  px-3">
        <CCol md={7} className="d-flex">
          <CCol md={4} className="">
            <p className="">برښنالیک:</p>
          </CCol>
          <CCol md={9} className="">
            {" "}
            <strong className=""> {modalData?.visitor?.email}</strong>
          </CCol>
        </CCol>
        <CCol md={4} className="d-flex">
          <CCol md={8} className="">
            <p className="">دنده:</p>
          </CCol>
          <CCol md={12} className="">
            {" "}
            <strong className=""> {modalData?.visitor?.occupation}</strong>
          </CCol>
        </CCol>
      </CRow>
      <CRow md={12} className="pb-3 px-3">
        <CCol md={7} className="d-flex">
          <CCol md={4} className="">
            <p className="">ولایت:</p>
          </CCol>
          <CCol md={9} className="">
            {" "}
            <strong className=""> {modalData?.visitor?.province}</strong>
          </CCol>
        </CCol>
      </CRow>
    </div>
  );
};

export default VisitorData;
