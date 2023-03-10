import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
// import DisplayMap from './mapComponents/DisplayMap';
import Map from "./unusedFiles/Map";
import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";
import AllParks from "./parksComponents/AllParks";
import Park from "./Park";


const ApplicationRoutes = ({contextToken, setContextToken, showingParks}) => {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          {/* <Route exact path="/map" element={<Map /> } /> */}
          <Route exact path="/register"
            element={
            <RegisterForm
            setContextToken={setContextToken}/>}
          />
          <Route exact path="/login"
            element={<LoginForm 
            setContextToken={setContextToken} />}
          />

          <Route exact path="/allParks" element={<AllParks
            showingParks={showingParks}
          />} />

        <Route exact path="/park/:code" element={<Park/>} />


        </Routes>

    </div>
  )
}

export default ApplicationRoutes;