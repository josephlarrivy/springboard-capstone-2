import React, { useEffect, useState } from 'react'
import '../css/DisplayMap.css'


import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import { L, Icon } from 'leaflet'


const DisplayMap = ({ centerPosition, zoom }) => {


  useEffect(() => {
    
  }, [])



  return (
    <>
      <MapContainer
      key={'mapContainer'}
      center={centerPosition}
      zoom={zoom}>
        <TileLayer
          key={'tileLayer'}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}

export default DisplayMap;