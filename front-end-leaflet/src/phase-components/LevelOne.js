import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

import '../css/LevelOne.css'
import DisplayMap from "../DisplayMap";
import AlertCard from "../AlertCard";


const LevelOne = ({ startLocation, zoom, setGameState, baseLocation, setBaseLocation }) => {

  const [subphase, setSubphase] = useState('pickBaseLocation')
  const [alertCardInfo, setAlertCardInfo] = useState('')

  useEffect(() => {
    // console.log(subphase)
    setAlertCardInfo({ heading: 'UFO Sighting', text: 'There have been reports of a UFO sighting in the skies nearby.' })
  }, [])

  const mapClick = (clickLocation) => {
    
  }

  const alertCardButtonFunction = () => {
    console.log('test')
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