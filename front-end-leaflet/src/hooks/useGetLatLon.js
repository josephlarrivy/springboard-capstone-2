import React, {useState, useEffect} from 'react'
import axios from "axios";
import tomtomKey from '../keys';

const useGetLatLon = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const requestLatLon = async (address) => {
    
        let key = tomtomKey
        // let address = 'De Ruijterkade 154, 1011 AC, Amsterdam'
        try {
          const response = await axios.get(
            `https://api.tomtom.com/search/2/geocode/${address}.json?key=${key}`
          );
          setData(response);
          console.log('good request')
          // console.log(response.data.results[0].position)
          setData(response.data.results[0].position)
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



// https://{baseURL}/search/{versionNumber}/geocode/{query}.{ext}?key={Your_API_Key}&storeResult={storeResult}&typeahead={typeahead}&limit={limit}&ofs={ofs}&lat={lat}&lon={lon}&countrySet={countrySet}&radius={radius}&topLeft={topLeft}&btmRight={btmRight}&language={language}&extendedPostalCodesFor={extendedPostalCodesFor}&view={view}&mapcodes={mapcodes}&entityTypeSet={entityTypeSet}


// https://api.tomtom.com/search/2/geocode/De Ruijterkade 154, 1011 AC, Amsterdam.json?key={Your_API_Key}