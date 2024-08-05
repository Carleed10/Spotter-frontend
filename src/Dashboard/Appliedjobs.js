import React from 'react'
import '../Dashboard style/appliedjobs.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Appliedjobs = () => {
    const [Adata, setAdata] = useState([])
    // const {id} = useParams()
    const token = localStorage.getItem('genToken')

    const navigated = useNavigate()


    

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



  return (
    <>
      <div className="applied-div">
      
      <div className="percent">
        <h2 style={{fontWeight : '700'}}>APPLIED JOBS</h2>

        <p>You have applied for <span style={{color : 'green', fontWeight : '700'}}>{Adata.length}</span> jobs</p>
        
        <div className="applied-table">

           <table>
            
           <thead>
               <tr>
                   <th style={{width : '60%'}} >Job Title</th>
                   <th>Status</th>
                   <th>Applied Date</th>
               </tr>
           </thead>
     {Adata.map((le, i)=>(

           <tbody>
             
              <tr>
                   <td>{le.jobTitle}</td>
                   <td  className={le.applicants[i].status == 'Accepted' ? 'text-success' : 'text-danger' }>{le.applicants[i].status}</td>
                   <td>4th May, 2024</td>
               </tr>
                  
           </tbody>
         ))}  
       </table>
     


        </div>

     </div>


    </div>

    </>
  )
}

export default Appliedjobs
