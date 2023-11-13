import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CSpinner,
} from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import { MDBDataTable, MDBInput } from "mdbreact";
import Filtering from "src/assets/images/list-litering.png";
import { provicesGlobalOptions } from "src/views/data/global-data";
import "./style.css";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "src/views/data/views.css";
import { gettingAppointmentListAPI } from "src/api/utils";

const company_status = [
  { value: "registerd", label: "ثبت شوې" },
  { value: "غیر رسمی", label: "بلاک شوې" },
  { value: "غیر رسمی", label: "تور لست کې" },
];

const IncorporationList = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appointmentModalData, setAppointmentModalData] = useState({});
  const [companyId, setCompanyId] = useState("12");

  const gettingCompletedAppointments = async () => {
    const data = { status: "completed" };
    try {
      const response = await gettingAppointmentListAPI(data);
      setListData(response.data.Appointments);
      console.log(response.data, "changeStatus Response");
    } catch (error) {
      console.error("Error in appointments:", error);
    }
  };

  console.log("foreing COmpadnsaf", listData);

  const handleViewDetails = () => {
    const serializedData = encodeURIComponent(JSON.stringify(companyId));
    navigate(`/rahyabi/foreign-company-list-view-details?id=${serializedData}`);
  };

  useEffect(() => {
    gettingCompletedAppointments().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <CSpinner color="info" />;
  }

  const rows = listData
    // .filter((item) => item.id === 3)
    .map((item, index) => ({
      liscense_number: "56465",
      name: item.visitor.name,
      country: "هندوستان",
      contract_no: "0091323242",
      registration_no_in_afg: "234234",
      contact: item.visitor.contact,
      status: "registered",

      view: (
        <div className="text-center">
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => handleViewDetails()}
            className="text-info me-2"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          />
        </div>
      ),
      check_out: item.check_out,
    }));

  const data = {
    columns: [
      {
        label: "د جواز نمبر",
        field: "liscense_number",
        sort: "asc",
        width: 100,
      },
      {
        label: "نوم",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "هیواد",
        field: "country",
        sort: "asc",
        width: 200,
      },
      {
        label: "د اړیکې شمیره",
        field: "contract_no",
        sort: "asc",
        width: 100,
      },
      {
        label: "په افغانستان کې د ثبت شمیره",
        field: "registration_no_in_afg",
        sort: "asc",
        width: 150,
      },
      {
        label: "حالت",
        field: "status",
        sort: "asc",
        width: 150,
      },
      {
        label: "عملیې",
        field: "view",
        sort: "asc",
        width: 100,
      },
    ],
    rows: rows,
  };

  return (
    <CCard className="mb-5">
      <CCardHeader className="bg-warning m-0">
        <h4 className="p-2">د بهرنی کمپنیو لست</h4>
      </CCardHeader>

      <CCardBody className="mt-0 filter_container">
        <div className="container mb-4 ">
          <CRow className="py-3 mt-3 filter_container ">
            <div className="filterInput">
              <label className="mx-2">
                {/* <img src={Filtering} width={20} /> */}
                <span>د جواز نمبر</span>
              </label>
              <input
                type="email"
                class="form-control text-start inputt"
                id="floatingInput"
              />
            </div>
            <div className="filterInputName">
              <label className="mx-2">د کمپنۍ نوم</label>
              <input
                type="email"
                class="form-control text-start inputt"
                id="floatingInput"
              />
            </div>
            <div className="filterInput ">
              <label className="mx-2">هیواد</label>

              <select
                id="medicine_export_purpose"
                // value={values.medicine_export_purpose}
                name="appointment_type"
                // onChange={(e) =>
                //   setFieldValue("medicine_export_purpose", e.target.value)
                // }
                className="form-control form-select-l inputt"
              >
                <option selected disabled className="label_1">
                  وټاکئ/انتخاب
                </option>
                {provicesGlobalOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="filterInput ">
              <label className="mx-2">حالت</label>

              <select
                id="medicine_export_purpose"
                // value={values.medicine_export_purpose}
                name="appointment_type"
                // onChange={(e) =>
                //   setFieldValue("medicine_export_purpose", e.target.value)
                // }
                className="form-control form-select-l inputt"
              >
                <option selected disabled className="label_1">
                  وټاکئ/انتخاب
                </option>
                {company_status.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="filterInput">
              <label className="mx-2">د اړیکې شمیره</label>
              <input
                type="email"
                class="form-control text-start inputt"
                id="floatingInput"
              />
            </div>
          </CRow>

          <MDBDataTable
            striped
            bordered
            hover
            filter="true"
            data={data}
            entries={15}
            paging={true}
            pagingTop
            pagingBottom
            searchLabel="عمومي لټون"
            entriesLabel="وریکارډونه"
            info={false}
            responsiveSm
            responsiveMd
            responsiveLg
            className="custom-datatable"
            paginationLabel={["شاته", "مخته"]}
            entriesOptions={[15, 30, 50, 100]}
          />
          <div style={{ marginTop: "-50px" }}>
            ټول ریکارډونه<span className="px-2">{listData.length}</span>
          </div>
        </div>

        {/* <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="meetingViewModal"
        >
          <div className="  border rounded mt-2 mb-3 mt-4 ">
            <h6
              className=" meetingview px-2 py-2 "
              style={{ borderRadius: "4px 4px 0px 0px " }}
            >
              د لیدنې په اړه مالومات
            </h6>
            <CRow md={12} className=" pt-3 px-3 px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">معرفي کونکې مرجع:</p>
                </CCol>
                <CCol md={9} className="">
                  {" "}
                  <strong className="">
                    {appointmentModalData.introduced_by}
                  </strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د اشخاصو تعداد:</p>
                </CCol>
                <CCol md={12}>
                  <strong className="">
                    {appointmentModalData.number_of_person}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="  px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">د لیدنې حالت :</p>
                </CCol>
                <CCol md={9}>
                  <strong className="meetingview p-1 rounded">بشپړ شوی</strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د ننوتلو وخت :</p>
                </CCol>
                <CCol md={12} className="">
                  {" "}
                  <strong className=""> {appointmentModalData.check_in}</strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="  px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">ریاست:</p>
                </CCol>
                <CCol md={9} className="">
                  {" "}
                  <strong className="">
                    {" "}
                    {appointmentModalData?.directorate?.name}
                  </strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د لیدنې موده:</p>
                </CCol>
                <CCol md={12} className="">
                  {" "}
                  <strong className="">
                    {appointmentModalData.appointment_time_range}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="pb-3 px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">د لیدنې موخه:</p>
                </CCol>
                <CCol md={8} className="">
                  {" "}
                  <strong className="">{appointmentModalData.purpose}</strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د لیدنې ډول:</p>
                </CCol>
                <CCol md={12} className="">
                  {" "}
                  <strong className="">
                    {appointmentModalData.appointment_type}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
          </div>
        </Modal> */}
      </CCardBody>
    </CCard>
  );
};

export default IncorporationList;
