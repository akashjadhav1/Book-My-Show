import React from 'react'
import {NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <div className=''>
    <nav className="navbar navbar-light px-5 bg-light justify-content-between fixed-top">
  <NavLink to="/" className="navbar-brand fw-bold"><img src="/images/bookMyShow logo.png" alt="Logo" style={{height:35,width:100}}/></NavLink>

  <NavLink className="text-decoration-none text-dark fw-bold" to="/bookings">My Shows</NavLink>
  
</nav>
    </div>
  )
}

export default Navbar
