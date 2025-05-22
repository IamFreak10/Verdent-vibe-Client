import React from 'react';
import Video from '../Components/Video';
import Navbar from '../Components/Navbar';
import GardeningTipDetails from '../Components/GardeningTipDetails';
import { useLoaderData } from 'react-router';


const TipsdetailsLayout = () => {
    const tip = useLoaderData();
    return (
        <>
        <Navbar></Navbar>
        <Video></Video>
        <GardeningTipDetails tip={tip}></GardeningTipDetails>
        </>
    );
};

export default TipsdetailsLayout;