import React, { useEffect, useState } from "react";

import '../css/LevelOne.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";

import useGenerateNewLanding from '../hooks/useGenerateNewLanding.js'

const NewChooseLocation = ({ startLocation, zoom, setZoom, setGameState, baseLocation, setBaseLocation, landings, setAddLanding, centerLocation, setCenterPosition}) => {

  // const [zoom, setZoom] = useState(2)
  // const [currentZoom, setCurrentZoom] = useState(2)
  const [instructions, setInstructions] = useState('instructions-1')

  // const [zoom, setZoom] = useState(2)
  // const [centerPosition, setCenterPosition] = useState([35, 6])


  // const [landings, setLandings] = useState()
  // const [addLanding, setAddLanding] = useState(false)
  // const [gameState, setGameState] = useState('chooseLocation')
  // const [startLocation, setStartLocation] = useState([35, 6])
  // const [baseLocation, setBaseLocation] = useState(null)
  const [subphase, setSubphase] = useState('levelOne-1')
  const [alertCardInfo, setAlertCardInfo] = useState('')
  const [alertCardButtonFunction, setAlertCardButtonFunction] = useState(false)
  const [reload, setReload] = useState(false)



  useEffect(() => {
    // setStartLocation([1,1])
    console.log(landings)
    console.log('reload')
    setAlertCardButtonFunction(alertCardButtonCallback1)
    setReload(false)
  }, [])




  const mapClick = (clickLocation) => {
    if(subphase === 'levelOne-2') {
      setZoom(13)
      setAlertCardButtonFunction(() => alertCardButtonCallback2)
      setReload(true)
    }
    console.log(clickLocation)
    console.log('mapClick')
  }

  



  const alertCardButtonCallback1 = () => {
    setSubphase('levelOne-2')
    console.log(subphase)
    setAlertCardInfo({
      heading: 'Use the map to select a home region.',
      text: 'Drap and scroll',
      button: null
    })
    // setAlertCardButtonFunction(() => alertCardButtonCallback2)
  }

  const alertCardButtonCallback2 = () => {
    setAddLanding(true)
    setAlertCardInfo({
      heading: 'TEST1',
      text: 'test1',
      button: 'test1'
    })
    setAlertCardButtonFunction(() => alertCardButtonCallback3)
  }

  const alertCardButtonCallback3 = () => {
    setAddLanding(true)
    setAlertCardInfo({
      heading: 'TEST2',
      text: 'test2',
      button: 'test2'
    })
    // setAlertCardButtonFunction(() => alertCardButtonCallback4)
  }














  


  return (
    <div>
      <div>
        <AlertCard
          alertCardInfo={alertCardInfo}
          alertCardButtonFunction={alertCardButtonFunction}
        />
      </div>
      <div className="display-map">
        <DisplayMap
          startLocation={[35,6]}
          zoom={2}
          mapClick={mapClick}
          baseLocation={baseLocation}
          landings={landings}
        />
      </div>
    </div>
  )
}

export default NewChooseLocation;