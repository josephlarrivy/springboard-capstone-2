import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router';

import BackendApiRequest from "./backendApi";
import NParksServiceRequest from "./nationalParksApi";
import TokenContext from "./TokenContext";



const Park = () => {

  const parkCode = useParams();
  const [parkData, setParkData] = useState(null)

  useEffect(() => {
    const getSingleParkData = async () => {
      let data = await NParksServiceRequest.getSingleParkData(parkCode)
      setParkData(data)
      // console.log(parkData)

    }
    getSingleParkData()
  }, [])

  if (parkData === null) {
    return (
      <h1>no data</h1>
    )
  } else {
    return (
      <div>
        <h1>data</h1>
      </div>
    )
  }
  
}

export default Park;