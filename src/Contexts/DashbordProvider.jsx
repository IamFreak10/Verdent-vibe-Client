import React, { useState } from 'react';
import DashboardContext from './DashbordContext';

const DashbordProvider = ({ children }) => {
  const [on, setOn] = useState(false);
  const functionPass = {
    on,
    setOn,
  };
  return (
    <DashboardContext.Provider value={functionPass}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashbordProvider;
