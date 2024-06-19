import React from 'react'
import '../Dashboard style/dash.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Dash = (props) => {
  const [name, setname] = useState("")
 useEffect(() => {
   return () => {
     setname(localStorage.getItem('Username'))
   }
 }, [])
 

  return (
    <>
    <div className="dash-div">

    <div className="percent">

      <h1 style={{color : 'black'}}>Hello, {name}</h1>

      <div className="applied-box">
      <div style={{backgroundColor : 'rgb(2, 61, 2)', color : 'white'}} className="applied">
        <h2>50</h2>
        <p>Applied Jobs</p>
      </div>
      <div style={{backgroundColor : 'rgb(255,155,32)'}} className="applied">
      <h2>{props.number}</h2>
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

        <div className="recent-application">
          <h5>RECENT APPLICATION HISTORY</h5>

          <div className="applicant-name">


<div style={{marginLeft : '30px'}} className="name">
<h5>Anyadike Wisdom</h5>
<h6>Frontend Developer</h6>
</div>

</div>

<div className="applicant-name">



<div style={{marginLeft : '30px'}} className="name">
<h5>Anyadike Wisdom</h5>
<h6>Frontend Developer</h6>
</div>

</div>

<div className="applicant-name">



<div style={{marginLeft : '30px'}} className="name">
<h5>Anyadike Wisdom</h5>
<h6>Frontend Developer</h6>
</div>

</div>


        </div>

        <div className="recent-posted">
        <h5>RECENT JOB POSTED</h5>
          
        <div className="applicant-name">


<div style={{marginLeft : '30px'}} className="name">
<h5>Anyadike Wisdom</h5>
<h6>Frontend Developer</h6>
</div>

</div>

<div className="applicant-name">



<div style={{marginLeft : '30px'}} className="name">
<h5>Anyadike Wisdom</h5>
<h6>Frontend Developer</h6>
</div>

</div>

<div className="applicant-name">



<div style={{marginLeft : '30px'}} className="name">
<h5>Anyadike Wisdom</h5>
<h6>Frontend Developer</h6>
</div>

</div>


        </div>
      </div>

    </div>
    </div>
    
    
    </>
  )
}

export default Dash