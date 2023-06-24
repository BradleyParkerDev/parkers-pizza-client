import './App.css';
import Layout from './Layout/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react';


//Pages
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';
import PizzaBuilderPage from './Pages/PizzaBuilderPage'
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';

function App(props) {
  const router = createBrowserRouter([
    {
      
      path: "/",
      element: <Layout/>,
      children: [
        {
          index:true,
          element:<HomePage/>
        },
        {
          path:"/login",
          element:<LoginPage/>
        },
        {
          path: "/register",
          element: <RegistrationPage/>
        },
        {
          path:"/menu",
          element:<MenuPage/>
        },
        {
          path: "/pizza-builder",
          element: <PizzaBuilderPage/>
        }
      ]      
    }  
  ])
  return (
    <div className="App-header">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
