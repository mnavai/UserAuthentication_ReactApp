import React from 'react';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginHook from './components/LoginValidationHook';

// import "/Users/mnavai/Desktop/My Practice File/user-authentication/src/index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },{
    path: "/login",
    element: <Login></Login>,
  },{
    path: "/loginexample",
    element: <LoginHook></LoginHook>,
  },{
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },{
    path: "/signup",
    element: <Signup></Signup>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
