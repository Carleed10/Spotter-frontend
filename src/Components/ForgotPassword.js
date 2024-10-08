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
    
const ForgotPassword = () => {

  
  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(false)


  const navigate = useNavigate()

  
  const formik = useFormik({
    initialValues : {
              email : "",
    },
    validationSchema:yup.object({
      email : yup.string().email("Must be a valid email").required("Email is required"),
    }),
    
    onSubmit:(value) =>{
      setisLoading(true)

      console.log(value);
      try {
        axios.post('https://spotter-backend.onrender.com/api/user/forgotPassword', value)
        .then((res) => {
          console.log('OTP sent Successfully');
          NotificationManager.success('OTP sent Successfully')

          const timer = setTimeout(()=>{
            setisLoading(false)

            navigate('/forgotpassword/otp')
            }, 2500)
          formik.setValues({
            email : "",
          })

        }).catch((err)=>{
          console.log(err);
          setisLoading(false)

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

          {/* <Navbar/>         */}
           <form onSubmit={formik.handleSubmit} action="">

           <div className="signin">
                <div className="formed">
                <header>Forgot Password</header>
                    <hr/>

                    <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Email' name='email' type='email' />
                  <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small>

                  <button disabled={isLoading} style={{marginTop : '20px'}} type='submit'>{isLoading? <span class="loader2"></span>: "Send OTP"}</button>

                
              {/* <NotificationContainer/> */}

                 <p style={{marginTop: '15px', display : 'flex', justifyContent : 'center'}}>Remeber your password ?<Link to={'/signin'}> <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Login</span> </Link></p>
                <NotificationContainer/>

                </div>
            </div>


           </form>
          
        </>
      )
    }
    
    export default ForgotPassword