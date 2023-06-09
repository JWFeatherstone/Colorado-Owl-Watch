import React from 'react';
import Header from '../Header/Header';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <main className="about-main error-main">
        <section className="error-msg">
          <h2 className="error-header about-header">This is a site about owls.</h2>
          <p className="error-sub about-sub">If you'd like to learn more about these guys or anyone else, check out your local Audubon - or go outside sometime and slow down a bit. </p>
        </section>
      </main>
    </>
  )
}

export default About;