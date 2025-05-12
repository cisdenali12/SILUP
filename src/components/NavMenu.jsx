import React from "react";
import {RouteNames} from '../router'
import {Link } from "react-router-dom";
import "./NavMenu.css";

export function NavMenu ({className}){
    return (
<nav className={`menu ${className}`}>
    <Link to={RouteNames.HOME}>Inicia Sesion</Link>
    <br />
    <Link to={RouteNames.REGISTER}>Registrate</Link> 
    <br />
    <Link to={RouteNames.CATEGORIES}>Categorias</Link>
    <br />
    <Link to={RouteNames.DASHBOARD}>Dashboard</Link>
  </nav>
    )
    

}