import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span
        style={{ animationDuration: '6s' }}
        className="loading loading-bars w-42 h-42 animate-pulse"
      ></span>
      <span
        style={{ animationDuration: '5s' }}
        className="loading loading-bars w-42 h-42 animate-pulse"
      ></span>
      <span
        style={{ animationDuration: '5s' }}
        className="loading loading-bars w-42 h-42 animate-pulse"
      ></span>
    </div>
  );
};

export default Loading;
