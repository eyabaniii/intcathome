import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  './Service.css';
const Service = () => {
    const[service,setservice]=useState([])
    const getprod=()=>{
axios.get('http://localhost:3000/service').then((res)=>{setservice(res.data);console.log(res.data)})

    }
    useEffect(()=>
    {
        getprod();
    },[])
  return (
    <div className='service'>
        <h1>Nos Services</h1>
   <div className="cards">
    {service && service.map((el)=>
    <div className="card" key={el.id}>
        <div><img src={el.photo} alt="" /></div>
        
        <h4>{el.titre} </h4>
 
    </div>
    )}
   </div>
      
    </div>
  )
}

export default Service
