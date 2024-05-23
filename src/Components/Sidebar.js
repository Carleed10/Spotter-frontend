import React from 'react'
import '../Styling/sidebar.css'
// import Navbar3 from './Navbar3'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {

    const navigate = useNavigate()
    const logout = ()=>{
        navigate('/')
        

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
        <button>Analytics</button>


        <h6>MY ACCOUNT</h6>
        {/* <Link to="/">LOGOUT</Link> */}

        {/* <button><NavLink to="/dashboard/profile" > My profile</NavLink></button> */}
        <NavLink to="/dashboard/profile"> <button> My profile </button> </NavLink>
        <NavLink to="/dashboard/changepassword"> <button> Change Password </button> </NavLink>
        <NavLink to="/dashboard/deleteaccount"> <button> Delete Account </button> </NavLink>



        {/* <button><Link to="/dashboard/changepassword">Change Password</Link></button> */}
        {/* <button><NavLink to="/dashboard/changepassword" > Change Password</NavLink></button> */}

        {/* <button>Delete Account</button> */}
        <button onClick={logout}>Log out</button>



      </div>
    </>
  )
}

export default Sidebar
