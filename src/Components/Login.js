import React from 'react'
import '../Styling/login.css'
import Footer from '../Components/Footer'
import '../Components/Navbar'
import Navbar from '../Components/Navbar'

const Login = () => {
  return (
    <>
    {/* <Navbar/> */}
     <div className="login">
                <div className="form2">
                    <header>Register Now</header>
                    <hr/>



                    <input placeholder='Username' type='text' />
                    <input placeholder='Email' type='email' />
                    <input placeholder='Password' type="password" />
                    <input placeholder='Confirm Password' type="password" />


                <div className="check">
                <div className="box">
                <input type="checkbox" name="" id="" />
                <p style={{fontSize : '13px'}}>Accept our terms and condition and privacy policy</p>
                </div>
                </div>


                <button>Register Now</button>
                <p style={{marginTop: '15px', display : 'flex', justifyContent : 'center'}}>Already have an account? <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Login</span></p>
                </div>
            </div>
           
           
            <Footer/>
    
    </>



  )
}

export default Login