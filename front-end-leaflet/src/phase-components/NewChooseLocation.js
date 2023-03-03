import React, { useEffect, useState } from "react";

import '../css/LevelOne.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";

import useGenerateNewLanding from '../hooks/useGenerateNewLanding.js'

const NewChooseLocation = ({ startLocation, zoom, setZoom, setGameState, baseLocation, setBaseLocation, landings, setAddLanding, centerPosition, setCenterPosition, reload, setReload}) => {

  
  const [instructions, setInstructions] = useState('instructions-1')

  const [subphase, setSubphase] = useState('levelOne-1')
  const [alertCardInfo, setAlertCardInfo] = useState('')
  const [alertCardButtonFunction, setAlertCardButtonFunction] = useState(false)



  useEffect(() => {
    // setStartLocation([1,1])
    console.log(landings)
    console.log('reload')
    // setZoom(13)
    // setBaseLocation([36,3])
    setAlertCardButtonFunction(alertCardButtonCallback1)
  }, [])




  const mapClick = (clickLocation) => {
    // setZoom(15)

    if(subphase === 'levelOne-1') {
      setZoom(13)
      setCenterPosition(clickLocation)
      setAlertCardButtonFunction(() => alertCardButtonCallback2)
      setReload(true)
      console.log(zoom)
      console.log(subphase)
    }
    console.log(clickLocation)
    console.log('mapClick')
  }

  



  const alertCardButtonCallback1 = () => {
    // setSubphase('levelOne-2')
    setCenterPosition([35,6])
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
          startLocation={centerPosition}
          zoom={zoom}
          mapClick={mapClick}
          baseLocation={baseLocation}
          landings={landings}
        />
      </div>
    </div>
  )
}

export default NewChooseLocation;