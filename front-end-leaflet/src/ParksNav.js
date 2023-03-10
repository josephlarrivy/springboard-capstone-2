import './css/NavBar.css'

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
// import { Link, Route, Routes } from 'react-router-dom';



const ParksNav = () => {


    return (
      <div>
        <Navbar>
          <Nav >
            <NavItem >
              <NavLink to="/allParks">Parks</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )

}

export default ParksNav;