import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Main = () => {
  return (
    <div className="mx-[5%]">
        <Navbar></Navbar>
        <div className="">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Main