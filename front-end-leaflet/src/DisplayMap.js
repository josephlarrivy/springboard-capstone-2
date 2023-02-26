import React, { useEffect, useState } from 'react'
import './css/DisplayMap.css'

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { Icon, L, map } from 'leaflet'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'
import { testIcon } from './icons/Icons'


const DisplayMap = ({ startLocation, zoom, mapClick, baseLocation}) => {

  const [centerPosition, setCenterPosition] = useState(null)
  
  useEffect(() => {
    setCenterPosition(startLocation)
    console.log(baseLocation)
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
          icon={testIcon}
          />}
        
        {/* {
          incidents.map(item => {
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
        } */}
        <LocationFinder />
      </MapContainer>
    </div>
  );

  
}

export default DisplayMap;