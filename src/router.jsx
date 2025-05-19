import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage, RegisterPage, ContentLayout} from './pages'
import { CategoryCont } from "./components/CategoryCont";
import { Items } from "./components/Items";


export const RouteNames = { 
    HOME:"/",
    LOGIN:"login",
    REGISTER:"register",
    CATEGORIES:"categories",
    DASHBOARD:"dashboard",
}


export function createRouter(){
    return  createBrowserRouter([
        {
          path: RouteNames.HOME,
          children: [
            { 
              index: true, 
              element: React.createElement(Navigate, { to: RouteNames.LOGIN, replace: true})  
            }, 
            {
              path: RouteNames.LOGIN, 
              element: <HomePage />
            }, 
          ]
        },
        {
          path: RouteNames.REGISTER, 
          element: <RegisterPage />
        },
        {
          element: <ContentLayout/>, 
          children: [
            { index: true, path: RouteNames.CATEGORIES, element: <CategoryCont /> },   
            { path: RouteNames.DASHBOARD, element: <Items /> }   
          ],
        },
        {
          path: '*', 
          element: <RegisterPage />
        },
      ]);
}