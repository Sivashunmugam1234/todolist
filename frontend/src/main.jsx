// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'; 
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/",
    //     element: <HomePage />, // Rendered at the root path
    //   },
    //   {
    //     path: "about",
    //     element: <AboutPage />, // Rendered at the "/about" path
    //   },
    // ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);