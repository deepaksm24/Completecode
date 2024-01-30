import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import ScrollIntoView from "react-scroll-into-view";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { pink } from '@mui/material/colors';

export default function TransNav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar
      expand="sm"
      sticky
      transparent
      light
      bgColor="dark"
      className="bg-opacity-75 shadow-lg navbarmain"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <AcUnitIcon
            sx={{ color: pink[500], fontSize: 50 }}
            id="iconrotatenav"
          />
        </MDBNavbarBrand>
        <span className="logoauto mt-2 h4">
          <div className="h1 d-flex justify-content-center">
            Auto Programming
          </div>
        </span>

        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        {showNav && (
          <MDBCollapse navbar>
            <MDBNavbarNav className="d-flex justify-content-end">
              <ScrollIntoView selector="#aboutme" smooth>
                <MDBNavbarItem className="navhead h4 m-3">About</MDBNavbarItem>
              </ScrollIntoView>
              <ScrollIntoView selector="#skills" smooth>
                <MDBNavbarItem className="navhead h4 m-3">Create</MDBNavbarItem>{" "}
              </ScrollIntoView>
              <ScrollIntoView selector="#projects" smooth>
                <MDBNavbarItem className="navhead h4 m-3">Projects</MDBNavbarItem>{" "}
              </ScrollIntoView>
              <ScrollIntoView selector="#contact" smooth>
                <MDBNavbarItem className="navhead h4 m-3">Contact</MDBNavbarItem>{" "}
              </ScrollIntoView>
            </MDBNavbarNav>
          </MDBCollapse>
        )}
      </MDBContainer>
    </MDBNavbar>
  );
}
