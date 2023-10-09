import React from 'react'
import "../utilities/Footer.css";
export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
            <div className="row ">
                <div id='first' className="col-md-4 ">
                    <img src={process.env.PUBLIC_URL+"./main-dp-dark-bg.svg"} alt="My-Pic" width="40%" />
                    <hr className='hr' />
                    <p>We are an experienced team equipped with the latest tools, delivering web, software, mobile apps, and digital solutions. </p>
                </div>
                <div className='offset-md-1 col-md-3'>
                    <h2>Explore</h2>
                    <ul className='navbar-nav mt-4'>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>About</li>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>Services</li>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>Portfolio</li>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>Process</li>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>Join Us</li>
                    </ul>
                </div>
                <div id='findus' className="col-md-4">
                    <h2>Find us</h2>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><i className='fa fa-map-marker'></i>78 Bell St, London NW1 6SP, UK</li>
                        <li className='nav-item'><i className='fa fa-comment'></i>info@innvosol.com</li>
                        <li className='nav-item'><i className='fa fa-phone'></i>+923094758783</li>
                    </ul>
                     
                     <form action="">
                        <div className="row">
                            <div className="col-8"><input type="email" placeholder='Your Email Address' className='form-control' /></div>
                            <div className='col-2'> <button className='btn btn-primary'>Subscribe</button></div>
                        </div>
                     </form>

                </div>

            </div>
        </div>
      </div>
      <div id='below'>
    <div className="container">
    <footer>Copyright © 2023 design. All rights reserved.</footer>
    </div></div>

    </>
  )
}
