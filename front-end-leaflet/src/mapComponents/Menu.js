import React, { useEffect, useState } from 'react'
import { Nav } from 'reactstrap'
import '../css/Menu.css'
import NavBar from '../NavBar'

const Menu = ({ menuState, setMenuState }) => {

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
      <NavBar />
        {/* <h1>test</h1>
      <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
      <br></br>
      <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p> */}

      </div>
    )
  }
  
}

export default Menu;