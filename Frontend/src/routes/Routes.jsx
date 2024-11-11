import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Aprillia from "../components/Aprillia";


const router=createBrowserRouter([
            {
                path:'/',
                element:<Main></Main>,
                children:[
                    {
                        path:'/',
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
                       path:'/aprillia',
                       element:<Aprillia></Aprillia>

                    }
                ]
            }

])

export default router;