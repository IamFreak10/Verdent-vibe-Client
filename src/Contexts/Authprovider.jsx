import React, { useState } from 'react';
import Authcontext from './Authcontext';

const Authprovider = ({ children }) => {
  const [a, setA] = useState(false);
  const authInfo = {
    a,
    setA,
  };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
