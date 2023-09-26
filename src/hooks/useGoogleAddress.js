import { useState, useEffect } from 'react';
import axios from 'axios';

const APIKey = 'AIzaSyCzS-Li4rWNUSckhv6fp50lw0YiX-Dspso';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({ lat: 0, lng: 0 });
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${APIKey}`;

  useEffect(() => {
    async function fetchGoogleAPI() {
      const response = await axios(API);
      setMap(response.data.results[0].geometry.location);
    }
    fetchGoogleAPI();
  }, []);

  return map;
};

export default useGoogleAddress;
