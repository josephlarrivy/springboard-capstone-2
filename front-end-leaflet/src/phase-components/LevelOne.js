import React, { useEffect, useState } from "react";

import '../css/LevelOne.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";


const LevelOne = ({ startLocation, zoom, setGameState, baseLocation, generateNewIncident, incidents, setIncidents }) => {

  const [subphase, setSubphase] = useState('levelOne-1')
  const [alertCardInfo, setAlertCardInfo] = useState('')
  const [alertCardButtonFunction, setAlertCardButtonFunction] = useState(false)

  useEffect(() => {
    setAlertCardInfo({
      heading: 'UFO Sighting',
      text: 'An unidentified flying object has been spotted in the skies above.',
      button: 'Next'
    })
    setAlertCardButtonFunction(() => alertCardButtonCallback1)
  }, [])

  const mapClick = (clickLocation) => {
    // if (subphase === 'pickBaseLocation') {
    //   setAlertCardInfo({ heading: 'Confirm base location?', text: null })
    //   setAlertCardButtonFunction(() => alertCardButtonCallback1)
    // }
  }

  const alertCardButtonCallback1 = () => {
    setSubphase('levelOne-2')
    let newIncident = generateNewIncident(baseLocation, 1)
    console.log(newIncident)
    // setIncidents()
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
        />
      </div>
    </div>
  )
}

export default LevelOne;