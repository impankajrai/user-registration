import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Registration from './pages/Registration';
import ShowData from './pages/ShowData';

const router=createBrowserRouter([
  {
    path:"/",
    element:  <App />,
    children:[
      {
        path:"/",
        element:<Registration/>
      },
      {
        path:"/show-data",
        element:<ShowData/>
      }
    ]
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

