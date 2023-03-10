import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
// import DisplayMap from './mapComponents/DisplayMap';
import Map from "./mapComponents/Map";
import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";


const ApplicationRoutes = ({contextToken, setContextToken}) => {

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

        </Routes>

    </div>
  )
}

export default ApplicationRoutes;