// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'; // Your main App component (layout)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './index.css';

// 1. Define your application's routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This is your root layout component
    children: [
      {
        path: "/",
        element: <HomePage />, // Rendered at the root path
      },
      {
        path: "about",
        element: <AboutPage />, // Rendered at the "/about" path
      },
    ],
  },
]);

// 2. Render the app with the router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);