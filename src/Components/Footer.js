import React from 'react'
import '../Styling/footer.css'
import logos from '../Images/spotter logo.png'



const Footer = () => {
  return (
  <>
    <div className="subscribe">
        <div className="sub-div">
        <div className="sub-text">
        <h2>Subsribe for everyday job newsletter</h2>
        </div>

        <div className="sub">
        <input placeholder='Enter you email' type="text" />
        <button>Subscribe Now</button>
        </div>
       
        </div>
    </div>

      <div className="footer">
        <div className="all">
            
    <div className="footer-div">

<div className="inner-text">
<img style={{width : 150, marginBottom : '30px'}} src={logos} className="logo" alt="logo" />
<p> Spot the right job, spot the right person to do your job.</p>


    </div>

    <div className="inner-text">

        <h1>Company</h1>
        <p>About Us</p>
        <p>Why Spotter</p>
        <p>Contact With Us</p>
        <p>Our Partners</p>
    </div>

    <div className="inner-text">
        <h1>Resources</h1>
        <p>Quick Links</p>
        <p>Job Packages</p>
        <p>Post New Job</p>
        <p>Jobs Listing</p>

    </div>


    <div className="inner-text">
        <h1>Legal</h1>
        <p>Affiliate</p>
        <p>Blog</p>
        <p>Help & Support</p>
        <p>Careers</p>
    </div>

    <div className="inner-text">
        <h1>Products</h1>
        <p>Star a Trial</p>
        <p>How It Works</p>
        <p>Features</p>
        <p>Price & Planing</p>
    </div>

    
</div>
<hr />
<p style={{display: 'flex', justifyContent : 'center', textAlign: 'center', marginBottom: '60px'}}>© 2022 Finate. Made with  by Codecarnival.</p>
        </div>

        <div className="all2">

        <div class="accordion accordion-flush " id="accordionFlushExample">
  <div style={{width : '100%'}} class="accordion-item mt-4">
    <h2 class="accordion-header">
      <button  style={{backgroundColor : 'rgb(51,54,64)', color : 'white'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Company
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div  style={{backgroundColor : 'rgb(51,54,64)', color : 'white'}} class="accordion-body"><p>About Us</p>
        <p>Why Spotter</p>
        <p>Contact With Us</p>
        <p>Our Partners</p>
        </div>
    </div>
  </div>
  <div class="accordion-item mt-4">
    <h2 class="accordion-header">
      <button  style={{backgroundColor : 'rgb(51,54,64)', color : 'white'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Resources

      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div  style={{backgroundColor : 'rgb(51,54,64)', color : 'white'}} class="accordion-body">
      <p>Quick Links</p>
        <p>Job Packages</p>
        <p>Post New Job</p>
        <p>Jobs Listing</p>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-4">
    <h2 class="accordion-header">
      <button  style={{backgroundColor : 'rgb(51,54,64)', color : 'white'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Legal

      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div  style={{backgroundColor : 'rgb(51,54,64)', color : 'white'}} class="accordion-body">
      <p>Affiliate</p>
        <p>Blog</p>
        <p>Help & Support</p>
        <p>Careers</p>
      </div>
    </div>
  </div>

  <div class="accordion-item mt-4">
    <h2 class="accordion-header bg-dark">
      <button  style={{backgroundColor : 'rgb(51,54,64)', color : 'white'}} class="accordion-button collapsed coco" id='coco' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Products

      </button>
    </h2>
    <div style={{backgroundColor : 'rgb(51,54,64)'}} id="flush-collapseFour" class="accordion-collapse collapse text-white" data-bs-parent="#accordionFlushExample">
      <div  style={{backgroundColor : 'rgb(51,54,64)', color : 'white'}} class="accordion-body text-light  style={{backgroundColor : 'rgb(51,54,64)'}} ">
      <p>Star a Trial</p>
        <p>How It Works</p>
        <p>Features</p>
        <p>Price & Planing</p>
      </div>
    </div>
  </div>
</div>

<hr />
<p style={{display: 'flex', justifyContent : 'center', marginBottom: '60px'}}>© 2022 Finate. Made with  by Codecarnival.</p>
        </div>

</div>
  </>
  )
}

export default Footer