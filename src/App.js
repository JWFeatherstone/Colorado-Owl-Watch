import logo from './logo.svg';
import React, { useState, useEffect, useCallback } from 'react';
import { fetchRecentObservations } from './APICalls/APICalls';
import { filterForOwls } from './Utilities/utility';
import './App.css';
import Map from './Components/Map/Map';

const App = () => {
  const [owls, setOwls] = useState([])

  const fetchOwls = useCallback(async () => {
    const data = await fetchRecentObservations();
    console.log(data)
    const owlData = filterForOwls(data);
    setOwls(owlData);
  }, [])

  useEffect(() => {
    fetchOwls();
  }, [fetchOwls])

  return (
    <Map owls={owls}/>
  );
}

export default App;
