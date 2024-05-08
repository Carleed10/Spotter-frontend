import React from 'react'
import '../Dashboard style/appliedjobs.css'

const Appliedjobs = () => {
  return (
    <>
      <div className="applied-div">
      
      <div className="percent">
        <h2 style={{fontWeight : '700'}}>APPLIED JOBS</h2>

        <p>You have applied for <span style={{color : 'green', fontWeight : '700'}}>26</span> jobs</p>
        
        <div className="applied-table">

        <table>
            
        <thead>
            <tr>
                <th style={{width : '60%'}} >Job Title</th>
                <th>Status</th>
                <th>Applied Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Fullstack Developer</td>
                <td>Pending</td>
                <td>4th May, 2024</td>
            </tr>
            <tr>
                <td>Graphics Designer</td>
                <td>Declined</td>
                <td>7th May, 2024</td>
            </tr>
            <tr>
                <td>Frontend Developer</td>
                <td>Accepted</td>
                <td>6th May, 2024</td>
            </tr>
            <tr>
                <td>Fullstack Developer</td>
                <td>Pending</td>
                <td>4th May, 2024</td>
            </tr>
            <tr>
                <td>Graphics Designer</td>
                <td>Declined</td>
                <td>7th May, 2024</td>
            </tr>
            <tr>
                <td>Frontend Developer</td>
                <td>Accepted</td>
                <td>6th May, 2024</td>
            </tr>
            <tr>
                <td>Fullstack Developer</td>
                <td>Pending</td>
                <td>4th May, 2024</td>
            </tr>
            <tr>
                <td>Graphics Designer</td>
                <td>Declined</td>
                <td>7th May, 2024</td>
            </tr>
            <tr>
                <td>Frontend Developer</td>
                <td>Accepted</td>
                <td>6th May, 2024</td>
            </tr>
           
        </tbody>
    </table>


        </div>

     </div>


    </div>

    </>
  )
}

export default Appliedjobs
