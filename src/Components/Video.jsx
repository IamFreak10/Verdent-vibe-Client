import React from 'react';
import video from '../assets/videoplayback.webm';
const Video = () => {
  return (
    <div>
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] opacity-70"
        src={video}
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default Video;
