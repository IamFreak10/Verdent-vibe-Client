import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Video from '../Components/Video';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Video></Video>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default AuthLayout;