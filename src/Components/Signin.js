import React from 'react'
import '../Styling/signin.css'
import '../Styling/modal.css'
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

    
const Signin = () => {

  const [isLoading, setisLoading] = useState(false)


  // const loader = ()=>{
  //   setisLoading(true)
  //   const timer = setTimeout(()=>{
  //     setisLoading(false)
  //     navigate("/dashboard")
  //     }, 3000)
  // }

  const navigate = useNavigate()
      const [data, setdata] = useState([])

      const formik = useFormik({
        initialValues : {
          email : "",
          password : ""
        },
        validationSchema:yup.object({
          // userName : yup.string().min(5, "Username should be at least 5 characters").required("Username is required"),
          email : yup.string().email("Must be a valid email").required("Email is required"),
          password : yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}$/, "Password must include an uppercase, lowercase letter, and a number.").required("Password is required")
        }),
        
        onSubmit:(value) =>{
          console.log(value);
          setisLoading(true)

          

          try {
            axios.post('https://spotter-backend.onrender.com/api/user/login', value)
              .then((res) => {
                
              console.log('Login succesfull');
              console.log(res);
            NotificationManager.success(res.data.message)

              //  NotificationManager.success("Login Successful")
               console.log(res.data.Username);
               localStorage.setItem('Username', res.data.Username)
               localStorage.setItem('genToken', res.data.genToken)
               const timer = setTimeout(()=>{
                 setisLoading(false)
                 navigate("/dashboard")
                 }, 2000)

                // toast.success()
                formik.setValues({
                  // userName : "",
                  email : "",
                  password : ""
                })

              }).catch((err)=>{
                console.log(err);
            NotificationManager.error(err.response.data.message)
            const timer = setTimeout(()=>{
              setisLoading(false)
              // navigate("/dashboard")
              }, 2000)

                // NotificationManager.error("Login error, try again later")
                // toast.error("Signup error, try again later")
                formik.setValues({
                  // userName : "",
                  email : "",
                  password : ""
                })
              })
          } catch (error) {
            console.log(error.response.data.message);

          }
          


            
         
       
          
        }


      }) 

      console.log(formik.errors);
      console.log(formik.touched)
      
      const forgot = ()=>{
          navigate('/signup')
      }

      return (
        <>

          {/* <Navbar/>         */}
           <form onSubmit={formik.handleSubmit} action="">

           <div className="signin">
                <div className="formed">
                    <header>Sign In</header>
                    <hr/>

                    <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Email' name='email' type='email' />
                    <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small>
                    <input onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} placeholder='Password' name='password' type="password" />
                    <small className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</small>

                <div className="check">
                <div className="box">
                <input type="checkbox" name="" id="" />
                <p>Remember me</p>
                </div>
                <p style={{color: 'rgb(3,168,78)'}}> <Link to={'/forgotpassword'}> <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Forgot Password?</span> </Link></p>
                </div>


                <button disabled={isLoading} className='btu' type='submit'>{isLoading? <span class="loader2"></span>: "Sign in"}</button>
                <p style={{marginTop: '15px', display : 'flex', justifyContent : 'center'}}>Don't have an account? <Link to={'/signup'}> <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Register</span> </Link> </p>
                
                {/* <ToastContainer/> */}
                <NotificationContainer/>

                </div>
            </div>


           </form>
            {/* <Footer/> */}
        </>
      )
    }
    
    export default Signin


//     <div>
//     <form onSubmit={formik.handleSubmit} className='w-25 mx-auto bg-white' action="">
//         <h1 className='text-muted'>Signup</h1>
//         <div className='mt-3'>
//            <div className='form-group mt-3'>
//               <label htmlFor="">Username</label>
//               <input onBlur={formik.handleBlur} value={formik.values.username} onChange={formik.handleChange} className='form-control' type="text" name="username" />
//               <p className='text-danger'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>
//            </div>
//            <div className='form-group mt-3'>
//               <label htmlFor="email">Email</label>
//               <input onBlur={formik.handleBlur}  value={formik.values.email}  onChange={formik.handleChange} className='form-control' type="text" name="email" />
//               <p className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>
//            </div>
//            <div className='form-group mt-3'>
//               <label htmlFor="password">Password</label>
//               <input onBlur={formik.handleBlur} value={formik.values.password}  onChange={formik.handleChange} className='form-control' type="password" name="password" />
//               <p className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
//            </div>
//            <div className='mt-3'>
//              <button type='submit' className='btn  btn-primary'>Register</button>
//              <ToastContainer/>
//            </div>
//         </div>
//     </form>
// </div>




















//     onSubmit:(value)=>{
//       console.log(value);
//       const user = data.find(el=>el.email == value.email)
//       if (user) {
//        // alert("user already exist")
//        toast.error("user already exist")
//        formik.setValues({
//            email: "",
//            username: "",
//            password:""
//           })
//       }else{
//        try {
//            axios.post("http://localhost:4567/User",value)
//            .then((res)=>{
//             console.log(res);
//             toast.success("signed up successful")
//             formik.setValues({
//                email: "",
//                username: "",
//                password:""
//               })
//            }).catch((err)=>{
//             console.log(err);
//             toast.error("error occur while signing up")
//             formik.setValues({
//                email: "",
//                username: "",
//                password:""
//               })
//            })
//           } catch (error) {
//            console.log(error);
//           }
//       }

//    }
// })