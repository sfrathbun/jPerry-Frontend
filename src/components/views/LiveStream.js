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
          url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Frathbun.sean%2Fvideos%2F10157621674933434%2F&width=1280"
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