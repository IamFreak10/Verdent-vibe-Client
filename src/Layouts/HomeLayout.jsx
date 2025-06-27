import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router';

import Navbar from '../Components/Navbar';
import GardeningEventSlider from '../Components/GardeningEventSlider';

import Video from '../Components/Video';
import BouncingTex from '../Components/BouncingText/BouncingTex';

import TipSwiper from '../Components/TipSwiper';
import GardenOfTheMonth from '../Components/GardenOfTheMonth';
import Footer from '../Components/Footer';
import Dashboard from '../Components/Dashbord';
import DashboardContext from '../Contexts/DashbordContext';

const HomeLayout = () => {
  const { on, setOn } = useContext(DashboardContext);
  return (
    <div>
      <Navbar></Navbar>
      <Dashboard isOpen={on} onClose={() => setOn(false)} />
      <Video></Video>
      <GardeningEventSlider></GardeningEventSlider>
      <BouncingTex></BouncingTex>
      <TipSwiper></TipSwiper>
      <GardenOfTheMonth></GardenOfTheMonth>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
