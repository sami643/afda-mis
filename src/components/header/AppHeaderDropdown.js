import React, { useEffect, useState } from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAccountLogout,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import profile from "./../../assets/images/profile.png";
import { ProfileAPI } from "src/api/utils";

const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const [profileData, setPorfileData] = useState({});

  const gettingProfileInfo = async () => {
    try {
      const response = await ProfileAPI();
      setPorfileData(response.data.Profile);
      // console.log("Resspone", response.data.Profile);
    } catch (error) {
      console.error("Error in application:", error);
    }
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("./login");
    window.location.reload();
    setTimeout(localStorage.removeItem("user_role"), 2000);
  };
  useEffect(() => {
    gettingProfileInfo();
  }, []);

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={profile} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {/* <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        <CDropdownHeader className="bg-light fw-semibold py-2 text-start">
          اکونټ
        </CDropdownHeader>
        <CDropdownItem
          className="text-start"
          onClick={() => {
            navigate("/account/profile");
          }}
        >
          <CIcon icon={cilUser} className="me-2" />
          پروفایل
        </CDropdownItem>
        <CDropdownItem
          className="text-start"
          onClick={() => {
            navigate("/account/setting");
          }}
        >
          <CIcon icon={cilSettings} className="me-2" />
          تنظیمات
        </CDropdownItem>

        <CDropdownDivider />
        <CDropdownItem
          href="#"
          className="text-start  bg-warning"
          onClick={() => {
            LogOut();
          }}
        >
          <CIcon icon={cilAccountLogout} className="me-2  " />
          وتل
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
