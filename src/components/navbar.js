import React from 'react'
import { Link } from 'react-router-dom'



export const NAVBAR = () => {
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <div className="logo-section">
            
            <img src="../logo2.png" alt="logo" />
            <h1>mangaka</h1>
           
        </div>
      </Link>
        <div className="login-explore-section">
            <span className="login">LOG IN</span>
            <Link to={'/explore'}><span className="explore">EXPLORE</span></Link>
        </div>
    </div>
  )
}
