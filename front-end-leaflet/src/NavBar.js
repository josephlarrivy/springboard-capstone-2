import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link, Route, Routes } from 'react-router-dom';

import './NavBar.css'


const NavBar = () => {

  

  return (
    <div>
      <Navbar>

        <Nav className="ml-auto">


          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/map">Map</NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;