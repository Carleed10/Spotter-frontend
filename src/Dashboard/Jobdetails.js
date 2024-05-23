import React from 'react'
import '../Dashboard style/jobdetails.css'
import Footer from '../Components/Footer'
import Navbar3 from '../Components/Navbar3'

const Jobdetails = () => {
  return (
    <>

    <Navbar3/>

    <div className="details-div">
        <div className="percent3">

            <div className="details">

            
            <div className="flex">
            <div>
            <h2>FRONTEND DEVELOPER</h2>
            <p>Tech hub</p>
            </div>
            <h6>10th May 2024</h6>
            </div>

            <h6 style={{marginTop : '20px'}} >Salary : <span style={{fontWeight : '700'}}>₦200,000</span></h6>

            <h6 style={{marginTop : '20px'}}  >Job type : <span>Part Time</span></h6>
                

                <div style={{marginTop : '20px'}} className="flex">
                <h6>Employees needed : <span>10</span></h6>
                <h6>Employers applied : <span>9</span></h6>
                </div>


                <hr />

                <div className="job-description">
                    <h4>JOB DESCRIPTION</h4>
                    <p>
                    We are looking for a PHP Developer responsible for managing back-end services and the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database

Across our network, we strive to provide rapid, performance-based, industry-focused and technology-enabled services, which reflect a shared knowledge of global and local industries and our experience of the Indian business environment.
                    </p>

                </div>
                <div className="requirement">
                    <h4>REQUIREMENTS</h4>
                    <li>Strong core PHP Hands on experience.</li>
                    <li>Strong Expertise in CodeIgniter Framework.</li>
                    <li>Understanding of MVC design pattern.</li>
                    <li>Expertise in PHP, MVC Frameworks and good technology exposure of Codeigniter </li>
                    <li> Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3 </li>
                    <li>Good knowledge of relational databases and developing web services.</li>
                    <li>Proficient understanding of code versioning tools, such as Git </li>


                </div>
            </div>


        {/* <div className="interested-div">

            <h4>Interested in this job?</h4>


            <h6>First Name</h6>
            <input type="text" />

    

            <h6>Last Name</h6>
            <input type="text" />


            <h6>Email</h6>
            <input type="email" />

            <h6>Upload Resume:pdf, doc, docx</h6>

            <input type="file" />

<button><span>Apply for this job</span></button>

            <button>Apply for this job</button>
        </div> */}

        </div>


    </div>
    
    <Footer/>
    </>
  )
}

export default Jobdetails