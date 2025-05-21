import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../Components/Navbar';
import GardeningEventSlider from '../Components/GardeningEventSlider';

import Video from '../Components/Video';
import BouncingTex from '../Components/BouncingText/BouncingTex';


import TipSwiper from '../Components/TipSwiper';
import GardenOfTheMonth from '../Components/GardenOfTheMonth';


const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Video></Video>
      <GardeningEventSlider></GardeningEventSlider>
      <BouncingTex></BouncingTex>
      <TipSwiper></TipSwiper>
      <GardenOfTheMonth></GardenOfTheMonth>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
