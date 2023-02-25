import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import DisplayMap from './DisplayMap';
import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";
// import NewDisplayMap from "./NewDisplayMap";

const ApplicationRoutes = ({setContextToken}) => {

  return (
    <div>
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/map" element={<DisplayMap /> } />
          {/* <Route exact path="/map2" element={<NewDisplayMap />} /> */}
          <Route exact path="/register"
            element={<RegisterForm setContextToken={setContextToken}/>} />
          <Route exact path="/login"
            element={<LoginForm setContextToken={setContextToken} />} />

        </Routes>

    </div>
  )
}

export default ApplicationRoutes;