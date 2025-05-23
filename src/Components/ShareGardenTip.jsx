import React from 'react';
import Navbar from './Navbar';
import Video from './Video';
import GardenTipForm from './GardenTipForm';
import Footer from './Footer';

const ShareGardenTip = () => {
  return (
    <>
      <Navbar></Navbar>
      <Video></Video>
      <div>
        <GardenTipForm></GardenTipForm>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ShareGardenTip;
