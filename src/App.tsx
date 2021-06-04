import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import JourneyPlanner from './components/JourneyPlanner';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/" exact component={JourneyPlanner} />
            <Route path="/confirmation" exact component={Confirmation} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
