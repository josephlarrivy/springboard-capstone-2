import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

import '../css/TutorialPhase.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";


const TutorialPhase = ({ startLocation, setStartLocation, zoom, setGameState, baseLocation, setBaseLocation }) => {

  const [subphase, setSubphase] = useState('pickBaseLocation')
  const [alertCardInfo, setAlertCardInfo] = useState('')
  const [alertCardButtonFunction, setAlertCardButtonFunction] = useState(false)

  useEffect(() => {
    setAlertCardInfo({heading:'Confirm your home base location by clicking on the map', text:null, button:null})
    setAlertCardButtonFunction(false)
  }, [])

  const mapClick = (clickLocation) => {
    if (subphase === 'pickBaseLocation') {
      setBaseLocation(clickLocation)
      setAlertCardInfo({
        heading: 'Confirm base location?',
        text: null,
        button: 'Confirm'
      })
      setAlertCardButtonFunction(alertCardButtonCallback1)
    }
  }

  const alertCardButtonCallback1 = () => {
    setGameState('levelOne')
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

export default TutorialPhase;