import React from 'react';
import './TrackedSpecies.css';
import { coowls } from '../../Utilities/coowls';
import BirdCard from '../BirdCard/BirdCard';

const TrackedSpecies = ({ favorites, toggleFavorite }) => {

  const favoriteOwls = coowls.filter(coowl => favorites.includes(coowl.spCode))
  const favoriteOwlCards = favoriteOwls.map(owl => {
    return (
      <BirdCard
        key={owl.sciName}
        name={owl.comName}
        spCode={owl.spCode}
        sciName={owl.sciName}
        favorited={favorites.includes(owl.spCode)}
        toggleFavorite={toggleFavorite}
      />
    )
  })

  return (
    <section className="bird-grid">
      {favoriteOwlCards}
    </section>
  )
}

export default TrackedSpecies;