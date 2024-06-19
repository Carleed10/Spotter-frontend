import React from 'react'
import '../Dashboard style/applicants.css'
import { Icon } from '@iconify/react/dist/iconify.js'

const Applicants = () => {
  return (
    <>
      <div className="applicants-div">
      
   
       <div className="appli">
       <h2 style={{fontWeight : '700'}}>JOB APPLICANTS</h2>

<p>You have applicants <span style={{color : 'green', fontWeight : '700'}}>26</span> for <span style={{color : 'green', fontWeight : '700'}}>10</span> jobs</p>

<div className="applicants-table">

<div className="applicant-name">

    <div className="user2"></div>

    <div style={{marginLeft : '30px'}} className="name">
    <h5>Anyadike Wisdom</h5>
    <h6>Frontend Developer</h6>
    </div>

    <button style={{backgroundColor : 'green'}}>Accept</button>
    <button style={{backgroundColor : 'red', marginLeft : '10px'}}>Decline</button>

</div>

<div className="applicant-name">

    <div className="user2"></div>

    <div style={{marginLeft : '30px'}} className="name">
    <h5>Anyadike Wisdom</h5>
    <h6>Frontend Developer</h6>
    </div>

    <button style={{backgroundColor : 'green'}}>Accept</button>
    <button style={{backgroundColor : 'red', marginLeft : '10px'}}>Decline</button>

</div>


<div className="applicant-name">

    <div className="user2"></div>

    <div style={{marginLeft : '30px'}} className="name">
    <h5>Anyadike Wisdom</h5>
    <h6>Frontend Developer</h6>
    </div>

    <button style={{backgroundColor : 'green'}}>Accept</button>
    <button style={{backgroundColor : 'red', marginLeft : '10px'}}>Decline</button>

</div>


<div className="applicant-name">

    <div className="user2"></div>

    <div style={{marginLeft : '30px'}} className="name">
    <h5>Anyadike Wisdom</h5>
    <h6>Frontend Developer</h6>
    </div>

    <button style={{backgroundColor : 'green'}}>Accept</button>
    <button style={{backgroundColor : 'red', marginLeft : '10px'}}>Decline</button>

</div>



</div>

       </div>
 


    </div>
    </>
  )
}

export default Applicants
