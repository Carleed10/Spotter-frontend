import React from 'react'
import '../Dashboard style/dream.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'

const Dream = ({data}) => {
  const [value, setValue] = useState("")
  // const filter = (e) =>{
  //     const search = data.filter((f)=>f.jobTitle.includes(e.target.value))
  //     setsearchData(search)

  // }
  return (
    <>
    
    <div className="dream-div">
            <div className="percent">
            <h1>SPOT THE RIGHT JOB HERE</h1>

            <div className="search-div2">
        <input onChange={(event)=>setValue(event.target.value)} placeholder='Find your dream job' type="text" />
        <button><Icon icon="raphael:search" style={{color: 'white'}}  width="30" height="30"  /></button>
        </div>


        <div className="sort-div">
<h5><span>TOTAL JOBS</span> : <span style={{color: 'yellow'}}>{data.length}</span></h5>


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