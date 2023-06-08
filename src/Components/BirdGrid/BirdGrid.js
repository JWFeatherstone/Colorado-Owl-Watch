import React from 'react';
import { coowls } from '../../Utilities/coowls';
import BirdCard from '../BirdCard/BirdCard';
import PropTypes from 'prop-types';
import './BirdGrid.css';

const BirdGrid = ({favorites, toggleFavorite }) => {

  const owlCards = coowls.map(owl => {
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
      {owlCards}
    </section>
  )
}

BirdGrid.propTypes = {
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default BirdGrid;