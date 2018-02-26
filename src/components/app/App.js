import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Search from '../search/Search';
// import MovieDetail from '../movies/MovieDetail';

import './App.css';

export default class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search" component={Search}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer>&copy; 2018 this app.</footer>
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return <div>I am Home!</div>;
  }
}