import React from 'react'
import '../Landing Page Style/Component1.css'
import { Icon } from '@iconify/react'
import up from '../Images/vector3.webp'

const Component1 = () => {
  return (
    <>
      <div className="background1">
          <div className="head">
         <div className="h">
         <h1>
          <span style={{color : 'rgb(3,168,78)'}}>SPOT</span> THE RIGHT JOB, <span style={{color : 'rgb(3,168,78)'}}>SPOT</span> THE RIGHT PERSON TO DO YOUR JOB.</h1>
        <div className="search-div">
        <input placeholder='Find your dream job' type="text" />
        <button><Icon icon="raphael:search" style={{color: 'white'}}  width="30" height="30"  /></button>
        </div>
         </div>

          </div>

      <div className="vector">
      <img src={up} alt="" />

      </div>

      </div>
    </>
  )
}

export default Component1
