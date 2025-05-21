import React from 'react';
import './Bouncing.css';
import ActiveUser from '../ActiveUser';
const BouncingTex = () => {
  return (
    <div className="text-center ">
      <h1 className="text-2xl md:text-6xl text-[#1d611d]">
        <span className="bouncing-text">A</span>
        <span className="bouncing-text">C</span>
        <span className="bouncing-text">T</span>
        <span className="bouncing-text">I</span>
        <span className="bouncing-text">V</span>
        <span className="bouncing-text">E</span>
        <span className="bouncing-text">&nbsp; </span>
        <span className="bouncing-text">G</span>
        <span className="bouncing-text">A</span>
        <span className="bouncing-text">R</span>
        <span className="bouncing-text">D</span>
        <span className="bouncing-text">E</span>
        <span className="bouncing-text">N</span>
        <span className="bouncing-text">E</span>
        <span className="bouncing-text">R</span>
        <span className="bouncing-text">S</span>
      </h1>
      <ActiveUser ></ActiveUser>
    </div>
  );
};

export default BouncingTex;
