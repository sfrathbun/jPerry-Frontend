import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './LiveStream.css';

const LiveStream = () => {

    return (
      <div className="LiveStream">
        <ReactPlayer
          className="react-player"
          controls={true}
          url="https://www.youtube.com/watch?v=JxKjgZywKKo"
          width="100%"
          height="100%"
          >
        </ReactPlayer>
      </div>
    )
  };

LiveStream.propTypes = {
}

export default LiveStream;