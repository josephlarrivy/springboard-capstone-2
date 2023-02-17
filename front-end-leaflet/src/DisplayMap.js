import React, { useEffect, useState } from 'react'
import './DisplayMap.css'


import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import { Icon } from 'leaflet'

import { Item, LinkedList, testingData } from './linkedList'




const DisplayMap = () => {
  let data;

  const [centerPosition, setCenterPosition] = useState([46.78, -92.10])
  const [zoom, setZoom] = useState(10)
  const [events, setEvents] = useState(null)

  useEffect(() => {
    data = testingData.returnAll();
    data.map(item => {console.log(item.event.location.point.latitude)})
    setEvents(data)
  }, [])

  if (events == null) {
    return (
      <h2>loading</h2>
    )
  } else {
    return (
      <MapContainer center={centerPosition} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {
          events.map(item => {
            return (
              <Marker
                key={item.event.indicent_number}
                position={[
                  item.event.location.point.latitude,
                  item.event.location.point.longitude
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