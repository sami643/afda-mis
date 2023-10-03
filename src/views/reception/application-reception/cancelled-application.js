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
} from "./../../../api/utils";
import { user_roles } from "src/views/data/global-data";

const CancelApplication = () => {
  const tableRef = useRef(null);
  const logUser = localStorage.getItem("user_role");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applicationModalData, setApplicationModalData] = useState({});

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

  const gettingInitialAplicationsList = async () => {
    const data = { status: "cancel" };
    try {
      const response = await gettingAplicationsListAPIS(data);
      setListData(response.Applications);
    } catch (error) {
      console.error("Error in application:", error);
    }
  };

  useEffect(() => {
    gettingInitialAplicationsList().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <CSpinner color="info" />;
  }

  const navigateToUpdatePage = (item) => {
    const serializedData = encodeURIComponent(JSON.stringify(item));
    navigate(`/reception/update-application?id=${serializedData}`);
  };
  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h4 className="m-3">❌ کنسل شوي اسنادونه</h4>
      </CCardHeader>
      <CCardBody>
        <div className="container" style={{ marginTop: "50px" }}>
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
                <th className="text-center">د کنسل کیدو علت</th>
                <th className="text-center">ضمیمه</th>

                <th className="text-center">نور مالومات</th>
                {logUser === user_roles.reception_application && (
                  <th className="text-center">عملیې</th>
                )}
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
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => showModal(item)}
                      className="text-info me-2"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    />
                  </td>
                  {logUser === user_roles.reception_application && (
                    <td className="text-center">
                      <>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-primary me-2"
                          onClick={() => {
                            navigateToUpdatePage(item);
                          }}
                        />
                      </>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* view Information Dat */}
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
                  <strong className="">{applicationModalData?.id}</strong>
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
            <CRow md={12} className="  px-3 pb-5">
              <CCol md={7} className="d-flex">
                <CCol md={4} className="">
                  <p className="">حالت :</p>
                </CCol>
                <CCol md={9}>
                  <strong className="meetingview p-1 rounded">
                    {/* {applicationModalData.status} */}
                    کنسل شوی
                  </strong>
                </CCol>
              </CCol>
              <CCol md={4} className="d-flex">
                <CCol md={8} className="">
                  <p className="">د ثبت نیټه:</p>
                </CCol>
                <CCol md={12} className="">
                  <strong className="">
                    {applicationModalData.created_date}
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

export default CancelApplication;
