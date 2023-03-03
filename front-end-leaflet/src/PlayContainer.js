import React, { useState, useEffect, useRef } from "react";

import './css/PlayContainer.css'

import useGenerateNewLanding from "./hooks/useGenerateNewLanding";

import DisplayMap from "./DisplayMap";
import ChooseSenarioForm from "./phase-components/ChooseStartLocationForm";
import NewChooseLocation from "./phase-components/NewChooseLocation";
import TutorialPhase from "./phase-components/TutorialPhase";
import LevelOne from "./phase-components/LevelOne";
import NewChooselocation from "./phase-components/NewChooseLocation";
import ChooseStartLocationForm from "./phase-components/ChooseStartLocationForm";



const PlayContainer = () => {

  const [gameState, setGameState] = useState('chooseLocation')
  const [startLocation, setStartLocation] = useState(null)
  const [baseLocation, setBaseLocation] = useState(null)
  const [generateLanding] = useGenerateNewLanding()
  const [zoom, setZoom] = useState(2)
  const [landings, setLandings] = useState()
  const [addLanding, setAddLanding] = useState(false)
  const [centerPosition, setCenterPosition] = useState([35, 6])
  const [reload, setReload] = useState(false)




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
    // setReload(false)
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


  const setZoomFunction = (val) => {
    setZoom(val)
  }


  if (gameState === 'chooseLocation') {
    // console.log('choose location')
    // return (
    //   <div className="play-container">
    //     <NewChooselocation startLocation={startLocation} zoom={zoom} setZoom={setZoom} setGameState={setGameState} baseLocation={baseLocation} setBaseLocation={setBaseLocation} landings={landings} setAddLanding={setAddLanding} centerPosition={centerPosition} setCenterPosition={setCenterPosition} reload={reload} setReload={setReload}/>
    //   </div>
    // )
    return(
      <>
      <ChooseStartLocationForm startLocation={startLocation} setStartLocation={setStartLocation} setGameState={setGameState} zoom={zoom} setZoomFunction={setZoomFunction} centerPosition={centerPosition} setCenterPosition={setCenterPosition}/>
      </>
    )
  } else if (gameState === 'tutorialPhase') {
    console.log('tutorialPhase')
    return (
      <div className="play-container">
        <TutorialPhase startLocation={startLocation} setStartLocation={setStartLocation} zoom={zoom} setZoom={setZoom} setGameState={setGameState} baseLocation={baseLocation} setBaseLocation={setBaseLocation}/>
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