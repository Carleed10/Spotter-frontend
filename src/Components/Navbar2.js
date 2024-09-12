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
import { useSelector } from 'react-redux'







const Navbar2 = () => {
  const picture = useSelector(state => state.pictureSlice.pictureUrl)
  console.log(picture);
  


  const [Sidebar, setSidebar] = useState(true)
  const [Left, setLeft] = useState(false)
  const [name, setname] = useState("")
  useEffect(() => {
    return () => {
      setname(localStorage.getItem('Username'))
    }
  }, [])
  



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


      <div style={{backgroundColor: 'black'}} className="navBg">
      <div className="nav">


<button onClick={home} style={{border : 'none', background : 'none'}}>
<img style={{width : 140}} src={spot} className="logo" alt="logo" />

</button>

<div className="r-but">

<button onClick={findJob}>Find Jobs</button>
<button >How it works</button>
<button>About us</button>
<button>Contact</button>


</div>

<div className="s-but">
<button onClick={postProject} className='post-but'>Post a Job</button>

<div className="user">


<Link to={'/profile'}>
<div className="user-img">
  {/* <img src={picture} alt="" /> */}
  <img style={{width : '40px', height : '40px', objectFit: "cover", borderRadius: '100%' }} src={picture} alt="image not found" />
  {/* style={{ width: "30px", height: "30px", }} */}

</div>
</Link>

<p style={{marginLeft : '10px', marginTop : '20px'}}>{name}</p>

</div>

<button onClick={sideNav} className='sideicon'>
{Sidebar ?  <Icon icon="vaadin:lines-list" width="18" height="18" />  : <Icon icon="mdi:cancel-bold" width="20" height="20" /> }



</button>


</div>




</div>


</div>  

<div className={Left ? 'sidebar2' : 'sidebar'} >
<div className="s-butt">

<div className="logo-side">

      <button onClick={home} style={{border : 'none', background : 'none'}}>
<img style={{width : 140}} src={spot} className="logo" alt="logo" />

</button>

<button onClick={sideNav} className='sideicon'>
{Sidebar ?  ''  : <Icon icon="mdi:cancel-bold" width="30" height="30" /> }

</button>

</div>



<div className="side-flex">

<div className="side-flex1">

<NavLink to="/dashboard"> <button> Dashboard </button> </NavLink>

<NavLink className={Sidebar ? 'active-class' : ''} to="/dashboard/applied">
  <button>Applied Jobs</button>
</NavLink>

{/* <button>Created Jobs</button> */}
<NavLink to="/dashboard/created"> <button> Created Jobs </button> </NavLink>

<NavLink to="/dashboard/applicants"> <button> Job Applicants </button> </NavLink>
<NavLink to="/dashboard/notification"> <button> Notifications </button> </NavLink>

<NavLink to="/dashboard/analytics"> <button> Analytics </button> </NavLink>
<NavLink to="/dashboard/profile"> <button> My Profile </button> </NavLink>
<NavLink to="/dashboard/applicants"> <button> Delete Account</button> </NavLink>
<NavLink to="/dashboard/applicants"> <button> Logout</button> </NavLink>

</div>


<div className="side-flex2">

<button>Find Jobs</button>
<button>How it works</button>
<button>About Us</button>
<button>Contact</button>


</div>

</div>

{/* <button>About us</button> */}
{/* <button onClick={login} >Login</button> */}

</div>
    </div>

    </>
  )
}

export default Navbar2



