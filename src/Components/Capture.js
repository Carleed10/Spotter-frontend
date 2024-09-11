import React, { useRef, useEffect, useState } from 'react';
import '../Styling/capture.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Capture = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [pageLoad, setpageLoad] = useState(true)

  const token = localStorage.getItem('genToken')
  const navigate = useNavigate()

  
    useEffect(() => {
      const getVideo = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
        } catch (err) {
          console.error("Error accessing webcam:", err);
        }
      };
  
      getVideo();
    }, [videoRef]);

    
  
    const capturePhoto = () => {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, 250, 200);
      const imageUrl = canvasRef.current.toDataURL('image/png');
      setCapturedImage(imageUrl);

      if (!imageUrl) {
            console.log('Unable to capture face');
      } else {
        axios.post('http://localhost:5002/api/user/postImage', {imageUrl}, {headers : {
            'Authorization' : `Bearer ${token}`,
            "content-type" : "application/json"}})
          .then((res) => {
            console.log(res);
            console.log('Update succesfull');

            setTimeout(() => {
              setpageLoad(false)
            }, 2000);

          }).catch((err)=>{
            console.log(err);
          })
      }
    };


    
    // if (pageLoad) {
    //   return  <div style={{background: 'none', height: '100vh'}} className='spinner'>
    //   <div class="loader"></div>
    // </div>
       
    // }
  
    return (
      <div className="webcam-container">
        <video ref={videoRef} autoPlay className="full-screen-video"></video>
        <button className="capture-button" onClick={capturePhoto}>Capture</button>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        {capturedImage && (
          <div className="captured-image-container">
            <h2>Captured Image</h2>
            <img src={capturedImage} alt="Captured" className="captured-image" />
          </div>
        )}
      </div>
    );
};

export default Capture;
