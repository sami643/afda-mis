import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LOGO from "../assets/images/afda_logo.png";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import { AppSidebarNav } from "./AppSidebarNav";
import { FormattedMessage } from "react-intl";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
// sidebar nav config
import { reception_appointment } from "../_nav";
import { reception_application } from "../_nav";
import { head_user } from "../_nav";
import { directorate_manager } from "../_nav";
import { executive_manager } from "../_nav";
import { user_roles } from "src/views/data/global-data";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const logUser = localStorage.getItem("user_role");
  const [activenav, setActiveNav] = useState([]);

  useEffect(() => {
    if (logUser === user_roles.reception_application) {
      setActiveNav(reception_application);
    }
    if (logUser === user_roles.reception_appointment) {
      setActiveNav(reception_appointment);
    }
    if (logUser === user_roles.head_user) {
      setActiveNav(head_user);
    }
    if (logUser === user_roles.directorate_manager) {
      setActiveNav(directorate_manager);
    }
    if (logUser === user_roles.executive_manager) {
      setActiveNav(executive_manager);
    }
  }, [logUser]);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
      style={{ backgroundColor: "rgba(54, 163, 196)" }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <div>
          <h2
            className="pl-4"
            style={{ margin: "5px 0px 0px 5px ", fontSize: "16px" }}
          >
            <FormattedMessage id="sidebar_title" />
          </h2>
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={activenav} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
