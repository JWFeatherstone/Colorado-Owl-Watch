import { lat, lng } from '../Utilities/denverCoords';

const MY_KEY = process.env.REACT_APP_API_KEY;

export const fetchRecentObservations = async() => {
  const response = await fetch(`https://api.ebird.org/v2/data/obs/US-CO/recent`
  , {
    headers: {
      'x-ebirdapitoken': MY_KEY
      }
  });
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

export const fetchRecentObservationsBySpecies = async(speciesCode) => {
  const response = await fetch(`https://api.ebird.org/v2/data/obs/US-CO/recent/${speciesCode}?lat=${lat}&lng=${lng}`,
  {
    headers: {
      'x-ebirdapitoken': MY_KEY
      }
  });
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}