import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Type = () => (
  <div className="flex justify-center py-8">
    <TypeAnimation
      sequence={[
        'Popular Six Gardening Tips', 2000, 
        '', 1000,                          
      ]}
      speed={50}
      className="text-center font-bold text-[#22461b]"
      style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)' }}
      repeat={Infinity}
    />
  </div>
);

export default Type;
