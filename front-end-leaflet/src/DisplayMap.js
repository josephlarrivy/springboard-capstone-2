import React, { useEffect, useState } from 'react'
import './css/DisplayMap.css'

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { Icon, L, map } from 'leaflet'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'

import testingData from './testing-data.js'
import useGenerateNewLocation from './hooks/useGenerateNewLocation'
import useGetLatLon from './hooks/useGetLatLon'

const DisplayMap = () => {
  let data;

  const [centerPosition, setCenterPosition] = useState([46.78, -92.10])
  const [zoom, setZoom] = useState(6)
  const [locations, setLocations] = useState(null)

  const [requestLatLon] = useGetLatLon()
  const [generateIncident] = useGenerateNewLocation()


  const testingGetData = async () => {
    let test = await requestLatLon()
    console.log(test)
  }
  

  useEffect(() => {
    setLocations(testingData)
  }, [])

  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
      },
    });
    return null;
  };

  

  if (locations == null) {
    return (
      null
    )
  } else {
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
          <LocationFinderDummy />
        </MapContainer>
        <button onClick={testingGetData}>test</button>
      </div>
    );
  }

  
}

export default DisplayMap;