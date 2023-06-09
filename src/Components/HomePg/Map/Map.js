import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = ({ owls, favorites }) => {

  const customIcon = new Icon ({
    iconUrl: require('../../../Images/owl-icon-black.svg').default,
    iconSize: [25, 25]
  })

  const favoriteIcon = new Icon ({
    iconUrl: require('../../../Images/favorite-icon.svg').default,
    iconSize: [25, 25]
  })

  const owlMarkers = owls.map((owl) => (
    <Marker position={[owl.lat, owl.lng]} icon={favorites.includes(owl.spCode) ? favoriteIcon : customIcon} key={Date.now()}>
      <Popup>
        <h2 className="popup-header">{owl.comName}</h2>
        <h3>Location</h3>
        <p>{owl.locName}</p>
        <h3>Observation Date</h3>
        <p>{owl.obsDt}</p>
        <h3>Number Observed</h3>
        <p>{owl.number}</p>
      </Popup>
    </Marker>
  ))

  return (
      <MapContainer center={[39.7392, -104.9903]} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}"
          ext="png"
        />
        {owlMarkers}
      </MapContainer>
  )
}

Map.propTypes = {
  owls: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Map;