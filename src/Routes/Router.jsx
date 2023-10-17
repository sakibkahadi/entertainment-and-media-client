import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error> ,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<SignIn></SignIn>
        },
        {
            path:'/register',
            element:<SignUp></SignUp>
        },
        
      ]
    },
  ]);
  
export default myCreatedRoute