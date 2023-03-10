import './css/App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import DisplayMap from './mapComponents/DisplayMap';
import Map from './mapComponents/Map';
import Menu from './mapComponents/Menu';
import NavBar from './NavBar';
import ApplicationRoutes from './ApplicationRoutes';
import LoadingSpinner from './loader/LoadingSpinner'

import useLocalStorage from './hooks/useLocalStorage';
import TokenContext from './TokenContext';


function App() {

  // const [loading, setLoading] = useState(true)
  const [localStoreToken, localRemoveToken, localRetrieveToken, localDecodeToken] = useLocalStorage()
  const [contextToken, setContextToken] = useState(null)

  const [menuState, setMenuState] = useState('hamburger')


  useEffect(() => {
    const token = localRetrieveToken()
    setContextToken(token)
    console.log(menuState)
  }, [])


  const openMenu = () => {
    setMenuState('menu-container')
  }

  


  return (
    <div>
      <TokenContext.Provider value={contextToken}>
        <BrowserRouter>
          <Map />
          <Menu
            openMenu={openMenu}
            menuState={menuState}
            contextToken={contextToken}
            setContextToken={setContextToken}
          >
          </Menu>
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
