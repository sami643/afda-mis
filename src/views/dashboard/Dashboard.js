import DailyListAppointments from "../reception/appointment-reception/daily-appointments-list";
import React, { useEffect, useRef, useState } from "react";
import ChartDoughnut from "./chart";
import DailyApplications from "../reception/application-reception/daily-application";

import { user_roles } from "../data/global-data";
const Dashboard = (appointmentDataForDash) => {
  const logUser = localStorage.getItem("user_role");
  const [listData, setListData] = useState([]);

  return (
    <>
      <ChartDoughnut />
      {(logUser === user_roles.head_user ||
        logUser === user_roles.reception_appointment ||
        logUser === user_roles.directorate_manager) && (
        <DailyListAppointments />
      )}
      {logUser !== user_roles.reception_appointment && (
        <DailyApplications data={listData} />
      )}
    </>
  );
};

export default Dashboard;
