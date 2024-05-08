import React from 'react'
import '../Dashboard style/changepassword.css'



const Changepassword = () => {
  return (
    <>
      <div className="changepassword-div">
        <div className="percent">

         <h3>CHANGE PASSWORD</h3>

        <div className="change-div">

          <form action="">
          <h6>Old Password</h6>
          <input type="text" />

          </form>


          <form action="">
          <h6>New Password</h6>
          <input type="text" />

          </form>


          <form action="">
          <h6>Confirm Password</h6>
          <input type="text" />

          </form>

          <button>Save Changes</button>

        </div>
      </div>

      </div>
    </>
  )
}

export default Changepassword
