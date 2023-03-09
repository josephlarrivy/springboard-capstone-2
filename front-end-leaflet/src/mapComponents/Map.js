import React, { useEffect, useState }from "react";

import DisplayMap from "./DisplayMap";
import Menu from "./Menu";
import '../css/Map.css'

import NParksServiceRequest from "../nationalParksApi";



const Map = () => {

  const [centerPosition, setCenterPosition] = useState([38.0902, -95.7129])
  const [zoom, setZoom] = useState(5)

  const [showingParks, setShowingParks] = useState(null)

  useEffect(() => {
    const getInitialPins = async () => {
      let resp = await NParksServiceRequest.getAllParks()
      console.log(resp)
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
      <Menu

      />
    </div>
  )
}

export default Map;