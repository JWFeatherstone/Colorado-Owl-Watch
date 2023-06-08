import React from 'react';
import PropTypes from 'prop-types';
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
    <>
    {favorites.length === 0 ? <p className="no-favorites">You aren't tracking any birds yet!</p> :
    <section className="bird-grid">
      {favoriteOwlCards}
    </section>
    }
    </>
  )
}

TrackedSpecies.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default TrackedSpecies;