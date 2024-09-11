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






const Navbar = ({imageUrl}) => {
  const [Sidebar, setSidebar] = useState(true)
  const [Left, setLeft] = useState(false)
  const [name, setname] = useState("")
  const [Navbar, setNavbar] = useState(true)

  useEffect(() => {
    return () => {
      setname(localStorage.getItem('Username'))
    }
  }, [])
  
//   {datad.map((el) => {

    
     
//     //  let subtract = datad.length - 5
//     //  let data = datad.splice(subtract, 5)
//      console.log(data);
     

//   return(
//     <div className="posted-jobs">

//     <div className="c-logo">

//     </div>

//   <div style={{}} className="name">
//   <h6 style={{marginBottom :'-1px', fontWeight :'700'}}>{el.jobTitle}</h6>
//   <small>{el.jobType}</small>
//   {/* <h6>Frontend Developer</h6> */}
//   </div>
  
//   </div>
//   )
  

// })}


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

      useEffect(() => {
        window.addEventListener('scroll',  () => {
          let windowHeight = window.scrollY
          if(windowHeight > 100){
            setNavbar(false);
    
          }else if(windowHeight < 100){
            setNavbar(true)
          }
        });
    
        
        ;
      }, [Navbar]);

  


  const sideNav =()=>{
    setSidebar(!Sidebar)
    setLeft(!Left)
  } 




  return (
    <>


      <div style={{backgroundColor: Navbar ? 'transparent' : 'black', transition : "ease-in-out 0.5s"}} className="navBg">
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



<button onClick={sideNav} className='sideicon'>
{Sidebar ?  <Icon icon="vaadin:lines-list" width="18" height="18" />  : <Icon icon="vaadin:lines-list" width="18" height="18" /> }



</button>


</div>




</div>


</div>  

<div className={Left ? 'sidebar2' : 'sidebar'} >
<div className="s-butt">
<button onClick={home} style={{border : 'none', background : 'none'}}>
<img style={{width : 140}} src={spot} className="logo" alt="logo" />

</button>

<button onClick={sideNav} className='sideicon'>
{Sidebar ?  ''  : <Icon icon="mdi:cancel-bold" width="20" height="20" /> }



</button>



<div className="side-flex">

<div className="side-flex2">

<button>How it works</button>
<button>Find Jobs</button>

<button>Find Jobs</button>

</div>

</div>

{/* <button>About us</button> */}
{/* <button onClick={login} >Login</button> */}

</div>
    </div>

    </>
  )
}

export default Navbar



