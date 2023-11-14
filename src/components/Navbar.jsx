import React from 'react'
import {NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <div className=''>
    <nav class="navbar navbar-light px-5 bg-light justify-content-between">
  <NavLink to="/" className="navbar-brand fw-bold">Book My Show</NavLink>

  <NavLink className="text-decoration-none text-dark fw-bold" to="/bookings">My Shows</NavLink>
  
</nav>
    </div>
  )
}

export default Navbar
