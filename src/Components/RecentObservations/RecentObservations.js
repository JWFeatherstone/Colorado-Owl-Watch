import React from 'react';
import './RecentObservations.css';

const RecentObservations = ({ obsId, obsDt, obsTime, locName, locPrivate, number }) => {  

  return (
    <article className="observation-card">
      <div className="observation-header">
        <h3 className="observation-location">{locName} ({locPrivate})</h3>
        <p className="observation-date">{obsDt}</p>
      </div>
      <div className="observation-body">
        <div className="observation-body-pair">
          <h5 className="observation-time-label">Time:</h5>
          <p className="observation-time">{obsTime}</p>
        </div>
        <div className="observation-body-pair">
          <h5 className="observation-number-label">Number:</h5>
          <p className="observation-number">{number}</p>
        </div>
        <div className="observation-body-pair">
          <h5 className="observation-id-label">Observation eBird ID:</h5>
          <p className="observation-id">{obsId}</p>
        </div>
      </div>
    </article>
  )
}

export default RecentObservations;