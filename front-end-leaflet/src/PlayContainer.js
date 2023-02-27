import React, { useState, useEffect } from "react";

import './css/PlayContainer.css'

import DisplayMap from "./DisplayMap";
import ChooseSenarioForm from "./phase-components/ChooseStartLocationForm";
import useGenerateNewLocation from './hooks/useGenerateNewLocation'
import TutorialPhase from "./phase-components/TutorialPhase";
import LevelOne from "./phase-components/LevelOne";



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

  const generateNewIncident = (center, distance) => {
    let coordinates = generateIncident(center, distance)
    return coordinates
  }

  if (gameState === 'chooseLocation') {
    // console.log('choose location')
    return (
      <div className="play-container">
        <ChooseSenarioForm setStartLocation={setStartLocation} setGameState={setGameState}/>
      </div>
    )
  } else if (gameState === 'tutorialPhase') {
    // console.log('tutorialPhase')
    return (
      <div className="play-container">
        <TutorialPhase startLocation={startLocation} setStartLocation={setStartLocation} zoom={zoom} setGameState={setGameState} baseLocation={baseLocation} setBaseLocation={setBaseLocation}/>
      </div>
    )
  } else if (gameState === 'levelOne') {
    // console.log('levelOne')
    return (
      <div className="play-container">
        <LevelOne startLocation={startLocation} zoom={zoom} setGameState={setGameState} baseLocation={baseLocation} generateNewIncident={generateNewIncident}/>
      </div>
    )
  }
 
  
}


export default PlayContainer;