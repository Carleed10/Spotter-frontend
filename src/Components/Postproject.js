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
<h1>Tell us what you need<span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>done.</span></h1>

</div>

<input placeholder="I'm looking for ..." type='text' />

<button onClick={post}><span>Let's go</span></button>

<li>Contact skilled freelancers within minutes</li>
<li>Browse their profiles, ratings and portfolios</li>
<li>Chat with candidates to find the right match</li>
<li>Pay only when you are 100% satisfied</li>


           </div>
    
    <div className="side2">       </div>

           </div>

           

    </>
  )
}

export default Postproject