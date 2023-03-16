import React, { useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import '../css/DisplayMap.css'


import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import { L, Icon } from 'leaflet'


const DisplayMap = ({ centerPosition, zoom, setZoom, changeZoom, showingParks, setShowingParks}) => {
  


  useEffect(() => {
    console.log('DisplayMap reloaded')
    console.log(zoom)
  }, [])

  // useEffect(() => {
  //   // console.log(showingParks && showingParks.length)
  //   if (!showingParks) {
  //     console.log('!showingParks')
  //   } else if (showingParks.length === 1) {
  //     console.log('length === 1')
  //     changeZoom(25)
  //     // console.log(zoom)
  //   } else {
  //     console.log('length > 1')
  //     changeZoom(15)
  //     // console.log(zoom)
  //   }
  // }, [showingParks])



  return (
    <div className='display-map-container'>
      <MapContainer
      key={'mapContainer'}
      center={centerPosition}
      zoom={zoom}>
        <TileLayer
          key={'tileLayer'}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />



        {showingParks &&
          showingParks.map(park => {
            return (
              <Marker
                key={park.parkCode}
                position={[
                  park.latitude,
                  park.longitude
                ]}
              >
                <Popup>
                  <h4>{park.fullName}</h4>

                  <div className='popup-image-div'>
                    <img
                      className='popup-image'
                      src={park.images[0].url}
                    ></img>
                  <Link
                    to={`/park/${park.parkCode}`
                    }>test
                  </Link>
                  </div>

                    
                  <div className='popup-description-div'>
                    <p className='popup-description'>{park.description}</p>
                  </div>
                </Popup>
              </Marker>
            )
          })
        }


        
      </MapContainer>
    </div>
  );
}

export default DisplayMap;