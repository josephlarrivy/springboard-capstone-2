import React, { useState }from "react";

import DisplayMap from "./DisplayMap";
import Menu from "./Menu";
import '../css/Map.css'




const Map = () => {

  const [centerPosition, setCenterPosition] = useState([38.0902, -95.7129])
  const [zoom, setZoom] = useState(5)


  return(
    <div className="map-page-container">
      <DisplayMap
        centerPosition={centerPosition}
        zoom={zoom}
      />
      <Menu

      />
    </div>
  )
}

export default Map;