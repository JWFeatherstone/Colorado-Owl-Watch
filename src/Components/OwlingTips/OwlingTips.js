import React from 'react';
import './OwlingTips.css';
import Header from '../Header/Header';
import OwlingInfo from '../OwlingInfo/OwlingInfo';

const OwlingTips = () => {
  return (
    <>
      <Header />
      <main className="details-main tips-main">
        <OwlingInfo />
        <img className="owling-tips-graphic" src={require('../../Images/long-eared-owling-tips.png')} alt="owling tips graphic" />
      </main>
    </>
  )
}

export default OwlingTips;