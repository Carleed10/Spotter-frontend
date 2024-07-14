import React from 'react'

import Dream from './Dream'
import Jobs from './Jobs'
import Footer from '../Components/Footer'
import Navbar2 from '../Components/Navbar2'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
import '../Dashboard style/Dashboard1.css'


const Dashboard1 = () => {
  return (
    <>
   <div className="big-container">

       {/* <Navbar2/> */}

    <Navbar2/>
    

    <div className="d-flex justify-content-between align-items-center outlet-div">

      <Sidebar/>
      

    <div className='flexed'>
      {/* <Dash/> */}
      
      <Outlet/>
    </div>
    </div>


   </div>
    
    
    </>
  )
}

export default Dashboard1