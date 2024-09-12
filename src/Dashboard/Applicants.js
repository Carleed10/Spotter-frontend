import React from 'react'
import '../Dashboard style/applicants.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Applicants = () => {
  const [data, setdata] = useState([])
  const [pageLoad, setpageLoad] = useState(true)
  const [Update, setUpdate] = useState(false)

  // const {id} = useParams()
  const token = localStorage.getItem('genToken')
  const navigated = useNavigate()

  if (!token) {
    navigated('/notauthorised')
}

  useEffect(() => {  
   
   
      axios.get('https://spotter-backend.onrender.com/api/job/createdJob',  {headers : {
          'Authorization' : `Bearer ${token}`,
          "content-type" : "application/json"}})
      .then((res) => {
        console.log(res);
        console.log('Update succesfull');
        // console.log(res.data.findJob);
        setdata(res.data.createdJob)
        setTimeout(() => {
          setpageLoad(false)
        }, 2000);
        // localStorage.setItem('length', res.data.length)
        // localStorage.setItem('genToken', res.data.genToken)
        console.log(data);
        // NotificationManager.success(res.data.message)
      }).catch((err)=>{
        console.log(err);
        // NotificationManager.error(err.response.data.message)
          })
   
  }, [Update])

  const navigate = useNavigate()

  const pa = (id) =>{
    navigate(`/dashboard/applicants/appli/${id}`)
  }

  if (pageLoad) {
    return  <div className='spinner'>
    <div class="loader"></div>
  </div>
     
  }
  

  return (
    <>
      <div className="applicants-div">
      
   
       <div className="percent">

       <div className="appli">
       <h2 style={{fontWeight : '700'}}>JOB APPLICANTS</h2>

<p>You have <span style={{color : 'green', fontWeight : '700'}}>{data.length}</span> jobs posted view the applicants</p>

<div className="applicants-table">

{data.sort((a, b)=>{
          if (a.updatedAt > b.updatedAt) {
            return -1
          }else if(b.updatedAt > a.updatedAt){
            return 1
          }else{
            return 0
          }
        }).map((le)=>(

<div className="applicant-name">



<div style={{marginLeft : '30px'}} className="name">
  <h6 style={{fontWeight : '600'}}>Job Title : <span style={{fontWeight : '400', marginLeft: '50px'}}>{le.jobTitle}</span></h6>
  <h6 style={{fontWeight : '600'}}>Job Category : <span style={{fontWeight : '400', marginLeft: '10px'}}>{le.jobCategory}</span></h6>
</div>

<div className="div">
{/* <h6 style={{marginLeft : '5px'}}>Applicants : <span>{data.length}</span></h6> */}
<button style={{background : 'none'}} onClick={()=>pa(le._id)}><Link style={{color : 'green', fontWeight : '500'}}>View Applicants</Link></button>
</div>
<h6>
                      {new Date(le.createdAt).getDate()}/
                      {new Date(le.createdAt).getMonth() + 1}/
                      {new Date(le.createdAt).getFullYear()}

</h6>



</div>
))}  










</div>

       </div>



       </div>
 


    </div>
    </>
  )
}

export default Applicants
