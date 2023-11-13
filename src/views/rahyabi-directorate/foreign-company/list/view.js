import React from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CSpinner,
} from "@coreui/react";
import "./style.css";
import { Button, Card } from "antd";
import viewAttachments from "src/assets/images/viewAttachments.png";
import { useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  return (
    <CCard className="mb-4">
      <CCardBody className="mb-5 main-container ">
        <>
          <CRow>
            <CCol md={12}>
              <div className="  border rounded mt-5 mb-5 p-2">
                <CCardBody className="p-0 mx-0" style={{ minHeight: "200px" }}>
                  <>
                    <h4
                      className="px-3  py-2 rounded"
                      style={{ backgroundColor: "#00aae4" }}
                    >
                      د کمپنۍ په اړه معلومات
                    </h4>
                    <div className="my-3">
                      <CRow className="px-3 py-2 d-flex ">
                        <CCol md={2} className="">
                          <p className=" mb-1"> نوم:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="mx-2  bg-warning rounded p-1">
                            {/* {companyData?.name} */}
                            Dov Toshiba
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className=" m-0">د تأسیس نیټه:</p>
                        </CCol>
                        <CCol md={3}>
                          <strong className="m-0 p-0">
                            {/* {companyData?.tazkera_number} */}
                            04-06-1404
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">د جواز نمبر:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="mx-2">
                            {/* {companyData?.name} */}
                            90890
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className="mb-0">هیواد:</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.contact} */}
                            هندوستان
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3   d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0"> ایالت:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.father_name} */}
                            کلکټه
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className="">ولایت:</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.occupation} */}
                            ممبی
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">فکس نمبر:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            45455-h
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className=" mb-0">رسمی برښنالیک :</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.occupation} */}
                            gvi@gov.in
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">رسمی ویبسایټ:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            www.dov_cpm.com
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className=" mb-0">د اړیکې شمیره :</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.occupation} */}
                            078857451363
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">د اړیکې شمیره (2):</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            221321145654
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className=" mb-0">د تلفن شمیره :</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.occupation} */}
                            078857451363
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">په افغانستان کې د ثبت شمیره:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            4215
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className=" mb-0">د ادارې لخوا ورکړل شوی جواز :</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            <a
                              // href={`http://localhost:8000/${item.attachment}`}
                              target="_blank"
                            >
                              <img
                                src={viewAttachments}
                                width="30"
                                alt="Attachment"
                              />
                            </a>
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">نوټ:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            4215فثقصفقصثفصثفقثص
                          </strong>
                        </CCol>
                        {/* <div className="spacess"></div>
                    <CCol md={3} className="">
                      <p className=" mb-0">د ادارې لخوا ورکړل شوی جواز :</p>
                    </CCol>
                    <CCol md={3} className="">
                      <strong className="">
                        <a
                          // href={`http://localhost:8000/${item.attachment}`}
                          target="_blank"
                        >
                          <img
                            src={viewAttachments}
                            width="30"
                            alt="Attachment"
                          />
                        </a>
                      </strong>
                    </CCol> */}
                      </CRow>
                    </div>
                  </>
                </CCardBody>
              </div>
            </CCol>
            <CCol md={12}>
              <div className="  border rounded mt-1 mb-5 p-2 mx-0 ">
                <CCardBody className="p-0 mx-0" style={{ minHeight: "200px" }}>
                  <>
                    <h4
                      className="px-3 bg-warning py-2 rounded"
                      // style={{ backgroundColor: "#00aae4" }}
                    >
                      د کمپنۍ د مالک مشخصات
                    </h4>
                    <div className="my-3">
                      <CRow className="px-3 py-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-1">نوم:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong
                            className="mx-2 rounded p-1"
                            style={{ backgroundColor: "#00aae4" }}
                          >
                            {/* {companyData?.name} */}
                            عبدالصمد
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={2} className="">
                          <p className=" m-0">تخلص:</p>
                        </CCol>
                        <CCol md={4}>
                          <strong className="m-0 p-0">
                            {/* {companyData?.tazkera_number} */}
                            حامد
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">د زیږیدنې نیټه :</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="mx-2">
                            {/* {companyData?.name} */}2000-4-5
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={2} className="">
                          <p className="mb-0">برښنالیک:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.contact} */}
                            omar@gmail.com
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0"> د اړیکې شمیره:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.father_name} */}
                            0722212222
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={2} className="">
                          <p className=" mb-0">عکس:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.occupation} */}
                            <a
                              // href={`http://localhost:8000/${item.attachment}`}
                              target="_blank"
                            >
                              <img
                                src={viewAttachments}
                                width="30"
                                alt="Attachment"
                              />
                            </a>
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">نوټ</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.father_name} */}
                            40
                          </strong>
                        </CCol>
                        {/* <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" mb-0">سهم:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        1/2
                      </strong>
                    </CCol> */}
                      </CRow>
                    </div>
                  </>
                </CCardBody>
              </div>
            </CCol>
            <CCol md={12}>
              <div className="  border rounded mt-1 mb-5 p-2 mx-0 ">
                <CCardBody className="p-0 mx-0" style={{ minHeight: "150px" }}>
                  <>
                    <h4
                      className="px-3  py-2 rounded"
                      style={{ backgroundColor: "#00aae4" }}
                    >
                      د کمپنۍ د ثبت اسناد
                    </h4>
                    <div className="mt-3">
                      <CRow className="px-3 py-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-1"> ISO :</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong
                            className="mx-2 rounded p-1"
                            // style={{ backgroundColor: "#00aae4" }}
                          >
                            <a
                              // href={`http://localhost:8000/${item.attachment}`}
                              target="_blank"
                            >
                              <img
                                src={viewAttachments}
                                width="30"
                                alt="Attachment"
                              />
                            </a>
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={2} className="">
                          <p className=" m-0">د تولید جواز:</p>
                        </CCol>
                        <CCol md={4}>
                          <strong className="m-0 p-0">
                            <a
                              // href={`http://localhost:8000/${item.attachment}`}
                              target="_blank"
                            >
                              <img
                                src={viewAttachments}
                                width="30"
                                alt="Attachment"
                              />
                            </a>
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">GMP :</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="mx-2">
                            <a
                              // href={`http://localhost:8000/${item.attachment}`}
                              target="_blank"
                            >
                              <img
                                src={viewAttachments}
                                width="30"
                                alt="Attachment"
                              />
                            </a>
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={2} className="">
                          <p className="mb-0">د تورید جواز:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            <a
                              // href={`http://localhost:8000/${item.attachment}`}
                              target="_blank"
                            >
                              <img
                                src={viewAttachments}
                                width="30"
                                alt="Attachment"
                              />
                            </a>
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className="mb-0">Site Master File:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="mx-2">
                            <a
                              // href={`http://localhost:8000/${item.attachment}`}
                              target="_blank"
                            >
                              <img
                                src={viewAttachments}
                                width="30"
                                alt="Attachment"
                              />
                            </a>
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={2} className="">
                          <p className="mb-0">NMHRA Certificate:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            <a
                              // href={`http://localhost:8000/${item.attachment}`}
                              target="_blank"
                            >
                              <img
                                src={viewAttachments}
                                width="30"
                                alt="Attachment"
                              />
                            </a>
                          </strong>
                        </CCol>
                      </CRow>
                    </div>
                  </>
                </CCardBody>
              </div>
            </CCol>
          </CRow>

          <CRow className="justify-content-start mx-5 mt-5 mb-5 d-flex">
            <CCol md={5} className="  ">
              <CButton
                className="btn-sm btn   px-5 py-2 mb-4 "
                onClick={() => {
                  navigate("/rahyabi/foreign-company-list");
                }}
              >
                شاته
              </CButton>
            </CCol>
          </CRow>
        </>
      </CCardBody>
    </CCard>
  );
};

export default View;
