import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Question1 from '../Question1/Question1'
import Question2 from '../Question2/Question2'
import Question3 from '../Question3/Question3'
import Question4 from '../Question4/Question4'
import Success from '../Success/Success'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback App</h1>
        </header>
        <br/>
        <Router>
          <Switch>
            <Route  path="/" exact component={Question1}/>
            <Route  path="/2"  component={Question2}/>
            <Route  path="/3"  component={Question3}/>
            <Route  path="/4"  component={Question4}/>
            <Route  path="/5"  component={Success}/>
            {/* <Route  path="/admin" exact component={}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;