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

    
const Otp = () => {

  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(false)


    const navigate = useNavigate()
  
    
    const formik = useFormik({
      initialValues : {
                email : "",
                otp : ""
      },
      validationSchema:yup.object({
        email : yup.string().email("Must be a valid email").required("Email is required"),
        otp : yup.string().required("OTP is required"),
  
      }),
      
      onSubmit:(value) =>{
        setisLoading(true)

        console.log(value);
        try {
          axios.post('https://spotter-backend.onrender.com/api/user/verifyOtp', value)
          .then((res) => {
            console.log(res);
           
            NotificationManager.success(res.data.message)
            const timer = setTimeout(()=>{
              setisLoading(false)

              navigate('/resetpassword')
              }, 2000)
            formik.setValues({
              email : "",
              otp : ""
            })
  
          }).catch((err)=>{
            console.log(err);
            setisLoading(false)

            NotificationManager.error(err.response.data.message)
            const timer = setTimeout(()=>{
              navigate('/forgotpassword')
              }, 1500)
            formik.setValues({
              email : "",
              otp : ""
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
                <header>Verify OTP</header>
                    <hr/>

                    <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Email' name='email' type='email' />
                     <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small>
                     <input onBlur={formik.handleBlur} value={formik.values.otp} onChange={formik.handleChange} placeholder='Enter OTP' name='otp' type='text' />
                     <small className='text-danger'>{formik.touched.otp && formik.errors.otp ? formik.errors.otp : ""}</small>


                     <button disabled={isLoading} style={{marginTop : '20px'}} type='submit'>{isLoading? <span class="loader2"></span>: "Verify OTP"}</button>

                <NotificationContainer/>

                </div>
            </div>


           </form>
          
        </>
      )
    }
    
    export default Otp




















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
// import React from 'react'
// import '../Components/Navbar'
// import '../Styling/signin.css'
// import axios from 'axios'
// import { useState} from 'react'
// import { NotificationContainer, NotificationManager } from 'react-notifications'
// import 'react-notifications/lib/notifications.css';
// import { Formik, useFormik, } from 'formik'
// import * as yup from 'yup'
// import { useNavigate } from 'react-router-dom'


// const Otp = () => {
//   const [data, setdata] = useState([])

//   const navigate = useNavigate()

  
//   const formik = useFormik({
//     initialValues : {
//               email : "",
//               otp : ""
//     },
//     validationSchema:yup.object({
//       email : yup.string().email("Must be a valid email").required("Email is required"),
//       otp : yup.string().required("OTP is required"),

//     }),
    
//     onSubmit:(value) =>{
//       console.log(value);
//       try {
//         axios.post('http://localhost:5002/api/user/verifyOtp', value)
//         .then((res) => {
//           console.log(res);
//           // console.log('OTP sent Successfully');
//           NotificationManager.success(res.data.message)
//           const timer = setTimeout(()=>{
//             navigate('/forgotpassword/otp')
//             }, 2000)
//           formik.setValues({
//             email : "",
//             otp : ""
//           })

//         }).catch((err)=>{
//           console.log(err);
//           NotificationManager.error(err.response.data.message)
//           const timer = setTimeout(()=>{
//             navigate('/forgotpassword')
//             }, 1500)
//           formik.setValues({
//             email : "",
//             otp : ""
//           })
//         })
//       } catch (error) {
//         console.log(error);
//       }
//     }


//   }) 

//   console.log(formik.errors);
//   console.log(formik.touched)


//   return (
//     <>
//     {/* <Navbar/> */}
//      <div className="signin">
//                 <form onSubmit={formik.handleSubmit} action="">

         
//                 <div className="formed">
//                 <header>Verify OTP</header>

//                     <hr/>

//                     <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='Email' name='email' type='email' />
//                     <small className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</small>
//                     <input onBlur={formik.handleBlur} value={formik.values.otp} onChange={formik.handleChange} placeholder='Enter OTP' name='otp' type='text' />
//                     <small className='text-danger'>{formik.touched.otp && formik.errors.otp ? formik.errors.otp : ""}</small>

//                 <button style={{marginTop : '20px'}} type='submit'>Verify Otp</button>
//                 <NotificationContainer/>


//                 </div>
          



//                 </form>
//             </div>
           
      
    
//     </>



//   )
// }

// export default Otp