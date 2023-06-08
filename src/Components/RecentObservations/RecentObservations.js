import React from 'react';
import './RecentObservations.css';

const RecentObservations = ({ obsId, obsDt, obsTime, locName, locPrivate, number }) => {  

  return (
      <article className="observation-slide">
        <div className="observation-header">
          <h3 className="observation-location">{locName} {locPrivate}</h3>
          <p className="observation-date">{obsDt}</p>
        </div>
        <div className="observation-body">
          <div className="observation-body-pair">
            <h5 className="observation-label">Time:</h5>
            <p className="observation-text">{obsTime}</p>
          </div>
          <div className="observation-body-pair">
            <h5 className="observation-label">Number:</h5>
            <p className="observation-text">{number}</p>
          </div>
          <div className="observation-body-pair">
            <h5 className="observation-label">Observation eBird ID:</h5>
            <p className="observation-text">{obsId}</p>
          </div>
        </div>
      </article>
  )
}

export default RecentObservations;