import './css/NavBar.css'

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
// import { Link, Route, Routes } from 'react-router-dom';

import NParksServiceRequest from "./nationalParksApi";



const ParksNav = ({setShowingParks}) => {

  const loadAllParks = async () => {
    let resp = await NParksServiceRequest.getAllParks(700)
    setShowingParks(resp)
  }


  return (
    <div>
      <Navbar>
        <Nav >

          <NavItem >
            <NavLink
              to="/allParks"
              onClick={loadAllParks}
              >Parks
            </NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </div>
  )

}

export default ParksNav;