import { Col, Row } from "antd";
import React, { useContext, useState, useEffect, useRef } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import "datatables.net-bs4";
import { Button, Modal } from "antd";
import $ from "jquery";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
// import pashtolang from "./../data/pashto.json";

import "./../../data/views.css";
import {
  CButton,
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CSpinner,
} from "@coreui/react";

const Review = () => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentModalData, setAppointmentModalData] = useState({});

  const showModal = (item) => {
    setIsModalOpen(true);
    setAppointmentModalData(item);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    next();
  };

  // useEffect(() => {
  //   const dataTable = $(tableRef.current).DataTable({
  //     order: [[0, "desc"]],
  //     pageLength: 25,
  //     language: pashtolang,
  //   });
  //   $(".dataTables_length").addClass("bs-select");

  //   return () => {
  //     dataTable.destroy();
  //   };
  // }, [listData]);

  const {
    incorporationDetails,
    medicineDetails,
    companyDetails,
    address,
    proformaType,
    isLTDProfroma,
    isNGOProforma,
    next,
    prev,
  } = useContext(MultiStepFormContext);

  useEffect(() => {
    // gettingCancelledAppointment().then(() => {
    //   setLoading(false);
    // });
  }, []);

  return (
    <>
      <Row className="mt-5">
        {/* incorporation */}
        {proformaType.importer === "LTD" && (
          <CCol md={12}>
            <div className="  border rounded mt-5 mb-5 p-2">
              <CCardBody className="p-0 mx-0" style={{ minHeight: "200px" }}>
                <>
                  <h4
                    className="px-3  py-2 rounded"
                    style={{ backgroundColor: "#00aae4" }}
                  >
                    د شرکت اړه معلومات
                  </h4>
                  <div className="my-3">
                    <CRow className="px-3 py-2  d-flex">
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
                        <p className=" m-0">د تجارتي جواز د اعتبار نیټه:</p>
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
                        <p className="mb-0">ولایت:</p>
                      </CCol>
                      <CCol md={3} className="">
                        <strong className="">
                          {/* {companyData?.contact} */}
                          کابل
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
                        <p className="">د اړیکې شمیره:</p>
                      </CCol>
                      <CCol md={3} className="">
                        <strong className="">
                          {/* {companyData?.occupation} */}
                          077564654656
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
                    <CRow className="px-3 pb-2  d-flex">
                      <CCol md={2} className="">
                        <p className=" mb-0">د شرکت نماینده:</p>
                      </CCol>
                      <CCol md={4} className="">
                        <strong className="">
                          {/* {companyData?.email} */}
                          احمد رحیم
                        </strong>
                      </CCol>
                      <div className="spacess"></div>
                      <CCol md={3} className="">
                        <p className=" mb-0">د نماینده د تذکرې شمیره:</p>
                      </CCol>
                      <CCol md={3} className="">
                        <strong className="">
                          {/* {companyData?.occupation} */}
                          564654654
                        </strong>
                      </CCol>
                    </CRow>
                  </div>
                </>
              </CCardBody>
            </div>
          </CCol>
        )}

        {/* NGO */}
        {proformaType.importer === "NGO" && (
          <CCol md={12}>
            <div className="  border rounded mt-5 mb-5 p-2">
              <CCardBody className="p-0 mx-0" style={{ minHeight: "200px" }}>
                <>
                  <h4
                    className="px-3  py-2 rounded"
                    style={{ backgroundColor: "#00aae4" }}
                  >
                    د توریدي کمپنۍ په اړه معلومات
                  </h4>
                  <div className="my-3">
                    <CRow className="px-3 py-2  d-flex">
                      <CCol md={2} className="">
                        <p className=" mb-1">د کمپنۍ نوم:</p>
                      </CCol>
                      <CCol md={4} className="">
                        <strong className="mx-2  bg-warning rounded p-1">
                          {/* {companyData?.name} */}
                          عمر غزنی غفاری لیمیتید
                        </strong>
                      </CCol>
                      <div className="spacess"></div>
                      <CCol md={3} className="">
                        <p className=" m-0">د تجارتي جواز د اعتبار نیټه:</p>
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
                        <p className=" mb-0">د کمپنۍ د جواز نمبر:</p>
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
                        <p className="">د اړیکې شمیره:</p>
                      </CCol>
                      <CCol md={3} className="">
                        <strong className="">
                          {/* {companyData?.occupation} */}
                          077564654656
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
                    <CRow className="px-3 pb-2  d-flex">
                      <CCol md={2} className="">
                        <p className=" mb-0">د کمپنۍ نماینده:</p>
                      </CCol>
                      <CCol md={4} className="">
                        <strong className="">
                          {/* {companyData?.email} */}
                          احمد رحیم
                        </strong>
                      </CCol>
                      <div className="spacess"></div>
                      <CCol md={3} className="">
                        <p className=" mb-0">د نماینده د تذکرې شمیره:</p>
                      </CCol>
                      <CCol md={3} className="">
                        <strong className="">
                          {/* {companyData?.occupation} */}
                          564654654
                        </strong>
                      </CCol>
                    </CRow>
                  </div>
                </>
              </CCardBody>
            </div>
          </CCol>
        )}

        {/* Internal Comapny */}
        {proformaType.importer === "company" && (
          <CCol md={12}>
            <div className="  border rounded mt-5 mb-5 p-2">
              <CCardBody className="p-0 mx-0" style={{ minHeight: "200px" }}>
                <>
                  <h4
                    className="px-3  py-2 rounded"
                    style={{ backgroundColor: "#00aae4" }}
                  >
                    د داخلی کمپنۍ اړه معلومات
                  </h4>
                  <div className="my-3">
                    <CRow className="px-3 py-2  d-flex">
                      <CCol md={2} className="">
                        <p className=" mb-1">د کمپنۍ نوم:</p>
                      </CCol>
                      <CCol md={4} className="">
                        <strong className="mx-2  bg-warning rounded p-1">
                          {/* {companyData?.name} */}
                          عمر غزنی غفاری لیمیتید
                        </strong>
                      </CCol>
                      <div className="spacess"></div>
                      <CCol md={3} className="">
                        <p className=" m-0">د تجارتي جواز د اعتبار نیټه:</p>
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
                        <p className=" mb-0">د کمپنۍ د جواز نمبر:</p>
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
                        <p className="">د اړیکې شمیره:</p>
                      </CCol>
                      <CCol md={3} className="">
                        <strong className="">
                          {/* {companyData?.occupation} */}
                          077564654656
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
                    <CRow className="px-3 pb-2  d-flex">
                      <CCol md={2} className="">
                        <p className=" mb-0">د کمپنۍ نماینده:</p>
                      </CCol>
                      <CCol md={4} className="">
                        <strong className="">
                          {/* {companyData?.email} */}
                          احمد رحیم
                        </strong>
                      </CCol>
                      <div className="spacess"></div>
                      <CCol md={3} className="">
                        <p className=" mb-0">د نماینده د تذکرې شمیره:</p>
                      </CCol>
                      <CCol md={3} className="">
                        <strong className="">
                          {/* {companyData?.occupation} */}
                          564654654
                        </strong>
                      </CCol>
                    </CRow>
                  </div>
                </>
              </CCardBody>
            </div>
          </CCol>
        )}

        <CCol md={12}>
          <div className="  border rounded mt-1 mb-5 p-2 mx-0 ">
            <CCardBody className="p-0 mx-0" style={{ minHeight: "200px" }}>
              <>
                <h4
                  className="px-3 bg-warning py-2 rounded"
                  // style={{ backgroundColor: "#00aae4" }}
                >
                  د بهرنۍ کمپنۍ په اړه معلومات
                </h4>
                <div className="my-3">
                  <CRow className="px-3 py-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-1">د کمپنۍ نوم:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong
                        className="mx-2 rounded p-1"
                        style={{ backgroundColor: "#00aae4" }}
                      >
                        {/* {companyData?.name} */}
                        Mediun Farma
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" m-0">هیواد:</p>
                    </CCol>
                    <CCol md={4}>
                      <strong className="m-0 p-0">
                        {/* {companyData?.tazkera_number} */}
                        پاکستان
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0">ولایت :</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}
                        لاهور
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className="mb-0">پته:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.contact} */}
                        Johar Town, Phase-3, Lahore
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
                        00924654654656
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" mb-0">برښنالیک:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.occupation} */}
                        parviz@farma.gov.af
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" mb-0">د ویبسایټ لینک:</p>
                    </CCol>
                    <CCol md={4} className="">
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
            <CCardBody className="p-0 mx-0" style={{ minHeight: "150px" }}>
              <>
                <h4
                  className="px-3 bg-warning py-2 rounded"
                  // style={{ backgroundColor: "#00aae4" }}
                >
                  د پروفورمې نور مشخصات
                </h4>
                <div className="mt-3">
                  <CRow className="px-3 py-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-1">د انوایس مجموعی قیمت:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong
                        className="mx-2 rounded p-1"
                        // style={{ backgroundColor: "#00aae4" }}
                      >
                        {/* {companyData?.name} */}
                        ۲۳۴۳۲۴۳۲
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className=" m-0">د پیسو ډول:</p>
                    </CCol>
                    <CCol md={4}>
                      <strong className="m-0 p-0">
                        {/* {companyData?.tazkera_number} */}
                        افغانی
                      </strong>
                    </CCol>
                  </CRow>
                  <CRow className="px-3 pb-2  d-flex">
                    <CCol md={2} className="">
                      <p className=" mb-0">د اقلامو تعداد :</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="mx-2">
                        {/* {companyData?.name} */}
                        12
                      </strong>
                    </CCol>
                    <div className="spacess"></div>
                    <CCol md={2} className="">
                      <p className="mb-0">د محصولاتو د تورید هدف:</p>
                    </CCol>
                    <CCol md={4} className="">
                      <strong className="">
                        {/* {companyData?.contact} */}د انسانی استفادې لپاره
                      </strong>
                    </CCol>
                  </CRow>
                </div>
              </>
            </CCardBody>
          </div>
        </CCol>

        {/* Medicine*/}
        <CCol className="container">
          <CCardHeader>
            {proformaType.proformaType === "medical product proforma" && (
              <h4> د صحي محصولاتو لست</h4>
            )}
            {proformaType.proformaType ===
              "under controlled medicine proforma" && (
              <h4> د تر کنټرول لاندې درملو لست</h4>
            )}
            {proformaType.proformaType ===
              "under controlled medicine proforma" && <h4> د درملو لست</h4>}
          </CCardHeader>
          <table
            ref={tableRef}
            id="dtOrderExample"
            className=" table table-striped table-bordered table-sm"
            width="100%"
          >
            <thead>
              {proformaType.proformaType === "medical product proforma" ? (
                <tr className="">
                  <th className="text-center">شماره</th>
                  <th className="text-center">د محصول مشخصات</th>
                  <th className="text-center">مودل</th>
                  <th className="text-center">تولیدي کمپنۍ</th>
                  <th className="text-center">هیواد</th>
                  <th className="text-center">تعداد</th>
                  <th className="text-center">د فی واحد قیمت</th>
                  <th className="text-center">مجموعی قیمت</th>
                </tr>
              ) : (
                <tr className="">
                  <th className="text-center">شمیره</th>
                  <th className="text-center">د درملو نوم</th>
                  <th className="text-center">شکل</th>
                  <th className="text-center">واحد</th>
                  <th className="text-center">مقدار فی واحد</th>
                  <th className="text-center">تعداد واحد</th>
                  <th className="text-center">قیمت فی واحد</th>
                  <th className="text-center">قیمت مجموعی</th>
                </tr>
              )}
            </thead>

            <tbody>
              {listData.map((item, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>item.visitor.name</td>
                  <td>item.directorate?.name</td>
                  <td>item.reason</td>
                  <td className="text-center">ljlkj</td>
                  <td>item.visitor.contact</td>
                  <td className="text-center">hgh</td>
                </tr>
              ))}
              <tr>
                <td colSpan={7} className="text-center">
                  <h5>مجموعي قیمت</h5>
                </td>
                <td>
                  <b>2132$</b>
                </td>
              </tr>
              {/* <tr>
                <td colSpan={7} className="text-center">
                  <h5> متفرقه مصارف</h5>
                </td>
                <td>
                  <b>220$</b>
                </td>
              </tr> */}
            </tbody>
          </table>
          <div
            className={
              "form__item button__items d-flex justify-content-between mt-5"
            }
          >
            <Button type={"default"} onClick={prev}>
              شاته
            </Button>
            <Button type={"primary"} onClick={() => showModal()}>
              تصدیق او ثبت
            </Button>
          </div>
        </CCol>
      </Row>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        className="proformaSubmitModal_1"
      >
        <div className="  border rounded mt-2 mb-3 mt-4 proformaSubmitModal_2 ">
          <h3 className="text-center mt-5 mb-5">
            ستاسو پروفورمه په بریالیتوب سره ثبت شوه!
          </h3>

          <CRow md={12} className="pt-5 px-3 ">
            <CCol md={6} className="text-center ">
              <CButton
                className="px-5 my-2 mx-2"
                onClick={() => {
                  handleCancel();
                }}
              >
                تړل
              </CButton>
            </CCol>
            <CCol md={6} className="text-center">
              <CButton className="px-4 my-2 mx-2">د پروفورمې ډانلود</CButton>
            </CCol>
          </CRow>
        </div>
      </Modal>
    </>
  );
};
export default Review;
