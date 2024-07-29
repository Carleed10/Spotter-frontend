// import React from 'react'
import React, { PureComponent } from 'react';
import '../Dashboard style/analytics.css'
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const Analytics = () => {
   

const data = [
  { name: 'Full-time', value: 20 },
  { name: 'Part-time', value: 8 },
  { name: 'Internship', value: 5 },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

const datas = [
    {
      name: 'January',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
        name: 'March',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'April',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'May',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'June',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'July',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'August',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },{
        name: 'September',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },{
        name: 'October',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },{
        name: 'November',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },{
        name: 'December',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      }
  ];
  


  return (
    <>
        <div className="analytics-div">
            <h4>Total jobs posted</h4>
        <BarChart
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
        </BarChart>



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