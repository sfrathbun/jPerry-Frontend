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
          url="https://embed.restream.io/player/index.html?token=e966c922fc95e56232973ec5073fe4e7"
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