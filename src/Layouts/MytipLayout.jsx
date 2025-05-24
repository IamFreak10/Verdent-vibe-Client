import React from 'react';
import Navbar from '../Components/Navbar';
import Video from '../Components/Video';
import MyTipsDashboard from '../Components/MyTipsDashboard';
import Footer from '../Components/Footer';

const MytipLayout = () => {
  //   <div className="min-h-screen flex flex-col">
  //     <main className="flex-grow">{/* Your main page content goes here */}</main>
  //     <Footer />
  //   </div>;

  return (
    <>
      <Navbar></Navbar>

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Video></Video>
          <MyTipsDashboard></MyTipsDashboard>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MytipLayout;
