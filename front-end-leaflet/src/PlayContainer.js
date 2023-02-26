import React, { useState, useEffect } from "react";

import './css/PlayContainer.css'

import DisplayMap from "./DisplayMap";
import ChooseSenarioForm from "./phase-components/ChooseStartLocationForm";
import useGenerateNewLocation from './hooks/useGenerateNewLocation'
import TutorialPhase from "./phase-components/TutorialPhase";




const PlayContainer = () => {

  const [gameState, setGameState] = useState('chooseLocation')
  const [startLocation, setStartLocation] = useState(null)
  const [baseLocation, setBaseLocation] = useState(null)
  const [incidents, setIncidents] = useState(null)
  const [generateIncident] = useGenerateNewLocation()
  const [zoom, setZoom] = useState(11)

  useEffect(() => {
    console.log(gameState)
    console.log(baseLocation)
  })


  if (gameState === 'chooseLocation') {
    return (
      <div className="play-container">
        <ChooseSenarioForm setStartLocation={setStartLocation} setGameState={setGameState}/>
      </div>
    )
  } else if (gameState === 'tutorialPhase') {
    return (
      <div className="play-container">
        <TutorialPhase startLocation={startLocation} zoom={zoom} setGameState={setGameState} baseLocation={baseLocation} setBaseLocation={setBaseLocation}/>
      </div>
    )
  }
 
  
}


export default PlayContainer;