import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LOGO from "../assets/images/afda_logo.png";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdownToggle,
  CAvatar,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { CBadge, CDropdown } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from "@coreui/icons";
import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
import { logo } from "src/assets/brand/logo";
import darkMode from "src/assets/images/darkMode.png";
import AfdaLogo from "src/assets/images/afda_logo.png";
import { FormattedMessage } from "react-intl";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const [direction, setDir] = useState(localStorage.getItem("dir") || "rtl");
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  const handleDirection = (newDirection) => {
    localStorage.setItem("dir", newDirection);
    setDir(newDirection);
    window.location.reload();
  };

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };
  localStorage.setItem("lang", currentLanguage);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={AfdaLogo} alt="" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          {" "}
          <div className="ml-5">
            <img src={LOGO} width={50} height={50} />
          </div>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#" style={{ marginTop: "5px" }}>
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <img src={darkMode} width={20} />
            </CNavLink>
          </CNavItem>

          <CDropdown variant="nav-item">
            <CDropdownToggle placement="" className="" caret={false}>
              <FormattedMessage id="language" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0 " placement="">
              <CDropdownItem
                href="#"
                className="text-center"
                onClick={() => {
                  handleDirection("rtl");
                  handleLanguageChange("pa");
                }}
              >
                پشتو
              </CDropdownItem>
              <CDropdownItem
                href="#"
                className="text-center"
                onClick={() => {
                  handleDirection("rtl");
                  handleLanguageChange("fa");
                }}
              >
                دری
              </CDropdownItem>
              <CDropdownItem
                href="#"
                className="text-center"
                onClick={() => {
                  handleDirection("ltr");
                  handleLanguageChange("en");
                }}
              >
                English
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav>

        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
