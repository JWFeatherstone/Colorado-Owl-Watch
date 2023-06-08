import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Carousel from '../Carousel/Carousel';
import { fetchRecentObservations } from '../../APICalls/APICalls';
import { filterForOwls, cleanOwlData } from '../../Utilities/utility';
import './Home.css';

const Home = ({ favorites }) => {
  const [owls, setOwls] = useState([])

  const fetchOwls = useCallback(async () => {
    const data = await fetchRecentObservations();
    const owlData = filterForOwls(data);
    const cleanedOwlData = cleanOwlData(owlData);
    setOwls(cleanedOwlData);
  }, [])

  useEffect(() => {
    fetchOwls();
  }, [fetchOwls])

  return (
    <main>
      <Header />
      <Carousel owls={owls} />
      <Map owls={owls} favorites={favorites}/>
    </main>
  )
}

Home.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string)
};

export default Home;