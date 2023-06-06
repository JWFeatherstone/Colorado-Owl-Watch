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
        <section className="owl-slide">
          <div className="slide-header">
            <h3>{owl.comName} ({owl.number})</h3>
            <p>{owl.obsDt}</p>
          </div>
          <div className="slide-body">
            <p>{owl.locName} {owl.locPrivate}</p>
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
          "--swiper-navigation-color": "#BBBBBB",
        }}
        navigation="true"
        pagination="true"
    >
        {owlSlides}
    </swiper-container>
  )
}

export default Carousel;