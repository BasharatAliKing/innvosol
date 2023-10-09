import React from 'react'
import "../utilities/Carrier.css";
import Footer from '../layout/Footer';
export default function Carrier() {
  return (
    <>
      <section id="Carrier">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Careers at <span>InnvoSol</span></h1>
            <p>Take a chance on a great opportunity that can change your life! Join us and be part of our next success story!</p>
            <div className="col-12">
              <div className="row">
               <div className="col-lg-4"> <button className='btn open-position'>OPEN POSITIONS</button></div>
               <div className="col-lg-6"> <button className='btn fresh-open'>FRESH GRADUATE HIRING</button></div>
              </div>
            </div>
            </div>
            <div className="col-md-6">
              <img src={process.env.PUBLIC_URL+"./Carrier-img.svg"} alt="My-Pic" />
            </div>
            
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
