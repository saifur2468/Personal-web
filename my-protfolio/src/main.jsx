// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './ALLcomponent/Error.jsx';
import Manlayout from './ALLcomponent/Manlayout.jsx';
import HOME from './ALLcomponent/Home.jsx'; // <-- Make sure it's imported

const router = createBrowserRouter([
  {
    path: "/",
    element: <Manlayout />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <HOME />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
