import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from './router'
import { StrictMode } from 'react'
// import { StrictMode } from 'react'
import  { store } from './store'
import { Provider } from 'react-redux'
import { LoaderPopup } from "./components/popups";


const router = createRouter()

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <LoaderPopup/>
    </Provider>
  </StrictMode>
);





