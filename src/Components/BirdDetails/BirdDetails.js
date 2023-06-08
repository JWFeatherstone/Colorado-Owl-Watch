import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { coowls } from '../../Utilities/coowls';
import { cleanOwlData } from '../../Utilities/utility';
import { fetchRecentObservationsBySpecies } from '../../APICalls/APICalls';
import RecentObservations from '../RecentObservations/RecentObservations';
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

  useEffect(() => {
    const getOwlFacts = () => {
      const owl = coowls.find(owl => owl.spCode === spCode);
      setOwlFacts(owl);
    }

    getOwlFacts();
    fetchRecentObservationsBySpecies(spCode)
      .then(data => {
        const cleanedData = cleanOwlData(data)
        setOwlObs(cleanedData)
      })
      .catch(error => setErrorMsg(error.message))
  }, []);

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
        factsExpanded={rangeExpanded}
        />
        <CollapsibleInfo 
          owlObs={owlObs} 
          owlFacts={owlFacts} 
          toggleId={toggleId} 
          toggleFacts={toggleRange} 
          toggleObs={toggleObs}
          idExpanded={idExpanded}
          obsExpanded={obsExpanded}
          factsExpanded={rangeExpanded}
        />
        <img src={require(`../../Images/${spCode}.png`)} alt={owlFacts.name} className="owl-detail-image" />
      </main>
    </>
  )
}

export default BirdDetails;