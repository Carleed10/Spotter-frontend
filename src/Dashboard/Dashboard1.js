import React from 'react'

import Dream from './Dream'
import Jobs from './Jobs'
import Footer from '../Components/Footer'
import Navbar3 from '../Components/Navbar3'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
import '../Dashboard style/Dashboard1.css'
// import Navbar2 from '../Components/Navbar2'
import Navbar from '../Components/Navbar'
import Dash from './Dash'

const Dashboard1 = () => {
  return (
    <>
   <div className="big-container">

       {/* <Navbar2/> */}

    <Navbar3/>
    

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