import React from 'react'
import '../Styling/sidebar.css'
// import Navbar3 from './Navbar3'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'



const Sidebar = () => {

  const token =   localStorage.getItem('genToken')

    const navigate = useNavigate()
    const logout = ()=>{
      let Confirm = window.confirm("Are you sure you want to log out?")
        if (Confirm) {
          const timer = setTimeout(()=>{
          console.log(token);
          localStorage.removeItem('genToken')
          NotificationManager.success("Logout successfull")
           navigate('/signin')
            }, 3000)
        } else {
          
        }
      
        
        

    }
  return (
    <>
        {/* <Navbar3/> */}
      <div className="sidebar-div">

        {/* <h6>MAIN NAVIGATION</h6> */}
        {/* <button >Dashboard</button> */}
        <NavLink to="/dashboard"> <button> Dashboard </button> </NavLink>

        <NavLink to="/dashboard/applied"> <button> Applied Jobs </button> </NavLink>

        {/* <button>Created Jobs</button> */}
        <NavLink to="/dashboard/created"> <button> Created Jobs </button> </NavLink>

        <NavLink to="/dashboard/applicants"> <button> Job Applicants </button> </NavLink>
        <button>Notifications</button>
        
        <NavLink to="/dashboard/analytics"> <button>Analytics</button> </NavLink>



        <h6>MY ACCOUNT</h6>
        {/* <Link to="/">LOGOUT</Link> */}

        {/* <button><NavLink to="/dashboard/profile" > My profile</NavLink></button> */}
        <NavLink to="/dashboard/profile"> <button> My profile </button> </NavLink>
        {/* <NavLink to="/dashboard/changepassword"> <button> Change Password </button> </NavLink> */}
        <NavLink to="/dashboard/deleteaccount"> <button> Delete Account </button> </NavLink>



        {/* <button><Link to="/dashboard/changepassword">Change Password</Link></button> */}
        {/* <button><NavLink to="/dashboard/changepassword" > Change Password</NavLink></button> */}

        {/* <button>Delete Account</button> */}
        <button onClick={logout}>Log out</button>

        <NotificationContainer/>


      </div>
    </>
  )
}

export default Sidebar
