import React from 'react';
import './HighLevelInfo.css';

const HighLevelInfo = ({ owlFacts, spCode, favorited, toggleFavorite, idExpanded, obsExpanded, factsExpanded }) => {
  return (
    <section className="high-level-info-container">
      <h2 className="high-level-header">{owlFacts.comName}</h2>
      <div className="high-level-sub-container">
      <h3 className="high-level-subheader">{owlFacts.sciName}</h3>
        <img
          className="detail-favorite"
          src={favorited ? require('../../Images/favorite-icon.svg').default : require('../../Images/unfavorite-icon.svg').default}
          alt={favorited ? "unfavorite this owl" : "favorite this owl"}
          onClick={() => toggleFavorite(spCode)}
        />
      </div>
    </section>
  )
}

export default HighLevelInfo;