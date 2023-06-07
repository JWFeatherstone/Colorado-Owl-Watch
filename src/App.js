import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
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
    </Switch>
  );
}

export default App;
