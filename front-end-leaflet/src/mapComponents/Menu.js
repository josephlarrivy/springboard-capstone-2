import React, { useEffect, useState } from 'react'
import { Nav } from 'reactstrap'
import ApplicationRoutes from '../ApplicationRoutes'
import '../css/Menu.css'
import NavBar from '../NavBar'

const Menu = ({ menuState, setMenuState, contextToken, setContextToken }) => {

  const openMenu = () => {
    setMenuState('open')
  }

  if (menuState === 'hamburger') {
    return (
      <div onClick={openMenu} className='menu-hamburger'>
        <p className='hamburger-title'><b>Menu</b></p>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
      </div>
    )
  } else {
    return (
      <div className='menu-container'>
      <NavBar>

      </NavBar>

      <ApplicationRoutes
        contextToken={contextToken}
        setContextToken={setContextToken}
      >
      </ApplicationRoutes>
      </div>
    )
  }
  
}

export default Menu;