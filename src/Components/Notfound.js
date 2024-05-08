import React from 'react'
import '../Styling/notfound.css'
import error from '../Images/not found.webp'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Navbar2 from './Navbar2'

const Notfound = () => {

    const navigate = useNavigate()

    const backHome =()=>{
        navigate('/')
    }
    
  return (
    <>
        <Navbar2/>
        <div className="not-div">
            <div className="not-found">
                <img src={error} alt="" />
                <h2>Sorry, this page is not found.</h2>
                <button onClick={backHome}> <Icon icon="ic:round-arrow-back" width="16" height="16" /> Back to home</button>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Notfound