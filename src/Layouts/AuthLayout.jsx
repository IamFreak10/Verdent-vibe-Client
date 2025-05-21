import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Video from '../Components/Video';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Video></Video>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;