import React from 'react'
import "../utilities/Contact.css";
import ContactCards from '../Components/ContactCards';
import DiscussCard from '../Components/DiscussCard';
import Footer from "../layout/Footer"
export default function Contact() {
  return (
    <>

      <section id="Contacts">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Contact Us For Quality Business Support.</h1>
              <p className='para'>Do you want to talk about your project with us? We have flexible and skilled team members who can work on your projects and are always available to assist you.</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <ContactCards icon="fa fa-comments" title="Chat With Us" para="We have Social Experts available to help you from Monday to Friday in real-time." btn="Chat With Us" />
              </div>
              <div className="col-lg-4 col-md-6">
                <ContactCards icon="fa fa-envelope-o" title="Email Us" para="Just send us an email at info@innvosol.com and we'll get back to you in less than a day." btn="Email Us" />
              </div>
              <div className="col-lg-4 col-md-6">
                <ContactCards icon="fa fa-phone" title="Give us a Call" para="Call us. Our knowledgeable staff is available Monday through Friday." btn="+923094758783" />
              </div>
            </div>
          </div>
        </div>

        <div id="hire">
       <DiscussCard title="You can hire an InnovSol employee quickly." para="Get access to the best tech talent worldwide! Say goodbye to the tiresome hiring process and welcome expert developers, designers, and engineers to make your tech experience even better. Hire now to unlock the full potential of your projects." btn="Hire A Pro Innvosol" />  
    </div>
        </section> 
        <div id="Form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img src={process.env.PUBLIC_URL+"./contact-us.webp"} alt="My-Pic" />
              </div>
              <div className="col-md-6">
                <form className='shadow' action="">
                  <h2>Let's talk about your project and make your ideas come true!</h2>
                  <p>Fill out the info below and we’ll contact you to talk about your project needs.</p>
                  <div className="row">
                    <div className="col-md-6"><input className='form-control' type="text" placeholder='First Name*' /></div>
                    <div className="col-md-6"><input className='form-control' type="text" placeholder='Last Name*' /></div>
                  </div>
                  <input type="email" placeholder='Email Address*' className='form-control' />
                  <select name="" id="" className='form-control'>
                    <option value="">Select the Service you Need*</option>
                    <option value="">Web Development</option>
                    <option value="">E-Commerce Development</option>
                    <option value="">Mobile App Development</option>
                    <option value="">SaaS Development</option>
                    <option value="">UI/UX Design</option>
                    <option value="">Custom Solution</option>
                  </select>
                  <textarea placeholder='Please tell us what assistance you require for your Project and explain the issue we are addressing.' className='form-control' name="" id="" cols="30" rows="5"></textarea>
                  <div className="row checkbox">
                   <div className="col-1"><input type="checkbox" /></div>
                   <div className="col-11"><p className='accept'>I have read and agree to the <span>Terms and Conditions</span> and <span>Privacy Policy.</span> </p>
                  </div>
                   </div>    
                    <button className='btn'>Submit Query</button>
                   </form>
              </div>
            </div>
          </div>
        </div>

        <div id="looking-job">
          <div className="container">
            <h1>Looking for a Job</h1>
            <a href="/Carrier"><button className='btn'>Apply Now</button></a>
          </div>
        </div>

        <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464675032335!2d-0.12209412427053895!3d51.503189711011956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2s!4v1696865893216!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Footer/>
    </>
  )
}
