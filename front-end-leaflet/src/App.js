import './css/App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import DisplayMap from './DisplayMap';
import NavBar from './NavBar';
import ApplicationRoutes from './ApplicationRoutes';
import LoadingSpinner from './loader/LoadingSpinner'




function App() {

  const [loading, setLoading] = useState(true)

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ApplicationRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
