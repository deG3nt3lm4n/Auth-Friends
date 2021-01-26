import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
      </Switch>

    </div>
  );
}

export default App;
