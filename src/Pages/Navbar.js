import React from 'react'
import "../utilities/Navbar.css";
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
        <a class="nav-link " href="#"  data-toggle="dropdown" aria-expanded="false">
        WHAT'S WE OFFER <i className='fa fa-plus'></i>
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Web Development</a>
          <a class="dropdown-item" href="#">E-Commerce Development</a>
          <a class="dropdown-item" href="#">Mobile App Development</a>
          <a class="dropdown-item" href="#">UI/UX Desgin</a>
          <a class="dropdown-item" href="#">Staff Augmenation</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link " href="#"  data-toggle="dropdown" aria-expanded="false">
        COMPANY <i className='fa fa-plus'></i>
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">About Us</a>
          <a class="dropdown-item" href="#">Process</a>
        </div>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">CARRIER </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT US</a>
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
