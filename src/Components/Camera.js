import React, { useRef, useEffect, useState } from 'react';
import '../Styling/capture.css'

const Camera = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
  
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
      context.drawImage(videoRef.current, 0, 0, 210, 150);
      const image = canvasRef.current.toDataURL('image/png');
      setCapturedImage(image);
    };
  
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

export default Camera;
