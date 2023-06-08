import { lat, lng } from '../Utilities/denverCoords';

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
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}

export const fetchRecentObservationsBySpecies = async(speciesCode) => {
  const response = await fetch(`https://api.ebird.org/v2/data/obs/US-CO/recent/${speciesCode}?lat=${lat}&lng=${lng}`,
  {
    headers: {
      'x-ebirdapitoken': MY_KEY
      }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}