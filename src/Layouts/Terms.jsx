import React from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import TermsOfUse from '../Components/TermsOfUse';
import Dashboard from '../Components/Dashbord';
import { useContext } from 'react';
import DashboardContext from '../Contexts/DashbordContext';

const Terms = () => {
  const { on, setOn } = useContext(DashboardContext);
  return (
    <>
    
      <Navbar></Navbar>
       <Dashboard isOpen={on} onClose={() => setOn(false)} />
      <Video></Video>
      <TermsOfUse></TermsOfUse>

      <Footer></Footer>
    </>
  );
};

export default Terms;
