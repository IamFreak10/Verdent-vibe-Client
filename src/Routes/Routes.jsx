import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';

import AuthLayout from '../Layouts/AuthLayout';
import LoginLayout from '../Components/LoginLayout';
import Registration from '../Components/Registration';
import PrivateRoute from './PrivateRoute';
import ShareGardenTip from '../Components/ShareGardenTip';
import BrowseTip from '../Layouts/BrowseTip';
import TipsdetailsLayout from '../Layouts/TipsdetailsLayout';
import MytipLayout from '../Layouts/MytipLayout';
import TipsUpdateLayout from '../Layouts/TipsUpdateLayout';
import ExploreGardener from '../Layouts/ExploreGardener';
import Error from '../Components/Error';
import ErrorLayout from '../Layouts/ErrorLayout';

const router = createBrowserRouter([
  {
    path: '/',

    element: <HomeLayout></HomeLayout>,
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
    path: '/Share-Garden-tip',
    element: (
      <PrivateRoute>
        <ShareGardenTip></ShareGardenTip>
      </PrivateRoute>
    ),
  },
  {
    path: '/Browse-Garden-tip',
    element: <BrowseTip></BrowseTip>,
  },
  {
    path: '/tip/:id',
    loader: ({ params }) =>
      fetch(
        `https://b11a10-server-side-iamfreak-production.up.railway.app/tips/${params.id}`
      ),
    element: (
      <PrivateRoute>
        <TipsdetailsLayout></TipsdetailsLayout>
      </PrivateRoute>
    ),
  },
  {
    path: '/My-Tips-page',
    element: (
      <PrivateRoute>
        <MytipLayout></MytipLayout>
      </PrivateRoute>
    ),
  },
  {
    path: '/update-tip/:id',
    loader: ({ params }) =>
      fetch(
        `https://b11a10-server-side-iamfreak-production.up.railway.app//tips/${params.id}`
      ),
    element: (
      <PrivateRoute>
        <TipsUpdateLayout></TipsUpdateLayout>
      </PrivateRoute>
    ),
  },
  {
    path: '/Explore-Gardeners',
    loader: () =>
      fetch('https://b11a10-server-side-iamfreak-production.up.railway.app/users'),
    element: <ExploreGardener></ExploreGardener>,
  },
  {
    path: '*',
    element: <ErrorLayout></ErrorLayout>,
  },
]);
export default router;
