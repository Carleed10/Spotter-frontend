import React from 'react'
import '../Dashboard style/profilepage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const CandidateProfile = () => {
  const [dat, setdat] = useState({})

  const token = localStorage.getItem('genToken')
  const { id } = useParams();

  const navigated = useNavigate()


  


  // const applicantId = dat.userId
  // console.log(applicantId);
    // console.log(token);
  
    useEffect(() => {
        return () => {
          if (!token) {
            navigated('/notauthorised')
          } 
          axios.get(`http://localhost:5002/api/job/applicantProfile/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
              },
            })
            .then((res) => {
              console.log(res);
              // console.log(res.dat.appli.applicantProfile);
              // console.log(res.dat.createdJob);
              console.log("Update succesfull");
              setdat(res.data.applicantProfile);
              console.log(dat);
              // NotificationManager.success(res.profile.message)
            })
            .catch((err) => {
              console.log(err);
              // NotificationManager.error(err.response.apply.message)
            });
        };
      }, []);
  return (
    <>

    {/* <Navbar3/> */}

    <div className="profile-div">
        <div className="percent4">
        <h2 style={{fontWeight : '800'}}>CANDIDATE PROFILE</h2> 
            
                <div className="pro2">
             

<div className="flex2">
<div className="img-div">

<div className="profile2-img">
    
    <img src={dat.imageUrl} alt="" />
  
   </div>
<span style={{fontWeight : '700', fontSize : '20px', marginTop : '10px'}}>{dat.firstName} {dat.lastName}</span>
{/* <h6>{data.jobTitle}</h6> */}
<span style={{marginTop : '-8px', fontSize : '13px'}}>{dat.city}, {dat.country}</span>

<button style={{fontWeight : '600'}}>VIEW CV / RESUME</button>

</div> 


<div className="full-details">
  <h4>ABOUT</h4>
  <p>{dat.about}</p>

  <h4 style={{marginTop : '50px'}}>EDUCATION</h4>
  <p>{dat.education}</p>
  
  <h4 style={{marginTop : '50px'}}>RESIDENTIAL ADDRESS</h4>
  <p>{dat.fullAddress}</p>

  <h4 style={{marginTop : '50px'}}>CONTACT INFORMATION</h4>
  <li>{dat.email}</li>
  <li>{dat.linkedIn}</li>
  <li>{dat.x}</li>
  <li>{dat.instagram}</li>
  <li>{dat.facebook}</li>

</div>

</div>

      
            </div>
            

        </div>


    </div>
    
    {/* <Footer/> */}
    </>
  )
}

export default CandidateProfile