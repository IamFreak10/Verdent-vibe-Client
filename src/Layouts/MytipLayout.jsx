import React from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import MyTipsDashboard from '../Components/MyTipsDashboard';
import Footer from '../Components/Footer';

const MytipLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Video></Video>
        <MyTipsDashboard></MyTipsDashboard>
        <Footer></Footer>
        </>
    );
};

export default MytipLayout;