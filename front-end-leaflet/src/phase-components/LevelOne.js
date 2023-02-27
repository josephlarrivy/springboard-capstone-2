import React, { useEffect, useState } from "react";

import '../css/LevelOne.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";

import useGenerateNewLanding from '../hooks/useGenerateNewLanding.js'

const LevelOne = ({ startLocation, zoom, setGameState, baseLocation, landings, setLandings, setAddLanding }) => {

  const [subphase, setSubphase] = useState()
  const [alertCardInfo, setAlertCardInfo] = useState('')
  const [alertCardButtonFunction, setAlertCardButtonFunction] = useState(false)
  const [generateLanding] = useGenerateNewLanding()


  useEffect(() => {
    console.log(landings)
    console.log('reload')
    setSubphase('levelOne-1')
    setAlertCardButtonFunction(alertCardButtonCallback2)
  }, [])




  const mapClick = (clickLocation) => {
    if (subphase === 'pickBaseLocation') {
      setAlertCardInfo({ heading: 'Confirm base location?', text: null })
      setAlertCardButtonFunction(() => alertCardButtonCallback2)
    }
  }

  



  const alertCardButtonCallback2 = () => {
    // addNewLanding()
    console.log('checkpoint 3')
    setAlertCardInfo({
      heading: 'UFO Sighting',
      text: 'An unidentified flying object has been spotted in the skies above.',
      button: 'Next'
    })
    setAlertCardButtonFunction(() => alertCardButtonCallback3)
  }

  const alertCardButtonCallback3 = () => {
    setAddLanding(true)
    setAlertCardInfo({
      heading: 'TEST1',
      text: 'test1',
      button: 'test1'
    })
    setAlertCardButtonFunction(() => alertCardButtonCallback3)
  }

  const alertCardButtonCallback4 = () => {
    setAddLanding(true)
    setAlertCardInfo({
      heading: 'TEST2',
      text: 'test2',
      button: 'test2'
    })
    setAlertCardButtonFunction(() => alertCardButtonCallback4)
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
          startLocation={startLocation}
          zoom={zoom}
          mapClick={mapClick}
          baseLocation={baseLocation}
          landings={landings}
        />
      </div>
    </div>
  )
}

export default LevelOne;