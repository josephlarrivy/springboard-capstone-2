import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

import '../css/ChooseStartLocationForm.css'


const ChooseStartLocationForm = ({setStartLocation, setGameState}) => {

  const [centerPosition, setCenterPosition] = useState([35, 6])
  const [zoom, setZoom] = useState(2)
  const [instructions, setInstructions] = useState('on')

  const navigate = useNavigate();

  const LocationFinder = () => {
    const map = useMapEvents({
      click(e) {
        let {lat,lng} = e.latlng
        setStartLocation([lat, lng])
        setGameState('levelOne')
      },
    });
    return null;
  };
    
  const turnInstructionsOff = () => {
    setInstructions('off')
  }


  if (instructions === 'on') {
    return (
      <div>
        <div className="choose-start-location-instructions">
          <h1>Instructions</h1>
          <h4>Use the map to select your starting location. Zoom in and click where you would like to defend.</h4>
          <button onClick={turnInstructionsOff}>Okay</button>
        </div>
        <MapContainer
          className="choose-start-location-map"
          key={'mapContainer'}
          center={centerPosition}
          zoom={zoom}
        >
          <TileLayer key={'tileLayer'}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    )
  } else if (instructions === 'off') {
    return (
      <div>
        <MapContainer
          className="choose-start-location-map"
          key={'mapContainer'}
          center={centerPosition}
          zoom={zoom}
        >
          <TileLayer key={'tileLayer'}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationFinder />
        </MapContainer>
      </div>
    )
  }

  
}

export default ChooseStartLocationForm;