import React, { useEffect, useState } from 'react'
import './css/DisplayMap.css'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon, L, map } from 'leaflet'

// import { Item, LinkedList, testingData } from './linkedList'
// const testingData = require('../src/testing-data.js')
import testingData from './testing-data.js'
import useGenerateNewLocation from './hooks/useGenerateNewLocation'


const DisplayMap = () => {
  let data;

  const [centerPosition, setCenterPosition] = useState([46.78, -92.10])
  const [zoom, setZoom] = useState(6)
  const [locations, setLocations] = useState(null)

  const [generateIncident] = useGenerateNewLocation()

  useEffect(() => {
    setLocations(testingData)
    var map = L
    console.log(L)
  }, [])

  if (locations == null) {
    return (
      null
    )
  } else {
    return (
      <MapContainer key={'mapContainer'} center={centerPosition} zoom={zoom}>
        <TileLayer key={'tileLayer'}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {
          locations.map(item => {
            return (
              <Marker
                // change keys to incident number once real data is set up
                key={item.location.point.latitude}
                position={[
                  item.location.point.latitude,
                  item.location.point.longitude
                ]}
              />
            )
          })
        }
        
      </MapContainer>
    );
  }

  
}

export default DisplayMap;