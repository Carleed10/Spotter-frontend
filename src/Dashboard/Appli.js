import React from "react";
import "../Dashboard style/applicants.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css';

const Appli = () => {
  const [data, setdata] = useState([]);

  const { id } = useParams();
  // const { applicantId } = useParams();
  const navigate = useNavigate()

  console.log(id);
  const token = localStorage.getItem("genToken");

  useEffect(() => {
    return () => {
      axios
        .get(`http://localhost:5002/api/job/applicants/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.appli.applicants);
          // console.log(res.data.createdJob);
          console.log("Update succesfull");
          setdata(res.data.appli.applicants);
          console.log(data);
          // NotificationManager.success(res.data.message)
        })
        .catch((err) => {
          console.log(err);
          // NotificationManager.error(err.response.apply.message)
        });
    };
  }, []);

  const profile = (id) =>{
    navigate(`/dashboard/applicants/candidateProfile/${id}`)
    
  }


const accept = (applicantId) =>{
  // console.log(applicantId);
  axios.post(`http://localhost:5002/api/job/acceptApplicant/${id}`, {applicantId}, {headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  })
  .then((res) => {
    console.log(res);
    console.log(res.data.message);
    NotificationManager.success(res.data.message)
  })
  .catch((err) => {
    console.log(err);
    // NotificationManager.error(err.response.apply.message)
  });
};

const decline = (applicantId) =>{
  // console.log(applicantId);
  axios.post(`http://localhost:5002/api/job/declineApplicant/${id}`, {applicantId}, {headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  })
  .then((res) => {
    console.log(res);
    console.log(res.data.message);
    NotificationManager.success(res.data.message)

  })
  .catch((err) => {
    console.log(err);
    // NotificationManager.error(err.response.apply.message)
  });
};




  
  return (
    <>
      <div className="applicants-div">
        <div className="appli">
          <h2 style={{ fontWeight: "700" }}>APPLICANTS</h2>

          <p>
            You have <span style={{ color: "green", fontWeight: "700" }}>{data.length}</span> applicants for this job
          </p>

          <div className="applicants-table">
          {data.map((ap)=>(

<div className="applicants-name">
<div className="a">
<button style={{border : 'none', background : 'none'}} onClick={()=>profile(ap.userId._id)}>
<div className="user2"></div>
</button>
{/* <div className="user2"></div> */}


<div  className="name">
  <h5 style={{fontWeight : '700'}}>{ap.userId.lastName.toUpperCase()} {ap.userId.firstName.toUpperCase()}</h5>
  <h6 style={{marginTop :'-5px', fontSize : '12px'}}>{ap.userId.jobTitle}</h6>
</div>
</div>
{/* <button className="z" style={{border : 'none', background : 'none'}} onClick={()=>profile(ap.userId._id)}>View profile</button> */}

<div className="accept">
<button onClick={()=>accept(ap.userId._id)} style={{ backgroundColor: "green" }}>Accept</button>
<button onClick={()=>decline(ap.userId._id)} style={{ backgroundColor: "red"}}>Decline</button>
</div>
{/* <Link to={`/dashboard/applicants/candidateProfile/${id}`}>View Profile</Link> */}
{/* <h6>{ap._id}</h6> */}
{/* <h6>{ap.salary}</h6> */}

{/* <h3>{ap.userId._id}</h3> */}

</div>

          ))}
          </div>
        </div>
      </div>
      <NotificationContainer/>

    </>
  );
};

export default Appli;