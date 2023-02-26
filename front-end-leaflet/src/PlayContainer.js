import React, { useState, useEffect } from "react";

import './css/PlayContainer.css'

import DisplayMap from "./DisplayMap";
import ChooseSenarioForm from "./forms/ChooseStartLocationForm";
import useGenerateNewLocation from './hooks/useGenerateNewLocation'





const PlayContainer = () => {

  const [gameState, setGameState] = useState('chooseLocation')
  const [startLocation, setStartLocation] = useState(null)
  const [locations, setLocations] = useState(null)
  const [generateIncident] = useGenerateNewLocation()
  const [zoom, setZoom] = useState(10)



  if (gameState === 'chooseLocation') {
    return (
      <div className="play-container">
        <ChooseSenarioForm setStartLocation={setStartLocation} setGameState={setGameState}/>
      </div>
    )
  } else if (gameState === 'levelOne') {
    return (
      <div className="play-container">
        <DisplayMap startLocation={startLocation} zoom={zoom}/>
      </div>
    )
  }
 
  
}


export default PlayContainer;