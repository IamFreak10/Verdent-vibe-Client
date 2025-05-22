import React from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import MyTipsDashboard from '../Components/MyTipsDashboard';

const MytipLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Video></Video>
        <MyTipsDashboard></MyTipsDashboard>
        </>
    );
};

export default MytipLayout;