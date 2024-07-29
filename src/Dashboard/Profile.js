import React from 'react'
import '../Dashboard style/profile.css'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css';
import { Formik, useFormik, } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'



const Profile = () => {
  const [data, setdata] = useState({})
  const token = localStorage.getItem('genToken')
  const [Update, setUpdate] = useState(false)
  // console.log(token);

  const navigated = useNavigate()


  


  useEffect(() => {
    return () => {
      if (!token) {
        navigated('/notauthorised')
      }   
      axios.get('http://localhost:5002/api/user/getProfile',  {headers : {
            'Authorization' : `Bearer ${token}`,
            "content-type" : "application/json"}})
        .then((res) => {
          console.log(res);
          console.log('Information gotten succesfully');
          // console.log(res.data.findProfile);
          setdata(res.data.findProfile)
          setUpdate(false)
          // setFirstName(res.data.findProfile.firstName)
          // localStorage.setItem('length', res.data.length)
          // localStorage.setItem('genToken', res.data.genToken)
          console.log(data);
          // NotificationManager.success(res.data.message)
        }).catch((err)=>{
          console.log(err);
          // NotificationManager.error(err.response.data.message)
            })
    }
  }, [Update])
    // console.log(data.firstName);
    
console.log(Update);
 
  

  const formik = useFormik({
    initialValues : {
      firstName : data.firstName || "" , lastName : data.lastName || "", jobTitle : data.jobTitle || "", jobType : data.jobType || "", jobCategory : data.jobCategory || "", education : data.education || "", about : data.about || "", facebook : data.facebook || "", x : data.x || "", linkedIn : data.linkedIn || "", instagram : data.instagram || "", city : data.city || "", country : data.country || "", fullAddress : data.fullAddress || ""
     
    },
    enableReinitialize: true,

    validationSchema:yup.object({
      firstName : yup.string().required("Firstname is required"),
      lastName : yup.string().required("Lastname is required"),
      jobType : yup.string().required("Jobtype is required"),
      jobCategory: yup.string().required("Job Category is required"),
      jobTitle : yup.string().required("Job title is required"),
      education : yup.string().required("Level of education is required"),
      about : yup.string().required("About is required"),
      x : yup.string().required("x handle is required"),
      facebook : yup.string().required("facebook is required"),
      linkedIn: yup.string().required("linkedIn is required"),
      instagram : yup.string().required("instagram is required"),
      city: yup.string().required("City is required"),
      country : yup.string().required("Country is required"),
      fullAddress : yup.string().required("Full Address is required")


    }),

    
    onSubmit:(value) =>{
      console.log(value);
      try {
        axios.post('http://localhost:5002/api/user/profile', value, {headers : {
          'Authorization' : `Bearer ${token}`,
          "content-type" : "application/json"}})
        .then((res) => {
          console.log(res);
          console.log('Update succesfull');
          setUpdate(true)
          NotificationManager.success(res.data.message)

          // const timer = setTimeout(()=>{
          //   navigate('/signin')
          //   }, 2000)
          // toast.success("SignuYp Successful")
          formik.setValues({
            firstName : data.firstName || "" , lastName : data.lastName || "", jobTitle : data.jobTitle || "", jobType : data.jobType || "", jobCategory : data.jobCategory || "", education : data.education || "", about : data.about || "", facebook : data.facebook || "", x : data.x || "", linkedIn : data.linkedIn || "", instagram : data.instagram || "", city : data.city || "", country : data.country || "", fullAddress : data.fullAddress || ""
     

          })

        }).catch((err)=>{
          console.log(err);
          setUpdate(false)
          NotificationManager.error(err.response.data.message)
          formik.setValues({
            firstName : data.firstName || "" , lastName : data.lastName || "", jobTitle : data.jobTitle || "", jobType : data.jobType || "", jobCategory : data.jobCategory || "", education : data.education || "", about : data.about || "", facebook : data.facebook || "", x : data.x || "", linkedIn : data.linkedIn || "", instagram : data.instagram || "", city : data.city || "", country : data.country || "", fullAddress : data.fullAddress || ""
     

          })
        })
      } catch (error) {
        console.log(error);
        setUpdate(false)
      }
      
    }

  }) 

  console.log(formik.errors);
  console.log(formik.touched)

  return (
    <>

      <div className="profile-div">
      
        <div className="percent">

        <form onSubmit={formik.handleSubmit} action="">

          <div className="pro">

               

        <h3>MY PROFILE</h3>



<div className="profile">

<div className="profile-img">

</div>

{/* <hr /> */}
<div className="forms">
<form action="">
<h5>First Name</h5>
<input onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange} name='firstName' type="text" />
<small className='text-danger mt-10'>{formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ""}</small>

</form>


<form action="">
<h5>Last Name</h5>
<input onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange} name='lastName' type="text" />
<small className='text-danger mt-10'>{formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ""}</small>

</form>


<form action="">
<h5>Job title</h5>
<input  onBlur={formik.handleBlur} value={formik.values.jobTitle} onChange={formik.handleChange} name='jobTitle' type="text" />
<small className='text-danger mt-10'>{formik.touched.jobTitle && formik.errors.jobTitle ? formik.errors.jobTitle : ""}</small>


</form>




<form action="">
<h5>Email</h5>
<input value={data.email} type="email" />

</form>


