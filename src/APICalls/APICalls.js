import lat from '../Utilities/denverCoords';
import long from '../Utilities/denverCoords';

const MY_KEY = process.env.REACT_APP_API_KEY;

export const fetchRecentObservations = async() => {
  // add API key as header
  const response = await fetch(`https://api.ebird.org/v2/data/obs/US-CO/recent`
  , {
    headers: {
      'x-ebirdapitoken': MY_KEY
      }
  });
  const data = await response.json();
  return data;
}

const fetchRecentObservationsBySpecies = async(speciesCode) => {
  const response = await fetch(`https://api.ebird.org/v2/data/obs/US-CO/recent/${speciesCode}?lat=${lat}&lng=${long}`);
  const data = await response.json();
  return data;
}