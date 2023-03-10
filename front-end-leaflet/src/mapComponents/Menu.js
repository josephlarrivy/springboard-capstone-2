import React, { useEffect, useState } from 'react'
import { Nav } from 'reactstrap'
import ApplicationRoutes from '../ApplicationRoutes'
import '../css/Menu.css'
import NavBar from '../NavBar'

const Menu = ({ openMenu, menuState, contextToken, setContextToken }) => {

  useEffect(() => {
    // setReload(false)
    console.log('Menu reloaded')
  }, [])

  if (menuState === 'hamburger') {
    return (
      <div onClick={openMenu} className={menuState}>
        <p className='hamburger-title'><b>Menu</b></p>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
      </div>
    )
  } else if (menuState === 'menu-container') {
    return (
      <div className={menuState}>
        <NavBar
          contextToken={contextToken}
          setContextToken={setContextToken}
        />

        <ApplicationRoutes
          contextToken={contextToken}
          setContextToken={setContextToken}
        />
      </div>
    )
  } 
}

export default Menu;