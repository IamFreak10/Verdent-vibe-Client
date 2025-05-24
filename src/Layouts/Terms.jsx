import React from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import TermsOfUse from '../Components/TermsOfUse';

const Terms = () => {
  return (
    <>
      <Navbar></Navbar>
      <Video></Video>
      <TermsOfUse></TermsOfUse>

      <Footer></Footer>
    </>
  );
};

export default Terms;
