import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
