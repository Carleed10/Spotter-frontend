import React from 'react'
import '../Styling/notfound.css'
import error2 from '../Images/401.jpeg'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Navbar2 from './Navbar2'

const Notauthorised = () => {

    const navigate = useNavigate()

    const backHome =()=>{
        navigate('/landing')
    }
    
  return (
    <>
        {/* <Navbar2/> */}
        <div className="not-div">
            <div className="not-found">
                <img src={error2} alt="" />
                <h5 style={{textAlign : 'center'}}>This URL is valid, but you aren't authorised for this content. <br /> Please login or sign up.</h5>
                <button onClick={backHome}> <Icon icon="ic:round-arrow-back" width="16" height="16" /> Back to home</button>
            </div>
        </div>

        {/* <Footer/> */}
    </>
  )
}

export default Notauthorised