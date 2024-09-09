import React from 'react'
import '../Styling/navbar.css'
import { useEffect, useState } from 'react'
// import logos from '../Imges/spotter logo.png'
import spot from '../Images/spotter logo.png'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Signin from './Signin'






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


      <div style={{backgroundColor: Navbar ? 'transparent' : 'black', transition : "ease-in-out 0.5s"}} className="navBg">
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














// import React, { useState, useEffect } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import '../Styling/navbar4.css';
// import spot from '../Images/spotter logo.png'


// const NavBar4 = () => {
//   const [searchActive, setSearchActive] = useState(false);
//   const [mobileMenuActive, setMobileMenuActive] = useState(false);
//   const [Navbar, setNavbar] = useState(true)


//   const toggleSearch = () => {
//     setSearchActive(!searchActive);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuActive(!mobileMenuActive);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll',  () => {
//       let windowHeight = window.scrollY
//       if(windowHeight > 100){
//         setNavbar(false);

//       }else if(windowHeight < 100){
//         setNavbar(true)
//       }
//     });

    
//     ;
//   }, [Navbar]);


//   return (
//     <div style={{backgroundColor: Navbar ? 'transparent' : 'black', transition : "ease-in-out 0.5s"}} className="navBg">

//     <div className="nav-wrapper">
//       {/* <div className="grad-bar"></div> */}
//       <nav className="navbar">
//       <img style={{width : 140, height : 35}} src={spot} className="logo" alt="logo" />

//         {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" /> */}
//         <div className={`menu-toggle ${mobileMenuActive ? 'is-active' : ''}`} id="mobile-menu" onClick={toggleMobileMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//         <ul className={`nav ${searchActive ? 'search' : 'no-search'} ${mobileMenuActive ? 'mobile-nav' : ''}`}>
//           <li className="nav-item"><a href="#">Home</a></li>
//           <li className="nav-item"><a href="#">About</a></li>
//           <li className="nav-item"><a href="#">Work</a></li>
//           <li className="nav-item"><a href="#">Careers</a></li>
//           <li className="nav-item"><a href="#">Contact Us</a></li>
//           {/* <i className="fas fa-search" id="search-icon" onClick={toggleSearch}></i> */}
//           {/* <input className={`search-input ${searchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." /> */}
//         </ul>
//       </nav>
//     </div>

//     </div>  

//   );
// };

// export default NavBar4;
