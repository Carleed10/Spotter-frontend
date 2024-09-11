import React from 'react'
import '../Dashboard style/deleteaccount.css'
// import { Icon } from '@iconify/react/dist/iconify.js'
import { Icon } from '@iconify/react'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom'


const Deleteaccount = () => {

  const token =   localStorage.getItem('genToken')
  const navigate = useNavigate()

  if (!token) {
    navigate('/notauthorised')
 } 


    const deleteAcc = () =>{
      axios.post('https://spotter-backend.onrender.com/api/user/deleteAccount', {}, {headers : {
        'Authorization' : `Bearer ${token}`,
        "content-type" : "application/json"
      }})
      .then((res) =>{
        console.log(res);
        console.log(res.data.message);
        NotificationManager.success(res.data.message)
        const timer = setTimeout(()=>{
          navigate("/signup")
          }, 3000)


      }).catch((err) =>{
        console.log(err);
      })
    }


  return (
    <>
        <div className="delete-account">
            
                <div className="delete-div">

                    <div className="delete">

                    <Icon className='del' icon="fluent:delete-12-filled" width="70" height="70"/>

                    </div>

                    <h5 style={{marginTop : '15px', fontWeight : '700'}}>DELETE ACCOUNT</h5>
                    <p>Are you sure you want to delete your account?</p>
                    <button style={{backgroundColor : 'whitesmoke', marginRight : '10px'}}>Cancel</button>
                    <button onClick={deleteAcc} style={{color : 'white'}}>Delete</button>
                    <NotificationContainer/>

                    </div>           
                    
           


        </div>
    </>
  )
}

export default Deleteaccount