import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandProducts from "../components/Body/BrandProducts";


const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/Data.json')
      },
      {
        path: '/login',
        element: <SignIn></SignIn>,
        
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path:'/brands/:brand',
        element:<BrandProducts></BrandProducts>,
        loader: ()=>fetch('http://localhost:5000/products')
      }


    ]
  },
]);

export default myCreatedRoute