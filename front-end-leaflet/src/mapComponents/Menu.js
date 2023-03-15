import React, { useEffect, useState } from 'react'
import { Nav } from 'reactstrap'
import ApplicationRoutes from '../ApplicationRoutes'
import '../css/Menu.css'
import NavBar from '../NavBar'
import ParksNav from '../ParksNav'

const Menu = ({ openMenu, menuState, setMenuState, showingParks, setShowingParks, token, setToken}) => {

  useEffect(() => {
    // setReload(false)
    // console.log('Menu reloaded')
  }, [])

  const collapseMenu = () => {
    setMenuState('hamburger')
  }

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
          token={token}
          setToken={setToken}
        />
        <button className='close-button' onClick={collapseMenu}>close</button>
        <ParksNav />

        <ApplicationRoutes
          token={token}
          setToken={setToken}
          showingParks={showingParks}
          setShowingParks={setShowingParks}
        />
      </div>
    )
  } 
}

export default Menu;