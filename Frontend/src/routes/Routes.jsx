import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

const router=createBrowserRouter([
            {
                path:'/',
                element:<Main></Main>,
                children:[
                    {
                        index:true,
                        element:<Home></Home>
                    },
                    {
                        path:'/login',
                        element:<Login></Login>
                    },
                    {
                        path:'/signup',
                        element:<SignUp></SignUp>
                    },
                    {
                       
                    }
                ]
            }

])

export default router;