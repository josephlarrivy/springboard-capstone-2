// import React, { useState, useEffect } from "react";
// import ReactMapGL from 'react-map-gl'

// import tokens from './tokens'

// const REACT_APP_MAPBOX_TOKEN = tokens.REACT_APP_MAPBOX_TOKEN


// const Map = () => {
//   const [viewPort, setViewPort] = useState(
//     {
//     latitude: 46.7867,
//     longitude: 92.1005,
//     width: "50vw",
//     height: "50vh",
//     zoom: 10
//     }
//     );

//   return(
//     <div>
//       <ReactMapGL
//         {...viewPort}
//         mapboxAccessToken="sk.eyJ1Ijoiam9zZXBobGFycml2eSIsImEiOiJjbGU1emJib2owYzJqM25wMzM4c3FsMjd4In0.Vb_va-iuKyCjHukHBcwzkQ"
//         >
//       </ReactMapGL> 
//     </div>
//   )
// } 

// export default Map;



















import React, { useState, useEffect } from "react";
import mapboxgl, { MapboxDirections } from "mapbox-gl";

import './Map.css'




const Map = () => {

  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXBobGFycml2eSIsImEiOiJjbGU1ejB5ZXgwMHFsM3VwcHc1dXh4eDNzIn0.Vz4WungXOeT2X1k9bMXnVQ';
  const map = new mapboxgl.Map({
    container: "map",
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-79.4512, 43.6568],
    zoom: 13
  });

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken
    }),
    'top-left'
  );



  return (
    <div id="map"></div>
  )
}

export default Map;