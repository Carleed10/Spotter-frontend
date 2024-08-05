import React from 'react'
import { useState, useEffect } from 'react'
import '../Dashboard style/jobs.css'
import { useNavigate } from 'react-router-dom'
import Dream from './Dream'
import Navbar2 from '../Components/Navbar2'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import Timer from '../Components/Timer'


const Jobs = () => {
const [data, setdata] = useState([])
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
      console.log(data);
      // NotificationManager.success(res.data.message)
    }).catch((err)=>{
      console.log(err);
      // NotificationManager.error(err.response.data.message)

    })


  }
}, [])


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
      <Dream data = {data}/>
      <div className="jobs-div">

        <div className="percent2">

<div className="total-jobs">

<div className="foundjobs-div">
        {data.map((el)=>(
          
            <div className="found-jobs">
              <Timer timestamp={el.createdAt}/>
              {/* <small>3 minutes ago</small> */}
            <h5>{el.jobTitle}</h5>
            <p style={{color : 'orangered'}}>{el.jobType}</p>
            <h4 style={{color : 'green'}}> ₦{el.salary}</h4>


            <button onClick={()=>details(el._id)}>See details</button>

            <button onClick={()=>apply(el._id)} style={{backgroundColor : 'green', color : 'white'}}>Apply</button>
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
