import React, { useState, useEffect } from "react";
import "./../../pages/../index.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import LOGO from "src/assets/images/afda_logo.png";

const Navbar = ({ scrollToFooter }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [homeClick, setHomeClick] = useState(false);
  const [servicesClick, setServicesClick] = useState(false);
  const [productsClick, setProductsClick] = useState(false);

  // const handleHomeClick = () => {
  //   setHomeClick(true);
  //   setProductsClick(false);
  //   setServicesClick(false);
  // };
  // const handleServicesClick = () => {
  //   setHomeClick(false);
  //   setProductsClick(false);
  //   setServicesClick(true);
  // };
  // const handleProductsClick = () => {
  //   setHomeClick(false);
  //   setProductsClick(true);
  //   setServicesClick(false);
  // };

  const handleClick = () => setClick(!click);

  const showButton = () => {
    // so if the screensize is <= 960px then set button state to false
    if (window.innerwidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#ff0000" }}>
        <Nav>
          <NavbarContainer className="landingNavBarContainer">
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavLogo to="/" className="landingNavBar">
              <div className="mx-2">
                <img src={LOGO} width={70} height={70} />
              </div>
              د افغانستان خوړو او درملو ملي اداره
            </NavLogo>
            <NavMenu onClick={handleClick} click={click}>
              {/* <NavItem
                onClick={handleProductsClick}
                productsClick={productsClick}
                className="mt-3"
              >
                <NavLinks to="/landing/Products" onClick={closeMobileMenu}>
                  اداره
                </NavLinks>
              </NavItem>

              <NavItem
                onClick={handleServicesClick}
                productsClick={productsClick}
                className="mt-3"
              >
                <NavLinks onClick={scrollToFooter}>اړیکه</NavLinks>
              </NavItem> */}

              <NavItemBtn className="mt-3">
                <NavBtnLink to="/login">
                  <Button primary>ننوتل</Button>
                </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
