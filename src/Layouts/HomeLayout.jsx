import React from 'react';
import { Outlet, useLoaderData } from 'react-router';

import Navbar from '../Components/Navbar';
import GardeningEventSlider from '../Components/GardeningEventSlider';

import Video from '../Components/Video';
import BouncingTex from '../Components/BouncingText/BouncingTex';


import TipSwiper from '../Components/TipSwiper';
import GardenOfTheMonth from '../Components/GardenOfTheMonth';
import Footer from '../Components/Footer';


const HomeLayout = () => {
  const users = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Video></Video>
      <GardeningEventSlider></GardeningEventSlider>
      <BouncingTex users={users}></BouncingTex>
      <TipSwiper></TipSwiper>
      <GardenOfTheMonth></GardenOfTheMonth>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
