import React, { useEffect, useState } from 'react'
import './css/DisplayMap.css'

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { Icon, L, map } from 'leaflet'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'
import { homeIcon, shipIcon1 } from './icons/Icons'


const DisplayMap = ({ startLocation, zoom, mapClick, baseLocation, landings}) => {

  const [centerPosition, setCenterPosition] = useState(null)
  

  useEffect(() => {
    setCenterPosition(startLocation)
    // console.log(baseLocation)
  }, [])

  const LocationFinder = () => {
    const map = useMapEvents({
      click(e) {
        let { lat, lng } = e.latlng;
        let latLonArr = [lat, lng];
        // console.log(latLonArr);
        mapClick(latLonArr)
      },
    });
    return null;
  };

  if (centerPosition === null) {
    return (
      <>
        <h1>test</h1>
      </>
    )
  }

  return (
    <div>
      <MapContainer
        key={'mapContainer'}
        center={centerPosition}
        zoom={zoom}
        >
        <TileLayer key={'tileLayer'}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {baseLocation &&
          <Marker
          key={'baseLocation'}
          position={baseLocation}
          icon={homeIcon}
          />}
        
        {landings && 
          landings.map(landing => {
            return (
              <Marker
                key={[
              landing.coordinates[0],
              landing.coordinates[1]]}
                position={[
                  landing.coordinates[0],
                  landing.coordinates[1]
                ]}
                icon={shipIcon1}
              />
            )
          })
        }
        <LocationFinder />
      </MapContainer>
    </div>
  );
  
}

export default DisplayMap;