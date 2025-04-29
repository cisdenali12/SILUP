import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createNavigation } from './router'
import './index.css'

import App from './App.jsx'

import {HomePage} from "./pages/HomePage";

import {RegisterPage} from "./pages/RegisterPage";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,        //  layout
//     children: [
//       { index: true,     element: <HomePage /> },   
//       { path: "register", element: <RegisterPage /> },   
//       { path: "categories, element: <CategoryPage /> },   
//     ],
//   },
// ]);



createNavigation(15)

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);





