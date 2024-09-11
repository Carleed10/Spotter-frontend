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

  const [Internship, setInternship] = useState([])



  const navigated = useNavigate()




  useEffect(() => {  
    return () => {
      if (!token) {
        navigated('/notauthorised')
      } 
  
  
      axios.get('http://localhost:5002/api/job/partTimeJob',  {headers : {
          'Authorization' : `Bearer ${token}`,
          "content-type" : "application/json"}})
      .then((res) => {
        console.log(res);
        console.log('Update succesfull');
        // console.log(res.data.findJob);
        setPartTime(res.data.partTimeJob)
        console.log(PartTime);
        // NotificationManager.success(res.data.message)
      }).catch((err)=>{
        console.log(err);
        // NotificationManager.error(err.response.data.message)
          })


          axios.get('http://localhost:5002/api/job/fullTimeJob',  {headers : {
            'Authorization' : `Bearer ${token}`,
            "content-type" : "application/json"}})
        .then((res) => {
          console.log(res);
          console.log('Update succesfull');
          // console.log(res.data.findJob);
          setFullTime(res.data.fullTimeJob)
          console.log(FullTime);
          // NotificationManager.success(res.data.message)
        }).catch((err)=>{
          console.log(err);
          // NotificationManager.error(err.response.data.message)
            })



            axios.get('http://localhost:5002/api/job/internship',  {headers : {
              'Authorization' : `Bearer ${token}`,
              "content-type" : "application/json"}})
          .then((res) => {
            console.log(res);
            console.log('Update succesfull');
            // console.log(res.data.findJob);
            setInternship(res.data.internship)
            console.log(Internship);
            // NotificationManager.success(res.data.message)
          }).catch((err)=>{
            console.log(err);
            // NotificationManager.error(err.response.data.message)
              })
    
    }
  }, [Update])


  
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
        <div className="analytics-div">
            <h4>Total jobs posted</h4>
        {/* <BarChart
          width={1000}
          height={400}
          data={datas}
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
          <Bar dataKey="pv" fill="green" background={{ fill: '#eee' }} />
        </BarChart> */}



       <h4>Total jobs by category</h4> 
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      
        </div>
    </>
  )
}

export default Analytics
Analytics.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';