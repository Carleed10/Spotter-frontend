// import React from 'react'
import React, { PureComponent, useState, useEffect } from 'react';
import axios from 'axios'
import '../Dashboard style/analytics.css'
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { useNavigate } from 'react-router-dom'




const Analytics = () => {
  const token = localStorage.getItem('genToken')
  const [Update, setUpdate] = useState(false)
  const [PartTime, setPartTime] = useState([])
  const [FullTime, setFullTime] = useState([])
  const [pageLoad, setpageLoad] = useState(true)


  const [Internship, setInternship] = useState([])



  const navigated = useNavigate()

  if (!token) {
    navigated('/notauthorised')
  } 


  useEffect(() => {  

      axios.get('https://spotter-backend.onrender.com/api/job/partTimeJob',  {headers : {
          'Authorization' : `Bearer ${token}`,
          "content-type" : "application/json"}})
      .then((res) => {
        console.log(res);
        console.log('Update succesfull');
        // console.log(res.data.findJob);
        setPartTime(res.data.partTimeJob)
        setUpdate(true)

        console.log(PartTime);
        // NotificationManager.success(res.data.message)
      }).catch((err)=>{
        console.log(err);
        // NotificationManager.error(err.response.data.message)
          })


          axios.get('https://spotter-backend.onrender.com/api/job/fullTimeJob',  {headers : {
            'Authorization' : `Bearer ${token}`,
            "content-type" : "application/json"}})
        .then((res) => {
          console.log(res);
          console.log('Update succesfull');
          // console.log(res.data.findJob);
        setpageLoad(false)

          setFullTime(res.data.fullTimeJob)
          setUpdate(true)

          console.log(FullTime);
          // NotificationManager.success(res.data.message)
        }).catch((err)=>{
          console.log(err);
          // NotificationManager.error(err.response.data.message)
            })



            axios.get('https://spotter-backend.onrender.com/api/job/internship',  {headers : {
              'Authorization' : `Bearer ${token}`,
              "content-type" : "application/json"}})
          .then((res) => {
            console.log(res);
            console.log('Update succesfull');
            // console.log(res.data.findJob);
            setInternship(res.data.internship)
            console.log(Internship);
            setUpdate(true)
            // NotificationManager.success(res.data.message)
          }).catch((err)=>{
            console.log(err);
            // NotificationManager.error(err.response.data.message)
              })
    
    
  }, [Update])


  if (pageLoad) {
    return  <div className='spinner'>
    <div class="loader"></div>
  </div>
     
  }


  
let totalJobs = FullTime + Internship + PartTime
console.log(totalJobs);


const data = [
  { name: 'Full-time', value: FullTime / totalJobs * 100 },
  { name: 'Part-time', value: PartTime / totalJobs * 100},
  { name: 'Internship', value: Internship / totalJobs * 100 },

];

const COLORS = [' rgb(255,155,32)', ' rgb(2,61,2)', 'greenyellow', 'red'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};






  


  return (
    <>
        <div className="analyticss-div">

       <div className="inner-analytics">

       <h4>Total jobs by category</h4> 

        <div className="rep">
            <div className="rep1">
              <h5>Full-time Job</h5>
              <div className="color"></div>
            </div>

            <div className="rep1">
              <h5>Part-time Job</h5>
              <div className="color"></div>

            </div>

            <div className="rep1">
              <h5>Internship</h5>
              <div className="color"></div>

            </div>

        </div>

        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={230}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

       </div>
      
        </div>
    </>
  )
}

export default Analytics
Analytics.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';