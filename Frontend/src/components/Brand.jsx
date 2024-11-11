import { Link, useFetchers } from "react-router-dom"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useEffect, useState } from "react"
import Aprillia from '../assets/Bike Brand/Aprilia.png'
import Bejaj from '../assets/Bike Brand/Bajaj.png'
import Benelli from '../assets/Bike Brand/Benelli.png'
import Escorts from '../assets/Bike Brand/Escorts.png'
import Hero from '../assets/Bike Brand/Hero.png'
import Mahindra from '../assets/Bike Brand/Mahindra.png'
import Royal from '../assets/Bike Brand/Royal.png'
import TVS from '../assets/Bike Brand/TVS.png'
const Brand = () => {
let [tabs,setTabs]=useState(1);
const [bikes,setBikes]=useState([])



const handleTab=(id)=>{
  setTabs(id);
  console.log(id);
}
  return (
    <div className="bg-gray-50 py-10 my-4 rounded-md">
        <div className="w-full justify-center space-y-4">
            <div className="pb-0sm:pb-4"><p className="text-center text-2xl sm:text-4xl font-medium">Choose your Bike By</p></div>

            {/*Bike Tabs  */}
            <div  className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div style={{borderBottom: tabs===1 ? '1px solid red':"", color: tabs===1 ? 'red':''}}
                 onClick={()=>handleTab(1)} className="w-full text-xl text-center font-medium py-2  hover:border hover:bg-gray-100 rounded-md">Brand</div>
                <button style={{borderBottom: tabs===2 ? '1px solid red':"", color: tabs===2 ? 'red':'' }}
                onClick={()=>handleTab(2)} className="w-full text-xl font-medium p-2">Budget</button>
                <button style={{borderBottom: tabs===3 ? '1px solid red':"",color: tabs===3 ? 'red':''}}
                 onClick={()=>handleTab(3)} className="w-full text-xl font-medium p-2">Displacement</button>
                <button style={{borderBottom: tabs===4 ? '1px solid red':"",color: tabs===4 ? 'red':''}}
                onClick={()=>handleTab(4)} className="w-full text-xl font-medium p-2">Body Style</button>
            </div>
             {/* Choose by Brand */}
            <div>
              {
                tabs===1 &&  
                (
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-gray-500 text-xl font-bold">
                <Link to={'/aprillia'}>
                <div className="flex flex-col justify-center items-center hover:text-black space-y-6  sm:space-y-4">
                    <img className="w-36 h-24 sm:h-28" src={Aprillia} alt="" />
                    <h1 className="text-center hover:text-black ">Aprillia</h1>
                  </div>
                </Link>
                 <Link>
                 <div className="flex flex-col justify-center items-center hover:text-black">
                    <img className="w-36 h-28" src={Bejaj} alt="" />
                    <h1 className="text-center hover:text-black ">Bejaj</h1>
                  </div>
                 </Link>
                  <Link>
                  <div className="flex flex-col justify-center items-center hover:text-black">
                    <img className="w-36 h-28" src={Benelli} alt="" />
                    <h1 className="text-center hover:text-black ">Benelli</h1>
                  </div>
                  </Link>
                <Link>
                <div className="flex flex-col justify-center items-center hover:text-black">
                    <img className="w-36 h-28" src={Escorts} alt="" />
                    <h1 className="text-center hover:text-black ">Escorts</h1>
                  </div>
                </Link>
                 <Link>
                 <div className="flex flex-col justify-center items-center hover:text-black">
                    <img className="w-36 h-28" src={Hero} alt="" />
                    <h1 className="text-center hover:text-black ">Hero</h1>
                  </div>
                 </Link>
                 <Link>
                 <div className="flex flex-col justify-center items-center hover:text-black">
                    <img className="w-36 h-28" src={TVS} alt="" />
                    <h1 className="text-center hover:text-black ">TVS</h1>
                  </div>
                 </Link>
                 <Link>
                 <div className="flex flex-col justify-center items-center hover:text-black">
                    <img className="w-36 h-28" src={Mahindra} alt="" />
                    <h1 className="text-center hover:text-black ">Mahindra</h1>
                  </div>
                 </Link>
                 <Link>
                 <div className="flex flex-col justify-center items-center  hover:text-black">
                    <img className="w-36 h-28" src={Royal} alt="" />
                    <h1 className="text-center ">Royal</h1>
                  </div>
                 </Link>                 
                 </div>
                )
              }
               
            </div>
            {/* Choose by budget */}
            <div>
              {
                 
                  tabs===2 &&  
                  (
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-gray-500 text-xl font-medium justify-center items-center">
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 60,000</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 80,000</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 1 Lakh</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 2 Lakh</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 2.5 Lakh</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 2 Lakh</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 3 Lakh</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 5 Lakh</p></div>
                   </div>
                  )
                
              }
            </div>
             {/* Choose by Displacement */}
             <div>
              {
                 
                  tabs===3 &&  
                  (
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-gray-500 text-xl font-medium justify-center items-center">
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 80cc</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 100cc</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 110cc</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under </p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 2.5 Lakh</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 2 Lakh</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 3 Lakh</p></div>
                    <div className="text-center border py-2 hover:bg-gray-100"><p>Under 5 Lakh</p></div>
                   </div>
                  )
                
              }
            </div>
            <div>
              {
                 
                  tabs===4 &&  
                  (
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-gray-500 text-xl font-medium justify-center items-center">
                    <div><p className="text-center hover:text-black">Sports Bike</p></div>
                    <div><p className="text-center hover:text-black">Scooter</p></div>
                    <div><p className="text-center hover:text-black">Cruiser</p></div>
                    <div><p className="text-center hover:text-black">Cafe Racer</p></div>
                    <div><p className="text-center hover:text-black">Off-Road</p></div>
                    <div><p className="text-center hover:text-black">Commuter</p></div>
                    <div><p className="text-center hover:text-black">Electric Bike</p></div>
                    <div><p className="text-center hover:text-black">Moped</p></div>
                    <div><p className="text-center hover:text-black">Tourer</p></div>
                    <div><p className="text-center hover:text-black">Mini Bike</p></div>    
                   </div>
                  )
                
              }
            </div>
        </div>
    </div>
  )
}

export default Brand