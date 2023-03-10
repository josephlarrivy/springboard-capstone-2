import React, { useEffect, useState }from "react";

import DisplayMap from "../mapComponents/DisplayMap";
import '../css/Map.css'




const Map = ({centerPosition, zoom, showingParks}) => {

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