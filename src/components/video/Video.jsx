import React from 'react';
import './video.scss';
import video from '../../media/video.mp4'

const Video = () => {
  return (
    <div className="video-container video-background">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
