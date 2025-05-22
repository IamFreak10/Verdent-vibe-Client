import React from 'react';
import Navbar from './Navbar';
import Video from './Video';
import GardenTipForm from './GardenTipForm';

const ShareGardenTip = () => {
  return (
    <>
      <Navbar></Navbar>
      <Video></Video>
      <div>
        <GardenTipForm></GardenTipForm>
      </div>
    </>
  );
};

export default ShareGardenTip;
