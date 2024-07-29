import React from 'react'
import '../Dashboard style/createdjobs.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState, useEffect, } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom'




export const Createdjobs = () => {
    const [data, setdata] = useState([])
    // const {id} = useParams()
    const token = localStorage.getItem('genToken')

    const navigated = useNavigate()


   
  

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
          console.log(data);
          // NotificationManager.success(res.data.message)
        }).catch((err)=>{
          console.log(err);
          // NotificationManager.error(err.response.data.message)
            })
      
      }
    }, [])

    const number = data.length

    const deleteJob = (id) =>{
      axios.post(`http://localhost:5002/api/job/deleteJob/${id}`, {}, {headers : {
        'Authorization' : `Bearer ${token}`,
        "content-type" : "application/json"
      }})
      .then((res)=>{
        console.log(res);
        NotificationManager.success(res.data.message)

        console.log("Job deleted successfully");
    })
    .catch((error) => {
      console.log(error);
    })
    }
    
  return (
    <>
        <div className="createdjobs-div">
      
      <div className="percent">
        <h2 style={{fontWeight : '700'}}>POSTED JOBS</h2>

        <p>You have posted <span style={{color : 'green', fontWeight : '700'}}>{number}</span> jobs</p>
        
        <div className="createdjobs-table">

              <table>
            
              <thead>
                  <tr>
                      <th style={{width : '30%'}} >Job Title</th>
                      <th>Job Type</th>
                      <th>Posted Date</th>
                      <th>Vacancies</th>
                      
      
                      <th>Action</th>
      
      
                  </tr>
              </thead>

        {data.map((el) => (

              <tbody>
                  <tr>
                      <td>{el.jobTitle}</td>
                      <td>{el.jobType}</td>
                      <td>4th May, 2024</td>
                      <td>{el.vacancies}</td>
              
                      <td>
                      <button style={{backgroundColor : 'green'}}>
                          <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                          </button>
                          <button onClick={()=>deleteJob(el._id)} style={{marginLeft : '10px', backgroundColor : 'red'}}>
                          <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                          </button>
                      </td>
      
      
                  </tr>
      
                  
            
                 
              </tbody>
               ))}
          </table>
       


        </div>

     </div>
     <NotificationContainer/>


    </div>
    </>
  )
}

