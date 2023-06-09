import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import 'swiper/swiper.min.css';
import { Link } from 'react-router-dom';
import './Carousel.css';

SwiperCore.use([Navigation]);

const Carousel = ({ owls }) => {
  const owlSlides = owls.map(owl => {
    return (
      <SwiperSlide 
        key={owl.id}
        className="home-slides">
        <section 
          className="owl-slide" 
          style={{
            background: `url(${require(`../../../Images/${owl.spCode}.png`)}) no-repeat center center / cover`,
          }}
        >
          <div className="slide-banner">
            <Link to={`/explore/${owl.spCode}`} className="slide-header">{owl.comName}</Link>
            <div className="slide-body">
              <p className="obs-date">{owl.obsDt}</p>
              <p>{owl.locName} {owl.locPrivate}</p>
            </div>
          </div>
        </section>
      </SwiperSlide>
    )
  })

  return (
    <Swiper
        className="home-carousel"
        navigation
        centeredSlides
        slidesPerView={1}
    >
        {owlSlides}
    </Swiper>
  )
}

Carousel.propTypes = {
  owls: PropTypes.arrayOf(PropTypes.object)
};

export default Carousel;
