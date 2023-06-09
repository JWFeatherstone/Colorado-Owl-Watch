import React, { useState } from 'react';
import './App.css';
import Home from './Components/HomePg/Home/Home';
import Explore from './Components/ExploreTrackedPgs/Explore/Explore';
import Error from './Components/Error/Error';
import About from './Components/About/About';
import BirdDetails from './Components/BirdDetailsPg/BirdDetails/BirdDetails';
import OwlingTips from './Components/OwlingTipsPg/OwlingTips/OwlingTips';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (spCode) => {
    if (favorites.includes(spCode)) {
      const filteredFavorites = favorites.filter(favorite => favorite !== spCode)
      setFavorites(filteredFavorites)
    } else {
      setFavorites([...favorites, spCode])
    }
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Home favorites={favorites}/>
      </Route>
      <Route exact path='/explore'>
        <Explore favorites={favorites} toggleFavorite={toggleFavorite}/>
      </Route>
      <Route exact path='/tracked'>
        <Explore favorites={favorites} toggleFavorite={toggleFavorite}/>
      </Route>
      <Route exact path='/explore/:spCode'>
        <BirdDetails favorites={favorites} toggleFavorite={toggleFavorite}/>
      </Route>
      <Route exact path='/owling-tips'>
        <OwlingTips />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/error'>
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
