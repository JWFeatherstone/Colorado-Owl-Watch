import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { coowls } from '../../Utilities/coowls';
import { cleanOwlData } from '../../Utilities/utility';
import { fetchRecentObservationsBySpecies } from '../../APICalls/APICalls';
import './BirdDetails.css';
import Header from '../Header/Header';
import CollapsibleInfo from '../CollapsibleInfo/CollapsibleInfo';
import HighLevelInfo from '../HighLevelnfo/HighLevelInfo';

const BirdDetails = ({favorites, toggleFavorite}) => {
  const { spCode } = useParams();
  const [owlFacts, setOwlFacts] = useState({});
  const [owlObs, setOwlObs] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const favorited = favorites.includes(spCode);
  const [idExpanded, setIdExpanded] = useState(false);
  const [obsExpanded, setObsExpanded] = useState(false);
  const [rangeExpanded, setRangeExpanded] = useState(false);

  const toggleId = () => {
    setIdExpanded(!idExpanded);
    setObsExpanded(false);
    setRangeExpanded(false);
  }

  const toggleObs = () => {
    setObsExpanded(!obsExpanded);
    setIdExpanded(false);
    setRangeExpanded(false);
  }

  const toggleRange = () => {
    setRangeExpanded(!rangeExpanded);
    setIdExpanded(false);
    setObsExpanded(false);
  }

  const getOwlObs = useCallback(async () => {
    const owl = coowls.find(owl => owl.spCode === spCode);
    setOwlFacts(owl);
    const data = await fetchRecentObservationsBySpecies(spCode)
    const cleanedOwlData = cleanOwlData(data);
    setOwlObs(cleanedOwlData);
  }, [])

  useEffect(() => {
    getOwlObs()
    .catch(error => setErrorMsg(error.message))
  }, [getOwlObs])


  return (
    <>
    <Header />
      <main className="details-main">
        <HighLevelInfo 
        owlFacts={owlFacts} 
        spCode={spCode} 
        favorited={favorited} 
        toggleFavorite={toggleFavorite}
        idExpanded={idExpanded}
        obsExpanded={obsExpanded}
        rangeExpanded={rangeExpanded}
        />
        <CollapsibleInfo 
          owlObs={owlObs} 
          owlFacts={owlFacts} 
          toggleId={toggleId} 
          toggleRange={toggleRange} 
          toggleObs={toggleObs}
          idExpanded={idExpanded}
          obsExpanded={obsExpanded}
          rangeExpanded={rangeExpanded}
        />
        <img src={require(`../../Images/${spCode}.png`)} alt={owlFacts.name} className="owl-detail-image" />
      </main>
    </>
  )
}

BirdDetails.propTypes = {
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default BirdDetails;