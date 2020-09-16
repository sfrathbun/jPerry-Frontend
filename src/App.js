import React, { Fragment, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './app/firebase';
import { setUser } from './features/auth/authSlice';
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
import CreateBlogForm from './components/BlogPosts/create/CreateBlogForm'


class App extends Component {
  componentDidMount() {
    //when we loggin and poo tell redux to change that user
    auth().onAuthStateChanged(user => {
      useDispatch()(setUser(user));
    });
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/podcasts' component={Podcasts} /> */}
          <Route exact path='/watchLive' component={LiveStream} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/test' component={CreateBlogForm} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
