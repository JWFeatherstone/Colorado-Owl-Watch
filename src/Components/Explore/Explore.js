import React from 'react';
import Header from '../Header/Header';
import BirdGrid from '../BirdGrid/BirdGrid';
import TrackedSpecies from '../TrackedSpecies/TrackedSpecies';
import { useLocation } from 'react-router-dom';
import './Explore.css';

const Explore = ({favorites, toggleFavorite}) => {

  const location = useLocation();

  const renderGrid = () => {
    if (location.pathname === '/explore') {
      return (
        <BirdGrid favorites={favorites} toggleFavorite={toggleFavorite} />
      )
    } else {
      return (
        <TrackedSpecies favorites={favorites} toggleFavorite={toggleFavorite} />
      )
    }
  }
  


  return (
      <main className="explore-main">
        <Header />
        {renderGrid()}
      </main>
  )
}

export default Explore;