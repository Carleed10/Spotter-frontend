import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import "../Styling/postproject.css";
import "../Dashboard style/profile.css";
import Footer from "./Footer";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { NotificationContainer, NotificationManager } from "react-notifications";

const Postjob = () => {
  const token = localStorage.getItem("genToken");
  const [Reader, setReader] = useState(null);

  const submitLogo = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }
    reader.addEventListener("load", (e) => {
      setReader(e.target.result);
      console.log("Logo upload successful");
    });
  };

  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobCategory: "",
      companyName: "",
      vacancies: "",
      jobType: "",
      salary: "",
      jobDescription: "",
      requirement: "",
    },
    validationSchema: yup.object({
      jobTitle: yup.string().required("Job title is required"),
      jobCategory: yup.string().required("Job category is required"),
      companyName: yup.string().required("Company name is required"),
      vacancies: yup.number().min(1, 'Vacancies cannot be less than one').required("Vacancies are required"),
      jobType: yup.string().required("Job type is required"),
      salary: yup.string().required("Salary is required"),
      jobDescription: yup.string().required("Job description is required"),
      requirement: yup.string().required("Job requirements are required"),
    }),
    onSubmit: async (values) => {
      if (!token) {
        NotificationManager.error("Not authorised to post job. Please login or sign up.");
        return;
      }

      if (!Reader) {
        NotificationManager.error("Please upload the company logo.");
        return;
      }

      console.log({ ...values, companyLogoUrl: Reader });

      try {
        const response = await axios.post(
          "https://spotter-backend.onrender.com/api/job/postjob",
          { ...values, companyLogoUrl: Reader },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Posted Job:", response.data);
        NotificationManager.success(response.data.message);
        formik.resetForm();
        setReader(null); // Clear logo after successful post
      } catch (error) {
        NotificationManager.error(error.response?.data?.message || "Error posting job");
      }
    },
  });

  return (
    <>
      <Navbar2 />

      <form onSubmit={formik.handleSubmit} action="">

      <div className="postjob-div">
        <div className="percent">
          <h3>POST JOB</h3>
          <div className="profile">
            <div className="forms">

            <form style={{width: '100%'}}>
                <h5>Company Logo</h5>
                <input
                  style={{ backgroundColor: "white", color: "green" }}
                  onChange={submitLogo}
                  type="file"
                />
                <small className="text-danger">
                  {!Reader ? "Company logo is required" : ""}
                </small>
              </form>

              <form>
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

              <form>
                <h5>Job Category</h5>
                <select
                  onBlur={formik.handleBlur}
                  value={formik.values.jobCategory}
                  onChange={formik.handleChange}
                  name="jobCategory"
                >
                  <option value="">Choose job category</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Data Processing">Data Processing</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Networking">Networking</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Game Development">Game Development</option>
                  <option value="Database Management">Database Management</option>
                  <option value="Emerging Technologies">Emerging Technologies</option>
                  <option value="Product Management">Product Management</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="IT Governance and Compliance">IT Governance and Compliance</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Ghostwriting">Ghostwriting</option>
                  <option value="Public Relations">Public Relations</option>
                  <option value="Copywriting">Copywriting</option>
                </select>
                <small className="text-danger">
                  {formik.touched.jobCategory && formik.errors.jobCategory
                    ? formik.errors.jobCategory
                    : ""}
                </small>
              </form>

              <form>
                <h5>Company Name</h5>
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  placeholder="Company name"
                  name="companyName"
                  type="text"
                />
                <small className="text-danger">
                  {formik.touched.companyName && formik.errors.companyName
                    ? formik.errors.companyName
                    : ""}
                </small>
              </form>

             

              <form>
                <h5>Vacancies</h5>
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.vacancies}
                  onChange={formik.handleChange}
                  placeholder="Vacancies"
                  name="vacancies"
                  type="number"
                  min="1" 
                />
                <small className="text-danger">
                  {formik.touched.vacancies && formik.errors.vacancies
                    ? formik.errors.vacancies
                    : ""}
                </small>
              </form>

              <form>
                <h5>Job Type</h5>
                <select
                  onBlur={formik.handleBlur}
                  value={formik.values.jobType}
                  onChange={formik.handleChange}
                  name="jobType"
                >
                  <option value="">Choose job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                </select>
                <small className="text-danger">
                  {formik.touched.jobType && formik.errors.jobType
                    ? formik.errors.jobType
                    : ""}
                </small>
              </form>

              <form>
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

              
                <form style={{width : '100%'}} action="">

                <h5>Job Description</h5>
                <textarea
                  onBlur={formik.handleBlur}
                  value={formik.values.jobDescription}
                  onChange={formik.handleChange}
                  placeholder="Job Description"
                  name="jobDescription"
                  rows="5"
                ></textarea>
                <small className="text-danger">
                  {formik.touched.jobDescription && formik.errors.jobDescription
                    ? formik.errors.jobDescription
                    : ""}
                </small>

                </form>
             

             
                <form style={{width: '100%'}} action="">

                <h5>Requirements</h5>
                <textarea
                  onBlur={formik.handleBlur}
                  value={formik.values.requirement}
                  onChange={formik.handleChange}
                  placeholder="Job requirements"
                  name="requirement"
                  rows="5"
                ></textarea>
                <small className="text-danger">
                  {formik.touched.requirement && formik.errors.requirement
                    ? formik.errors.requirement
                    : ""}
                </small>

                </form>
            

              
                <button type="submit">Post Job</button>
              
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />


      </form>
      <Footer />
    </>
  );
};

export default Postjob;
