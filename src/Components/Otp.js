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


const Otp = () => {
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
     otp : "",
    //   email : "",
    //   password : ""
    },
    validationSchema:yup.object({
      otp : yup.string().required("OTP is required"),
    //   email : yup.string().email("Must be a valid email").required("Email is required"),
    //   password : yup.string().matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}$").required("Password is required")
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
                    <header>Enter OTP sent to your mail</header>
                    <hr/>



                    {/* <input onBlur={formik.handleBlur} value={formik.values.userName} onChange={formik.handleChange} placeholder='Username' name='userName' type='text' /> */}
                    {/* <small className='text-danger mt-10'>{formik.touched.userName && formik.errors.userName ? formik.errors.userName : ""}</small> */}
                    <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Enter OTP' name='email' type='text' />
                    {/* <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small> */}
                    {/* <h6>Enter OTP</h6> */}
                    {/* <input onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} placeholder='Password' name='password' type="password" /> */}
                    {/* <small className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</small> */}
                    {/* <input  placeholder='Confirm Password' type="password" /> */}
                    {/* <p className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p> */}




                <button style={{marginTop : '20px'}} type='submit'>Verify OTP</button>
                {/* <ToastContainer/> */}
                <NotificationContainer/>

                {/* <p style={{marginTop: '15px', display : 'flex', justifyContent : 'center'}}>Remeber your password ?<Link to={'/signin'}> <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Login</span> </Link></p> */}
                </div>

                </form>
            </div>
           
           
            {/* <Footer/> */}
    
    </>



  )
}

export default Otp