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

  const getOwlFacts = () => {
    const owl = coowls.find(owl => owl.spCode === spCode);
    setOwlFacts(owl);
  }

  useEffect(() => {
    getOwlFacts();
    fetchRecentObservationsBySpecies(spCode)
      .then(data => {
        const cleanedData = cleanOwlData(data)
        setOwlObs(cleanedData)
      })
      .catch(error => setErrorMsg(error.message))
  }, [spCode]);

  const recentObs = owlObs.map(obs => {
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
  })

  return (
    <>
    <Header />
      <main className="details-main">
        <HighLevelInfo owlFacts={owlFacts} spCode={spCode} favorited={favorited} toggleFavorite={toggleFavorite} />
        <CollapsibleInfo owlObs={owlObs} owlFacts={owlFacts} />
        <img src={require(`../../Images/${spCode}.png`)} alt={owlFacts.name} className="owl-detail-image" />
      </main>
    </>
  )
}

export default BirdDetails;