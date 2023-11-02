import React from 'react'
import './home.css'
import img from "../../images/home.png"
import img1 from "../../images/lock.png"

function WebHome() {
  return (
    <div className='home'>
      <img id="i" src={img} alt='' />
      <h1 >Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
      <div className="terms">
        <img src={img1} alt='' />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
}

export default WebHome