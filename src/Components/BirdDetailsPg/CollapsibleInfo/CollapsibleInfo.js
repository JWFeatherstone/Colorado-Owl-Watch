import React from 'react';
import RecentObservations from '../RecentObservations/RecentObservations';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import 'swiper/swiper.min.css';
import './CollapsibleInfo.css';

SwiperCore.use([Navigation]);

const CollapsibleInfo = ({ owlFacts, owlObs, toggleId, toggleRange, toggleObs, idExpanded, obsExpanded, rangeExpanded }) => {

  let recentObs = owlObs.map(obs => {
      return (
        <SwiperSlide key={obs.id}>
          <RecentObservations
            key={obs.id}
            obsId={obs.id}
            locName={obs.locName}
            locPrivate={obs.locPrivate}
            obsDt={obs.obsDt}
            obsTime={obs.obsTime}
            number={obs.number}
          />
        </SwiperSlide>
      )
    });
  
  
  return (
    <section 
      className={`further-info-container ${idExpanded || obsExpanded || rangeExpanded ? 'further-info-container-expanded' : ''}`}
    >
      <div className="collapsible-info">
        <h3 className="collapsible-header">IDENTIFICATION</h3>
        <button className="collapsible-button" onClick={toggleId}>+</button>
      </div>
      <div 
        className={`collapsible-content ${idExpanded ? 'collapsible-content-expanded' : ''}`}
      >
        <h4 className="collapsible-content-header">Physical Characteristics</h4>
        <p className="collapsible-content-text">{owlFacts.identification}</p>
        <h4 className="collapsible-content-header">Calls</h4>
        <p className="collapsible-content-text">{owlFacts.call}</p>
        <h4 className="collapsible-content-header">Behavior</h4>
        <p className="collapsible-content-text">{owlFacts.behaviors}</p>
      </div>
      <div className="collapsible-info">
        <h3 className="collapsible-header">NEARBY OBSERVATIONS</h3>
        <button className="collapsible-button" onClick={toggleObs}>+</button>
      </div>
      <div 
        className={`collapsible-content ${obsExpanded ? 'collapsible-content-expanded' : ''}`}
      >
        {
          owlObs.length > 0 ?
          <Swiper
            className="recent-obs-swiper"
            spaceBetween={20}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {recentObs}
          </Swiper>
          :
          <p>This guy hasn't been around recently.</p>
        }
      </div>
      <div className="collapsible-info">
        <h3 className="collapsible-header">RANGE</h3>
        <button className="collapsible-button" onClick={toggleRange}>+</button>
      </div>
      <div 
        className={`collapsible-content ${rangeExpanded ? 'collapsible-content-expanded' : ''}`}
      >
        <p className="collapsible-content-text">{owlFacts.migration}</p>
      </div>
    </section>
  )
}

CollapsibleInfo.propTypes = {
  owlFacts: PropTypes.shape({
    comName: PropTypes.string,
    sciName: PropTypes.string,
    identification: PropTypes.string,
    call: PropTypes.string,
    behaviors: PropTypes.string,
    migration: PropTypes.string,
    fact1: PropTypes.string,
    fact2: PropTypes.string,
  }),
  owlObs: PropTypes.arrayOf(PropTypes.object),
  toggleId: PropTypes.func.isRequired,
  toggleRange: PropTypes.func.isRequired,
  toggleObs: PropTypes.func.isRequired,
  idExpanded: PropTypes.bool.isRequired,
  obsExpanded: PropTypes.bool.isRequired,
  rangeExpanded: PropTypes.bool.isRequired
};

export default CollapsibleInfo;