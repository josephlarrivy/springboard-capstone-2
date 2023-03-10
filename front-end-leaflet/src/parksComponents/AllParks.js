import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, Route, Routes } from 'react-router-dom';


import BackendApiRequest from "../backendApi";
import NParksServiceRequest from "../nationalParksApi";
import TokenContext from "../TokenContext";



const AllParks = ({showingParks}) => {

  // useEffect(() => {
  //   console.log(showingParks)
  // }, [])

  // const parkClick = () => {
  //   console.log('click')
  // }

  return (
    <div>
      <h1>National Parks</h1>

      {showingParks &&
        showingParks.map(park => {
          return (
            <div
              key={park.parkCode}
              className="park-list-container"
              // onClick={parkClick}
            >
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