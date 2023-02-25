import React, {useState, useEffect} from 'react'
import axios from "axios";
import mapboxKey from '../keys';

const useGetLatLon = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const requestLatLon = async (address) => {
    
    // let key = 
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?&access_token=${mapboxKey}`
      );
      // const response = await axios.get(
      //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json&access_token=${mapboxKey}`
      // );
      setData(response);
      console.log('request')
      console.log(response)
      // setData(response.data.results[0].position)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoaded(true);
    }

    return data;
  }
  return [requestLatLon]
};

export default useGetLatLon