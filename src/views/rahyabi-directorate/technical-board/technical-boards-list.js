import React, { useState, useRef } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CToast,
  CToaster,
  CToastHeader,
  CToastBody,
} from "@coreui/react";
import "./../../data/views.css";
import BoardPhoto from "src/assets/images/board-committee-222.png";
import ListICon from "src/assets/images/committee_membersList.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Card } from "antd";

const TechnicalBoardsList = (props) => {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const serializedData = searchParams.get("id");
  // const visitorId = JSON.parse(decodeURIComponent(serializedData));
  const [boardData, setBoardData] = useState({
    name: "کمیته تخنیکی",
    number_of_board_member: 7,
    valid_upto: "1403-5-9",
  });
  const [boardId, setBoardId] = useState("5");
  const navigate = useNavigate();
  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast className="bg-info">
      <CToastHeader>
        <svg
          className="rounded me-2"
          width="20"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        ></svg>
        <div className="" style={{ fontSize: "22px" }}>
          ✔️بریا!{" "}
        </div>
      </CToastHeader>
      <CToastBody
        className="text-center"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        د فورم ډیتا ثبت شوه!
      </CToastBody>
    </CToast>
  );

  const handleBoardUpDate = () => {
    const serializedData = encodeURIComponent(JSON.stringify(boardData));
    navigate(`/rahyabi/update-board?id=${serializedData}`);
  };
  const navigateToMemberList = () => {
    const serializedData = encodeURIComponent(JSON.stringify(boardId));
    navigate(`/rahyabi/board-member-list?id=${serializedData}`);
  };
  return (
    <>
      <div>
        <CToaster ref={toaster} push={toast} placement="top-center" />
      </div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="bg-warning">
              <h3 className="m-3">بورډونه</h3>
            </CCardHeader>
            <CCardBody className="mx-3 ">
              {/* Application form */}
              <div className="   rounded mt-5 mb-5">
                <CRow className="justify-content-center ">
                  <CCol md={4} className="my-1 text-center">
                    <Card
                      style={{
                        maxWidth: 300,
                      }}
                      className="committee_card_body"
                      cover={
                        <img alt="example" src={BoardPhoto} height={100} />
                      }
                      actions={[
                        <a onClick={() => handleBoardUpDate("id")}>
                          <EditOutlined key="edit" />
                        </a>,

                        <div
                          key="ellipsis"
                          className="custom-action"
                          onClick={() => {
                            navigateToMemberList();
                          }}
                        >
                          <span className="px-1">د غړو لست</span>
                          <img src={ListICon} width={20} />
                        </div>,
                      ]}
                    >
                      <CCol>
                        <span>نوم:</span>
                        <h5>د درملو تضمین د کیفیت کمیټه</h5>
                      </CCol>
                      <CCol className="my-3">
                        <span>د غړو تعداد:</span>
                        <h5 className="px-2">8</h5>
                      </CCol>
                      <CCol className="mt-3">
                        <span>د اعتبار نیټه</span>
                        <h5 className="px-2">1403-5-4</h5>
                      </CCol>
                    </Card>
                  </CCol>
                  <CCol md={4} className="my-1 text-center">
                    <Card
                      style={{
                        maxWidth: 300,
                      }}
                      className="committee_card_body"
                      cover={
                        <img alt="example" src={BoardPhoto} height={100} />
                      }
                      actions={[
                        <a onClick={() => handleBoardUpDate("id")}>
                          <EditOutlined key="edit" />
                        </a>,
                        <div
                          key="ellipsis"
                          className="custom-action"
                          onClick={() => {
                            navigateToMemberList();
                          }}
                        >
                          <span className="px-1">د غړو لست</span>
                          <img src={ListICon} width={20} />
                        </div>,
                      ]}
                    >
                      <CCol>
                        <span>نوم:</span>
                        <h5>د درملو تضمین د کیفیت کمیټه</h5>
                      </CCol>
                      <CCol className="my-3">
                        <span>د غړو تعداد:</span>
                        <h5 className="px-2">8</h5>
                      </CCol>
                      <CCol className="mt-3">
                        <span>د اعتبار نیټه</span>
                        <h5 className="px-2">1403-5-4</h5>
                      </CCol>
                    </Card>
                  </CCol>
                  <CCol md={4} className="my-1 text-center">
                    <Card
                      style={{
                        maxWidth: 300,
                      }}
                      className="committee_card_body"
                      cover={
                        <img alt="example" src={BoardPhoto} height={100} />
                      }
                      actions={[
                        <a onClick={() => handleBoardUpDate("id")}>
                          <EditOutlined key="edit" />
                        </a>,
                        <div
                          key="ellipsis"
                          className="custom-action"
                          onClick={() => {
                            navigateToMemberList();
                          }}
                        >
                          <span className="px-1">د غړو لست</span>
                          <img src={ListICon} width={20} />
                        </div>,
                      ]}
                    >
                      <CCol>
                        <span>نوم:</span>
                        <h5>د درملو تضمین د کیفیت کمیټه</h5>
                      </CCol>
                      <CCol className="my-3">
                        <span>د غړو تعداد:</span>
                        <h5 className="px-2">8</h5>
                      </CCol>
                      <CCol className="mt-3">
                        <span>د اعتبار نیټه</span>
                        <h5 className="px-2">1403-5-4</h5>
                      </CCol>
                    </Card>
                  </CCol>
                </CRow>
                <CRow className="justify-content-center  my-4">
                  <CCol md={4} className="my-1 text-center">
                    <Card
                      style={{
                        maxWidth: 300,
                      }}
                      className="committee_card_body"
                      cover={
                        <img alt="example" src={BoardPhoto} height={100} />
                      }
                      actions={[
                        <a onClick={() => handleBoardUpDate("id")}>
                          <EditOutlined key="edit" />
                        </a>,
                        <div key="ellipsis" className="custom-action">
                          <span className="px-1">د غړو لست</span>
                          <img src={ListICon} width={20} />
                        </div>,
                      ]}
                    >
                      <CCol>
                        <span>نوم:</span>
                        <h5>د درملو تضمین د کیفیت کمیټه</h5>
                      </CCol>
                      <CCol className="my-3">
                        <span>د غړو تعداد:</span>
                        <h5 className="px-2">8</h5>
                      </CCol>
                      <CCol className="mt-3">
                        <span>د اعتبار نیټه</span>
                        <h5 className="px-2">1403-5-4</h5>
                      </CCol>
                    </Card>
                  </CCol>
                  <CCol md={4} className="my-1 text-center">
                    <Card
                      style={{
                        maxWidth: 300,
                      }}
                      className="committee_card_body"
                      cover={
                        <img alt="example" src={BoardPhoto} height={100} />
                      }
                      actions={[
                        <a onClick={() => handleBoardUpDate("id")}>
                          <EditOutlined key="edit" />
                        </a>,
                        <div key="ellipsis" className="custom-action">
                          <span className="px-1">د غړو لست</span>
                          <img src={ListICon} width={20} />
                        </div>,
                      ]}
                    >
                      <CCol>
                        <span>نوم:</span>
                        <h5>د درملو تضمین د کیفیت کمیټه</h5>
                      </CCol>
                      <CCol className="my-3">
                        <span>د غړو تعداد:</span>
                        <h5 className="px-2">8</h5>
                      </CCol>
                      <CCol className="mt-3">
                        <span>د اعتبار نیټه</span>
                        <h5 className="px-2">1403-5-4</h5>
                      </CCol>
                    </Card>
                  </CCol>
                  <CCol md={4} className="my-1 text-center">
                    <Card
                      style={{
                        maxWidth: 300,
                      }}
                      className="committee_card_body"
                      cover={
                        <img alt="example" src={BoardPhoto} height={100} />
                      }
                      actions={[
                        <a onClick={() => handleBoardUpDate("id")}>
                          <EditOutlined key="edit" />
                        </a>,
                        <div key="ellipsis" className="custom-action">
                          <span className="px-1">د غړو لست</span>
                          <img src={ListICon} width={20} />
                        </div>,
                      ]}
                    >
                      <CCol>
                        <span>نوم:</span>
                        <h5>د درملو تضمین د کیفیت کمیټه</h5>
                      </CCol>
                      <CCol className="my-3">
                        <span>د غړو تعداد:</span>
                        <h5 className="px-2">8</h5>
                      </CCol>
                      <CCol className="mt-3">
                        <span>د اعتبار نیټه</span>
                        <h5 className="px-2">1403-5-4</h5>
                      </CCol>
                    </Card>
                  </CCol>
                </CRow>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default TechnicalBoardsList;
