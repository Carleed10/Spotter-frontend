import React from 'react'
import "../Styling/modal.css"
import { useState } from 'react'

const Modal = ({closeModal}) => {
//   const [modal, setmodal] = useState(false)


  
  return (
    <>
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>This is a modal.</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
    
    </>
  )
}

export default Modal