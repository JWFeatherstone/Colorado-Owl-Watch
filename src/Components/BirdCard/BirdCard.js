import React from 'react';
import './BirdCard.css';
import { Link } from 'react-router-dom';

const BirdCard = ({name, spCode, sciName, favorited, toggleFavorite}) => {
  return (
    <article
      className="bird-card" 
      style={{
      background: `url(${require(`../../Images/${spCode}.png`)}) no-repeat center center / cover`,
      }}
    >
      <div className="card-banner">
        <h2 className="card-name">{name}</h2>
        <h3 className="card-sci-name">{sciName}</h3>
        <div className="card-links">
          <img
            className="card-favorite"
            src={favorited ? require('../../Images/favorite-icon.svg').default : require('../../Images/unfavorite-icon.svg').default}
            alt={favorited ? "unfavorite this owl" : "favorite this owl"}
            onClick={() => toggleFavorite(spCode)}
          />
          <Link to={`/explore/${spCode}`} className="details-link">Info</Link>
        </div>
      </div>
    </article>
  )
}

export default BirdCard;