import React, { Fragment } from "react";

import { Route, Routes } from 'react-router-dom';

import DisplayMap from './DisplayMap';




const ApplicationRoutes = () => {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<DisplayMap />} />
          <Route exact path="/map" element={<DisplayMap /> } />
        </Routes>
    </div>
  )
}

export default ApplicationRoutes;