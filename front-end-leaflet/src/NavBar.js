import './css/NavBar.css'

import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link, Route, Routes } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';


const NavBar = () => {

  const [localStoreToken, localRemoveToken, localRetrieveToken, localDecodeToken] = useLocalStorage()

  const logOut = () => {
    localRemoveToken()
    window.location.reload(true);
  }
  

  return (
    <div>
      <Navbar>

        <Nav >


          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>

          <br></br>


          <NavItem>
            <NavLink to="/register">Register</NavLink>
          </NavItem>
          <br></br>
          <NavItem>
            <NavLink to="/login">Log In</NavLink>
          </NavItem>
          <br></br>

          <NavItem>
            <NavLink onClick={logOut} id="nav-logout">Log Out</NavLink>
          </NavItem>
          <br></br>

          {/* <NavItem>
            <NavLink to="/map">Map</NavLink>
          </NavItem> */}

        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;