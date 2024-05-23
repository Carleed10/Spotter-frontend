import React from 'react'
import '../Landing Page Style/Component5.css'
import perfect from '../Images/bg.png'
import Animation from '../Components/Animation'




const Component5 = () => {



  return (
    <>
      <Animation>
      <div className="perfect-div">
            <div data-aos="fade-right" data-aos-duration="1500" className="perfect">
            <img  src={perfect} alt="" />

            <div className="perfect-text">
              <div className="pt">
              <h2>FIND YOUR PERFECT JOB BASED ON EXPERIENCE</h2>
                <p>Discover Your Ideal Job Based on Your Experience: Leverage your unique blend of skills, knowledge, and professional background to unlock a world of exciting career prospects. Whether you're a seasoned professional looking for new challenges or an entry-level candidate eager to gain valuable experience, finding the perfect job that aligns with your expertise is essential for long-term career satisfaction. By focusing on your strengths, accomplishments, and industry-specific expertise, you can navigate the job market with confidence and land the role that not only matches your experience but also offers opportunities for growth and development.</p>
              </div>
            </div>
            </div>
      </div>
      </Animation>
    </>
  )
}

export default Component5
