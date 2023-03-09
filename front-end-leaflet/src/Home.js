import React, { useState, useEffect, useContext } from "react";

import BackendApiRequest from "./backendApi";
import NParksServiceRequest from "./nationalParksApi";
import TokenContext from "./TokenContext";
import useLocalStorage from "./hooks/useLocalStorage";



const Home = () => {

  const token = useContext(TokenContext);

  const [localStoreToken, localRemoveToken, localRetrieveToken, localDecodeToken] = useLocalStorage()

  const handleClick1 = () => {
    console.log('click1')
    let token = localRetrieveToken()
    console.log(token)
  }

  const handleClick2 = async () => {
    console.log('click2')
  }

  const handleClick3 = () => {
    console.log('click3')
    localRemoveToken()
  }

  const handleClick4 = async () => {
    console.log('click4')
    let resp = await NParksServiceRequest.test()
    console.log(resp)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick1}>test</button>
      <button onClick={handleClick2}>test2</button>
      <button onClick={handleClick3}>test3</button>
      <button onClick={handleClick4}>Parks Request</button>
    </div>
  )
}

export default Home;