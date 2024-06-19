import React from 'react'
import '../Dashboard style/jobdetails.css'
import Footer from '../Components/Footer'
import Navbar3 from '../Components/Navbar3'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { DateTime } from 'luxon';
import moment from 'moment';

const Jobdetails = () => {
    const {id} = useParams()
    const [datas, setdatas] = useState({})
  const token =   localStorage.getItem('genToken')

  const date = new Date();
  const formattedDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
    

useEffect(() => {
  return () => {
    axios.get(`http://localhost:5002/api/job/jobDetails/${id}`, {headers : {
      'Authorization' : `Bearer ${token}`,
      "content-type" : "application/json"
    }})
    .then((res) => {
      console.log(res);
      console.log('Update succesfull');
      setdatas(res.data.jobDetails)
      console.log(datas);
    }).catch((err)=>{
      console.log(err);


    })


  }
}, [])
  return (
    <>

    <Navbar3/>

    <div className="details-div">
        <div className="percent3">



          
<div className="details">
            


<div className="flex">
<div>
  <h1>{datas.companyName}</h1>
<h2>{datas.jobTitle}</h2>
<p>Tech hub</p>
</div>
{/* <h6>{formattedDate}</h6> */}
<p>Formatted Date: {formattedDate}</p>
</div>

<h6 style={{marginTop : '20px'}} >Salary : <span style={{fontWeight : '700'}}>{datas.salary}</span></h6>
<h6 style={{marginTop : '20px'}}  >Job type : <span>{datas.jobType}</span></h6>
    

    <div style={{marginTop : '20px'}} className="flex">
    <h6>Employees needed : <span>{datas.vacancies}</span></h6>
    <h6>Employees applied : <span>9</span></h6>
    </div>


    <hr />

    <div className="job-description">
        <h4>JOB DESCRIPTION</h4>
        <p>
            {datas.jobDescription}
      </p>

    </div>
    <div className="requirement">
        <h4>REQUIREMENTS</h4>
        {datas.requirement}


    </div>
</div>



          


            










































        {/* <div className="interested-div">

            <h4>Interested in this job?</h4>


            <h6>First Name</h6>
            <input type="text" />

    

            <h6>Last Name</h6>
            <input type="text" />


            <h6>Email</h6>
            <input type="email" />

            <h6>Upload Resume:pdf, doc, docx</h6>

            <input type="file" />

<button><span>Apply for this job</span></button>

            <button>Apply for this job</button>
        </div> */}

        </div>


    </div>
    
    <Footer/>
    </>
  )
}

export default Jobdetails