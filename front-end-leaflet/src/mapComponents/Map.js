import React, { useEffect, useState }from "react";

import DisplayMap from "./DisplayMap";
import '../css/Map.css'

import NParksServiceRequest from "../nationalParksApi";



const Map = () => {

  const [centerPosition, setCenterPosition] = useState([36.0902, -80.7129])
  const [zoom, setZoom] = useState(4)

  const [showingParks, setShowingParks] = useState(null)

  useEffect(() => {
    const getInitialPins = async () => {
      let resp = await NParksServiceRequest.getAllParks(700)
      setShowingParks(resp)
    }
    getInitialPins()
  }, [])  

  return(
    <div className="map-page-container">
      <DisplayMap
        centerPosition={centerPosition}
        zoom={zoom}
        showingParks={showingParks}
      />
     
    </div>
  )
}

export default Map;