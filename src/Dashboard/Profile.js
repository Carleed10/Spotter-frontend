import React from 'react'
import '../Dashboard style/profile.css'

const Profile = () => {
  return (
    <>
      <div className="profile-div">
      
        <div className="percent">

         <h3>MY PROFILE</h3>

        <div className="profile">

          <div className="profile-img">

          </div>

            {/* <hr /> */}
          <div className="forms">
          <form action="">
          <h5>First Name</h5>
          <input type="text" />

          </form>


          <form action="">
          <h5>Last Name</h5>
          <input type="text" />

          </form>


          <form action="">
          <h5>Job title</h5>
          <input type="text" />

          </form>


          <form action="">
          <h5>Email</h5>
          <input type="email" />

          </form>


         <form action="">
         <h5>Job type</h5>
        <select name="" id="">

          <option value="">Choose by job type</option>
          <option value="">Full-time</option>
          <option value="">Part time</option>
          <option value="">Internship</option>
        </select>
         </form>

        <form action="">
        <h5>Job category</h5>
        <select name="" id="">
          <option value="">Choose job category</option>
          <option value="">Full-time</option>
          <option value="">Part time</option>
          <option value="">Internship</option>

        </select>
        </form>

        <form style={{width : '100%'}}  action="">
        <h5>Education</h5>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        </form>

        <form style={{width : '100%'}}  action="">
        <h5>About</h5>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>


        <button>Save Changes</button>
        



          </div>


        </div>



        {/* <h3>SOCIAL ACCOUNT</h3> */}

        <div className="social">


            {/* <hr /> */}
          <div className="social-forms">
          <form action="">
          <h5>Facebook</h5>
          <input type="text" />

          </form>


          <form action="">
          <h5>X</h5>
          <input type="text" />

          </form>


          <form action="">
          <h5>Linked In</h5>
          <input type="text" />

          </form>


          <form action="">
          <h5>Instagram</h5>
          <input type="email" />

          </form>


        <button>Save Changes</button>
        



          </div>


        </div>


        
        <div className="social">


            {/* <hr /> */}
          <div className="social-forms">
          <form action="">
          <h5>Country</h5>
          <input type="text" />

          </form>


          <form action="">
          <h5>City</h5>
          <input type="text" />

          </form>


          <form style={{width : '100%'}} action="">
          <h5>Full Address</h5>
          <input  type="text" />

          </form>


       


        <button>Save Changes</button>
        



          </div>


        </div>

      </div>


      </div>
    </>
  )
}

export default Profile
