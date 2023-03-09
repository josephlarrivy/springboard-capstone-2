import React, { useEffect, useState } from 'react'
import '../css/Menu.css'

const Menu = ({ menuState }) => {

  if (menuState === 'hamburger') {
    return (
      <div className='menu-hamburger'>
        <p className='hamburger-title'><b>Menu</b></p>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
      </div>
    )
  }
  return (
    <div className='menu-container'>
      {/* <h1>test</h1>
      <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
      <br></br>
      <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p> */}

    </div>
  )
}

export default Menu;