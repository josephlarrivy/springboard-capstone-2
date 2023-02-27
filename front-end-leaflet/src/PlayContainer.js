import React, { useState, useEffect } from "react";

import './css/PlayContainer.css'

import DisplayMap from "./DisplayMap";
import ChooseSenarioForm from "./phase-components/ChooseStartLocationForm";
import TutorialPhase from "./phase-components/TutorialPhase";
import LevelOne from "./phase-components/LevelOne";



const PlayContainer = () => {

  const [gameState, setGameState] = useState('chooseLocation')
  const [startLocation, setStartLocation] = useState(null)
  const [baseLocation, setBaseLocation] = useState(null)
  const [landings, setLandings] = useState()
  const [zoom, setZoom] = useState(11)

  useEffect(() => {
    console.log('PlayContainer Reload')
    // console.log(gameState)
    // console.log(baseLocation)
    console.log(landings)
  }, [])

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
        <LevelOne startLocation={startLocation} zoom={zoom} setGameState={setGameState} baseLocation={baseLocation} landings={landings} setLandings={setLandings}/>
      </div>
    )
  }
 
  
}


export default PlayContainer;