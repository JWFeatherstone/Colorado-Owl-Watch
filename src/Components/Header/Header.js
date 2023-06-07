import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <img className="menu-icon" src={require('../../Images/menu-icon.svg').default} alt="menu icon"/>
        <div className="nav-right">
          <h1 className="site-title">COLORADO OWL WATCH</h1>
          <img className="site-logo" src={require('../../Images/owl-icon-white.svg').default} alt="owl icon" />
        </div>
      </nav>
    </header>
  )
}

export default Header;