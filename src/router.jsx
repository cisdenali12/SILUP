import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage, RegisterPage, ContentLayout} from './pages'
import { Dashboard } from "./pages/Dashboard";
import { CategoryDetail } from "./pages/CategoryDetail";


export const RouteNames = { 
    HOME:"/",
    LOGIN:"/login",
    REGISTER:"/register",
    CATEGORIES:"/categories",
    DASHBOARD:"/dashboard",
}


export function createRouter(){
    return  createBrowserRouter([
        {
          path: RouteNames.HOME,
          element: React.createElement(Navigate, { to: RouteNames.LOGIN, replace: true})  
        },
        {
          path: RouteNames.LOGIN, 
          element: <HomePage />
        },
        {
          path: RouteNames.REGISTER, 
          element: <RegisterPage />
        },
        {
          element: <ContentLayout/>, 
          children: [
            { path: RouteNames.DASHBOARD, element: <Dashboard /> },   
            { path:`${RouteNames.DASHBOARD}/:categoryId`, element: <CategoryDetail /> }
          ],
        },
        {
          path: '*', 
          element: React.createElement('div',null,[<h1 key="1">404!</h1>])
        },
      ]);
}