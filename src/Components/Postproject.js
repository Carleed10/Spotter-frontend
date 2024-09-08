import React from 'react'
// import Footer from '../Components/Footer'
import '../Styling/postproject.css'
import spot from '../Images/spotter logo dark.png'
import { useNavigate } from 'react-router-dom'




const Postproject = () => {
  const navigate = useNavigate()

  const post = () =>{
    navigate('/postjob')
  }


  return (
    <>

<div className="allside">

<div className="side1">
<img style={{width : 150, marginBottom : '30px'}} src={spot} className="logo" alt="logo" />

<div className="t">
<h1>Spot the right person to do <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>job.</span></h1>

</div>




<li>Specify the job role, responsibilities, and qualifications</li>
<li>Offer compensation that reflects the job’s requirements.</li>
<li>Ensure all job details are accurate to attract the right candidates.</li>
<li>Double-check the post for any errors or missing information.</li>

<button onClick={post}><span>PROCEED</span></button>


           </div>


    
    <div className="side2">       </div>

           </div>

           

    </>
  )
}

export default Postproject