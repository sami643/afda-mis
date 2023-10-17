import React, { useContext, useState } from "react";
import MultiStepFormContext from "../../data/MultiStepFormContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Card } from "antd";
import { Input, InputNumber } from "formik-antd";
import {
  CButton,
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";

const IncorporationRegistrationReview = () => {
  const { ownerDetails, representativeDetails, LTDDetails, next, prev } =
    useContext(MultiStepFormContext);
  return (
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
                  د شرکت په اړه معلومات
                </h4>
                <div className="my-3">
                  <CRow className="px-3 py-2 d-flex ">
                    <CCol md={2} className="">
                      <p className=" mb-1">د شرکت نوم:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2  bg-warning rounded p-1">
                        {/* {companyData?.name} */}
                        عمر غزنی غفاری لیمیتید
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={3} className="">
                      <p className=" m-0">د تجارتي جواز د صدور نیټه:</p>
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
                      <p className=" mb-0">د شرکت د جواز نمبر:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}
                        90890
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={3} className="">
                      <p className="mb-0">TIN نمبر:</p>
                    </CCol>
                    <CCol md={3} className="">
                      <strong className="">
                        {/* {companyData?.contact} */}
                        5646546556656
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0"> پته:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.father_name} */}
                        هوتل پروان شمشاد مارکیټ
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={3} className="">
                      <p className="">ولایت:</p>
                    </CCol>
                    <CCol md={3} className="">
                      <strong className="">
                        {/* {companyData?.occupation} */}
                        کابل
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0">برښنالیک:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.email} */}
                        parviz@farma.gov.af
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={3} className="">
                      <p className=" mb-0">د ویبسایټ لینک:</p>
                    </CCol>
                    <CCol md={3} className="">
                      <strong className="">
                        {/* {companyData?.occupation} */}
                        ghafari.frama.com
                      </strong>
                    </CCol>
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
                  د شرکت د رئیس مشخصات
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
                      <p className=" mb-0">د پلار نوم :</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}عبدالله
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className="mb-0">د نیکه نوم:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.contact} */}
                        عمر
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0"> د تذکرې شمیره:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.father_name} */}
                        00924654654656
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" mb-0">جنیست:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.occupation} */}
                        نارینه
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0"> د زدکړو کچه:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.father_name} */}
                        لسانس
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" mb-0">سهم:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.occupation} */}
                        1/2
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
                        0786455556
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" mb-0">هیواد:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.occupation} */}
                        افغانستان
                      </strong>
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
                  دفنی مسؤل مشخصات
                </h4>
                <div className="mt-3">
                  <CRow className="px-3 py-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-1"> نوم :</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong
                        className="mx-2 rounded p-1"
                        // style={{ backgroundColor: "#00aae4" }}
                      >
                        {/* {companyData?.name} */}
                        احمد
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" m-0">تخلص:</p>
                    </CCol>
                    <CCol md={4}>
                      <strong className="m-0 p-0">
                        {/* {companyData?.tazkera_number} */}
                        علی
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0">د پلار نوم :</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}
                        عبدالله
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className="mb-0">د تذکرې شمیره:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.contact} */}۲۳۴۲۳۴
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className="mb-0">د قرارداد د عقد نیټه:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}
                        {/* {companyData?.contact} */}1401-12-3
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className="mb-0">د قرارداد د ختمیدو نیټه:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.contact} */}1401-12-3
                      </strong>
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
                  className="px-3 bg-warning py-2 rounded"
                  // style={{ backgroundColor: "#00aae4" }}
                >
                  د شرکت د نماینده مشخصات
                </h4>
                <div className="mt-3">
                  <CRow className="px-3 py-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-1">نوم:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong
                        className="mx-2 rounded p-1"
                        // style={{ backgroundColor: "#00aae4" }}
                      >
                        {/* {companyData?.name} */}
                        صمیم
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" m-0">تخلص:</p>
                    </CCol>
                    <CCol md={4}>
                      <strong className="m-0 p-0">
                        {/* {companyData?.tazkera_number} */}
                        جاوید
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0">د تذکرې شمیره :</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}
                        132132132
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className="mb-0">د اړیکې شمیره:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.contact} */}07775654654
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0">ایمیل آدرس :</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}
                        ahmad@gmail.com
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className="mb-0"> د کارت شمیره:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.contact} */}07775654654
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0">موقف په شرکت کې :</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}
                      ادارې کارمند
                      </strong>
                    </CCol>
                    {/* <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className="mb-0"> د کارت شمیره:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        07775654654
                      </strong>
                    </CCol> */}
                  </CRow>
                </div>
              </>
            </CCardBody>
          </div>
        </CCol>
      </CRow>

      <div
        className={"form__item button__items d-flex justify-content-between"}
      >
        <Button type={"default"} onClick={prev}>
          شاته
        </Button>
        <CButton
          type="submit"
          className="btn-sm btn   px-4 py-2  "
          onClick={() => next()}
        >
          ثبت
        </CButton>
      </div>
    </>
  );
};

export default IncorporationRegistrationReview;
