import React, { Fragment } from "react";

import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import DisplayMap from './DisplayMap';
import RegisterForm from "./forms/RegisterForm";



const ApplicationRoutes = () => {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/map" element={<DisplayMap /> } />
          <Route exact path="/register" element={<RegisterForm />} />
        </Routes>
    </div>
  )
}

export default ApplicationRoutes;