import React from 'react'
import '../Dashboard style/jobdetails.css'
import Footer from '../Components/Footer'
import Navbar2 from '../Components/Navbar2'
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
    axios.get(`https://spotter-backend.onrender.com/api/job/jobDetails/${id}`, {headers : {
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

// Check if datas and datas.applicants are defined
const applicants = datas && datas.applicants ? datas.applicants : [];

// Get the length of the applicants array
const applicantsCount = applicants.length;

// Log the length to the console
console.log(applicantsCount);




  return (
    <>

    <Navbar2/>

    <div className="details-div">
        <div className="percent3">


          
<div className="details">
{/* <h3>JOB DETAILS</h3> */}
            

<div style={{width : '150px', height : '150px', backgroundColor: 'red'}} className="company">
   <img
     src={datas.companyLogo} 
     
     style={{ width: "150px", height: "150px", objectFit: "cover" }}
   />
</div>


<div className="flex">
<div>
<h2>{datas.jobTitle}</h2>
<p>{datas.companyName}</p>

</div>
{/* <h6>{formattedDate}</h6> */}
<p>
                      {new Date(datas.createdAt).getDate()}/
                      {new Date(datas.createdAt).getMonth() + 1}/
                      {new Date(datas.createdAt).getFullYear()}

</p>
</div>

<h6 style={{marginTop : '20px'}} >Salary : <span style={{fontWeight : '700'}}>{datas.salary}</span></h6>
<h6 style={{marginTop : '20px'}}  >Job type : <span>{datas.jobType}</span></h6>
    

    <div style={{marginTop : '20px'}} className="flex">
    <h6>Employees needed : <span>{datas.vacancies}</span></h6>
    <h6>Employees applied : <span>{applicantsCount}</span></h6>
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



          


            


        </div>


    </div>
    
    <Footer/>
    </>
  )
}

export default Jobdetails