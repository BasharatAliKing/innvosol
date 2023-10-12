import React from 'react'
import "../utilities/WebDevelopment.css";
import Form from '../Components/Form';
import WebMedia from '../Components/WebMedia';
export default function WebDevelopment() {
  return (
    <>
      <section id="web-development">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text">
                    <h1>Web App <span>Development <br /> Services</span> </h1>
                    <p>A great design comes with great user experience. Specifications for a system are microscopically viewed that meet your diversified.</p>
                   <ul className='navbar-nav'>
                    <li><i className='fa fa-check-square-o'></i>Customized Solutions</li>
                    <li><i className='fa fa-check-square-o'></i>End-to-End Services</li>
                    <li><i className='fa fa-check-square-o'></i>Cost-effective Plans</li>
                    <li><i className='fa fa-check-square-o'></i>CRM and third party API Intigration</li>
                    <li><i className='fa fa-check-square-o'></i>Free full-cycle quality assurance</li>
                    <li><i className='fa fa-check-square-o'></i>Daily collaborative meetings with product managers</li>
                   </ul>
                </div>
                <div className="col-md-6">
                  <Form heading="Lets discuss your project" para="Submit a request and we‘ll get in touch within 24 hours."/>
                </div>
            </div>
        </div>
      </section>
      <div id="get-started">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Get Started</h1>
              <p>To know how much your project might cost, follow these three simple steps.</p>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4"><WebMedia clsnm="a" img={process.env.PUBLIC_URL+"./process-icon.webp"} heading="Contact Us" para="Fill out the form." /></div>
                <div className="col-lg-4"><WebMedia clsnm="b" img={process.env.PUBLIC_URL+"./process-icon.webp"} heading="Contact Us" para="Fill out the form." /></div>
                <div className="col-lg-4"><WebMedia clsnm="c" img={process.env.PUBLIC_URL+"./process-icon.webp"} heading="Contact Us" para="Fill out the form." /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
