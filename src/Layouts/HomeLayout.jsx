import React from 'react';
import { Outlet } from 'react-router';
import ThemeToggle from '../Components/ThemeToggle';
import Navbar from '../Components/Navbar';
import GardeningEventSlider from '../Components/GardeningEventSlider';
import ActiveUser from '../Components/ActiveUser';
import Video from '../Components/Video';
import BouncingTex from '../Components/BouncingText/BouncingTex';

const HomeLayout = () => {
    return (
        <div>

           <Navbar></Navbar>
           <Video></Video>
           <GardeningEventSlider></GardeningEventSlider>
           <BouncingTex></BouncingTex>
          
            
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;