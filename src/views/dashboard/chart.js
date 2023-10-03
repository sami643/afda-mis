import React, { useState, useEffect } from "react";
// import ReactApexChart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import { CChartDoughnut } from "@coreui/react-chartjs";
import { user_roles } from "../data/global-data";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CSpinner,
} from "@coreui/react";
import "./style.css";
import {
  dashboardDailyReportAPIs,
  dashboardWeaklyReportAPIs,
  dashboardMonthlyReportAPIs,
  dashboard_applicatoin_daily_report_APIS,
  dashboard_applicatoin_weekly_report_APIS,
  dashboard_applicatoin_monthly_report_APIS,
} from "./../../api/utils";
const ChartDoughnut = () => {
  const logUser = localStorage.getItem("user_role");
  const [activeDash, setActiveDash] = useState("weeklyDash");
  const [reportsData, setReportsData] = useState([]);
  const [application_reports_data, setApplication_reports_data] = useState([]);
  // const [approvedCount, setApprovedCount] = useState(0);
  // const [cancelCount, setCancelCount] = useState(0);
  // const [completedCount, setCompletedCount] = useState(0);
  // const [pendingCount, setPendingCount] = useState(0);
  // const [rejectedCount, setRejectedCount] = useState(0);
  // const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [appointment_statistics, setAppointmentStatistics] = useState([]);
  const [application_statistics, setApplicationStatistics] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const gettingReports = async () => {
    setIsLoading(true);
    try {
      const daily_appontment_Reports = await dashboardDailyReportAPIs();
      const weekly_appointment_Reports = await dashboardWeaklyReportAPIs();
      const monthly_appointmentReports = await dashboardMonthlyReportAPIs();
      const daily_application_Reports =
        await dashboard_applicatoin_daily_report_APIS();
      const weekly_application_Reports =
        await dashboard_applicatoin_weekly_report_APIS();
      const monthly_application_Reports =
        await dashboard_applicatoin_monthly_report_APIS();

      if (activeDash === "dailyDash") {
        setReportsData(daily_appontment_Reports.data);
        setApplication_reports_data(daily_application_Reports.data);
      } else if (activeDash === "weeklyDash") {
        setReportsData(weekly_appointment_Reports.data);
        setApplication_reports_data(weekly_application_Reports.data);
      } else if (activeDash === "monthlyDash") {
        setReportsData(monthly_appointmentReports.data);
        setApplication_reports_data(monthly_application_Reports.data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching reports:", error);
    }
  };

  useEffect(() => {
    let newApprovedCount = 0;
    let newCancelCount = 0;
    let newCompletedCount = 0;
    let newPendingCount = 0;
    let newRejectedCount = 0;
    if (reportsData) {
      for (const report of reportsData) {
        switch (report.status) {
          case "approved":
            newApprovedCount = report.count;
            break;
          case "cancel":
            newCancelCount = report.count;
            break;
          case "completed":
            newCompletedCount = report.count;
            break;
          case "pending":
            newPendingCount = report.count;
            break;
          case "rejected":
            newRejectedCount = report.count;
            break;
          default:
            break;
        }
      }
    }

    let new_application_InitialCount = 0;
    let new_application_CancelCount = 0;
    let new_application_CompletedCount = 0;
    let new_application_InprocessCount = 0;
    let new_application_ReceivedCount = 0;
    let new_application_CheckedOutCount = 0;
    let new_application_RejectedCount = 0;
    if (application_reports_data) {
      for (const report of application_reports_data) {
        switch (report.status) {
          case "initial":
            new_application_InitialCount = report.count;
            break;
          case "cancel":
            new_application_CancelCount = report.count;
            break;
          case "completed":
            new_application_CompletedCount = report.count;
            break;
          case "in-process":
            new_application_InprocessCount = report.count;
            break;
          case "rejected":
            new_application_RejectedCount = report.count;
          case "check_out":
            new_application_CheckedOutCount = report.count;
          case "receive":
            new_application_ReceivedCount = report.count;
            break;
          default:
            break;
        }
      }
    }

    setAppointmentStatistics([
      newCompletedCount,
      newCancelCount,
      newRejectedCount,
      newPendingCount,
      newApprovedCount,
    ]);

    setApplicationStatistics([
      new_application_InitialCount,
      new_application_CancelCount,
      new_application_ReceivedCount,
      new_application_RejectedCount,
      new_application_InprocessCount,
      new_application_CompletedCount,

      //  new_application_CheckedOutCount ,
    ]);
  }, [reportsData || application_reports_data]);

  const noDataAvailable = appointment_statistics.every(
    (element) => element === 0
  );
  const noDataAvailable_1 = application_statistics.every(
    (element) => element === 0
  );

  useEffect(() => {
    gettingReports();
  }, [activeDash]);

  return (
    <>
      <CRow className="text-center justify-content-center">
        <div class="btn-group btn-group-justified">
          <CButton
            className={
              activeDash == "dailyDash"
                ? "btn btn-primary m-1 "
                : "btn StatisticsButton m-1"
            }
            onClick={() => setActiveDash("dailyDash")}
          >
            ورځنی
          </CButton>
          <CButton
            className={
              activeDash == "weeklyDash"
                ? "btn btn-primary m-1 "
                : "btn StatisticsButton m-1"
            }
            onClick={() => setActiveDash("weeklyDash")}
          >
            اونیز
          </CButton>
          <CButton
            className={
              activeDash == "monthlyDash"
                ? "btn btn-primary m-1 "
                : "btn StatisticsButton m-1"
            }
            onClick={() => setActiveDash("monthlyDash")}
          >
            میاشتنی
          </CButton>
        </div>
      </CRow>

      <CRow className="justify-content-center">
        {(logUser === user_roles.head_user ||
          logUser === user_roles.directorate_manager ||
          logUser === user_roles.reception_appointment) && (
          <CCol sm={6} lg={6}>
            <CCard className="mb-4">
              {activeDash === "dailyDash" && (
                <CCardHeader>د لیدنو ورځنی راپور</CCardHeader>
              )}
              {activeDash === "weeklyDash" && (
                <CCardHeader>د لیدنو اونیز راپور</CCardHeader>
              )}
              {activeDash === "monthlyDash" && (
                <CCardHeader>د لیدنو میاشتنی راپور</CCardHeader>
              )}
              {noDataAvailable ? (
                <h5
                  style={{
                    paddingInline: "28%",
                    paddingTop: "40%",
                    paddingBottom: "40%",
                  }}
                >
                  د لیدنې راپور شتون نه لري...{" "}
                </h5>
              ) : (
                <CCardBody>
                  {isLoading ? (
                    <CSpinner color="info" />
                  ) : (
                    <CChartDoughnut
                      data={{
                        labels: [
                          "تکمیل شوي",
                          "کنسل شوي",
                          "رد شوي",
                          "انتظار",
                          "قبول شوي",
                        ],
                        datasets: [
                          {
                            backgroundColor: [
                              "#34FD12",
                              "#A8CDDA",
                              "#FF0000",
                              "#FFFF00",
                              "#41B883",
                            ],
                            data: appointment_statistics,
                          },
                        ],
                      }}
                    />
                  )}
                </CCardBody>
              )}
            </CCard>
          </CCol>
        )}
        {(logUser === user_roles.head_user ||
          logUser === user_roles.directorate_manager ||
          logUser === user_roles.reception_application ||
          logUser === user_roles.executive_manager) && (
          <CCol sm={6} lg={6}>
            <CCard className="mb-4">
              {activeDash === "dailyDash" && (
                <CCardHeader>د اسنادو ورځنی راپور </CCardHeader>
              )}
              {activeDash === "weeklyDash" && (
                <CCardHeader>د اسنادو اونیز راپور </CCardHeader>
              )}
              {activeDash === "monthlyDash" && (
                <CCardHeader>د اسنادو میاشتنی راپور </CCardHeader>
              )}
              {noDataAvailable_1 ? (
                <h5
                  style={{
                    paddingInline: "28%",
                    paddingTop: "40%",
                    paddingBottom: "40%",
                  }}
                >
                  {" "}
                  د اسنادو راپور شتون نه لري...{" "}
                </h5>
              ) : (
                <CCardBody>
                  {isLoading ? (
                    <CSpinner color="info" />
                  ) : (
                    <CChartDoughnut
                      data={{
                        labels: [
                          "ابتدايي",
                          "کنسل شوي",
                          "ترلاسه شوي",
                          "رد شوي",
                          "جریان",
                          "تکمیل شوي",
                          // "تړل شوي",
                        ],
                        datasets: [
                          {
                            backgroundColor: [
                              "#AC58FA", //  initial
                              "#A8CDDA", //cancelled
                              "#41B883", // receive
                              "#FF0000", // rejected
                              "#FFFF00", // inporcess
                              "#04B404", //completed
                              // "#34FD12",
                            ],
                            data: application_statistics,
                          },
                        ],
                      }}
                    />
                  )}
                </CCardBody>
              )}
            </CCard>
          </CCol>
        )}
      </CRow>
    </>
  );
};

export default ChartDoughnut;
