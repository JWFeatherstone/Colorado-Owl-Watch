import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/explore'>
        <Explore />
      </Route>
    </Switch>
  );
}

export default App;
