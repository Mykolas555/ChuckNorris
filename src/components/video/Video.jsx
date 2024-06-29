import video from '../../media/video.mp4'
import React from 'react';
import './video.scss';

const Video = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
