import React from 'react'
import '../Styling/login.css'
import Footer from '../Components/Footer'
import '../Components/Navbar'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { Formik } from 'formik'
// import { ToastContainer } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css';
import { Link } from 'react-router-dom'

import { Formik, useFormik, } from 'formik'
import * as yup from 'yup'
// import axios from 'axios'

// import Footer from '../Components/Footer'
// import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
  const [data, setdata] = useState([])

  const navigate = useNavigate()

  
  const formik = useFormik({
    initialValues : {
              email : "",
    },
    validationSchema:yup.object({
      email : yup.string().email("Must be a valid email").required("Email is required"),
    }),
    
    onSubmit:(value) =>{
      console.log(value);
      try {
        axios.post('http://localhost:5002/api/user/forgotPassword', value)
        .then((res) => {
          console.log('OTP sent Successfully');
          NotificationManager.success('OTP sent Successfully')
          const timer = setTimeout(()=>{
            navigate('/forgotpassword/otp')
            }, 2500)
          formik.setValues({
            email : "",
          })

        }).catch((err)=>{
          console.log(err);
          NotificationManager.error(err.response.data.message)
          formik.setValues({
            email : "",
          })
        })
      } catch (error) {
        console.log(error);
      }
    }


  }) 

  console.log(formik.errors);
  console.log(formik.touched)


  return (
    <>
    {/* <Navbar/> */}
     <div className="login">
                <form onSubmit={formik.handleSubmit} action="">

                <div className="form2">
                    <header>Forgot Password</header>
                    <hr/>

                    <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Email' name='email' type='email' />
                    <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small>

                <button style={{marginTop : '20px'}} type='submit'>Send Otp</button>
                <NotificationContainer/>

                <p style={{marginTop: '15px', display : 'flex', justifyContent : 'center'}}>Remeber your password ?<Link to={'/signin'}> <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Login</span> </Link></p>
                </div>

                </form>
            </div>
           
           
            {/* <Footer/> */}
    
    </>



  )
}

export default ForgotPassword