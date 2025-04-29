import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.jsx
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
     

<h1>Bienvenido a SILUP <br /> tu inventario personal</h1>

<nav>
        {/* <Link to="/">Inicia Sesion</Link><br />
        <Link to="/register">Registrate</Link>br */}
        <Link to="/categories">Categorias</Link>
      </nav>


      <main>
        <Outlet />
      </main>
    </>
  );
}


export default App
