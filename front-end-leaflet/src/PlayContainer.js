import React, { useState, useEffect } from "react";

import './css/PlayContainer.css'

import DisplayMap from "./DisplayMap";
import ChooseSenarioForm from "./forms/ChooseStartLocationForm";




const PlayContainer = () => {

  const [gameState, setGameState] = useState('chooseLocation')
  const [startLocation, setStartLocation] = useState(null)



  if (gameState === 'chooseLocation') {
    return (
      <div className="play-container">
        <ChooseSenarioForm setStartLocation={setStartLocation} setGameState={setGameState}/>
      </div>
    )
  } else if (gameState === 'play') {
    return (
      <div className="play-container">
        <DisplayMap />
      </div>
    )
  }
 
  
}


export default PlayContainer;