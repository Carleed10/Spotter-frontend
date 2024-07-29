import React from 'react'
import '../Styling/navbar2.css'
import { useEffect, useState } from 'react'
// import logos from '../Imges/spotter logo.png'
import spot from '../Images/spotter logo.png'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Signin from './Signin'
import { motion } from "framer-motion"






const Navbar2 = () => {
  const [Sidebar, setSidebar] = useState(true)
  const [Left, setLeft] = useState(false)
  const [name, setname] = useState("")
  useEffect(() => {
    return () => {
      setname(localStorage.getItem('Username'))
    }
  }, [])
  
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  


  const navigate = useNavigate()

    const postProject = () =>{
        navigate('/postproject')
      }

      const login = () =>{
        navigate('/signin')
      }

      const findJob = () =>{
        navigate('/jobs')
      }
      
      const home = () =>{
        navigate('/dashboard')
      }

  


  const sideNav =()=>{
    setSidebar(!Sidebar)
    setLeft(!Left)
  } 




  return (
    <>


      <div className="navBg">
      <div className="nav">


<button onClick={home} style={{border : 'none', background : 'none'}}>
<img style={{width : 140}} src={spot} className="logo" alt="logo" />

</button>

<div className="r-but">

<button onClick={findJob}>Find Jobs</button>

<button></button>
<button>About us</button>

</div>

<div className="s-but">
<button onClick={postProject} className='post-but'>Post a Job</button>

<div className="user">


<Link to={'/profile'}>
<div className="user-img"></div>
</Link>

<p style={{marginLeft : '10px'}}>{name}</p>

</div>

<button onClick={sideNav} className='sideicon'>
{Sidebar ?  <Icon icon="vaadin:lines-list" width="18" height="18" />  : <Icon icon="mdi:cancel-bold" width="20" height="20" /> }



</button>


</div>




</div>


</div>  

<div className={Left ? 'sidebar2' : 'sidebar'} >
<div className="s-butt">
<button>How it works</button>
<button>Find Jobs</button>
<NavLink to="/dashboard"> <button style={{marginTop : '60px'}}> Dashboard </button> </NavLink>

<NavLink to="/dashboard/applied"> <button> Applied Jobs </button> </NavLink>

{/* <button>Created Jobs</button> */}
<NavLink to="/dashboard/created"> <button> Created Jobs </button> </NavLink>

<NavLink to="/dashboard/applicants"> <button> Job Applicants </button> </NavLink>
<button>Notifications</button>
<button>Analytics</button>
{/* <button>About us</button> */}
{/* <button onClick={login} >Login</button> */}

</div>
    </div>

    </>
  )
}

export default Navbar2



