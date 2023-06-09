import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header/Header';
import { Redirect } from 'react-router-dom';
import Map from '../Map/Map';
import Carousel from '../Carousel/Carousel';
import { fetchRecentObservations } from '../../../APICalls/APICalls';
import { filterForOwls, cleanOwlData } from '../../../Utilities/utility';
import './Home.css';

const Home = ({ favorites }) => {
  const [owls, setOwls] = useState([])
  const [error, setError] = useState('')

  const fetchOwls = useCallback(async () => {
    try {
      const data = await fetchRecentObservations();
      const owlData = filterForOwls(data);
      const cleanedOwlData = cleanOwlData(owlData);
      setOwls(cleanedOwlData);
    } catch (error) {
      setError(error.message);
    }
  }, [])
  

  useEffect(() => {
    fetchOwls();
  }, [fetchOwls])

  return (
    <>
    {error ? <Redirect push to ='/error' />
    :(
    <main>
      <Header />
      <Carousel owls={owls} />
      <Map owls={owls} favorites={favorites}/>
    </main>
    )}
    </>
  )
}

Home.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string)
};

export default Home;