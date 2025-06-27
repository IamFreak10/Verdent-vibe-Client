import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './Firebase/Firebase.js';
import Authprovider from './Contexts/Authprovider.jsx';
import { RouterProvider } from 'react-router';
import router from './Routes/Routes.jsx';
import DashbordProvider from './Contexts/DashbordProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashbordProvider>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </DashbordProvider>
  </StrictMode>
);
