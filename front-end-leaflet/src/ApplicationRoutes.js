import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";
import AllParks from "./parksComponents/AllParks";
import Park from "./Park";


const ApplicationRoutes = ({token, setToken, showingParks, setShowingParks, setZoom}) => {

  useEffect(() => {
    console.log('ApplicationRoutes reload')
  }, [])


  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          {/* <Route exact path="/map" element={<Map /> } /> */}
          <Route exact path="/register"
            element={
            <RegisterForm
            setToken={setToken}/>}
          />
          <Route exact path="/login"
            element={<LoginForm 
            setToken={setToken} />}
          />

          <Route exact path="/allParks" element={<AllParks
            showingParks={showingParks}
          />} />

        <Route 
          exact path="/park/:code"
          element={<Park 
            showingParks={showingParks}
            setShowingParks={setShowingParks}
            setZoom={setZoom}
          />}
        />


        </Routes>

    </div>
  )
}

export default ApplicationRoutes;