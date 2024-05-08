import React from 'react'
import '../Dashboard style/jobs.css'
import { useNavigate } from 'react-router-dom'
import Dream from './Dream'
import Navbar3 from '../Components/Navbar3'

const Jobs = () => {


const navigate = useNavigate()

const details = () =>{
  navigate('/jobdetails')
}



  return (
    <>
<div className="findjob-div">
    <Navbar3/>
      <Dream/>
      <div className="jobs-div">

        

        
        <div className="percent2">

        


<div className="total-jobs">




<div className="foundjobs-div">




<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>

<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>

<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>
<div className="found-jobs">

<p>Frontend Developer</p>
<h6  style={{color : 'orangered'}}>Full time</h6>

<button onClick={details}>See details</button>

<button style={{backgroundColor : 'green', color : 'white'}}>Apply</button>

</div>









</div>


</div>


        </div>


      </div>


</div>
    </>
  )
}

export default Jobs
