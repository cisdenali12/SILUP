import { createBrowserRouter } from "react-router-dom";
import Pages from './pages'

// import { CN } from './pages'

// export const RouteNames = { 
//     LOGIN:"login",
//     REGISTER:"register",
//     CATEGORIES:"categories",
// }

export function createNavigation(){console.log(Pages.HomePage)}
// export function createNavigation(LayouteElement, ){
//     return  createBrowserRouter([
//         {
//           path: "/",
//           element: <LayouteElement />,        //  layout
//           children: [
//             { index: true,     element: <HomePage /> },   
//             { path: "register", element: <RegisterPage /> },   
//             { path: "categories", element: <CategoryPage /> }   
//           ],
//         },
//       ]);
// }