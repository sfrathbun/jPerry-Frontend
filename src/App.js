import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import './tailwind.output.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/layouts/Navigation';
import Home from './components/views/Home';
import About from './components/views/About';
import Blog from './components/views/Blog';
import Podcasts from './components/views/Podcasts';
import LiveStream from './components/views/LiveStream';



function App() {
  return (
    <Router>
      <Fragment>
        <Navigation />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/podcasts' component={Podcasts} />
          <Route exact path='/watchLive' component={LiveStream} />
          <Route exact path='/blog' component={Blog} />
      </Fragment>
    </Router>
  );
}

export default App;
