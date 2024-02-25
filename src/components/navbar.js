import React from 'react'



export const NAVBAR = () => {
  return (
    <div className='navbar'>
        <div className="logo-section">
            <img src="../logo2.png" alt="logo" />
            <h1>mangaka</h1>
        </div>
        <div className="login-explore-section">
            <span className="login">LOG IN</span>
            <span className="explore">EXPLORE</span>
        </div>
    </div>
  )
}
