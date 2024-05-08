import React from 'react'
import '../Landing Page Style/Component4.css'
import { Icon } from '@iconify/react'


const Component4 = () => {
  return (
    <>
        <div className="how-div">
            <div className="job-div">
            <div className="how">

                <h1>How it Works ?</h1>
           <div className="how2">
            
            <div className="out-acc">
            <div className="acc">
                <div className="in-acc">
                    {/* <Icon icon="ic:sharp-switch-account" width="60" height="60" /> */}
                    <Icon className='icon'  icon="mdi:account" />
            </div>
            </div>

            <p>Create an account</p>

            </div>

            <Icon className='icon2' style={{color: 'green'}} icon="ph:arrow-right" />
            <Icon className='icon3' style={{color: 'green'}} icon="solar:arrow-down-linear" />



            <div className="out-acc">

            <div className="acc">
                <div className="in-acc">
                    {/* <Icon icon="ic:sharp-switch-account" width="60" height="60" /> */}
                <Icon className='icon'  icon="basil:document-solid"/>

            </div>
            </div>
            <p>CV / Resume</p>

            </div>
            <Icon className='icon2' style={{color: 'green'}} icon="ph:arrow-right" />
            <Icon className='icon3' style={{color: 'green'}} icon="solar:arrow-down-linear" />




            <div className="out-acc">
            <div className="acc">
                <div className="in-acc">
                    {/* <Icon icon="ic:sharp-switch-account" width="60" height="60" /> */}
            <Icon className='icon'  icon="ep:search" />


            </div>
            </div>
            <p>Find your job</p>

            </div>
            <Icon  className='icon2' style={{color: 'green'}} icon="ph:arrow-right" />
            <Icon className='icon3' style={{color: 'green'}} icon="solar:arrow-down-linear" />






            <div className="out-acc">
            <div className="acc">
                <div className="in-acc">
                    <Icon className='icon'  icon="bxs:paper-plane" />
            </div>
            </div>
            <p>Save and apply</p>

            </div>





        </div>
           </div>
            </div>
        </div>
    </>
  )
}

export default Component4