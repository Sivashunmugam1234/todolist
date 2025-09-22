// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App'; 
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import './index.css';
// import LoginPage from './pages/LoginPage';
import ToDoList from './pages/ToDoList';
import AuthLayout from './pages/AuthLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
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
  {
    path:"/todolist",
    element:<ToDoList/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);