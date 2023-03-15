import React, { Fragment, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
// import DisplayMap from './mapComponents/DisplayMap';
import Map from "./unusedFiles/Map";
import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";
import AllParks from "./parksComponents/AllParks";
import Park from "./Park";


const ApplicationRoutes = ({token, setToken, showingParks}) => {


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
          element={<Park />}
        />


        </Routes>

    </div>
  )
}

export default ApplicationRoutes;