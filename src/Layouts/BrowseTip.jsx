import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import PublicPrivateTips from '../Components/PublicPrivateTips';
import Footer from '../Components/Footer';
import Dashboard from '../Components/Dashbord';
import DashboardContext from '../Contexts/DashbordContext';

const BrowseTip = () => {
   const{on, setOn} = useContext(DashboardContext);
  return (
    <>
      <Navbar></Navbar>
      <Video></Video>
      <Dashboard isOpen={on} onClose={() => setOn(false)} />
      <PublicPrivateTips></PublicPrivateTips>
      <Footer></Footer>
    </>
  );
};

export default BrowseTip;
