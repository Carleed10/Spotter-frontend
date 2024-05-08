import React from 'react'
import '../Dashboard style/deleteaccount.css'
// import { Icon } from '@iconify/react/dist/iconify.js'
import { Icon } from '@iconify/react'

const Deleteaccount = () => {
  return (
    <>
        <div className="delete-account">
            
                <div className="delete-div">

                    <div className="delete">

                    <Icon className='del' icon="fluent:delete-12-filled" width="70" height="70"/>

                    </div>

                    <h5 style={{marginTop : '15px'}}>Delete Account</h5>
                    <p>Are you sure you want to delete your account?</p>
                    <button style={{backgroundColor : 'whitesmoke', marginRight : '10px'}}>Cancel</button>
                    <button style={{color : 'white'}}>Delete</button>

                    </div>           
                    
           


        </div>
    </>
  )
}

export default Deleteaccount