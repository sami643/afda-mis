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
// import axios from "axios";
// import $ from "jquery";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
// import pashtolang from "./../../data/pashto.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBDataTable } from "mdbreact";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./../../data/views.css";
import { useNavigate } from "react-router-dom";
import VisitorData from "../visitor/visitor-view-component";
import { gettingAppointmentListAPI } from "./../../../api/utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import viewAttachments from "./../../../assets/images/viewAttachments.png";

import Loader from "src/components/loader";
import { appointmentCheckOutAPI } from "src/api/utils";
import {
  approvingAppointmentValidationSchema,
  rejectingReasonValidationSchema,
} from "../../data/validation";
import { TimePicker } from "antd";
import { user_roles } from "src/views/data/global-data";
var itemdata = [];
const PendingAppointment = () => {
  // const tableRef = useRef(null);
  const logUser = localStorage.getItem("user_role");

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appointmentModalData, setAppointmentModalData] = useState({});
  const [isAcceptionModalOpen, setIsAcceptionModalOpen] = useState(false);
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [appointmentData, setAppointmentData] = useState({});
  const [timeRange, setTimeRange] = useState(null);
  const [timeRange1, setTimeRange1] = useState(null);
  const [updattionMessage, setUpdationMessage] = useState(false);
  const handleTimeRangeChange = (value, timeString) => {
    const temp = timeString[0];
    timeString[0] = timeString[1];
    timeString[1] = temp;
    const updatedRange = timeString.join(" ");
    setTimeRange(updatedRange);
    setTimeRange1(updatedRange);
  };

  const showAcceptionModal = (item) => {
    setIsAcceptionModalOpen(true);
    setAppointmentData(item);
  };

  const handleAcceptionModalCancel = () => {
    setIsAcceptionModalOpen(false);
  };

  const showRejectionModal = (item) => {
    setIsRejectionModalOpen(true);
    setAppointmentData(item);
  };
  const handleRejectionModalCancel = () => {
    setIsRejectionModalOpen(false);
  };

  const showCancelModal = (item) => {
    setIsCancelModalOpen(true);
    setAppointmentData(item);
  };
  const handleCancelModalCancel = () => {
    setIsCancelModalOpen(false);
  };

  const showModal = (item) => {
    setIsModalOpen(true);
    setAppointmentModalData(item);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // useEffect(() => {
  //   const dataTable = $(tableRef.current).DataTable({
  //     order: [[0, "desc"]],
  //     pageLength: 25,
  //     language: pashtolang,
  //     destroy: true,
  //   });
  //   $(".dataTables_length").addClass("bs-select");

  //   return () => {
  //     dataTable.destroy();
  //   };
  // }, [listData]);

  const gettingPendingAppointments = async () => {
    const data = { status: "pending" };
    try {
      const response = await gettingAppointmentListAPI(data);
      setListData(response.data.Appointments);
    } catch (error) {
      console.error("Error in appointments:", error);
    }
  };

  const approvingAppointment = async (values) => {
    itemdata = appointmentData;
    const rejectionData = {
      id: appointmentData.id,
      reason: values.reason,
      status: "rejected",
    };
    const data = {
      status: "approved",
      id: appointmentData.id,
      appointment_date: values.appointment_date,
      appointment_time_range: timeRange,
    };
    const data_1 = values.formType === "rejected" ? rejectionData : data;
    try {
      const response = appointmentCheckOutAPI(data_1);
      setUpdationMessage(true);
      setTimeout(() => {
        setIsLoading(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, 1000);
      gettingPendingAppointments();
    } catch (error) {
      console.error("Error in appointments:", error);
    }
  };

  const cancelAppointment = async (values) => {
    itemdata = appointmentData;
    const data = {
      id: appointmentData.id,
      reason: values.reason,
      status: "cancel",
    };
    try {
      const response = appointmentCheckOutAPI(data);

      setUpdationMessage(true);
      setTimeout(() => {
        setIsLoading(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, 1000);
      gettingPendingAppointments();
    } catch (error) {
      console.error("Error in appointments:", error);
    }
  };

  useEffect(() => {
    gettingPendingAppointments().then(() => {
      setLoading(false);
    });
  }, []);

  const navigateToUpdatePage = (item) => {
    const serializedData = encodeURIComponent(JSON.stringify(item));
    navigate(`/reception/update-appointment?id=${serializedData}`);
  };

  const rows = listData.map((item, index) => ({
    index: index + 1,
    name: item.visitor.name,
    directorate: item?.directorate?.name,
    purpose: item.purpose,
    edit: (
      <div className="text-center">
        <FontAwesomeIcon
          icon={faEye}
          onClick={() => showModal(item)}
          className="text-info me-2"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        />
        {logUser === user_roles.reception_appointment && (
          <FontAwesomeIcon
            icon={faEdit}
            className="text-primary me-2"
            onClick={() => {
              navigateToUpdatePage(item);
            }}
          />
        )}
      </div>
    ),
    attachment:
      item.attachment && item.attachment !== "/user-media/no_file.pdf" ? (
        <a href={`http://localhost:8000/${item.attachment}`} target="_blank">
          <img src={viewAttachments} width="30" alt="Attachment" />
        </a>
      ) : (
        <p>اسناد نلري</p>
      ),
    action: (
      <div className="action-buttons text-center">
        {logUser === user_roles.head_user ||
        logUser === user_roles.directorate_manager ? (
          <>
            <CButton
              className="btn btn-success p-1 px-3 mx-2"
              onClick={() => {
                showAcceptionModal(item);
              }}
            >
              قبول
            </CButton>
            <CButton
              className="btn btn-danger p-1 px-3 mx-1"
              onClick={() => {
                showRejectionModal(item);
              }}
            >
              رد
            </CButton>
          </>
        ) : (
          <CButton
            className="btn btn-danger p-1 px-3 mx-1"
            onClick={() => {
              showCancelModal(item);
            }}
          >
            کنسل
          </CButton>
        )}
      </div>
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
        label: "د لیدنې موخه",
        field: "purpose",
        sort: "asc",
        width: 100,
      },
      {
        label: "عملیې",
        field: "edit",
        sort: "asc",
        width: 150,
      },
      {
        label: "ضمیمه",
        field: "attachment",
        sort: "asc",
        width: 150,
      },
      {
        label: "عملیې",
        field: "action",
        sort: "asc",
        width: 200,
      },
    ],
    rows: rows,
  };

  if (loading) {
    return <CSpinner color="info" />;
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h4>
          <CSpinner color="info" className="" /> د انتظار په حال ملاقاتونه/لیدنې{" "}
        </h4>
      </CCardHeader>
      <CCardBody>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container " style={{ marginTop: "50px" }}>
            {/* <table
              ref={tableRef}
              id="dtOrderExample"
              className=" table table-striped table-bordered table-sm"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="text-center">شماره</th>
                  <th className="text-center"> نوم</th>
                  <th className="text-center">ریاست</th>
                  <th className="text-center">د لیدنې موخه </th>
                  <th className="text-center">عملیې</th>
                  <th className="text-center">ضمیمه</th>
                  <th className="text-center">عملیې</th>
                </tr>
              </thead>

              <tbody>
                {listData?.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td> {index + 1}</td>
                      <td>{item.visitor.name}</td>
                      <td>{item.directorate.name}</td>
                      <td>{item.purpose}</td>
                      <td className="text-center">
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => showModal(item)}
                          className="text-info me-2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        />
                        {logUser === user_roles.reception_appointment && (
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="text-primary me-2"
                            onClick={() => {
                              navigateToUpdatePage(item);
                            }}
                          />
                        )}
                      </td>
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
                        {logUser === user_roles.head_user ||
                        logUser === user_roles.directorate_manager ? (
                          <>
                            <CButton
                              className="btn btn-success p-1 px-3 mx-2"
                              onClick={() => {
                                showAcceptionModal(item);
                              }}
                            >
                              قبول
                            </CButton>
                            <CButton
                              className="btn btn-danger p-1 px-3 mx-1"
                              onClick={() => {
                                showRejectionModal(item);
                              }}
                            >
                              رد
                            </CButton>
                          </>
                        ) : (
                          <CButton
                            className="btn btn-danger p-1 px-3 mx-1"
                            onClick={() => {
                              showCancelModal(item);
                            }}
                          >
                            کنسل
                          </CButton>
                        )}
                      </td>
                    </tr>
                  </>
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
        )}
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
                    انتظار
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
        <Modal
          open={isAcceptionModalOpen}
          onCancel={handleAcceptionModalCancel}
          footer={null} // Remove the footer buttons
          className="meetingViewModal"
        >
          <div className="  border rounded mt-3 mb-2 mt-4  ">
            <h6 className="meetingview px-2 py-2 ">د لیدنې نیټه او وخت</h6>
            <Formik
              onSubmit={approvingAppointment}
              initialValues={{
                id: appointmentData.id,
                status: "approved",
                appointment_date: "",
              }}
              validationSchema={approvingAppointmentValidationSchema}
              enableReinitialize={true}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <Form>
                  <CRow className=" pt-3 px-3 px-3  m-5 ">
                    <CCol xs={12} md={6}>
                      <CCol>د لیدنې نیټه:</CCol>
                      <DatePicker
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                        id="appointment_date"
                        name="appointment_date"
                        style={{ width: "100%", height: "40px" }}
                        onChange={(e) =>
                          setFieldValue(
                            "appointment_date",
                            e.year + "/" + e.month.number + "/" + e.day
                          )
                        }
                      />
                      {errors.appointment_date && touched.appointment_date ? (
                        <div className="invalid-feedback d-block errorMessageStyle mr-2">
                          {errors.appointment_date}
                        </div>
                      ) : null}
                    </CCol>

                    <CCol xs={12} md={6} className="timeRangeLabel">
                      <CCol className="StartAndEndLabel_Top">د لیدنې موده</CCol>
                      <CCol md={4} className="d-flex StartAndEndLabel ">
                        <CCol>شروع:</CCol>
                        <CCol>ختم:</CCol>
                      </CCol>
                      <TimePicker.RangePicker
                        use12Hours
                        format="h:mm a"
                        onChange={handleTimeRangeChange}
                      />
                      {errors.appointment_time_range &&
                      touched.appointment_time_range ? (
                        <div className="invalid-feedback d-block errorMessageStyle mr-2">
                          {errors.appointment_time_range}
                        </div>
                      ) : null}
                    </CCol>
                  </CRow>
                  <CRow>
                    {" "}
                    <CCol md={11} className="text-end pt-5 mb-4 ">
                      {!updattionMessage ? (
                        <CButton className="px-4" type="submit">
                          ثبت
                        </CButton>
                      ) : (
                        <div
                          className="bg-"
                          style={{
                            width: "200px",
                            marginRight: "70%",
                          }}
                        >
                          <h5
                            className="bg-light  "
                            style={{
                              padding: "15px",
                            }}
                          >
                            ✔️ریکارډ اپدیټ شو!
                          </h5>
                        </div>
                      )}
                    </CCol>
                  </CRow>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
        <Modal
          open={isRejectionModalOpen}
          onCancel={handleRejectionModalCancel}
          footer={null}
          className="meetingViewModal"
        >
          <div className="  border rounded mt-3 mb-2 mt-4  ">
            <h6 className="meetingview px-2 py-2 ">د لیدنې د رد کیدو علت</h6>

            <Formik
              onSubmit={approvingAppointment}
              initialValues={{
                reason: "",
                formType: "rejected",
              }}
              validationSchema={rejectingReasonValidationSchema}
              enableReinitialize={true}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <Form>
                  <CRow className=" pt-3 ">
                    <CRow className="justify-content-center  ">
                      {/* Rejectoin Reason */}
                      <CCol md={10} className="">
                        <label className="form-label mx-3" htmlFor="reason">
                          علت
                          <span
                            style={{
                              color: "red",
                              marginInline: "5px",
                              paddingTop: "5px",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <textarea
                          type="text"
                          id="reason"
                          name="reason"
                          className={`form-control form-select-lg ${
                            errors.reason && touched.reason
                              ? "is-invalid form-select-lg    "
                              : ""
                          }`}
                          value={values.purpose}
                          rows={4}
                          onChange={(e) =>
                            setFieldValue("reason", e.target.value)
                          }
                          onBlur={() => setFieldTouched("reason", true)}
                        />
                        {errors.reason && touched.reason ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.reason}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol md={6} className=""></CCol>
                    </CRow>

                    <CCol md={11} className="text-end pt-5 mb-4 ">
                      {!updattionMessage ? (
                        <CButton className="px-4" type="submit">
                          ثبت
                        </CButton>
                      ) : (
                        <div
                          className="bg-"
                          style={{
                            width: "200px",
                            marginRight: "70%",
                          }}
                        >
                          <h5
                            className="bg-light  "
                            style={{
                              padding: "15px",
                            }}
                          >
                            ✔️ریکارډ اپدیټ شو!
                          </h5>
                        </div>
                      )}
                    </CCol>
                  </CRow>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>

        <Modal
          open={isCancelModalOpen}
          onCancel={handleCancelModalCancel}
          footer={null}
          className="meetingViewModal"
        >
          <div className="  border rounded mt-3 mb-2 mt-4  ">
            <h6 className="meetingview px-2 py-2 ">د لیدنې د کنسل کیدو علت</h6>
            <Formik
              onSubmit={cancelAppointment}
              initialValues={{
                reason: "",
                formType: "cancel",
              }}
              validationSchema={rejectingReasonValidationSchema}
              enableReinitialize={true}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <Form>
                  <CRow className=" pt-3 ">
                    <CRow className="justify-content-center  ">
                      {/* Rejectoin Reason */}
                      <CCol md={10} className="">
                        <label className="form-label mx-3" htmlFor="reason">
                          علت
                          <span
                            style={{
                              color: "red",
                              marginInline: "5px",
                              paddingTop: "5px",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <textarea
                          type="text"
                          id="reason"
                          name="reason"
                          className={`form-control form-select-lg ${
                            errors.reason && touched.reason
                              ? "is-invalid form-select-lg    "
                              : ""
                          }`}
                          value={values.purpose}
                          rows={4}
                          onChange={(e) =>
                            setFieldValue("reason", e.target.value)
                          }
                          onBlur={() => setFieldTouched("reason", true)}
                        />
                        {errors.reason && touched.reason ? (
                          <div className="invalid-feedback d-block errorMessageStyle mr-2">
                            {errors.reason}
                          </div>
                        ) : null}
                      </CCol>
                      <CCol md={6} className=""></CCol>
                    </CRow>

                    <CCol md={11} className="text-end pt-5 mb-4 ">
                      {!updattionMessage ? (
                        <CButton className="px-4" type="submit">
                          ثبت
                        </CButton>
                      ) : (
                        <div
                          className="bg-"
                          style={{
                            width: "200px",
                            marginRight: "70%",
                          }}
                        >
                          <h5
                            className="bg-light  "
                            style={{
                              padding: "15px",
                            }}
                          >
                            ✔️ریکارډ اپدیټ شو!
                          </h5>
                        </div>
                      )}
                    </CCol>
                  </CRow>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      </CCardBody>
    </CCard>
  );
};

export default PendingAppointment;
