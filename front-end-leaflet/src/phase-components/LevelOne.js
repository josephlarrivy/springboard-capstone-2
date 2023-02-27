import React, { useEffect, useState } from "react";

import '../css/LevelOne.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";

import useGenerateNewLanding from '../hooks/useGenerateNewLanding.js'

const LevelOne = ({ startLocation, zoom, setGameState, baseLocation }) => {

  const [subphase, setSubphase] = useState()
  const [alertCardInfo, setAlertCardInfo] = useState('')
  const [alertCardButtonFunction, setAlertCardButtonFunction] = useState(false)
  const [landings, setLandings] = useState()
  const [generateLanding] = useGenerateNewLanding()


  useEffect(() => {
    console.log('reload')
    setSubphase('levelOne-1')
    // setAlertCardButtonFunction(() => alertCardButtonCallback1)
  }, [])

  const mapClick = (clickLocation) => {
    // if (subphase === 'pickBaseLocation') {
    //   setAlertCardInfo({ heading: 'Confirm base location?', text: null })
    //   setAlertCardButtonFunction(() => alertCardButtonCallback1)
    // }
    console.log('checkpoint 1')
  }


  const addNewLanding = () => {
    // const newLanding = generateLanding(startLocation, 1)
    // if (landings == null) {
    //   setLandings([newLanding])
    // } else {
    //   let landingsArr = [];
    //   landings.map(l => {
    //     landingsArr.push(l)
    //   });
    //   landingsArr.push(newLanding);
    //   setLandings(landingsArr)
    // }
    // console.log(landings)
    console.log('checkpoint 2')
  }

  const alertCardButtonCallback1 = () => {
    // setSubphase('levelOne-2')
    // addNewLanding()
    console.log('checkpoint 3')
  }




  if (subphase === 'levelOne-1') {
    setAlertCardInfo({
      heading: 'UFO Sighting',
      text: 'An unidentified flying object has been spotted in the skies above.',
      button: 'Next'
    })
    setAlertCardButtonFunction(() => console.log('test'))
  } else if (subphase === 'levelOne-2') {
    setAlertCardInfo({
      heading: 'test',
      text: 'test',
      button: 'test'
    })
    setAlertCardButtonFunction(() => console.log('test2'))
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