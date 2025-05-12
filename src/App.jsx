import { useState } from 'react'
import './App.css'
import {RouteNames} from './router'
import {NavMenu} from './components/NavMenu'
  // App.jsx
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className='layout'>
      {/* <NavMenu className= 'header'/> */}
      <main>
        <Outlet />
      </main>
      {/* <footer className='footer'>Universidad de Guadalajara</footer> */}
    </div>
  );
}


export default App
