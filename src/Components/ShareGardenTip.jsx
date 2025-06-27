import React, { useContext } from 'react';
import Navbar from './Navbar';
import Video from './Video';
import GardenTipForm from './GardenTipForm';
import Footer from './Footer';
import DashboardContext from '../Contexts/DashbordContext';
import Dashboard from './Dashbord';

const ShareGardenTip = () => {
   const{on, setOn} = useContext(DashboardContext);
  return (
    <>
      <Navbar></Navbar>
      <Video></Video>
      <Dashboard isOpen={on} onClose={() => setOn(false)} />
      <div>
        <GardenTipForm></GardenTipForm>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ShareGardenTip;
