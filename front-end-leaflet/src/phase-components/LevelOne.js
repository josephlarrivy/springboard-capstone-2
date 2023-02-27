import React, { useEffect, useState } from "react";

import '../css/LevelOne.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";
import useGenerateNewLanding from "../hooks/useGenerateNewLanding";


const LevelOne = ({ startLocation, zoom, setGameState, baseLocation, generateNewIncident, landings, setLandings }) => {

  const [subphase, setSubphase] = useState('levelOne-1')
  const [alertCardInfo, setAlertCardInfo] = useState('')
  const [alertCardButtonFunction, setAlertCardButtonFunction] = useState(false)
  const [generateLanding] = useGenerateNewLanding()

  useEffect(() => {
    console.log('reload')
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
    let newLanding = generateLanding(baseLocation, 1)
    if (landings === null) {
      setLandings([newLanding])
    } else {
      setLandings([...landings, newLanding])
    }

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