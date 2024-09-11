// import React from 'react'
import React from 'react';
import '../Dashboard style/notification.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { NotificationContainer, NotificationManager } from 'react-notifications'





const Notification = () => {
  const [data, setdata] = useState([])
  const [Update, setUpdate] = useState(false)
  const [pageLoad, setpageLoad] = useState(true)

  const token = localStorage.getItem('genToken')
  const navigate = useNavigate()


  useEffect(() => {
    return () => {
      if (!token) {
        navigate('/notauthorised')
      } 
      axios.get(`https://spotter-backend.onrender.com/api/notification/message`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.notifications);
          // console.log(res.dat.createdJob);
          console.log("Update succesfull");
          setdata(res.data.notifications);
          setTimeout(() => {
            setpageLoad(false)
          }, 2000);
          // console.log(dat);
          // NotificationManager.success(res.profile.message)
        })
        .catch((err) => {
          console.log(err);
          // NotificationManager.error(err.response.apply.message)
        });
    };
  }, [Update]);


  const deleteNotification = (id) =>{
    axios.post(`https://spotter-backend.onrender.com/api/notification/deleteNotification/${id}`, {}, {headers : {
      'Authorization' : `Bearer ${token}`,
      "content-type" : "application/json"
    }})
    .then((res)=>{
      console.log(res);
      NotificationManager.success(res.data.message)

      console.log("Job deleted successfully");
      setUpdate(true)
  })
  .catch((error) => {
    console.log(error);
  })
  }

  if (pageLoad) {
    return  <div className='spinner'>
    <div class="loader"></div>
  </div>
     
  }

  return (
    <>
      <div className="notification-div">

      <div className="percent">
        <h2 style={{fontWeight : '700'}}>NOTIFICATIONS</h2>
        <p>You have <span style={{color : 'green', fontWeight : '700'}}>{data.length}</span> notifications </p>



        {data.map((nt)=>(
          
          <div className="notifications">
          <p>{nt.notificationMessage}</p>
          {/* <small>{nt._id}</small> */}
          <button onClick={()=>deleteNotification(nt._id)} style={{marginLeft : '10px', border : 'none', borderRadius:'100%', width:'35px', height:'35px', padding : '5px', backgroundColor : 'red'}}>
                          <Icon className='mar' icon="fluent:delete-16-filled" width="20" height="20" />
                          </button>
          
          {/* <hr /> */}
  
          </div>

          ))}
        
     </div>
     <NotificationContainer/>

      </div>
    </>
  )
}

export default Notification
