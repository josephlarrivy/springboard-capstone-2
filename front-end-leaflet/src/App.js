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

  const [centerPosition, setCenterPosition] = useState([28.0902, -20.7129])
  const [zoom, setZoom] = useState(2)
  const [showingParks, setShowingParks] = useState(null)


  useEffect(() => {
    const token = localRetrieveToken()
    setToken(token)
    const getInitialParks = async () => {
      let resp = await NParksServiceRequest.getAllParks(700)
      setShowingParks(resp)
    }
    getInitialParks()
  }, [])

  // const openMenu = () => {
  //   setMenuState('menu-container')
  // }

  const changeCenterPosition = (lat, lon) => {
    setCenterPosition([lat, lon])
  }

  const changeZoom = (num) => {
    setZoom(num)
    console.log('new zoom:', zoom)
  }

  
  return (
    <>
        <BrowserRouter>
          <ApplicationRoutes
            token={token}
            setToken={setToken}
            showingParks={showingParks}
            setShowingParks={setShowingParks}
            changeZoom={changeZoom}
            zoom={zoom}
            centerPosition={centerPosition}
            changeCenterPosition={changeCenterPosition}
          />
        </BrowserRouter>
    </>
  );
}

export default App;
