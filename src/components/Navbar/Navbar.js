import React from 'react'
import './Navbar.scss'
import logo from '../assets/images/moon.png'
import {Link} from 'react-router-dom'

function Navbar() {

  return (
    <div>
        <nav>
          <h1 class="logo">S.GT.</h1>
          <ul>
            <li><Link to="/">Service</Link></li>
            <li><Link to="/projects">Works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <img src={logo} id="icon" alt='' />
        </nav>
    </div>
  )
}

export default Navbar