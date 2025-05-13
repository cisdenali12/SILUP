import React from "react";
import { createBrowserRouter, Navigate, replace } from "react-router-dom";
import { HomePage, RegisterPage, CategoryPage, DashPage, ContentLayout} from './pages'

// import { CN } from './pages'

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
            { index: true, path: RouteNames.CATEGORIES, element: <CategoryPage /> },   
            { path: RouteNames.DASHBOARD, element: <DashPage /> }   
          ],
        },
        {
          path: '*', 
          element: <RegisterPage />
        },
      ]);
}