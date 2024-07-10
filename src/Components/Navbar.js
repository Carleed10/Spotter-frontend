import React from 'react'
import '../Styling/navbar.css'
import { useEffect, useState } from 'react'
// import logos from '../Imges/spotter logo.png'
import spot from '../Images/spotter logo.png'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import "../Styling/modal.scss"
import Login from './Login'
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


      <div style={{backgroundColor: Navbar ? 'black' : 'black', transition : "ease-in-out 0.5s"}} className="nav-bg">
        <div className="nav">


        <img style={{width : 140}} src={spot} className="logo" alt="logo" />


    <div className="r-but">
    <button>How it works</button>
    <button>Find Jobs</button>
    <button>About us</button>
    <button className="buttonn" onClick={login} >Login</button>

     <div class="container">



<details>
  <summary>
    <div class="buttonn"> Show me the modal  </div>
    <div className="buttonn">Sign up</div>

    <div class="details-modal-overlay"></div>
  </summary>
  <div class="details-modal">
    <div class="details-modal-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
      </svg>
    </div>
    
    <div class="details-modal-title">
      {/* <h1>My details modal</h1> */}
    </div>
    <div class="details-modal-content">
      <p>
        {/* You can click the X in the corner or click the overlay to close this modal.
       Something like this could be useful as a nice way to show additional information,
        but that's about as far as I would take it. It's just a nice way of styling the details element. */}
      {/* <Signin/> */}
      <Signin/>
      </p> 
    </div>
  </div>
</details>
</div> 
    

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



