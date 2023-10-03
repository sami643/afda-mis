import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CSpinner,
  CProgress,
} from "@coreui/react";

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import axios, { isCancel } from "axios";
import $ from "jquery";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import pashtolang from "./../../data/pashto.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./../../data/views.css";
import { useNavigate } from "react-router-dom";
import InitialIcon from "./../../../assets/images/initial.png";
import viewAttachments from "./../../../assets/images/viewAttachments.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import VisitorData from "../visitor/visitor-view-component";
import {
  gettingAplicationsListAPIS,
  updateApplicationStatusAPI,
  applicationCHeckOutAPI,
} from "./../../../api/utils";

const CheckedOutApplication = () => {
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applicationModalData, setApplicationModalData] = useState({});

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isMoqamUser, setIsMoqamUser] = useState(false);
  const [isHaqdostUser, setIshaqdostUser] = useState(true);
  const [IsCommentExists, setIsCommentExist] = useState(true);
  const [checkoutStatus, setCheckoutStatus] = useState({});

  useEffect(() => {
    const dataTable = $(tableRef.current).DataTable({
      order: [[0, "desc"]],
      pageLength: 25,
      language: pashtolang,
    });
    $(".dataTables_length").addClass("bs-select");

    return () => {
      dataTable.destroy();
    };
  }, [listData]);

  const showModal = (item) => {
    setIsModalOpen(true);
    setApplicationModalData(item);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const gettingCheckOutApplications = async () => {
    const data = { status: "check_out" };
    try {
      const response = await gettingAplicationsListAPIS(data);
      setListData(response.Applications);
    } catch (error) {
      console.error("Error in application:", error);
    }
  };

  useEffect(() => {
    gettingCheckOutApplications().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <CSpinner color="info" />;
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h4 className="m-2">
          <img src={InitialIcon} width={50} />
          تړل شوي اسنادونه
        </h4>
      </CCardHeader>
      <CCardBody>
        <div className="container " style={{ marginTop: "50px" }}>
          <table
            ref={tableRef}
            id="dtOrderExample"
            className=" table table-striped table-bordered table-sm"
            width="100%"
          >
            <thead>
              <tr>
                <th className="text-center">آیډي نمبر</th>
                <th className="text-center">ریاست</th>
                <th className="text-center">موخه/ هدف</th>
                <th className="text-center">ضمیمه</th>
                <th className="text-center">نور مالومات</th>
                <th className="text-center">د تړل کیدو نیټه </th>
              </tr>
            </thead>
            {/* Your tbody and tfoot sections */}
            <tbody>
              {listData.map((item, index) => (
                <tr key={index}>
                  {/* <td> {index + 1}</td> */}
                  <td>{item.id}</td>
                  <td> {item.directorate.name}</td>
                  <td> {item.purpose}</td>
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
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => showModal(item)}
                      className="text-info me-2"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    />
                  </td>
                  <td className="text-center">{item.check_out_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* view Information Data */}
        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="meetingViewModal"
        >
          {/* Visitor Data Component */}
          <VisitorData data={applicationModalData} />
          <div className="  border rounded mt-2 mb-3 mt-4 ">
            <h6
              className=" meetingview px-2 py-2 "
              style={{ borderRadius: "4px 4px 0px 0px " }}
            >
              د اسناد په اړه مالومات
            </h6>
            <CRow md={12} className=" pt-3 px-3 px-3">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">آیډي نمبر:</p>
                </CCol>
                <CCol md={9} className="">
                  <strong className="">{applicationModalData.id}</strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">ریاست:</p>
                </CCol>
                <CCol md={12}>
                  <strong className="">
                    {applicationModalData?.directorate?.name}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="  px-3 ">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">حالت :</p>
                </CCol>
                <CCol md={9}>
                  <strong className="meetingview p-1 rounded">
                    {/* {applicationModalData.status} */}
                    تړل شوی
                  </strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د تائیدۍ نیټه :</p>
                </CCol>
                <CCol md={12} className="">
                  <strong className="">
                    {applicationModalData.created_date}
                  </strong>
                </CCol>
              </CCol>
            </CRow>
            <CRow md={12} className="  px-3 pb-5">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">ملاحظات :</p>
                </CCol>
                <CCol md={9}>
                  {applicationModalData.comment && (
                    <strong className="bg-warning p-1 rounded">
                      {applicationModalData.comment}
                    </strong>
                  )}
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className=""> د بشپړیدو نیټه</p>
                </CCol>
                <CCol md={12} className="">
                  <CCol md={12} className="">
                    <strong className="">
                      {applicationModalData.completion_date}
                    </strong>
                  </CCol>
                </CCol>
              </CCol>
            </CRow>
          </div>
        </Modal>
      </CCardBody>
    </CCard>
  );
};

export default CheckedOutApplication;
