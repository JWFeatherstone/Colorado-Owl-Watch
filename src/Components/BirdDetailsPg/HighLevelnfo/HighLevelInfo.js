import React from 'react';
import PropTypes from 'prop-types';
import './HighLevelInfo.css';

const HighLevelInfo = ({ owlFacts, spCode, favorited, toggleFavorite, idExpanded, obsExpanded, rangeExpanded }) => {
  return (
    <section 
    className={"high-level-info-container " + (idExpanded || obsExpanded || rangeExpanded ? "high-level-collapsed" : "")}
    >
      <h2 className="high-level-header">{owlFacts.comName}</h2>
      <div className="high-level-sub-container">
      <h3 className="high-level-subheader">{owlFacts.sciName}</h3>
        <img
          className="detail-favorite"
          src={favorited ? require('../../../Images/favorite-icon.svg').default : require('../../../Images/unfavorite-icon.svg').default}
          alt={favorited ? "unfavorite this owl" : "favorite this owl"}
          onClick={() => toggleFavorite(spCode)}
        />
      </div>
    </section>
  )
}

HighLevelInfo.propTypes = {
  owlFacts: PropTypes.shape({
    comName: PropTypes.string,
    sciName: PropTypes.string,
    identification: PropTypes.string,
    call: PropTypes.string,
    behaviors: PropTypes.string,
    migration: PropTypes.string,
    fact1: PropTypes.string,
    fact2: PropTypes.string,
  }),
  spCode: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  idExpanded: PropTypes.bool.isRequired,
  obsExpanded: PropTypes.bool.isRequired,
  rangeExpanded: PropTypes.bool.isRequired
};

export default HighLevelInfo;