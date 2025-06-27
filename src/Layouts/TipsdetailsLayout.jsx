import React, { useContext } from 'react';
import Video from '../Components/Video';
import Navbar from '../Components/Navbar';
import GardeningTipDetails from '../Components/GardeningTipDetails';
import { useLoaderData } from 'react-router';
import Footer from '../Components/Footer';
import Dashboard from '../Components/Dashbord';
import DashboardContext from '../Contexts/DashbordContext';


const TipsdetailsLayout = () => {
     const{on, setOn} = useContext(DashboardContext);
    const tip = useLoaderData();
    return (
        <>
        <Navbar></Navbar>
        <Video></Video>
       
        <Dashboard isOpen={on} onClose={() => setOn(false)} />
        <GardeningTipDetails tip={tip}></GardeningTipDetails>
        <Footer></Footer>
        </>
    );
};

export default TipsdetailsLayout;