import React, { useState } from 'react';
import RecentObservations from '../RecentObservations/RecentObservations';
import './CollapsibleInfo.css';

const CollapsibleInfo = ({ owlFacts, owlObs, toggleId, toggleRange, toggleObs, idExpanded, obsExpanded, rangeExpanded }) => {

  let recentObs;
  if (owlObs.length === 0) {
    recentObs = <p>No recent observations.</p>;
  } else {
    recentObs = owlObs.map(obs => {
      return (
        <RecentObservations
          key={obs.id}
          obsId={obs.id}
          locName={obs.locName}
          locPrivate={obs.locPrivate}
          obsDt={obs.obsDt}
          obsTime={obs.obsTime}
          number={obs.number}
        />
      )
    });
  }
  
  return (
    <section 
      className={`further-info-container ${idExpanded || obsExpanded || rangeExpanded ? 'further-info-container-expanded' : ''}`}
    >
      <div className="collapsible-info">
        <h3 className="collapsible-header">IDENTIFICATION</h3>
        <button className="collapsible-button" activeClass="collapsed" onClick={toggleId}>+</button>
      </div>
      <div 
        className={`collapsible-content ${idExpanded ? 'collapsible-content-expanded' : ''}`}
      >
        <h4 className="collapsible-content-header">Physical Characteristics</h4>
        <p className="collapsible-content-text">{owlFacts.identification}</p>
        <h4 className="collapsible-content-header">Calls</h4>
        <p className="collapsible-content-text">{owlFacts.call}</p>
        <h4 className="collapsible-content-header">Behavior</h4>
        <p className="collapsible-content-text">{owlFacts.behaviors}</p>
      </div>
      <div className="collapsible-info">
        <h3 className="collapsible-header">NEARBY OBSERVATIONS</h3>
        <button className="collapsible-button" activeClass="collapsed" onClick={toggleObs}>+</button>
      </div>
      <div 
        className={`collapsible-content ${obsExpanded ? 'collapsible-content-expanded' : ''}`}
      >
        {recentObs}
      </div>
      <div className="collapsible-info">
        <h3 className="collapsible-header">RANGE</h3>
        <button className="collapsible-button" activeClass="collapsed" onClick={toggleRange}>+</button>
      </div>
      <div 
        className={`collapsible-content ${rangeExpanded ? 'collapsible-content-expanded' : ''}`}
      >
        <p className="collapsible-content-text">{owlFacts.migration}</p>
      </div>
    </section>
  )
}

export default CollapsibleInfo;