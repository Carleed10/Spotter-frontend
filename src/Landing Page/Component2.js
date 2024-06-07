import React from 'react'
import '../Landing Page Style/Component2.css'
import full from '../Images/1.png'
import part from '../Images/2.png'
import intern from '../Images/5.png'
import Animation from '../Components/Animation'





const Component2 = () => {


   

  return (
    <>
    <Animation>
    <div className="background2">
            <div className="job-div">
           <div className="f">
           <div data-aos="zoom-in" data-aos-duration="2000" className="job-category">
            
            <div className="full">
                <img  src={full} alt="" />
                <p>Full time</p>
            </div>

            <div className="full">
                <img  src={part} alt="" />
                <p>Part-time</p>

            </div>

            <div className="full">
                <img  src={intern} alt="" />
                <p>Internship</p>

            </div>
        </div>
           </div>

                <h2>POPULAR CATEGORY</h2>

            <div className="job-type">
            <div data-aos="flip-up" data-aos-duration="2000" className="jt">
            {/* '' , '' , '', '', '', '', 'Emerging Technologies', 'Prodduct Management', 'IT Consulting', 'IT Governance and Compliance', 'Telecommunications', '             */}
                <div className="job">
                    <h6>Software Development</h6>
                </div>

                <div className="job">
                <h6>Cloud Computing
</h6>
                </div>

<div className="job">
<h6>Networking
</h6>
</div>

<div className="job">
<h6>Web Development
</h6>
</div>

<div className="job">
<h6>Ghostwriting
</h6>
</div>

<div className="job">
<h6>Game Development
</h6>
</div>

<div className="job">
<h6>Data Processing
</h6>
</div>

<div className="job">
<h6>Content Writing
</h6>
</div>


<div className="job">
<h6>Public Relations
</h6>
</div>
<div className="job">
<h6>Copywriting
</h6>
</div>

<div className="job">
<h6>Cloud Computing 
</h6>
</div>

<div className="job">
<h6>Database Management
</h6>
</div>
</div>





                
            </div>

            </div>


        </div>
    </Animation>
    </>
  )     
}

export default Component2