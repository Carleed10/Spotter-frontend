import React from 'react'
import '../Styling/signin.css'
import '../Components/Footer'
import { useState, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'


import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ToastContainer, toast } from 'react-toastify'

    
const ResetPassword = () => {

  const [data, setdata] = useState([])

    const navigate = useNavigate()
  
    
    const formik = useFormik({
      initialValues : {
                email : "",
                password : ""
      },
      validationSchema:yup.object({
        email : yup.string().email("Must be a valid email").required("Email is required"),
        password : yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}$/, "Paasword").required("Password is required")

  
      }),
      
      onSubmit:(value) =>{
        console.log(value);
        try {
          axios.post('http://localhost:5002/api/user/editPassword', value)
          .then((res) => {
            console.log(res);
            // console.log('OTP sent Successfully');
            NotificationManager.success(res.data.message)
            const timer = setTimeout(()=>{
              navigate('/signin')
              }, 2000)
            formik.setValues({
              email : "",
              password : ""
            })
  
          }).catch((err)=>{
            console.log(err);
            NotificationManager.error(err.response.data.message)
            formik.setValues({
              email : "",
              password : ""
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

          {/* <Navbar/>         */}
           <form onSubmit={formik.handleSubmit} action="">

           <div className="signin">
                <div className="formed">
                <header>Reset Password</header>
                    <hr/>

                    <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Email' name='email' type='email' />
                     <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small>
                     <input onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} placeholder='Reset Password' name='password' type='password' />
                     <small className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</small>


                               <button style={{marginTop : '20px'}} type='submit'>Reset Password</button>
                <NotificationContainer/>

                </div>
            </div>


           </form>
          
        </>
      )
    }
    
    export default ResetPassword