import React from 'react'
import Navbar3 from './Navbar3'
import '../Styling/postproject.css'
import '../Dashboard style/profile.css'
import Footer from './Footer'



const Postjob = () => {
  return (
    <>
    <Navbar3/>
       <div className="postjob-div">
      
      <div className="percent">

       <h3>POST JOB</h3>

      <div className="profile">


          {/* <hr /> */}
        <div className="forms">
        <form action="">
        <h5>Job Title</h5>
        <input type="text" />

        </form>


        
      <form action="">
      <h5>Job Category</h5>
      <select name="" id="">
        <option value="">Choose job category</option>
        <option value="">UI / UX design</option>
        <option value="">Backend development</option>
        <option value="">Frontend development</option>

      </select>
      </form>


        <form action="">
        <h5>Company Name</h5>
        <input type="text" />

        </form>


        <form action="">
        <h5>Vacancies</h5>
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
        <h5>Salary (₦)</h5>
        <input type="text" />

        </form>



      <form style={{width : '100%'}}  action="">
      <h5>Job description</h5>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      </form>

      <form style={{width : '100%'}}  action="">
      <h5>Requirements</h5>

      <textarea name="" id="" cols="30" rows="10">
        JOEWKRDFNOLEK. 
      </textarea>
      </form>


      <button>POST JOB</button>
      



        </div>


      </div>








      
      

    </div>


    </div>

    <Footer/>
    </>
  )
}

export default Postjob
