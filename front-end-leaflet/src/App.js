import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'



function App() {

  const [position, setPosition] = useState([51.505, -0.09])
  const [zoom, setZoom] = useState(10)

  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
    // <div className="App">
    //   <div>map</div>
    // </div>
  );
}

export default App;
