import React from 'react'
import { useState, useEffect } from 'react'
import '../Dashboard style/jobs.css'
import { useNavigate } from 'react-router-dom'
import Dream from './Dream'
import Navbar2 from '../Components/Navbar2'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import Timer from '../Components/Timer'
import { Icon } from "@iconify/react/dist/iconify.js";


const Jobs = () => {
const [data, setdata] = useState([])
const [filteredData, setFilteredData] = useState([]);
const token =   localStorage.getItem('genToken')
console.log(token);
const navigated = useNavigate()


useEffect(() => {
  return () => {
    if (!token) {
      navigated('/notauthorised')
    } 

    axios.get('http://localhost:5002/api/job/getjob', {headers : {
        'Authorization' : `Bearer ${token}`,
        "content-type" : "application/json"
    }})
    .then((res) => {
      console.log(res);
      console.log('Update succesfull');
      // console.log(res.data.findJob);
      setdata(res.data.findJob)
      setFilteredData(res.data.findJob);
      console.log(data);
      // NotificationManager.success(res.data.message)
    }).catch((err)=>{
      console.log(err);
      // NotificationManager.error(err.response.data.message)

    })


  }
}, [])

const search = (e)=>{
  const filterData = data.filter((d)=> d.jobTitle.toLowerCase().includes(e.target.value.toLowerCase()))
  setFilteredData(filterData);
  console.log(e.target.value);
  console.log(filterData);
}


const navigate = useNavigate()

const details = (id) =>{
  navigate(`/jobdetails/${id}`)
}

const apply = (id) =>{
  if (!token) {
    NotificationManager.error('You are not authorised to apply for job')
    
  }
  axios.post(`http://localhost:5002/api/job/applyJob/${id}`, {}, {headers : {
    'Authorization' : `Bearer ${token}`,
    "content-type" : "application/json"
}})
.then((res) => {
  console.log(res);
  console.log('Job applied for successfully');
  // setdata(res.data.findJob)
  console.log(data);
  NotificationManager.success(res.data.message)
}).catch((err)=>{
  console.log(err);
  NotificationManager.error(err.response.data.message)

})
}



  return (
    <>
<div className="findjob-div">
    <Navbar2/>
    <div className="dream-div">
        <div className="percent">
          <h1>SPOT THE RIGHT JOB HERE</h1>

          <div className="search-div2">
            <input
              onChange={(e)=>search(e)}
              placeholder="Find your dream job with the job title"
              type="search"
            />

          </div>

          <div className="sort-div">
            <h5>
              <span>TOTAL JOBS</span> :{" "}
              <span style={{ color: "yellow" }}>{filteredData.length}</span>
            </h5>

            <div className="sortby">
              <select name="" id="">
                <option value="">Sort by job type</option>
                <option value="">Full-time</option>
                <option value="">Part time</option>
                <option value="">Internship</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="jobs-div">

        <div className="percent2">

<div className="total-jobs">

<div className="foundjobs-div">
        {filteredData.sort((a, b)=>{
          if (a.updatedAt > b.updatedAt) {
            return -1
          }else if(b.updatedAt > a.updatedAt){
            return 1
          }else{
            return 0
          }
        }).map((el)=>(
          
            <div className="found-jobs">

              <div className="cl">
                  <div className="company-logo">

                  </div>

                  <div style={{alignItems: 'center', marginLeft: '10px'}} className="job-info">
                  <h5>{el.jobTitle}</h5>
                  <h6 style={{fontSize :'10px', marginTop: '-5px'}}>{el.companyName}</h6>
                  </div>
              </div>

            <small style={{color : 'white', backgroundColor: 'rgb(255,155,32)'}}>{el.jobType}</small>
            <small style={{backgroundColor: 'rgb(173,255,47)', marginLeft : '5px'}}>Applicants:</small>
            
            
            <h3 style={{fontWeight: 700, marginTop: '10px'}}>₦{el.salary}</h3>


            <div className="ad-button">
            <button onClick={()=>details(el._id)}>SEE DETAILS</button>

            <button onClick={()=>apply(el._id)} style={{backgroundColor : 'green', color : 'white'}}>APPLY</button> 
            </div>

          <hr style={{marginBottom : '0px'}} />
          <small style={{fontWeight : '600', fontSize: '15px'}}><Timer timestamp={el.createdAt}/> </small>

</div>
    
            
            ))}


</div>


</div>


        </div>


      </div>

      <NotificationContainer/>

</div>
    </>
  )
}

export default Jobs
