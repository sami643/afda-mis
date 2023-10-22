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
import { MDBDataTable } from "mdbreact";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "./../../data/views.css";
import { gettingAppointmentListAPI } from "./../../../api/utils";
import { useLocation, useNavigate } from "react-router-dom";
const BoardMemberList = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  const [boardId, setBoardId] = useState("5");

  const gettingCancelledAppointment = async () => {
    const data = { status: "completed" };
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

  const addBoardMember = () => {
    const serializedData_1 = encodeURIComponent(JSON.stringify(boardId));
    navigate(`/rahyabi/add-board-member?id=${serializedData_1}`);
  };

  const rows = listData
    // .filter((item) => item.id === 3)
    .map((item, index) => ({
      index: index + 1,
      name: "ضیا الرحمن",
      lastname: "samadi",
      hr_id: "90-23-3224324 ",
      post: "دوم",
      directorate: "ثبت و رهیابی",
      department: "رهیابی",
      action: (
        <CButton
          className="btn btn-danger  p-1 px-3 mx-2"
          onClick={() => {
            showAcceptionModal(item);
          }}
        >
          له کمیټې ویستل
        </CButton>
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
        label: "تخلص",
        field: "lastname",
        sort: "asc",
        width: 200,
      },
      {
        label: "HR کود",
        field: "hr_id",
        sort: "asc",
        width: 100,
      },
      {
        label: "عنوان د بست",
        field: "post",
        sort: "asc",
        width: 150,
      },
      {
        label: "ریاست",
        field: "directorate",
        sort: "asc",
        width: 100,
      },
      {
        label: "آمریت",
        field: "department",
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
      <CCardHeader className="bg-warning">
        <h4 className="p-2"> د کمیټې غړي </h4>
      </CCardHeader>

      <div className="mt-5 mx-5">
        <h4>د درملو تضمین د کیفیت کمیټه</h4>
      </div>
      <CCardBody>
        <div className="container mb-4">
          <MDBDataTable
            striped
            bordered
            hover
            data={data}
            entries={15}
            paging={false}
            pagingTop
            pagingBottom
            searchLabel="لټون"
            entriesLabel="وریکارډونه"
            info={false}
            responsiveSm
            responsiveMd
            responsiveLg
            className="custom-datatable text-center "
            paginationLabel={["شاته", "مخته"]}
            entriesOptions={[15, 30, 50, 100]}
          />
        </div>

        <CRow className="justify-content-end mx-2 mt-5 mb-5 d-flex">
          <CCol md={12} className=" ">
            <CButton
              type="submit"
              className="btn-sm btn   px-5 mb-4 w-100 "
              disabled={disableButton ? true : false}
              onClick={() => {
                addBoardMember();
              }}
            >
              <h6> کمیټې ته غړی اضافه کول</h6>
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default BoardMemberList;
