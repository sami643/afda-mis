import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CSpinner,
} from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Button, Modal } from "antd";
// import "mdbreact/dist/css/mdb.css";
// import $ from "jquery";
// import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
// import pashtolang from "./../../data/pashto.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./../../data/views.css";
import VisitorData from "../visitor/visitor-view-component";
import { gettingAppointmentListAPI } from "./../../../api/utils";
import viewAttachments from "./../../../assets/images/viewAttachments.png";

const CancelledAppointment = () => {
  // const tableRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appointmentModalData, setAppointmentModalData] = useState({});

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

  const showModal = (item) => {
    setIsModalOpen(true);
    setAppointmentModalData(item);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const gettingCancelledAppointment = async () => {
    const data = { status: "cancel" };
    try {
      const response = await gettingAppointmentListAPI(data);
      console.log("data is coming from backend", response.data.Appointments);
      setListData(response.data.Appointments);
    } catch (error) {
      console.error("Error in appointments:", error);
    }
  };

  useEffect(() => {
    gettingCancelledAppointment().then(() => {
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
      reason: item.reason,
      attachment:
        item.attachment && item.attachment !== "/user-media/no_file.pdf" ? (
          <a href={`http://localhost:8000/${item.attachment}`} target="_blank">
            <img src={viewAttachments} width="30" alt="Attachment" />
          </a>
        ) : (
          <p>اسناد نلري</p>
        ),
      contact: item.visitor.contact,
      action: (
        <FontAwesomeIcon
          icon={faEye}
          onClick={() => showModal(item)}
          className="text-info me-2"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        />
      ),
    }));
  const data = {
    columns: [
      {
        label: "شماره",
        field: "index",
        sort: "asc",
        width: 150,
      },
      {
        label: "نوم",
        field: "name",
        sort: "asc",
        width: 270,
      },
      {
        label: "ریاست",
        field: "directorate",
        sort: "asc",
        width: 200,
      },
      {
        label: "د کنسل کیدو علت",
        field: "reason",
        sort: "asc",
        width: 100,
      },
      {
        label: "ضمیمه",
        field: "attachment",
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
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: rows,
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h4> ❌ کنسل شوي ملاقاتونه/لیدنې </h4>
      </CCardHeader>

      <div className="m-5"></div>

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
                <th className="text-center ">د کنسل کیدو علت </th>
                <th className="text-center">ضمیمه </th>
                <th className="text-center">د اړیکې شمیره </th>

                <th className="text-center">عملیې</th>
              </tr>
            </thead>

            <tbody>
              {listData.map((item, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>{item.visitor.name}</td>
                  <td>{item.directorate?.name}</td>
                  <td>{item.reason}</td>
                  <td className="text-center">
                    {item.attachment &&
                    item.attachment !== "/user-media/no_file.pdf" ? (
                      <a
                        href={`http://localhost:8000/${item.attachment}`}
                        target="_blank"
                      >
                        <img
                          src={viewAttachments}
                          width="30"
                          alt="Description of the image"
                        />
                      </a>
                    ) : (
                      <p>اسناد نلري</p>
                    )}
                  </td>
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
                    کنسل شوی
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
            <CRow md={12} className="pb-3 px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">د کنسل کیدو علت:</p>
                </CCol>
                <CCol md={12} className="">
                  {" "}
                  <strong className="meetingview p-1 rounded">
                    {appointmentModalData.reason}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
          </div>
        </Modal>
      </CCardBody>
    </CCard>
  );
};

export default CancelledAppointment;
