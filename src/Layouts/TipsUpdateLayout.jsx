import React from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import UpdateTip from '../Components/UpdateTip';
import { useLoaderData } from 'react-router';

const TipsUpdateLayout = () => {
    const data=useLoaderData();
    return (
        <>
        <Navbar></Navbar>
        <Video></Video>
        <UpdateTip data={data}></UpdateTip>
        </>
    );
};

export default TipsUpdateLayout;