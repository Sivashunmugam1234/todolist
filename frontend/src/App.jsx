// src/App.jsx

import ToDoList from "./pages/ToDoList";

// import AuthLayout from "./pages/AuthLayout";



// import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <AuthLayout/> */}
      <ToDoList/>


      {/* Navigation links */}
      {/* <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link>
      </nav> */}
{/* 
      <hr /> */}

      {/* This is where the child routes will be rendered */}
      {/* <main> */}
        {/* <Outlet /> */}
      {/* </main> */}
    </div>
  );
}

export default App;