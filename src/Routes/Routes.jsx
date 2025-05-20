import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Slider from '../Components/Slider';
import Gardeners from '../Components/Gardeners';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Slider></Slider>,
      },
      {
        path: 'gardeners',
        element: <Gardeners></Gardeners>,
      },
    ],
  },
]);
export default router;
