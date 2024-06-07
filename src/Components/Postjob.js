import React from "react";
import Navbar3 from "./Navbar3";
import "../Styling/postproject.css";
import "../Dashboard style/profile.css";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

// import { useNavigate } from 'react-router-dom'

// import Footer from '../Components/Footer'
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";

const Postjob = () => {
  

  const formik = useFormik({
    initialValues:{
      jobTitle: "",
      jobCategory: "",
      // companyName: "",
      // vacancies: "",
      jobType: "",
      salary: "",
      jobDescription: "",
      requirement: "",
    },
    validationSchema:yup.object({
      jobTitle: yup.string().required("Job title is required"),
      jobCategory: yup.string().required("Job Category is required"),
      companyName: yup.string().required("Company Name is required"),
      vacancies: yup.string().required("Vacancy is required"),
      jobType: yup.string().required("Job type is required"),
      salary: yup.string().required("Salary is required"),
      jobDescription: yup.string().required("Job description is required"),
      requirement: yup.string().required("Fill in the job requirements"),
    }),
    onSubmit:(value) => {
 
      console.log(value);
      try {
        axios.post('http://localhost:5002/api/job/postjob', value)
        .then((res) => {
          console.log('Update succesfull');
          console.log(res);
          NotificationManager.success(res.data.message)

          // const timer = setTimeout(()=>{
          //   navigate('/signin')
          //   }, 2000)

          // toast.success("SignuYp Successful")
          formik.setValues({
            jobTitle : "",
            jobCategory : "",
            companyName : "",
            vacancies : "",
            jobType : "",
            salary : "",
            jobDescription : "",
            requirement : ""

          })

        }).catch((err)=>{
          console.log(err);
          NotificationManager.error(err.response.data.message)
          formik.setValues({
            jobTitle : "",
            jobCategory : "",
            companyName : "",
            vacancies : "",
            jobType : "",
            salary : "",
            jobDescription : "",
            requirement : ""

          })
        })
      } catch (error) {
        console.log(error);
      }
    }
  });

  console.log(formik.errors);
  console.log(formik.touched);

  return (
    <>
      <Navbar3 />
      <form onSubmit={formik.handleSubmit}>

      <div className="postjob-div">
        <div className="percent">
          <h3>POST JOB</h3>

            <div className="profile">
              {/* <hr /> */}
              <div className="forms">
                         
                <form action="">
                <h5>Job Title</h5>
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.jobTitle}
                  onChange={formik.handleChange}
                  placeholder="Job title"
                  name="jobTitle"
                  type="text"
                />
                <small className="text-danger">
                  {formik.touched.jobTitle && formik.errors.jobTitle
                    ? formik.errors.jobTitle
                    : ""}
                </small>

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

                <form action="">
                <h5>Company Name</h5>
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  placeholder="Name of company"
                  name="companyName"
                  type="text"
                />
                <small className="text-danger">
                  {formik.touched.companyName && formik.errors.companyName
                    ? formik.errors.companyName
                    : ""}
                </small>
                </form>

               <form action="">
               <h5>Vacancies</h5>
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.vacancies}
                  onChange={formik.handleChange}
                  placeholder="Vacancies"
                  name="vacancies"
                  type="text"
                />
                <small className="text-danger">
                  {formik.touched.vacancies && formik.errors.vacancies
                    ? formik.errors.vacancies
                    : ""}
                </small>
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
                <h5>Salary (₦)</h5>
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.salary}
                  onChange={formik.handleChange}
                  placeholder="Salary"
                  name="salary"
                  type="text"
                />
                <small className="text-danger">
                  {formik.touched.salary && formik.errors.salary
                    ? formik.errors.salary
                    : ""}
                </small>
                </form>

                <h5 style={{marginTop : '30px'}}>Job description</h5>
                <textarea
                  onBlur={formik.handleBlur}
                  value={formik.values.jobDescription}
                  onChange={formik.handleChange}
                  placeholder="Job Description"
                  name="jobDescription"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <small className="text-danger">
                  {formik.touched.jobDescription && formik.errors.jobDescription
                    ? formik.errors.jobDescription
                    : ""}
                </small>

                <h5 style={{marginTop : '30px'}}>Requirements</h5>

                <textarea
                  onBlur={formik.handleBlur}
                  value={formik.values.requirement}
                  onChange={formik.handleChange}
                  placeholder="Job requirement"
                  name="requirement"
                  id=""
                  cols="30"
                  rows="10"
                >
                  
                </textarea> 
                <small className="text-danger">
                    {formik.touched.requirement && formik.errors.requirement
                      ? formik.errors.requirement
                      : ""}
                  </small>

                <button type="submit">Post job</button>
              </div>
            </div>

            {/* <button type="submit">POST JOB</button> */}
            
       
        </div>
      </div>
      </form>


      <Footer />
    </>
  );
};

export default Postjob;
