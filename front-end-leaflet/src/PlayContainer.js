import React, { useState, useEffect, useRef } from "react";

import './css/PlayContainer.css'

import useGenerateNewLanding from "./hooks/useGenerateNewLanding";

import DisplayMap from "./DisplayMap";
import ChooseSenarioForm from "./phase-components/ChooseStartLocationForm";
import NewChooseLocation from "./phase-components/NewChooseLocation";
import TutorialPhase from "./phase-components/TutorialPhase";
import LevelOne from "./phase-components/LevelOne";
import NewChooselocation from "./phase-components/NewChooseLocation";



const PlayContainer = () => {

  const [gameState, setGameState] = useState('chooseLocation')
  const [startLocation, setStartLocation] = useState(null)
  const [baseLocation, setBaseLocation] = useState(null)
  const [generateLanding] = useGenerateNewLanding()
  const [zoom, setZoom] = useState(11)
  const [landings, setLandings] = useState()
  const [addLanding, setAddLanding] = useState(false)
  const [centerPosition, setCenterPosition] = useState([35, 6])



  useEffect(() => {
    setLandings (
      baseLocation ?
        [
          {
            'shipLevel': 1,
            'coordinates': [
              (baseLocation[0] - (1 / 20)),
              (baseLocation[1] + (1 / 4))
            ]
          }
        ]
        : null
    )
    console.log(landings)
  }, [baseLocation])

  
  useEffect(() => {
    if (startLocation) {
      let newLanding = generateLanding(startLocation, 1)

      let landingsArray = [...landings, newLanding]
      console.log(landingsArray)
      setLandings(landingsArray)

      setAddLanding(false)
    }
  }, [addLanding])



  if (gameState === 'chooseLocation') {
    // console.log('choose location')
    return (
      <div className="play-container">
        <NewChooselocation startLocation={startLocation} zoom={zoom} setZoom={setZoom} setGameState={setGameState} baseLocation={baseLocation} setBaseLocation={setBaseLocation} landings={landings} setAddLanding={setAddLanding} centerPosition={centerPosition} setCenterPosition={setCenterPosition}/>
      </div>
    )
  } else if (gameState === 'tutorialPhase') {
    console.log('tutorialPhase')
    return (
      <div className="play-container">
        <TutorialPhase startLocation={startLocation} setStartLocation={setStartLocation} zoom={zoom} setGameState={setGameState} baseLocation={baseLocation} setBaseLocation={setBaseLocation}/>
      </div>
    )
  } else if (gameState === 'levelOne') {
    console.log('levelOne')
    return (
      <div className="play-container">
        <LevelOne setStartLocation={setStartLocation} zoom={zoom} setGameState={setGameState} baseLocation={baseLocation} landings={landings} setLandings={setLandings} setAddLanding={setAddLanding}/>
      </div>
    )
  }
 
  
}


export default PlayContainer;