import React from 'react'
import '../Dashboard style/appliedjobs.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Appliedjobs = () => {
    const [Adata, setAdata] = useState([])
    const [pageLoad, setpageLoad] = useState(true)
    const [Update, setUpdate] = useState(false)

    // const {id} = useParams()
    const token = localStorage.getItem('genToken')

    const navigated = useNavigate()
    
    if (!token) {
      navigated('/notauthorised')
    } 

    

    useEffect(() => {  
    
        
  

        axios.get('https://spotter-backend.onrender.com/api/job/appliedJob',  {headers : {
            'Authorization' : `Bearer ${token}`,
            "content-type" : "application/json"}})
        .then((res) => {
          console.log(res);
          console.log('Update succesfull');
          setUpdate(true)

          // console.log(res.data.findJob);
          setAdata(res.data.appliedJobs)
          
            setpageLoad(false)
        
          console.log(Adata);
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
                   <th style={{width : '50%'}} >Job Title</th>
                   <th>Status</th>
                   <th>Applied Date</th>
               </tr>
           </thead>
     {Adata.sort((a, b)=>{
          if (a.updatedAt > b.updatedAt) {
            return -1
          }else if(b.updatedAt > a.updatedAt){
            return 1
          }else{
            return 0
          }
        }).map((le, i)=>(

           <tbody>
             
              <tr>
                   <td>{le.jobTitle}</td>
                   <td  className={le.applicants[0]?.status == 'Accepted' ? 'text-success' : 'text-danger' }>{le.applicants[0].status}</td>
                   <td>
                      {new Date(le.createdAt).getDate()}/
                      {new Date(le.createdAt).getMonth() + 1}/
                      {new Date(le.createdAt).getFullYear()}
                    </td>
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
