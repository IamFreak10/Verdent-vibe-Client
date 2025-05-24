import React from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData } from 'react-router';
import Video from '../Components/Video';
import GardenerCard from '../Components/GardenerCard';
import Footer from '../Components/Footer';

const ExploreGardener = () => {
    const users=useLoaderData();
    
    return (
        <>
        <Navbar></Navbar>
        <Video></Video>
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