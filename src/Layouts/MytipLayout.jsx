import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import MyTipsDashboard from '../Components/MyTipsDashboard';
import Footer from '../Components/Footer';
import Dashboard from '../Components/Dashbord';
import DashboardContext from '../Contexts/DashbordContext';

const MytipLayout = () => {
  //   <div className="min-h-screen flex flex-col">
  //     <main className="flex-grow">{/* Your main page content goes here */}</main>
  //     <Footer />
  //   </div>;
  const{on, setOn} = useContext(DashboardContext);
  return (
    <>
      <Navbar></Navbar>

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Video></Video>
           <Dashboard isOpen={on} onClose={() => setOn(false)} />
          <MyTipsDashboard></MyTipsDashboard>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MytipLayout;
