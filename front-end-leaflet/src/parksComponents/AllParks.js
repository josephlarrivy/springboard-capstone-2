import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import '../css/AllParks.css'

import BackendApiRequest from "../backendApi";
import NParksServiceRequest from "../nationalParksApi";



const AllParks = ({showingParks, changeZoom}) => {

  useEffect(() => {
    changeZoom(3)
  }, [])

  return (
    <div>
      <h1>National Parks</h1>

      {showingParks &&
        showingParks.map(park => {
          return (
            <div
              key={park.parkCode}
              className="park-list-container"
            >


              <img
                className='park-image'
                src={park.images[0].url}
              ></img>
              <h4>{park.fullName}</h4>
              <Link to={`/park/${park.parkCode}`}>View Park</Link>



            </div>  
          )
        })
      }
    </div>
  )
}

export default AllParks;