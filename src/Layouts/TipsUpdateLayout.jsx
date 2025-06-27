import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import UpdateTip from '../Components/UpdateTip';
import { useLoaderData } from 'react-router';
import Footer from '../Components/Footer';
import DashboardContext from '../Contexts/DashbordContext';
import Dashboard from '../Components/Dashbord';

const TipsUpdateLayout = () => {
     const{on, setOn} = useContext(DashboardContext);
    const data=useLoaderData();
    return (
        <>
        <Navbar></Navbar>
        <Video></Video>
        <Dashboard isOpen={on} onClose={() => setOn(false)} />
        <UpdateTip data={data}></UpdateTip>
        <Footer></Footer>
        </>
    );
};

export default TipsUpdateLayout;