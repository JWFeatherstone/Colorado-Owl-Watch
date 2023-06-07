import React, { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import './Carousel.css';

register();

const Carousel = ({ owls }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  

  const owlSlides = owls.map(owl => {
    return (
      <swiper-slide key={owl.id}>
        <section 
          className="owl-slide" 
          style={{
            background: `url(${require(`../../Images/${owl.spCode}.png`)}) no-repeat center center / cover`,
          }}
        >
          <div className="slide-banner">
            <h3 className="slide-header">{owl.comName}</h3>
            <div className="slide-body">
              <p className="obs-date">{owl.obsDt}</p>
              <p>{owl.locName} {owl.locPrivate}</p>
            </div>
          </div>
        </section>
      </swiper-slide>
    )
  })

  return (
    <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        style={{
          "--swiper-navigation-color": "#036661",
        }}
        navigation="true"
        centered-slides="true"
    >
        {owlSlides}
    </swiper-container>
  )
}

export default Carousel;