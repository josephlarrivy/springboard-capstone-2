import './App.css';
import React, { useState } from 'react'

import DisplayMap from './DisplayMap';
import LoadingSpinner from './loader/LoadingSpinner'




function App() {

  const [loading, setLoading] = useState(true)

  return (
    <div>
      <DisplayMap />
    </div>
  );
}

export default App;
