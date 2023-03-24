import React, { useState, useEffect, useContext } from "react";

import BackendApiRequest from "./backendApi";
import NParksServiceRequest from "./nationalParksApi";
import useLocalStorage from "./hooks/useLocalStorage";
import DisplayMap from "./mapComponents/DisplayMap";

import './css/Home.css'
import Menu from "./mapComponents/Menu";


const Home = ({centerPosition, changeCenterPosition, zoom, changeZoom, showingParks, setShowingParks}) => {


  const [localStoreToken, localRemoveToken, localRetrieveToken, localDecodeToken] = useLocalStorage()

  const handleClick1 = () => {
    console.log('click1')
    let token = localRetrieveToken()
    console.log(token)
  }

  const handleClick2 = async () => {
    console.log('click2')
  }

  const handleClick3 = () => {
    console.log('click3')
    localRemoveToken()
  }

  const handleClick4 = async () => {
    let resp = await NParksServiceRequest.getAllParks(700)
    console.log(resp)
  }

  return (
    <div className="home-container">
      <DisplayMap
        centerPosition={centerPosition}
        zoom={zoom}
        changeZoom={changeZoom}
        showingParks={showingParks}
        setShowingParks={setShowingParks}
      />
      <Menu />
      <h1>Home</h1>
      <p>qwd qw d qwdqwd q w d qw d qw dwqdqw qwd qw d qwdqwd q w d qw d qw dwqdqw qwd qw d qwdqwd q w d qw d qw dwqdqw qwd qw d qwdqwd q w d qw d qw dwqdqw qwd qw d qwdqwd q w d qw d qw dwqdqw</p>
      <button onClick={handleClick1}>test</button>
      <button onClick={handleClick2}>test2</button>
      <button onClick={handleClick3}>test3</button>
      <button onClick={handleClick4}>Parks Request</button>
    </div>
  )
}

export default Home;