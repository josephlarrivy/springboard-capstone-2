import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'

import '../css/ChooseStartLocationForm.css'


const ChooseStartLocationForm = ({startLocation, setStartLocation, setGameState, zoom, setZoomFunction}) => {

  const [centerPosition, setCenterPosition] = useState([35, 6])
  // const [zoom, setZoom] = useState(4)
  // const [currentZoom, setCurrentZoom] = useState(2)
  const [instructions, setInstructions] = useState('instructions-1')
  const [reload, setReload] = useState(0)
  const [scrollwheelZoom, setScrollwheelZoom] = useState(null)

  useEffect(() => {
    console.log(' ')
    console.log('rerender')
    console.log(reload)
    // if (zoom === null) {
    //   setZoom(2)
    // }
  }, [])


  const LocationClickFinder = () => {
    const map = useMapEvents({
      click(e) {
        let {lat,lng} = e.latlng;
        let latLonArr = [lat, lng];
        setScrollwheelZoom(e.target._zoom)
        console.log('zoom:', scrollwheelZoom)
        // console.log(e.latlng)
        // console.log(zoom)
        // setZoomFunction(scrollwheelZoom)
        setReload(reload+1)
        if (instructions === 'instructions-2') {
          // setZoom(15)
          setStartLocation(latLonArr)
          console.log('startLoc:', latLonArr)
          setInstructions('instructions-3')
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
        setGameState('tutorialPhase')
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
            {/* <button onClick={nextInstructions}>Okay</button> */}
            {/* <button onClick={previousInstructions}>Back</button> */}
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
    console.log('instructions-3')
    if (scrollwheelZoom < 9) {
      return (
        <div>
          <div className="instructions-2">
            <p>Please zoom closer to choose a start location.</p>
            <button onClick={nextInstructions}>Okay</button>
            <button onClick={previousInstructions}>Back</button>
          </div>
          <MapContainer
            className="choose-start-location-map"
            key={'mapContainer'}
            center={centerPosition}
            zoom={20}
          >
            <TileLayer key={'tileLayer'}
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LocationClickFinder />
          </MapContainer>
        </div>
      )
    } else {
      return (
        <div>
          <div className="instructions-2">
            <p>Click to center map.</p>
            <button onClick={nextInstructions}>Next</button>
            <button onClick={previousInstructions}>Back</button>
          </div>
          <MapContainer
            className="choose-start-location-map"
            key={'mapContainer'}
            center={centerPosition}
            zoom={20}
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
    

  
}

export default ChooseStartLocationForm;