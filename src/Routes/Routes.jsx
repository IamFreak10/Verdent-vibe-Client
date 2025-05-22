import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';

import Gardeners from '../Components/Gardeners';
import AuthLayout from '../Layouts/AuthLayout';
import LoginLayout from '../Components/LoginLayout';
import Registration from '../Components/Registration';
import PrivateRoute from './PrivateRoute';
import ShareGardenTip from '../Components/ShareGardenTip';
import BrowseTip from '../Layouts/BrowseTip';
import TipsdetailsLayout from '../Layouts/TipsdetailsLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Gardeners></Gardeners>,
      },
    ],
  },
  {
    path: '/authentication',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <LoginLayout></LoginLayout>,
      },
      {
        path: 'registration',
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path:'/Share-Garden-tip',
    element:<PrivateRoute>
      <ShareGardenTip></ShareGardenTip>
    </PrivateRoute>
  },
  {
    path:'/Browse-Garden-tip',
   element:<BrowseTip></BrowseTip>
  }
  ,{
    path:'/tip/:id',
    loader: ({params})=>fetch(`http://localhost:3000/tips/${params.id}`),
    element:<PrivateRoute><TipsdetailsLayout></TipsdetailsLayout></PrivateRoute>
  },
]);
export default router;
