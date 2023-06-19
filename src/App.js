import './App.css';
import Layout from './Layout/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react';


//Pages
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';


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
          path:"/menu",
          element:<MenuPage/>
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
