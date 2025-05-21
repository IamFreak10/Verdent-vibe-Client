import React from 'react';
import video from '../assets/videoplayback.webm';
const Video = () => {
  return <div>
    <video className='w-full  absolute opacity-70' src={video} autoPlay muted loop></video>
  </div>;
};

export default Video;
