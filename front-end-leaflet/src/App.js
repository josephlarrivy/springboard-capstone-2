import './css/App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import DisplayMap from './mapComponents/DisplayMap';
import Map from './unusedFiles/Map';
import Menu from './mapComponents/Menu';
import NavBar from './NavBar';
import ApplicationRoutes from './ApplicationRoutes';
import LoadingSpinner from './loader/LoadingSpinner'

import useLocalStorage from './hooks/useLocalStorage';
import NParksServiceRequest from './nationalParksApi';




function App() {

  const [localStoreToken, localRemoveToken, localRetrieveToken, localDecodeToken] = useLocalStorage()

  const [token, setToken] = useState(null)
  const [menuState, setMenuState] = useState('hamburger')

  const [centerPosition, setCenterPosition] = useState([36.0902, -80.7129])
  const [zoom, setZoom] = useState()
  const [showingParks, setShowingParks] = useState(null)


  useEffect(() => {
    const token = localRetrieveToken()
    setToken(token)

    const getInitialParks = async () => {
      let resp = await NParksServiceRequest.getAllParks(700)
      setShowingParks(resp)
    }
    getInitialParks()
    setZoom(4)
  }, [])

  useEffect(() => {
    console.log('App reload')
  }, [zoom, showingParks])

  const openMenu = () => {
    setMenuState('menu-container')
  }

  const changeZoom = (num) => {
    setZoom(num)
    console.log('new zoom:', zoom)
  }


  return (
    <div>
        <BrowserRouter>
          <DisplayMap
            centerPosition={centerPosition}
            zoom={zoom}
            changeZoom={changeZoom}
            showingParks={showingParks}
            setShowingParks={setShowingParks}
          />
          <Menu
            openMenu={openMenu}
            menuState={menuState}
            setMenuState={setMenuState}
            showingParks={showingParks}
            setShowingParks={setShowingParks}
            token={token}
            setToken={setToken}
            changeZoom={changeZoom}
          >
          </Menu>
        </BrowserRouter>
    </div>
  );
}

export default App;
