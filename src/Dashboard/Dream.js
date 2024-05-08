import React from 'react'
import '../Dashboard style/dream.css'
import { Icon } from '@iconify/react/dist/iconify.js'

const Dream = () => {
  return (
    <>
    
    <div className="dream-div">
            <div className="percent">
            <h1>SPOT THE RIGHT JOB HERE</h1>

            <div className="search-div2">
        <input placeholder='Find your dream job' type="text" />
        <button><Icon icon="raphael:search" style={{color: 'white'}}  width="30" height="30"  /></button>
        </div>


        <div className="sort-div">
<h5><span>TOTAL JOBS</span> : <span style={{color: 'yellow'}}>1200</span></h5>


<div className="sortby">
            
<select name="" id="">
  <option value="">Sort by job type</option>
  <option value="">Full-time</option>
  <option value="">Part time</option>
  <option value="">Internship</option>

</select>

            </div>

</div>
            </div>



    </div>
    
    
    
    </>
  )
}

export default Dream