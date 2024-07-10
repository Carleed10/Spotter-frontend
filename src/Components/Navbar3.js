import React from 'react'
import '../Styling/navbar.css'
import {useState, useEffect } from 'react'
// import logos from '../Imges/spotter logo.png'
import spot from '../Images/spotter logo.png'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../Styling/navbar3.css'





const Navbar3 = () => {
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
      <div style={{backgroundColor: 'black'}} className="nav-bg">
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

export default Navbar3