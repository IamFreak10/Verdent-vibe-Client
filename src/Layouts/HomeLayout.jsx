import React from 'react';
import { Outlet } from 'react-router';
import ThemeToggle from '../Components/ThemeToggle';
import Navbar from '../Components/Navbar';
import GardeningEventSlider from '../Components/GardeningEventSlider';

const HomeLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <GardeningEventSlider></GardeningEventSlider>
            <h1>This is Home Layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;