import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'

import '../css/ChooseStartLocationForm.css'


const ChooseStartLocationForm = ({setStartLocation, setGameState}) => {

  const [centerPosition, setCenterPosition] = useState([35, 6])
  const [zoom, setZoom] = useState(2)
  const [currentZoom, setCurrentZoom] = useState(2)
  const [instructions, setInstructions] = useState('instructions-1')


  const InspectMap = () => {
    const inspect = new useMap({
      click(e) {
        console.log(e)
      }
    })
    return null
    }
  



  // const LocationClickFinder = () => {
  //   const map = useMapEvents({
  //     click(e) {
  //       let {lat,lng} = e.latlng;
  //       let latLonArr = [lat, lng];
  //       console.log(e.latlng)
  //       console.log(currentZoom)
  //       if (instructions === 'instructions-2' &&
  //         currentZoom >=11
  //       ) {
  //         setStartLocation(latLonArr)
  //         setGameState('tutorialPhase')
  //       }
  //     },
  //   });
  //   return null;
  // };
    
  const nextInstructions = () => {
    if (instructions === 'instructions-1') {
      setInstructions('instructions-2')
    } else if (instructions === 'instructions-2') {
      setGameState('instructions-3')
    } else if (instructions === 'instructions-3') {
    }
  }


  if (instructions === 'instructions-1') {
    return (
      <div>
        <div className="instructions-1">
          <h1>Instructions</h1>
          <h4>Use the map to select your starting location. Zoom in and click where you would like to defend.</h4>
          <button onClick={nextInstructions}>Okay</button>
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
          <InspectMap />
          {/* <LocationClickFinder /> */}
        </MapContainer>
      </div>
    )
  } else if (instructions === 'instructions-2') {
    if (currentZoom <= 2) {
      return (
        <div>
          <div className="instructions-2">
            <p>Zoom in. Click to select location.</p>
            {/* <p>Your zoom level: {currentZoom}</p> */}
            {/* <button onClick={nextInstructions}>Yes</button> */}
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

            <InspectMap />
            {/* <LocationClickFinder /> */}
          </MapContainer>
        </div>
      )
    } else if (currentZoom <= 9) {
      return (
        <div>
          <div className="instructions-2">
            <p>Please zoom in closer to you desired location.</p>
            <p>Click to select.</p>
            {/* <p>Your zoom level: {currentZoom}</p> */}
            {/* <button onClick={nextInstructions}>Yes</button> */}
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

            <InspectMap />
            {/* <LocationClickFinder /> */}
          </MapContainer>
        </div>
      )
    } else if (currentZoom >= 10) {
      return (
        <div>
          <div className="instructions-2">
            <p>Choose this location?</p>
            {/* <p>Your zoom level: {currentZoom}</p> */}
            <button onClick={nextInstructions}>Yes</button>
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

            <InspectMap />
            {/* <LocationClickFinder /> */}
          </MapContainer>
        </div>
      )
    }







  }
    

  
}

export default ChooseStartLocationForm;