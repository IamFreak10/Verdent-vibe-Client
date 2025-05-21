import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';

import Gardeners from '../Components/Gardeners';
import AuthLayout from '../Layouts/AuthLayout';
import LoginLayout from '../Components/LoginLayout';
import Registration from '../Components/Registration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      
      {
       index:true,
        element: <Gardeners></Gardeners>,
      },
    ],
  },
  {
    path: '/authentication',
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            index:true,
            element:<LoginLayout></LoginLayout>
        }
        ,{
            path:'registration',
            element:<Registration></Registration>
        }
    ]

  }
]);
export default router;
