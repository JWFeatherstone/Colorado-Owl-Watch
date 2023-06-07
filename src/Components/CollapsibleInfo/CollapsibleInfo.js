import React, { useState } from 'react';
import './CollapsibleInfo.css';

const CollapsibleInfo = ({ owlFacts, owlObs }) => {
  const [idExpanded, setIdExpanded] = useState(false);
  const [obsExpanded, setObsExpanded] = useState(false);
  const [factsExpanded, setFactsExpanded] = useState(false);

  const toggleExpanded = (type) => {
    if (type === 'id') {
      setIdExpanded(!idExpanded);
    } else if (type === 'obs') {
      setObsExpanded(!obsExpanded);
    } else if (type === 'facts') {
      setFactsExpanded(!factsExpanded);
    }
  }

  return (
    <section className="further-info-container">
      <div className="collapsible-info">
        <h3 className="collapsible-header">Habitat</h3>
        <button className="collapsible-button" activeClass="collapsed">+</button>
      </div>
      <div className="collapsible-info">
        <h3 className="collapsible-header">Habitat</h3>
        <button className="collapsible-button" activeClass="collapsed">+</button>
      </div>
      <div className="collapsible-info">
        <h3 className="collapsible-header">Habitat</h3>
        <button className="collapsible-button" activeClass="collapsed">+</button>
      </div>
    </section>
  )
}

export default CollapsibleInfo;