import './css/NavBar.css'

import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link, Route, Routes } from 'react-router-dom';



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

          <NavItem>
            <NavLink to="/register">Register</NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;