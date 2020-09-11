import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import bible from '../assets/home/bible.png'
import PropTypes from 'prop-types';
import '../../App.css';
import '../../tailwind.output.css';


const Home = () => {

  return (
    <div className="Home">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bible}
                        alt="First slide" />
                </Carousel.Item>
            </Carousel>
  
    </div>
  )
};
Home.propTypes = {
}

export default Home;