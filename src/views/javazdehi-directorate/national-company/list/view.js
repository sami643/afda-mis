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
import PhtoUpload from "src/assets/images/photoUpload.png";

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
                      د فابریکې په اړه معلومات
                    </h4>
                    <div className="my-3">
                      <CRow className="px-3 py-2 d-flex ">
                        <CCol md={2} className="">
                          <p className=" mb-1"> نوم:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="mx-2  bg-warning rounded p-1">
                            {/* {companyData?.name} */}
                            افغان فارما کمپنی
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className=" m-0"> انګریزی نوم:</p>
                        </CCol>
                        <CCol md={3}>
                          <strong className="m-0 p-0">
                            {/* {companyData?.tazkera_number} */}
                            Afghan Pharma Factory
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
                          <p className="mb-0">ولایت:</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.contact} */}
                            کابل
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3   d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0"> ناحیه/ ولسوالۍ:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.father_name} */}
                            اوومه ناحیه
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className="">منطقه/سیمه:</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.occupation} */}
                            واصل آباد
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
                          <p className=" mb-0">د مبایل شمیره :</p>
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
                          <p className=" mb-0">د مبایل شمیره (2):</p>
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
                          <p className=" mb-0">د تاسیس نیټه:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            4215
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className=" mb-0">open policy :</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            لري
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">ابتدایی بودیجه په افغانیو:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            4215
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={3} className="">
                          <p className=" mb-0">د تولیدی اقلامو ډول :</p>
                        </CCol>
                        <CCol md={3} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            شربت + تابلیت
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">ملاحظات:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.email} */}
                            تر کنترول لاندی
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
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
                      د فابریکې د مالک مشخصات
                    </h4>
                    <div className="my-3">
                      <CRow className="px-3 py-4  d-flex">
                        <CCol md={2} className="">
                          <img src={PhtoUpload} width={100} />
                        </CCol>
                      </CRow>

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
                          <p className=" mb-0">پته:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            دهن باغ ، اوومه ناحیه، کابل، افغانستان
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">ملاحظات</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.father_name} */}
                            40
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
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
                      className="px-3 py-2 rounded"
                      style={{ backgroundColor: "#00aae4" }}
                    >
                      د فابریکې د نماینده مشخصات
                    </h4>
                    <div className="my-3">
                      <CRow className="px-3 py-4  d-flex">
                        <CCol md={2} className="">
                          <img src={PhtoUpload} width={100} />
                        </CCol>
                      </CRow>

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
                          <p className=" mb-0">پته:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            دهن باغ ، اوومه ناحیه، کابل، افغانستان
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0">ملاحظات</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.father_name} */}
                            40
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
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
                      className="px-3 py-2 bg-warning rounded"
                      //   style={{ backgroundColor: "#00aae4" }}
                    >
                      د فابریکې د فني مسؤل مشخصات
                    </h4>
                    <div className="my-3">
                      <CRow className="px-3 py-4  d-flex">
                        <CCol md={2} className="">
                          <img src={PhtoUpload} width={100} />
                        </CCol>
                      </CRow>

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
                          <p className=" mb-0">پته:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            دهن باغ ، اوومه ناحیه، کابل، افغانستان
                          </strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0"> د قرارداد د عقد نیټه:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.father_name} */}
                            2023-8-5
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={2} className="">
                          <p className=" mb-0">د قرارداد د پای نیټه:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">2025-5-8</strong>
                        </CCol>
                      </CRow>
                      <CRow className="px-3 pb-2  d-flex">
                        <CCol md={2} className="">
                          <p className=" mb-0"> په فابریکه کې بست:</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">
                            {/* {companyData?.father_name} */}
                            مدیر محاسبه
                          </strong>
                        </CCol>
                        <div className="spacess"></div>
                        <CCol md={2} className="">
                          <p className=" mb-0">ملاحظات</p>
                        </CCol>
                        <CCol md={4} className="">
                          <strong className="">ملاحظات نه لري</strong>
                        </CCol>
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
                      د فابریکې د ثبت اسناد
                    </h4>
                    <div className="mt-3">
                      <CRow className="px-3 py-2  d-flex">
                        <CCol md={3} className="">
                          <p className=" mb-0">د ادارې لخوا ورکړل شوی جواز :</p>
                        </CCol>
                        <CCol md={2} className="">
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
                        <CCol md={3} className="">
                          <p className=" m-0">د تکس بل:</p>
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
                        <CCol md={3} className="">
                          <p className=" mb-0">د مالک تذکره :</p>
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
                  navigate("/javazdehi/national-company-list");
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
