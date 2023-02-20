import React, { useState, useEffect, useContext } from "react";

import BackendApiRequest from "./api";
import TokenContext from "./TokenContext";
import useLocalStorage from "./hooks/useLocalStorage";


const Home = () => {

  const token = useContext(TokenContext);

  const [localStoreToken, localRemoveToken, localRetrieveToken, localDecodeToken] = useLocalStorage()

  const handleClick = () => {
    console.log(token);
    // localStoreToken(token)
  }

  const handleClick2 = async () => {
    const getTokenFromLocalStorage = await localDecodeToken()
    console.log(getTokenFromLocalStorage)
  }

  const handleClick3 = () => {
    localRemoveToken()
    const getTokenFromLocalStorage = localRemoveToken()
    console.log(getTokenFromLocalStorage)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>test</button>
      <button onClick={handleClick2}>test2</button>
      <button onClick={handleClick3}>test3</button>
    </div>
  )
}

export default Home;