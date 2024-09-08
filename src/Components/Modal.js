import React from 'react'
import { useState } from 'react'
import '../Styling/sidebar.css'



const Modal = () => {
  const [isLoading, setisLoading] = useState(false)


  const loader = ()=>{
    setisLoading(true)
    const timer = setTimeout(()=>{
      setisLoading(false)
      }, 3000)
  }

  return (
    <div>

      <button disabled={isLoading} onClick={loader}>{isLoading? <span class="loader"></span> : "Load"}</button>

    </div>
  )
}

export default Modal