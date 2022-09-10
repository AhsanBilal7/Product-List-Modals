import React, { useState } from "react";
import navbar from "./Navbar.module.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar className={navbar.containerNav} expand="lg" >
        <MDBContainer  fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href="/main">Navbar</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page"  href="/main">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink target="_blank" href="https://github.com/AhsanBilal7">My Github</MDBNavbarLink>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className="d-flex w-auto ">
              <div className={navbar.inputNav}>
                <input
                  className="form-control"
                  placeholder="Type query"
                  aria-label="Search"
                  type="Search"
                />
                <MDBBtn >Search</MDBBtn>
              </div>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
