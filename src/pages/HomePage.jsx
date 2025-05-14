import React from "react";
import {LoginForm} from '../components/LoginForm';

export function HomePage() {
  return (
  
  <div className=" flex-flow" >
  <h1 className="text-red-900">Bienvenido a SILUP <br /> tu inventario personal </h1>

  <LoginForm />

  </div>
  )
}