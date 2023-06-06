import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Carousel from '../Carousel/Carousel';
import { fetchRecentObservations } from '../../APICalls/APICalls';
import { filterForOwls, cleanOwlData } from '../../Utilities/utility';
import './Home.css';

const Home = () => {
  const [owls, setOwls] = useState([])

  const fetchOwls = useCallback(async () => {
    const data = await fetchRecentObservations();
    const owlData = filterForOwls(data);
    console.log("uncleaned owl data", owlData)
    const cleanedOwlData = cleanOwlData(owlData);
    setOwls(cleanedOwlData);
    console.log(cleanedOwlData)
  }, [])

  useEffect(() => {
    fetchOwls();
  }, [fetchOwls])

  return (
    <main>
      <Header />
      <Carousel owls={owls} />
      <Map owls={owls}/>
    </main>
  )
}

export default Home;