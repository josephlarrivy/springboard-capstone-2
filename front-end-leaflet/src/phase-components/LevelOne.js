import React, { useEffect, useState } from "react";

import '../css/LevelOne.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";

import useGenerateNewLanding from '../hooks/useGenerateNewLanding.js'

const LevelOne = ({ startLocation, zoom, setGameState, baseLocation }) => {

  const [subphase, setSubphase] = useState()
  const [alertCardInfo, setAlertCardInfo] = useState('')
  const [alertCardButtonFunction, setAlertCardButtonFunction] = useState(false)
  const [generateLanding] = useGenerateNewLanding()
  const [landings, setLandings] = useState(
    [
      {
        'shipLevel': 1,
        'coordinates': [
          (baseLocation[0] - (1/20)),
          (baseLocation[1] + (1/4))
        ]
      }
    ]
  )


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
    console.log('checkpoint 1')
  }

  const addNewLanding = () => {
    let newLanding = generateLanding(startLocation, 1)


    

   
      let landingsArr = [];
      landings.map(l => {
        landingsArr.push(l)
      });
      landingsArr.push(newLanding);
      console.log(landingsArr)
      setLandings(landingsArr)

    console.log(landings)
    console.log('checkpoint 2')
  }



  const alertCardButtonCallback2 = () => {
    addNewLanding()
    console.log('checkpoint 3')
    setAlertCardInfo({
      heading: 'UFO Sighting',
      text: 'An unidentified flying object has been spotted in the skies above.',
      button: 'Next'
    })
    setAlertCardButtonFunction(() => alertCardButtonCallback3)
  }

  const alertCardButtonCallback3 = () => {
    addNewLanding()
    console.log('checkpoint 4')
    setAlertCardInfo({
      heading: 'TEST',
      text: 'test',
      button: 'test'
    })
    setAlertCardButtonFunction(() => alertCardButtonCallback3)
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