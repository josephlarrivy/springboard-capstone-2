import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

import '../css/TutorialPhase.css'
import DisplayMap from "../DisplayMap";


const TutorialPhase = ({ startLocation, zoom, setGameState, baseLocation, setBaseLocation }) => {

  const [subphase, setSubphase] = useState('pickBaseLocation')

  useEffect(() => {
    console.log(subphase)
  }, [])


  const mapClick = (clickLocation) => {
    if (subphase === 'pickBaseLocation') {
      console.log(clickLocation)
      setBaseLocation(clickLocation)
    }
  }

  if (subphase === 'pickBaseLocation') {
    return (
      <div>
        <div className="alert-card">
          <h4>Choose a base location.</h4>
          <button>test</button>
        </div>
        <div className="display-map">
          <DisplayMap startLocation={startLocation} zoom={zoom} mapClick={mapClick}/>
        </div>
      </div>
    )
  }  
}

export default TutorialPhase;