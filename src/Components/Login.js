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

import { Formik, useFormik, } from 'formik'
import * as yup from 'yup'
// import axios from 'axios'

// import Footer from '../Components/Footer'
// import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [data, setdata] = useState([])

  const navigate = useNavigate()
  // useEffect(() => {
  //   axios.get('http://localhost:5002/api/user/signUp')
  //   .then((res) => {
  //     console.log(res.data);
  //     setdata(res.data)
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }, [])
  
  const formik = useFormik({
    initialValues : {
      userName : "",
      email : "",
      password : ""
    },
    validationSchema:yup.object({
      userName : yup.string().min(5, "Username should be at least 5 characters").required("Username is required"),
      email : yup.string().email("Must be a valid email").required("Email is required"),
      password : yup.string().matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}$").required("Password is required")
    }),
    
    onSubmit:(value) =>{
      console.log(value);
      try {
        axios.post('http://localhost:5002/api/user/signUp', value)
        .then((res) => {
          console.log('Signup succesfull');
          NotificationManager.success('Signup successfull')

          const timer = setTimeout(()=>{
            navigate('/signin')
            }, 2000)
          
          
          // toast.success("SignuYp Successful")
          formik.setValues({
            userName : "",
            email : "",
            password : ""
          })

        }).catch((err)=>{
          console.log(err);
          NotificationManager.error(err.response.data.message)
          formik.setValues({
            userName : "",
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
    {/* <Navbar/> */}
     <div className="login">
                <form onSubmit={formik.handleSubmit} action="">

                <div className="form2">
                    <header>Register Now</header>
                    <hr/>



                    <input onBlur={formik.handleBlur} value={formik.values.userName} onChange={formik.handleChange} placeholder='Username' name='userName' type='text' />
                    <small className='text-danger mt-10'>{formik.touched.userName && formik.errors.userName ? formik.errors.userName : ""}</small>
                    <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Email' name='email' type='email' />
                    <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small>
                    <input onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} placeholder='Password' name='password' type="password" />
                    <small className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</small>
                    <input  placeholder='Confirm Password' type="password" />
                    {/* <p className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p> */}


                <div className="check">
                <div className="box">
                <input type="checkbox" name="" id="" />
                <p style={{fontSize : '13px'}}>Accept our terms and condition and privacy policy</p>
                </div>
                </div>


                <button type='submit'>Register Now</button>
                {/* <ToastContainer/> */}
                <NotificationContainer/>

                <p style={{marginTop: '15px', display : 'flex', justifyContent : 'center'}}>Already have an account? <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Login</span></p>
                </div>

                </form>
            </div>
           
           
            {/* <Footer/> */}
    
    </>



  )
}

export default Login