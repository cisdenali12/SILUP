import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { HomePage, RegisterPage, CategoryPage, DashPage} from './pages'

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
          element: <HomePage />
        },
        {
          path: RouteNames.REGISTER, 
          element: <RegisterPage />
        },
        {
          element: <App/>, 
          children: [
            { index: true, path: RouteNames.CATEGORIES, element: <CategoryPage /> },   
            { path: RouteNames.DASHBOARD, element: <DashPage /> }   
          ],
        },
      ]);
}