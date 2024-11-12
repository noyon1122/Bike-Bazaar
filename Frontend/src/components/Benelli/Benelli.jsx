import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleBike from '../SingleBike'


const Benelli = () => {

    const [bikes,setBikes]=useState([])

    useEffect(()=>{
       
        const getData =async()=>{
            const {data}=await axios.get('http://localhost:5000/benelli')
           // console.log(data)
           setBikes(data)
        }
        getData();
    },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
       {
        bikes.map(bike => <SingleBike key={bike._id} bike={bike}></SingleBike>)
       }
    </div>
  )
}

export default Benelli