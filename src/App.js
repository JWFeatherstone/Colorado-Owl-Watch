import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import BirdDetails from './Components/BirdDetails/BirdDetails';
import OwlingTips from './Components/OwlingTips/OwlingTips';
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
    </Switch>
  );
}

export default App;
