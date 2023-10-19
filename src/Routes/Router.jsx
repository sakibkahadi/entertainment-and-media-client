import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandProducts from "../components/Body/BrandProducts";
import SingleProducts from "../components/Body/SingleProducts";
import UpdateProducts from "../components/Body/UpdateProducts";


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
        loader: ()=>fetch('/Data.json')
        
      },
      {
        path:'/details/:id',
        element:<SingleProducts></SingleProducts>,
        loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        
      },
      {
        path:'/products/:id',
        element:<UpdateProducts></UpdateProducts>,
        loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        
      }
      

    ]
  },
]);

export default myCreatedRoute