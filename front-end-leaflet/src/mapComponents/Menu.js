import React, { useEffect, useState } from 'react'
import { Nav } from 'reactstrap'
import ApplicationRoutes from '../ApplicationRoutes'
import '../css/Menu.css'
import NavBar from '../NavBar'
import ParksNav from '../ParksNav'

const Menu = ({ openMenu, menuState, setMenuState, showingParks, setShowingParks, token, setToken, changeZoom, zoom, setCenterPosition}) => {

  useEffect(() => {
    console.log('Menu reloaded')
    // console.log(showingParks)
  }, [])

  const collapseMenu = () => {
    setMenuState('hamburger')
  }

  const changeCenterPosition = (lat, lon) => {
    setCenterPosition([lat, lon])
  }

  useEffect(() => {
    console.log('App reload')
    console.log(showingParks && showingParks[0].latitude)
    console.log(showingParks && showingParks[0].longitude)
    if (showingParks) {
      changeCenterPosition(
        showingParks && showingParks[0].latitude,
        showingParks && showingParks[0].longitude
      )
    }
  }, [zoom, showingParks])

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
        <ParksNav
          setShowingParks={setShowingParks}
          changeZoom={changeZoom}
        />
        <ApplicationRoutes
          token={token}
          setToken={setToken}
          showingParks={showingParks}
          setShowingParks={setShowingParks}
          changeZoom={changeZoom}
        />
      </div>
    )
  } 
}

export default Menu;