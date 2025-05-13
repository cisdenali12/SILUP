import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from './router'
import { StrictMode } from 'react'
import { Popup } from './components/Popup'

import './index.css'


const router = createRouter()

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Popup show="true">
    hola
    <br/>
    mundo

    </Popup>
  </StrictMode>
);





