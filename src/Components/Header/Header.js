import React, { useState } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const menu = (
    <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
      <nav className="menu-nav">
        {location.pathname !== "/" && <NavLink to="/" className="menu-link" activeClassName="active">Home</NavLink>}
        {location.pathname !== "/explore" && <NavLink to="/explore" className="menu-link" activeClassName="active">Owls of Colorado</NavLink>}
        {location.pathname !== "/tracked" && <NavLink to="/tracked" className="menu-link" activeClassName="active">My Tracked Owls</NavLink>}
        {location.pathname !== "/owling-tips" && <NavLink to="/owling-tips" className="menu-link" activeClassName="active">Tips</NavLink>}
        {location.pathname !== "/about" && <NavLink to="/about" className="menu-link" activeClassName="active">About</NavLink>}
      </nav>
    </div>
  );

  return (
    <>
    {menu}
    <header>
      <nav className="primary-nav">
        <img 
          className="menu-icon" 
          src={require('../../Images/menu-icon.svg').default} 
          alt="menu icon" 
          onClick={toggleMenu}
        />
        <div className="nav-right">
          <h1 className="site-title">COLORADO OWL WATCH</h1>
          <img className="site-logo" src={require('../../Images/owl-icon-white.svg').default} alt="owl icon" />
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header;
