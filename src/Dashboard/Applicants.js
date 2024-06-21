import React from 'react'
import '../Dashboard style/applicants.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Applicants = () => {
  const [data, setdata] = useState([])
  // const {id} = useParams()
  const token = localStorage.getItem('genToken')
  useEffect(() => {  
    return () => {
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

  const navigate = useNavigate()

  const pa = (id) =>{
    navigate(`/dashboard/applicants/appli/${id}`)
  }

  return (
    <>
      <div className="applicants-div">
      
   
       <div className="appli">
       <h2 style={{fontWeight : '700'}}>JOB APPLICANTS</h2>

<p>You have applicants <span style={{color : 'green', fontWeight : '700'}}>26</span> for <span style={{color : 'green', fontWeight : '700'}}>{data.length}</span> jobs</p>

<div className="applicants-table">

{data.map((le)=>(

<div className="applicant-name">



<div style={{marginLeft : '30px'}} className="name">
  <h6 style={{fontWeight : '600'}}>Job Title : <span style={{fontWeight : '400', marginLeft: '50px'}}>{le.jobTitle}</span></h6>
  <h6 style={{fontWeight : '600'}}>Job Category : <span style={{fontWeight : '400', marginLeft: '10px'}}>{le.jobCategory}</span></h6>
</div>

<div className="div">
<h6 style={{marginLeft : '5px'}}>Applicants : <span>{data.length}</span></h6>
<button style={{background : 'none'}} onClick={()=>pa(le._id)}><Link style={{color : 'green', fontWeight : '500'}}>View Applicants</Link></button>
</div>
<h6>6th May 2024</h6>



</div>
))}  










</div>

       </div>
 


    </div>
    </>
  )
}

export default Applicants
