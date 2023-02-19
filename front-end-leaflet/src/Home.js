import React, { useState, useEffect, useContext } from "react";

import BackendApiRequest from "./api";
import TokenContext from "./TokenContext";



const Home = () => {

  const token = useContext(TokenContext);

  const handleClick = () => {
    console.log(token);
    BackendApiRequest.test('data')
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>test</button>
    </div>
  )
}

export default Home;