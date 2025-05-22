

import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';
import Authcontext from '../Contexts/Authcontext';
import { use } from 'react';


const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = use(Authcontext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/authentication/login'}></Navigate>;
};

export default PrivateRoute;