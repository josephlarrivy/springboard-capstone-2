import './css/App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import DisplayMap from './DisplayMap';
import NavBar from './NavBar';
import ApplicationRoutes from './ApplicationRoutes';
import LoadingSpinner from './loader/LoadingSpinner'

import TokenContext from './TokenContext';


function App() {

  const [loading, setLoading] = useState(true)
  const [contextToken, setContextToken] = useState(null)

  return (
    <div>
      <TokenContext.Provider value={contextToken}>
        <BrowserRouter>
          <NavBar />
          <ApplicationRoutes setContextToken={setContextToken}/>
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
