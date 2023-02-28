import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'

import '../css/ChooseStartLocationForm.css'


const ChooseStartLocationForm = ({startLocation, setStartLocation, setGameState}) => {

  const [centerPosition, setCenterPosition] = useState([35, 6])
  const [zoom, setZoom] = useState(2)
  const [currentZoom, setCurrentZoom] = useState(2)
  const [instructions, setInstructions] = useState('instructions-1')

  const LocationClickFinder = () => {
    const map = useMapEvents({
      click(e) {
        let {lat,lng} = e.latlng;
        let latLonArr = [lat, lng];
        console.log(e.latlng)
        console.log(zoom)
        if (instructions === 'instructions-2') {
          setStartLocation(latLonArr)
          // setGameState('tutorialPhase')
        }
      },
    });
    return null;
  };
    
  const nextInstructions = () => {
    if (instructions === 'instructions-1') {
      setInstructions('instructions-2')
    } else if (instructions === 'instructions-2') {
      setInstructions('instructions-3')
    } else if (instructions === 'instructions-3') {
      if (!centerPosition) {
        setInstructions('instructions-2')
      } else {
        // setGameState('tutorialPhase')
        console.log('test')
      }
    }
  }

  const previousInstructions = () => {
    if (instructions === 'instructions-2') {
      setInstructions('instructions-1')
    } else if (instructions === 'instructions-3') {
      setGameState('instructions-2')
    } else {
      setInstructions(instructions)
    }
  }


  if (instructions === 'instructions-1') {
    return (
      <div>
        <div className="instructions-1">
          <h1>Instructions</h1>
          <h4>Use the map to select your starting location. Zoom in and click where you would like to defend.</h4>
          <button onClick={nextInstructions}>Okay</button>
          <button onClick={previousInstructions}>Back</button>
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
          <LocationClickFinder />
        </MapContainer>
      </div>
    )
  } else if (instructions === 'instructions-2') {

      return (
        <div>
          <div className="instructions-2">
            <p>Zoom in. Click to center map on start location.</p>
            <button onClick={nextInstructions}>Okay</button>
            <button onClick={previousInstructions}>Back</button>
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

            <LocationClickFinder />
          </MapContainer>
        </div>
      )
  } else if (instructions === 'instructions-3') {
    console.log('test')
    return (
      <div>
        <div className="instructions-2">
          <p>Test</p>
          <button onClick={nextInstructions}>Okay</button>
          <button onClick={previousInstructions}>Back</button>
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

          <LocationClickFinder />
        </MapContainer>
      </div>
    )
  }
    

  
}

export default ChooseStartLocationForm;