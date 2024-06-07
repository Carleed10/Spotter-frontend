import React from 'react'
import { useState, useEffect } from 'react'
import '../Dashboard style/jobs.css'
import { useNavigate } from 'react-router-dom'
import Dream from './Dream'
import Navbar3 from '../Components/Navbar3'
import axios from 'axios'

const Jobs = () => {
const [data, setdata] = useState([])

useEffect(() => {
  return () => {
    axios.get('http://localhost:5002/api/job/getjob')
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

const details = () =>{
  navigate('/jobdetails')
}



  return (
    <>
<div className="findjob-div">
    <Navbar3/>
      <Dream/>
      <div className="jobs-div">

        <div className="percent2">

<div className="total-jobs">

<div className="foundjobs-div">


        {data.map((el)=>(
          
            <div className="found-jobs">

            <h5>{el.jobTitle}</h5>
            <p>{el.jobType}</p>

            <button onClick={details}>See details</button>

            <button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
    



            
            ))}




</div>


</div>


        </div>


      </div>


</div>
    </>
  )
}

export default Jobs
