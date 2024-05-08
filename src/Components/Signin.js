// import React from 'react'
import '../Styling/signin.css'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Signin = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
  
      <Button onClick={() => setModal2Open(true)}>
       Signin
      </Button>
      <Modal
        // title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        // onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
       
             <div className="signin">
                 <div className="form">
                     <header>Sign In</header>
                     <hr/>

                     <input placeholder='Email' type='email' />
                     <input placeholder='Password' type="password" />

                 <div className="check">
                 <div className="box">
                 <input type="checkbox" name="" id="" />
                 <p>Remember me</p>
                 </div>
                 <p style={{color: 'rgb(3,168,78)'}}>Forgot Password?</p>
                 </div>


                 <button>Sign in</button>
                 <p style={{marginTop: '15px', display : 'flex', justifyContent : 'center'}}>Don't you have an account? <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Register</span></p>
                 </div>
          </div>
      </Modal>
    </>
  );
};
export default Signin;


// import React from 'react'
// import '../Styling/signin.css'
// import '../Components/Footer'
// import Footer from '../Components/Footer'
// import Navbar from '../Components/Navbar'

    
//     const Signin = () => {
//       return (
//         <>
//             {/* <Navbar/>         */}









//             <div className="signin">
//                 <div className="form">
//                     <header>Sign In</header>
//                     <hr/>

//                     <input placeholder='Email' type='email' />
//                     <input placeholder='Password' type="password" />

//                 <div className="check">
//                 <div className="box">
//                 <input type="checkbox" name="" id="" />
//                 <p>Remember me</p>
//                 </div>
//                 <p style={{color: 'rgb(3,168,78)'}}>Forgot Password?</p>
//                 </div>


//                 <button>Sign in</button>
//                 <p style={{marginTop: '15px', display : 'flex', justifyContent : 'center'}}>Don't you have an account? <span style={{color: 'rgb(3,168,78)', marginLeft : '10px'}}>Register</span></p>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//       )
//     }
    
//     export default Signin