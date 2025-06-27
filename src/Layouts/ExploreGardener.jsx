import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData } from 'react-router';
import Video from '../Components/Video';
import GardenerCard from '../Components/GardenerCard';
import Footer from '../Components/Footer';
import DashboardContext from '../Contexts/DashbordContext';
import Dashboard from '../Components/Dashbord';

const ExploreGardener = () => {
    const users=useLoaderData();
    const{on,setOn}=useContext(DashboardContext);
    return (
        <>
        <Navbar></Navbar>
        <Video></Video>
         <Dashboard isOpen={on} onClose={() => setOn(false)} />
        <div className='mt-8 mb-5 mx-auto max-w-[90%] items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            users.map(user=><GardenerCard key={user.id} user={user}></GardenerCard>)
        }
        </div>
        <Footer></Footer>
        
        </>
    );
};

export default ExploreGardener;