// import React from 'react'
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../Dashboard style/dash.css'
import { useState, useEffect } from 'react'
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Dash = (props) => {
  const [name, setname] = useState("")
  const [datad, setdatad] = useState([])
  const [Adata, setAdata] = useState([])
   const [Pending, setPending] = useState(null)
   const [Approved, setApproved] = useState(null)

  const [pageLoad, setpageLoad] = useState(true)
  const [Update, setUpdate] = useState(false)


  const token = localStorage.getItem('genToken')

  const navigated = useNavigate()

  if (!token) {
    navigated('/notauthorised')
  } 


 useEffect(() => {
  setname(localStorage.getItem('Username'))
   
 }, [])

 useEffect(() => {  



    axios.get('https://spotter-backend.onrender.com/api/job/appliedJob',  {headers : {
        'Authorization' : `Bearer ${token}`,
        "content-type" : "application/json"}})
    .then((res) => {
      console.log(res);
      console.log('Update succesfull');
      // console.log(res.data.findJob);
      setAdata(res.data.appliedJobs)
      console.log(Adata);
      // NotificationManager.success(res.data.message)
    }).catch((err)=>{
      console.log(err);
      // NotificationManager.error(err.response.data.message)
        })
  
  
}, [token])


useEffect(() => {  
  
    if (!token) {
      navigated('/notauthorised')
    } 


    axios.get('https://spotter-backend.onrender.com/api/job/pendingJob',  {headers : {
        'Authorization' : `Bearer ${token}`,
        "content-type" : "application/json"}})
    .then((res) => {
      console.log(res);
      console.log('Update succesfull');
      // console.log(res.data.findJob);
      setPending(res.data.pendingJobs)
      console.log(Adata);
      // NotificationManager.success(res.data.message)
    }).catch((err)=>{
      console.log(err);
      // NotificationManager.error(err.response.data.message)
        })
  
  
}, [Update])


useEffect(() => {  
  
    if (!token) {
      navigated('/notauthorised')
    } 


    axios.get('https://spotter-backend.onrender.com/api/job/approvedJob',  {headers : {
        'Authorization' : `Bearer ${token}`,
        "content-type" : "application/json"}})
    .then((res) => {
      console.log(res);
      console.log('Update succesfull');
      // console.log(res.data.findJob);
      setApproved(res.data.approvedJobs)
      console.log(Adata);
      // NotificationManager.success(res.data.message)
    }).catch((err)=>{
      console.log(err);
      // NotificationManager.error(err.response.data.message)
        })
  
  
}, [Update])




const applied = Adata.length
console.log(applied);
const status = Adata.status
console.log(status);
 
 useEffect(() => {  
  
    if (!token) {
        navigated('/notauthorised')
     } 
    axios.get('https://spotter-backend.onrender.com/api/job/createdJob',  {headers : {
        'Authorization' : `Bearer ${token}`,
        "content-type" : "application/json"}})
    .then((res) => {
      console.log(res);
      console.log('Update succesfull');
      // console.log(res.data.findJob);
      setdatad(res.data.createdJob)
      
        setpageLoad(false)
   
      // localStorage.setItem('length', res.data.length)
      // localStorage.setItem('genToken', res.data.genToken)
      console.log(datad);
      // NotificationManager.success(res.data.message)
    }).catch((err)=>{
      console.log(err);
      // NotificationManager.error(err.response.data.message)
        })
  
  
}, [Update])

let posted = datad.length
console.log(posted);

console.log(posted);

if (pageLoad) {
  return  <div className='spinner'>
  <div class="loader"></div>
</div>
   
}

const data = [
  {
    name: 'Applied',
    uv: 4000,
    pv: applied,
    amt: 2400,
  },
  {
    name: 'Posted',
    uv: 3000,
    pv: posted,
    amt: 2210,
  },
  {
    name: 'Pending',
    uv: 2000,
    pv: Pending,
    amt: 2290,
  },
  {
    name: 'Approved',
    uv: 2780,
    pv: Approved,
    amt: 2000,
  }
];
console.log(posted);

  return (
    <>
    <div className="dash-div">

    <div className="percent">

      <h1 style={{color : 'black'}}>Hello, {name}</h1>

      <div className="applied-box">
      <div style={{backgroundColor : 'rgb(2, 61, 2)', color : 'white'}} className="applied">
        <h2>{applied}</h2>
        <p>Applied Jobs</p>
      </div>
      <div style={{backgroundColor : 'rgb(255,155,32)'}} className="applied">
      <h2>{posted}</h2>
      <p>Posted Jobs</p>
      </div>
      <div style={{backgroundColor : 'greenyellow'}} className="applied">

      <h2>{Pending}</h2>
      <p>Pending Jobs</p>

      </div>
      <div style={{backgroundColor : 'olivedrab'}} className="applied">
      <h2>{Approved}</h2>
      <p>Approved Jobs</p>
      </div>
      
      </div>

    <div className="recent-flex">

    <div className="analytics-div">

<BarChart
  width={500}
  height={300}
  data={data}
  margin={{
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  }}
  barSize={20}
>
  <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid strokeDasharray="3 3" />
  <Bar dataKey="pv" fill="rgb(2,61,2)" background={{ fill: 'rgba(127, 255, 212, 0.128)' }} />
</BarChart>

</div>










    <div className="recent-div" >

<div className="recent-posted" style={{display : posted  ? 'block' : 'none'}}>
<h5>Recent Job Posted</h5>
<hr />
  
{datad.slice(-5).sort((a, b)=>{
          if (a.updatedAt > b.updatedAt) {
            return -1
          }else if(b.updatedAt > a.updatedAt){
            return 1
          }else{
            return 0
          }
        }).map((el) => (

    <div className="posted-jobs">

<div className="c-logo">
   <img
     src={el.companyLogo} 
     
     style={{ width: "40px", height: "40px", objectFit: "cover" }}
   />
</div>

  <div style={{}} className="name">
  <h6 style={{marginBottom :'-1px', fontWeight :'700'}}>{el.jobTitle}</h6>
  <small>{el.jobType}</small>
  {/* <h6>Frontend Developer</h6> */}
  </div>
  
  </div>
  
  

))}

</div>


<div className="no-recent" style={{display : posted === 0 ? 'flex' : 'none'}}>

<h4>NO JOB WAS POSTED RECENTLY</h4>


</div>










</div>









    </div>

    </div>
    </div>

    
    
    
    </>
  )
}

export default Dash