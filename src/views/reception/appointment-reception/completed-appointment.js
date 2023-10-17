import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CSpinner,
} from "@coreui/react";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import $ from "jquery";
import { MDBDataTable } from "mdbreact";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import pashtolang from "./../../data/pashto.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./../../data/views.css";
import { gettingAppointmentListAPI } from "./../../../api/utils";
import VisitorData from "../visitor/visitor-view-component";
import viewAttachments from "./../../../assets/images/viewAttachments.png";

const CompletedApointment = () => {
  const tableRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appointmentModalData, setAppointmentModalData] = useState({});
  const [isMoqamUser, setIsMoqamUser] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState({});

  // useEffect(() => {
  //   const dataTable = $(tableRef.current).DataTable({
  //     order: [[0, "asc"]],
  //     pageLength: 25,
  //     language: pashtolang,
  //   });
  //   $(".dataTables_length").addClass("bs-select");

  //   return () => {
  //     dataTable.destroy();
  //   };
  // }, [listData]);

  const showModal = (item) => {
    setIsModalOpen(true);
    setAppointmentModalData(item);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  // const checkingOut = async (item) => {
  //   const data = {
  //     status: "completed",
  //     id: item.id,
  //     check_out: moment().format("YYYY-MM-DD HH:mm"),
  //   };
  //   const url = "http://localhost:8000/reception/appointment-update-status";
  //   await axios
  //     .put(url, data)
  //     .then((res) => {
  //       console.log("response", res.data.message);
  //     })
  //     .catch((err) => {
  //       console.log("Error Occured1223", err);
  //     });
  // };

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
      index: index + 1,
      name: item.visitor.name,
      directorate: item?.directorate?.name,
      appointment_date: item.appointment_date,
      appointment_time_range: item.appointment_time_range,
      contact: item.visitor.contact,
      view: (
        <div className="text-center">
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => showModal(item)}
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
        label: "شماره",
        field: "index",
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
        label: "ریاست",
        field: "directorate",
        sort: "asc",
        width: 200,
      },
      {
        label: "د لیدنې نیټه",
        field: "appointment_date",
        sort: "asc",
        width: 100,
      },
      {
        label: "د لیدنې موده",
        field: "appointment_time_range",
        sort: "asc",
        width: 150,
      },
      {
        label: "د اړیکې شمیره",
        field: "contact",
        sort: "asc",
        width: 100,
      },
      {
        label: "عملیې",
        field: "view",
        sort: "asc",
        width: 100,
      },
      {
        label: "د تړل کیدو نیټه",
        field: "check_out",
        sort: "asc",
        width: 200,
      },
    ],
    rows: rows,
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h4>✔️ بشپړ شوي ملاقاتونه/لیدنې </h4>
      </CCardHeader>

      <CCardBody>
        <div className="container my-4">
          {/* <table
            ref={tableRef}
            id="dtOrderExample"
            className=" mb-3 mt-4 table table-striped table-bordered table-sm "
            width="100%"
          >
            <thead>
              <tr>
                <th className="text-center">شماره</th>
                <th className="text-center"> نوم</th>
                <th className="text-center">ریاست</th>
                <th className="text-center">د لیدنې نیټه</th>
                <th className="text-center">د لیدنې موده</th>
                <th className="text-center">د اړیکې شمیره </th>
                <th className="text-center">عملیې</th>
                <th className="text-center">د تړل کیدو نیټه</th>
              </tr>
            </thead>

            <tbody>
              {listData.map((item, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>{item.visitor.name}</td>
                  <td>{item.directorate.name}</td>
                  <td>{item.appointment_date}</td>
                  <td>{item.appointment_time_range}</td>
                  <td>{item.visitor.contact}</td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => showModal(item)}
                      className="text-info me-2"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    />
                  </td>
                  <td>{item.check_out}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <MDBDataTable
            striped
            bordered
            hover
            data={data}
            entries={15}
            paging={true}
            pagingTop
            pagingBottom
            searchLabel="لټون"
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

        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="meetingViewModal"
        >
          {/* Visitor Data */}
          <VisitorData data={appointmentModalData} />
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
                  {" "}
                  <strong className="">
                    {" "}
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
                  {" "}
                  <strong className="meetingview p-1 rounded">
                    {/* {appointmentModalData.status} */}
                    بشپړ شوی
                  </strong>
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
        </Modal>
        {/* <button onClick={onSubmitForm_1}>bUTTON</button> */}
      </CCardBody>
    </CCard>
  );
};

export default CompletedApointment;
