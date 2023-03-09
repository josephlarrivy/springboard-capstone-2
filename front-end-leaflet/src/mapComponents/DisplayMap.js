import React, { useEffect, useState } from 'react'
import '../css/DisplayMap.css'


import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { L, Icon } from 'leaflet'



// import { Item, LinkedList, testingData } from './unusedFiles/linkedlist'



const DisplayMap = () => {
  let data;

  const [centerPosition, setCenterPosition] = useState([46.78, -92.10])
  const [zoom, setZoom] = useState(6)
  // const [events, setEvents] = useState(null)

  useEffect(() => {
    // data = testingData.returnAll();
    // data.map(item => {console.log(item.event.location.point.latitude)})
    // setEvents(data)
  }, [])



  // if (events == null) {
  //   return (
  //     null
  //   )
  // } else {
    return (
      <>
        <MapContainer key={'mapContainer'} center={centerPosition} zoom={zoom}>
          <TileLayer key={'tileLayer'}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

        </MapContainer>
      </>
      
    );
  // }

  
}

export default DisplayMap;