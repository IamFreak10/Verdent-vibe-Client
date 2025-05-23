import React from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import Error from '../Components/Error';
import Footer from '../Components/Footer';

const ErrorLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Video></Video>
      <Error></Error>
      <Footer></Footer>
    </>
  );
};

export default ErrorLayout;
