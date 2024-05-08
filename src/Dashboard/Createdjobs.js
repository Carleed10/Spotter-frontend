import React from 'react'
import '../Dashboard style/createdjobs.css'
import { Icon } from '@iconify/react/dist/iconify.js'

export const Createdjobs = () => {
  return (
    <>
        <div className="createdjobs-div">
      
      <div className="percent">
        <h2 style={{fontWeight : '700'}}>POSTED JOBS</h2>

        <p>You have posted <span style={{color : 'green', fontWeight : '700'}}>26</span> jobs</p>
        
        <div className="createdjobs-table">

        <table>
            
        <thead>
            <tr>
                <th style={{width : '30%'}} >Job Title</th>
                <th>Job Type</th>
                <th>Posted Date</th>
                <th>Needed</th>
                <th>Applied</th>

                <th>Action</th>


            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Fullstack Developer</td>
                <td>Full time</td>
                <td>4th May, 2024</td>
                <td>1</td>
                <td>0</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr>

            <tr>
                <td>Fullstack Developer</td>
                <td>Part time</td>
                <td>4th May, 2024</td>
                <td>15</td>
                <td>12</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr><tr>
                <td>Fullstack Developer</td>
                <td>Part time</td>
                <td>4th May, 2024</td>
                <td>10</td>
                <td>6</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr><tr>
                <td>Fullstack Developer</td>
                <td>Internship</td>
                <td>4th May, 2024</td>
                <td>9</td>
                <td>6</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr><tr>
                <td>Fullstack Developer</td>
                <td>Full time</td>
                <td>4th May, 2024</td>
                <td>4</td>
                <td>1</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr><tr>
                <td>Fullstack Developer</td>
                <td>Internship</td>
                <td>4th May, 2024</td>
                <td>3</td>
                <td>2</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr><tr>
                <td>Fullstack Developer</td>
                <td>Part time</td>
                <td>4th May, 2024</td>
                <td>5</td>
                <td>3</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr>
            <tr>
                <td>Fullstack Developer</td>
                <td>Full time</td>
                <td>4th May, 2024</td>
                <td>10</td>
                <td>6</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr><tr>
                <td>Fullstack Developer</td>
                <td>Full time</td>
                <td>4th May, 2024</td>
                <td>8</td>
                <td>1</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="20" height="20"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="20" height="20" />
                    </button>
                </td>


            </tr><tr>
                <td>Fullstack Developer</td>
                <td>Full time</td>
                <td>4th May, 2024</td>
                <td>4</td>
                <td>2</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr><tr>
                <td>Fullstack Developer</td>
                <td>Full time</td>
                <td>4th May, 2024</td>
                <td>10</td>
                <td>6</td>
                <td>
                <button style={{backgroundColor : 'green'}}>
                    <Icon className='mar' icon="lucide:edit" width="30" height="30"/>
                    </button>
                    <button  style={{marginLeft : '10px', backgroundColor : 'red'}}>
                    <Icon className='mar' icon="fluent:delete-16-filled" width="30" height="30" />
                    </button>
                </td>


            </tr>
      
           
        </tbody>
    </table>


        </div>

     </div>


    </div>
    </>
  )
}

