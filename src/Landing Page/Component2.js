import React from 'react'
import '../Landing Page Style/Component2.css'
import full from '../Images/1.png'
import part from '../Images/2.png'
import intern from '../Images/5.png'




const Component2 = () => {
  return (
    <>
        <div className="background2">
            <div className="job-div">
           <div className="f">
           <div className="job-category">
            
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
            <div className="jt">
                
                <div className="job">
                    <h6>Website Design</h6>
                </div>

                <div className="job">
                <h6>Proofreading
</h6>
                </div>

<div className="job">
<h6>Article Writing
</h6>
</div>

<div className="job">
<h6>Data Entry
</h6>
</div>

<div className="job">
<h6>Ghostwriting
</h6>
</div>

<div className="job">
<h6>Wordpress
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
<h6>Graphic Design
</h6>
</div>

<div className="job">
<h6>Translation
</h6>
</div>
</div>





                
            </div>

            </div>


        </div>
    </>
  )     
}

export default Component2