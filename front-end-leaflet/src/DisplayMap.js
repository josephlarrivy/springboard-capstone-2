import React, { useEffect, useState } from 'react'
import './DisplayMap.css'


import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import { Icon } from 'leaflet'

import { Item, LinkedList, testingData } from './linkedList'




const DisplayMap = () => {

  const [position, setPosition] = useState([46.78, -92.10])
  const [zoom, setZoom] = useState(10)

  useEffect(() => {
    let data = testingData.returnAll();
    console.log(data)
  }, [])

  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default DisplayMap;