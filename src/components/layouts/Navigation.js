import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { Image, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    
  return (
      <div className="Navigation">
        <Fragment>
              <Navbar bg="primary" variant="" id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Link to="/"> Home </Link>
                    <Link to="/podcasts"> Podcasts </Link>
                    <Link to="/watchLive"> Facebook Live </Link>
                    <Link to="/blog"> Blog </Link>
                    <Link to="/about"> About </Link>
                  </Nav>
              </Navbar>
        </Fragment>
      </div>
    )
};

Navigation.propTypes = {
}

export default Navigation;