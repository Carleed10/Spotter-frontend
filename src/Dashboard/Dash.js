import React from 'react'
import '../Dashboard style/dash.css'
import { useState, useEffect } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Dash = (props) => {
  const [name, setname] = useState("")
  const [datad, setdata] = useState([])
  const [Adata, setAdata] = useState([])


  const token = localStorage.getItem('genToken')

  const navigated = useNavigate()

 useEffect(() => {
   return () => {
     setname(localStorage.getItem('Username'))
   }
 }, [])

 useEffect(() => {  
  return () => {
    if (!token) {
      navigated('/notauthorised')
    } 


    axios.get('http://localhost:5002/api/job/appliedJob',  {headers : {
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
  
  }
}, [])

const applied = Adata.length
console.log(applied);
 
 useEffect(() => {  
  return () => {
    if (!token) {
        navigated('/notauthorised')
     } 
    axios.get('http://localhost:5002/api/job/createdJob',  {headers : {
        'Authorization' : `Bearer ${token}`,
        "content-type" : "application/json"}})
    .then((res) => {
      console.log(res);
      console.log('Update succesfull');
      // console.log(res.data.findJob);
      setdata(res.data.createdJob)
      // localStorage.setItem('length', res.data.length)
      // localStorage.setItem('genToken', res.data.genToken)
      console.log(datad);
      // NotificationManager.success(res.data.message)
    }).catch((err)=>{
      console.log(err);
      // NotificationManager.error(err.response.data.message)
        })
  
  }
}, [])

const posted = datad.length
console.log(posted);



 const colors = ['rgb(2, 61, 2)', 'rgb(255,155,32)', 'greenyellow', 'olivedrab'];

 const data = [
   {
     name: 'Applied jobs',
     uv: 50,
     pv: 2400,
     amt: 2400,
   },
   {
     name: 'Posted jobs',
     uv: 30,
     pv: 1398,
     amt: 2210,
   },
   {
     name: 'Pending Jobs',
     uv: 20,
     pv: 9800,
     amt: 2290,
   },
   {
     name: 'Approved jobs',
     uv: 8,
     pv: 3908,
     amt: 2000,
   }
 ];
 
 const getPath = (x, y, width, height) => {
   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
   ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;
 };
 
 const TriangleBar = (props) => {
   const { fill, x, y, width, height } = props;
 
   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
 };

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

      <h2>20</h2>
      <p>Pending Jobs</p>

      </div>
      <div style={{backgroundColor : 'olivedrab'}} className="applied">
      <h2>18</h2>
      <p>Approved Jobs</p>
      </div>
      
      </div>

      <div className="recent-div">

        <div className="recent-posted">
        <h4>RECENT JOB POSTED</h4>
          
        {datad.map((el) => (
          <div className="applicant-name">

          <div style={{marginLeft : '30px'}} className="name">
          <h5>{el.jobTitle}</h5>
          {/* <h6>Frontend Developer</h6> */}
          </div>
          
          </div>

 ))}




        </div>
      </div>

      <div className="analytics-div">
        <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>

    {/* <h3>Job posting overview</h3> */}
        </div>

    </div>
    </div>
    
    
    </>
  )
}

export default Dash