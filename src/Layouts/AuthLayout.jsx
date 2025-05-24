import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Video from '../Components/Video';
import Footer from '../Components/Footer';

const AuthLayout = () => {
  return (
   

    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Video></Video>
          <Outlet></Outlet>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
