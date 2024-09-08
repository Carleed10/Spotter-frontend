import React from 'react'
import '../Landing Page Style/Component8.css'
import cl from '../Images/cl 1.jpg'
import Animation from '../Components/Animation'



const Component8 = () => {



  return (
    <>
    <Animation>
    <div className="happy-bg">
    <h2>OUR HAPPY CLIENTS</h2>

<div  className="client-div">

  

<div data-aos="flip-left" data-aos-duration="1500" className="client">
<div className="cl">
<div className="cl-pic">
    <img  src={cl} alt="" />
</div>

<div className="cl-name">
  <h6>Joshua George</h6>
  <h6>Graphics Designer</h6>
</div>
</div>
     
     <p>
     This job website exceeded my expectations! I found my dream job through this platform, and the process was smooth from start to finish. The interface is intuitive, making it easy to browse and apply for jobs. The job matching algorithm is spot-on, connecting me with opportunities that aligned perfectly with my skills and experience. I'm grateful for this platform and highly recommend it to anyone looking for their next career move.
     </p>

  </div>

  <div data-aos="flip-right" data-aos-duration="1500" className="client">
<div className="cl">
<div className="cl-pic">
    <img  src={cl} alt="" />
</div>

<div className="cl-name">
  <h6>Lisa Black</h6>
  <h6>Copy Writer</h6>
</div>
</div>
     
     <p>
     Using this job website was a game-changer for my career! I found a fantastic job that matched my skills and interests perfectly. The platform's user interface is modern and intuitive, making it easy to navigate and apply for jobs. The personalized job recommendations were incredibly helpful in finding opportunities that suited me. Overall, I'm thrilled with the results and would highly recommend this website to anyone seeking a new job!"
     </p>

  </div>

  <div data-aos="flip-left" data-aos-duration="1500" className="client">
<div className="cl">
<div className="cl-pic">
    <img  src={cl} alt="" />
</div>

<div className="cl-name">
  <h6>Sam John</h6>
  <h6>Frontend Developer</h6>
</div>
</div>
     
     <p>
     Thanks to this job website, I landed an amazing job that fits my skills and career goals perfectly! The platform's user-friendly design made job searching a breeze, and the ability to customize my profile and preferences ensured I received relevant job recommendations. The application process was straightforward, and the communication with employers was professional. I'm grateful for the opportunities this website provided. </p>

  </div>


  
</div>




      </div>
    </Animation>
      
    </>
  )
}

export default Component8