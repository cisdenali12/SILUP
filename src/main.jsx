import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from './router'
import { StrictMode } from 'react'

import './index.css'


const router = createRouter()

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);





