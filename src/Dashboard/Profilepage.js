import React from 'react'
import '../Dashboard style/profilepage.css'
import Footer from '../Components/Footer'
import Navbar3 from '../Components/Navbar3'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { DateTime } from 'luxon';
import moment from 'moment';

const Profilepage = () => {
    const [data, setdata] = useState({})
    const token = localStorage.getItem('genToken')
    
    // console.log(token);
  
    useEffect(() => {
      return () => {
        axios.get('http://localhost:5002/api/user/getProfile',  {headers : {
              'Authorization' : `Bearer ${token}`,
              "content-type" : "application/json"}})
          .then((res) => {
     
            console.log(res);
            console.log('Information gotten succesfully');
            // console.log(res.data.findProfile);
            setdata(res.data.findProfile)
            // setFirstName(res.data.findProfile.firstName)
            // localStorage.setItem('length', res.data.length)
            // localStorage.setItem('genToken', res.data.genToken)
            console.log(data);
            // NotificationManager.success(res.data.message)
          }).catch((err)=>{
            console.log(err);
            // NotificationManager.error(err.response.data.message)
              })
      }
    }, [])
  return (
    <>

    <Navbar3/>

    <div className="profile-div">
        <div className="percent4">
        <h1 style={{fontWeight : '800'}}>CANDIDATE PROFILE</h1> 
            <div className="pro2">

                <div className="flex2">
                    <div className="img-div">

                    <div className="profile-img"> </div>
                    <span style={{fontWeight : '700', fontSize : '20px', marginTop : '10px'}}>{data.firstName} {data.lastName}</span>
                    <h6>{data.jobTitle}</h6>
                    <span style={{marginTop : '-8px', fontSize : '13px'}}>{data.city}, {data.country}</span>
                   
                   <button style={{fontWeight : '600'}}>VIEW CV / RESUME</button>

                    </div> 


                    <div className="full-details">
                      <h4>ABOUT</h4>
                      <p>{data.about}</p>

                      <h4 style={{marginTop : '50px'}}>EDUCATION</h4>
                      <p>{data.education}</p>
                      
                      <h4 style={{marginTop : '50px'}}>RESIDENTIAL ADDRESS</h4>
                      <p>{data.fullAddress}</p>

                      <h4 style={{marginTop : '50px'}}>CONTACT INFORMATION</h4>
                      <li>{data.email}</li>
                      <li>{data.linkedIn}</li>
                      <li>{data.x}</li>
                      <li>{data.instagram}</li>
                      <li>{data.facebook}</li>

                    </div>

                </div>
            </div>

        </div>


    </div>
    
    <Footer/>
    </>
  )
}

export default Profilepage