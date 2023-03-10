import React, { useState, useEffect, useContext } from "react";

import BackendApiRequest from "../backendApi";
import NParksServiceRequest from "../nationalParksApi";
import TokenContext from "../TokenContext";



const AllParks = () => {

  const token = useContext(TokenContext);

  useEffect(() => {
    const getAllParks = async () => {
      let resp = await NParksServiceRequest.getAllParks(700)
    }
    getAllParks()
  }, [])

  const handleClick1 = () => {
    console.log('click1')
    
  }

  return (
    <div>
      <h1>National Parks</h1>
      <p>qwd qw d qwdqwd q w d qw d qw dwqdqw qwd qw d qwdqwd q w d qw d qw dwqdqw qwd qw d qwdqwd q w d qw d qw dwqdqw qwd qw d qwdqwd q w d qw d qw dwqdqw qwd qw d qwdqwd q w d qw d qw dwqdqw</p>
      <button onClick={handleClick1}>test</button>
    </div>
  )
}

export default AllParks;