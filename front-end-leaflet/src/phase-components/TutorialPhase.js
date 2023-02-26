import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

import '../css/TutorialPhase.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";


const TutorialPhase = ({ startLocation, zoom, setGameState, baseLocation, setBaseLocation }) => {

  const [subphase, setSubphase] = useState('pickBaseLocation')
  const [alertCardInfo, setAlertCardInfo] = useState('')

  useEffect(() => {
    console.log(subphase)
    setAlertCardInfo({heading:'Confirm your home base location by clicking on the map', text:null})
  }, [])

  const mapClick = (clickLocation) => {
    if (subphase === 'pickBaseLocation') {
      setAlertCardInfo({ heading: 'Confirm base location?', text: null })
      setBaseLocation(clickLocation)
    }
  }

 
  return (
    <div>
      <div>
        <AlertCard alertCardInfo={alertCardInfo}/>
      </div>
      <div className="display-map">
        <DisplayMap startLocation={startLocation} zoom={zoom} mapClick={mapClick} baseLocation={baseLocation}/>
      </div>
    </div>
  )
}

export default TutorialPhase;