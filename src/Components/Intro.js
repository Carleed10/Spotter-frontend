import React from 'react'
import '../Styling/intro.css'
import a from '../Images/A.png'
import x from '../Images/X.png'
import Animation from '../Components/Animation'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



const Intro = () => {
    const navigate = useNavigate()
    useEffect(() => {
      return () => {
        const timer = setTimeout(()=>{
          navigate('/landing')
          }, 4000)
      }
    }, [])
  return (
    <>
      <Animation>

      <div className="intro-bg">
            <div data-aos="zoom-in" data-aos-duration="5500" className="intro">

                <img data-aos="fade-right" data-aos-duration="3000" className='lg' src={a} alt="" />
                <img data-aos="fade-left" data-aos-duration="3000" className='gl'  src={x} alt="" />
                


            </div>
        </div>

      </Animation>
    
    </>



  )
}

export default Intro