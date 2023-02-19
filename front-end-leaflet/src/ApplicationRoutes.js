import React, { Fragment } from "react";

import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import DisplayMap from './DisplayMap';
import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";


const ApplicationRoutes = ({setToken}) => {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/map" element={<DisplayMap /> } />
          <Route exact path="/register"
            element={<RegisterForm setToken={setToken}/>} />
        <Route exact path="/login"
          element={<LoginForm setToken={setToken} />} />
        </Routes>
    </div>
  )
}

export default ApplicationRoutes;