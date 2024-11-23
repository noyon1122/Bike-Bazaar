import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Aprillia from "../components/Aprillia";
import Bajaj from "../components/Bajaj/Bajaj";
import Benelli from "../components/Benelli/Benelli";
import Hero from "../components/Hero/Hero";
import Escorts from "../components/Escorts/Escorts";


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

                    },
                    {
                        path:'/bajaj',
                        element:<Bajaj></Bajaj>
                    },
                    {
                        path:'/benelli',
                        element:<Benelli></Benelli>
                    },
                    {
                     path:'/hero',
                     element:<Hero></Hero>
                    },
                    {
                        path:'escorts',
                        element:<Escorts></Escorts>
                    },
                    {
                        path:''
                    }
                ]
            }

])

export default router;