import React from 'react'
import '../Styling/navbar.css'
import { useEffect, useState } from 'react'
// import logos from '../Imges/spotter logo.png'
import spot from '../Images/spotter logo.png'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'





const Navbar = () => {
  const [Navbar, setNavbar] = useState(true)
  const [Sidebar, setSidebar] = useState(true)
  const [Left, setLeft] = useState(false)

  
  
  const navigate = useNavigate()

    const postProject = () =>{
        navigate('/postproject')
      }

      const login = () =>{
        navigate('/signin')
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


      <div style={{backgroundColor: Navbar ? 'transparent' : 'black', transition : "ease-in-out 0.5s"}} className="nav-bg">
        <div className="nav">


        <img style={{width : 140}} src={spot} className="logo" alt="logo" />


    <div className="r-but">
    <button>How it works</button>
    <button>Find Jobs</button>
    <button>About us</button>
    <button onClick={login} >Login</button>

      
    

    </div>

    <div className="s-but">
    <button onClick={postProject} className='post-but'>Post a Job</button>
    <button onClick={sideNav} className='sideicon'>
    {Sidebar ?  <Icon icon="vaadin:lines-list" width="18" height="18" />  : <Icon icon="mdi:cancel-bold" width="20" height="20" /> }       
    
    </button>
    

    </div>




        </div>
        
        
        </div>  

        <div className={Left ? 'sidebar2' : 'sidebar'} >
        <div className="s-butt">
        <img style={{width : 80, marginBottom : '30px'}} src={spot} className="logo" alt="logo" />

    <button>How it works</button>
    <button>Find Jobs</button>
    <button>About us</button>
    <button onClick={login} >Login</button>
   
    </div>
    </div>

    </>
  )
}

export default Navbar



