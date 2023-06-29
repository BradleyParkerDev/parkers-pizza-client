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
import CartPage from './Pages/CartPage';
import UserAccountPage from './Pages/UserAccountPage';

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
          path: "/registration",
          element: <RegistrationPage/>
        },
        {
          path:"/menu",
          element:<MenuPage/>
        },
        {
          path: "/pizza-builder",
          element: <PizzaBuilderPage/>
        },
        {
          path: "/cart",
          element: <CartPage/>
        },
        {
          path: "/user-account",
          element: <UserAccountPage />
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
