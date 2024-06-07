import React from 'react'
import '../Dashboard style/changepassword.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom'





const Changepassword = () => {
  const [Password, setPassword] = useState("")
  const [Pass, setPass] = useState("")
  const [Passw, setPassw] = useState("")

  const navigate = useNavigate()

  const token =   localStorage.getItem('genToken')
  

  const saveChanges = () =>{
    if (Pass == Passw) {
      axios.post('http://localhost:5002/api/user/edit', {password : Password}, {headers : {
      'Authorization' : `Bearer ${token}`,
      "content-type" : "application/json"
    }})
    .then((res) =>{
      
      console.log(res);
      NotificationManager.success(res.data.message)
      console.log(res.data.message);
      const timer = setTimeout(()=>{
        navigate('/dashboard')
        }, 3000)
      // navigate("/dashboard")

    }).catch((err) =>{
      console.log(err);
    })
    } else {
      NotificationManager.error("Password doesn't match")


    }
  }


  return (
    <>
      <div className="changepassword-div">
        <div className="percent">

         <h3>CHANGE PASSWORD</h3>

        <div className="change-div">

          <form action="">
          <h6>Old Password</h6>
          <input onChange={(e)=>setPassword(e.target.value)} type="text" />

          </form>


          <form action="">
          <h6>New Password</h6>
          <input onChange={(e)=>setPass(e.target.value)} type="text" />

          </form>


          <form action="">
          <h6>Confirm Password</h6>
          <input onChange={(e)=>setPassw(e.target.value)} type="text" />

          </form>

          <button onClick={saveChanges}>Save Changes</button>
          <NotificationContainer/>

        </div>
      </div>

      </div>
    </>
  )
}

export default Changepassword
