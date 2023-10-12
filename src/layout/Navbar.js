import React from 'react'
import "../utilities/Navbar.css";
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <div id='header'>
      <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
  <img class="navbar-brand" src={process.env.PUBLIC_URL+"./main-logo.svg"} alt="My-Pic" width="10%" />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    
      <li class="nav-item dropdown">
        <a class="nav-link " to="#"  data-toggle="dropdown" aria-expanded="false">
        WHAT'S WE OFFER <i className='fa fa-plus'></i>
        </a>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="/Website-Development-services">Web Development</Link>
          <Link class="dropdown-item" to="#">E-Commerce Development</Link>
          <Link class="dropdown-item" to="#">Mobile App Development</Link>
          <Link class="dropdown-item" to="#">UI/UX Desgin</Link>
          <Link class="dropdown-item" to="#">Staff Augmenation</Link>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link " to="#"  data-toggle="dropdown" aria-expanded="false">
        COMPANY <i className='fa fa-plus'></i>
        </a>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="/About-Us">About Us</Link>
          <Link class="dropdown-item" to="/Process">Process</Link>
        </div>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="/Services">SERVICES </Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="/Carrier">CARRIER </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Contact-Us">CONTACT US</Link>
      </li>
    </ul>
  
      <button class="btn " type="submit">GET IN TOUCH</button>

  </div>
</nav>
</div>
      </div>
    </>
  )
}
