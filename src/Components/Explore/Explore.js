import React from 'react';
import Header from '../Header/Header';
import BirdGrid from '../BirdGrid/BirdGrid';
import './Explore.css';

const Explore = ({favorites, toggleFavorite}) => {
  return (
    <main className="explore-main">
      <Header />
      <BirdGrid favorites={favorites} toggleFavorite={toggleFavorite} />
    </main>
  )
}

export default Explore;