<form action="">
               <h5>Job type</h5>
                <select
                  onBlur={formik.handleBlur}
                  value={formik.values.jobType}
                  onChange={formik.handleChange}
                  name="jobType"
                  id=""
                >
                  <option value="">Choose by job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                </select>
                <small className='text-danger'>{formik.touched. jobType && formik.errors.jobType ? formik.errors.jobType : ""}</small>

               </form>



<form action="">

                <h5>Job Category</h5>
                <select
                  onBlur={formik.handleBlur}
                  value={formik.values.jobCategory}
                  onChange={formik.handleChange}
                  placeholder="Job Category"
                  name="jobCategory"
                  id=""
                >
                  <option value="">
                    Choose job category
                  </option>
                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value=" Data Processing">
                    Data Processing
                  </option>
                  <option value="Cloud Computing">
                    Cloud Computing
                  </option>
                  <option value="Networking">Networking</option>
                  <option value=" Web Development">
                    Web Development
                  </option>
                  <option value="Game Development">
                    Game Development
                  </option>
                  <option value="Database Management">
                    Database Management
                  </option>
                  <option value="Emerging Technologies">
                    Emerging Technologies
                  </option>
                  <option value="Product Management">
                    Product Management
                  </option>
                  <option value="IT Consulting">
                    IT Consulting
                  </option>
                  <option value="IT Governance and Compliance">
                    IT Governance and Compliance
                  </option>
                  <option value="Telecommunications">
                    Telecommunications
                  </option>
                  <option value="Ghostwriting">
                    Ghostwriting
                  </option>
                  <option value="IT Governance and Compliance">
                    IT Governance and Compliance
                  </option>
                  <option value="Public Relations">
                    Public Relations
                  </option>
                  <option value="Copywriting">Copywriting</option>

                  <small className='text-danger'>{formik.touched. jobCategory && formik.errors.jobCategory ? formik.errors.jobCategory : ""}</small>
                </select>

</form>



<form style={{width : '100%'}}  action="">
<h5>Education</h5>
<textarea onBlur={formik.handleBlur} value={formik.values.education} onChange={formik.handleChange} name="education" id="" cols="30" rows="10"></textarea>
<small className='text-danger mt-10'>{formik.touched.education && formik.errors.education ? formik.errors.education : ""}</small>

</form>

<form style={{width : '100%'}}  action="">
<h5>About</h5>
<textarea onBlur={formik.handleBlur} value={formik.values.about} onChange={formik.handleChange} name="about" id="" cols="30" rows="10"></textarea>
<small className='text-danger mt-10'>{formik.touched.about && formik.errors.about ? formik.errors.about : ""}</small>

</form>


{/* <button type='submit'>Save Changes</button> */}




</div>


</div>





      



        {/* <h3>SOCIAL ACCOUNT</h3> */}

        <div className="social">

            {/* <hr /> */}
          
          <div className="social-forms">
          <form action="">
          <h5>Facebook</h5>
          <input onBlur={formik.handleBlur} value={formik.values.facebook} onChange={formik.handleChange} name='facebook' type="text" />
          {/* <input onBlur={formik.handleBlur} value={formik.values.facebook} onChange={formik.handleChange} name='firstName' type="text" /> */}
<small className='text-danger mt-10'>{formik.touched.facebook && formik.errors.facebook ? formik.errors.facebook : ""}</small>

          </form>


          <form action="">
          <h5>X</h5>
          <input onBlur={formik.handleBlur} value={formik.values.x} onChange={formik.handleChange} name='x' type="text" />
<small className='text-danger mt-10'>{formik.touched.x && formik.errors.x ? formik.errors.x : ""}</small>
          
          </form>


          <form action="">
          <h5>Linked In</h5>
          <input onBlur={formik.handleBlur} value={formik.values.linkedIn} onChange={formik.handleChange} name='linkedIn'  type="text" />
<small className='text-danger mt-10'>{formik.touched.linkedIn && formik.errors.linkedIn ? formik.errors.linkedIn : ""}</small>


          </form>


          <form action="">
          <h5>Instagram</h5>
          <input onBlur={formik.handleBlur} value={formik.values.instagram} onChange={formik.handleChange} name='instagram' type="email" />
<small className='text-danger mt-10'>{formik.touched.instagram && formik.errors.instagram ? formik.errors.instagram : ""}</small>

          </form>


        {/* <button type='submit'>Save Changes</button> */}
        



          </div>
          

         
        </div>

        
        <div className="social">

        
          <div className="social-forms">
          <form action="">
          <h5>Country</h5>
          <input onBlur={formik.handleBlur} value={formik.values.country} onChange={formik.handleChange} name='country' type="text" />
<small className='text-danger mt-10'>{formik.touched.country && formik.errors.country ? formik.errors.country : ""}</small>

          </form>


          <form action="">
          <h5>City</h5>
          <input onBlur={formik.handleBlur} value={formik.values.city} onChange={formik.handleChange} name='city' type="text" />
<small className='text-danger mt-10'>{formik.touched.city && formik.errors.city ? formik.errors.city : ""}</small>

          </form>


          <form style={{width : '100%'}} action="">
          <h5>Full Address</h5>
          <input onBlur={formik.handleBlur} value={formik.values.fullAddress} onChange={formik.handleChange} name='fullAddress'  type="text" />
          <small className='text-danger mt-10'>{formik.touched.fullAddress && formik.errors.fullAddress ? formik.errors.fullAddress : ""}</small>

          </form>


       


        <button type='submit'>Save Changes</button>
        



          </div>
          


        </div>



          </div>
    
        </form>

      </div>


      </div>
    </>
  )
}

export default Profile
