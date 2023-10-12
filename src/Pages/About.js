import React from 'react';
import "../utilities/About.css";
import Footer from '../layout/Footer';
import ContactCards from "../Components/ContactCards"
export default function About() {
  return (
    <>
       <section id="About">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block  w-100" src={process.env.PUBLIC_URL+"./About-1.webp"}alt="First slide" width="100%"/>
    </div>
    <div class="carousel-item">
    <img class="d-block  w-100" src={process.env.PUBLIC_URL+"./About-2.webp"}alt="Second slide" width="100%"/>
    </div>
    <div class="carousel-item">
    <img class="d-block  w-100" src={process.env.PUBLIC_URL+"./About-1.webp"}alt="third slide" width="100%"/>
    </div>
    <div class="carousel-item">
    <img class="d-block  w-100" src={process.env.PUBLIC_URL+"./About-2.webp"}alt="Fourth slide" width="100%"/>
    </div>
   
  </div>
</div>
                </div>
          


            </div>
        </div>
       </section>

       <section id="about-text">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <h1 className='h1-about'>Grow your business faster with our help.</h1>
              <p className='para'>Your business needs good technology to succeed. We have the skills and knowledge to make it happen. You know what you want to achieve, and we’ll make it possible by creating your software project with a team of amazing engineers and innovators. You don’t have to worry about the technical details, we’ll handle it so that you can concentrate on managing your business.</p>
              <button className='btn-about'>JOIN OUR TEAM</button>
            </div>
            <div className="col-12">
              <h2 className='wanna'>Wanna see what we offer and happy customers?</h2>
            </div>
            
          </div>
            <div id="mission">
              <div className="row">
                <div className="col-md-6"><img src={process.env.PUBLIC_URL+"./about-mission.webp"} alt="My-Pic" width="100%" /></div>
                 <div className="col-md-6">
                  <h1>Our Mission</h1>
                  <p>Our mission isn’t simply to satisfy our purchasers by sourcing force for them but to be at the forefront of the enlisting and force provide trade adhering to international standards with stress on speed and potency. we wish to be a pictogram of triumph with the commitment to keep up the best moral standards and additionally to:

Provide very advisory and worth additional service that enables our purchasers to attain their strategic staffing desires and support our candidates in meeting their career goals Expand existing locations each domestic and overseas by being the most important, most famous, and sure OEP & Recruiters</p>
                 </div>
            </div>
          </div>
            <div id="vision">
              <div className="row">
                <div className="col-md-6">
                  <h1>OUR VISION</h1>
                  <p>To become one in every of the foremost sure and credible resources within the world by providing the best on the market, qualified, skilled and experienced men to our purchasers To run a best OEP enterprise that will set recent trends and still determine new standards for best practices working promotion & recruiting trade by extraordinary client’s expectations To provide world-rated services and outstanding prices for cash, backed by our experienced employees and our high-technology infrastructure capability

Provide very advisory and worth additional service that enables our purchasers to attain their strategic staffing desires and support our candidates in meeting their career goals Expand existing locations each domestic and overseas by being the most important, most famous, and sure OEP & Recruiters</p>
                 </div>
                 <div className="col-md-6"><img src={process.env.PUBLIC_URL+"./about-vision.webp"} alt="My-Pic" width="100%" /></div>
                
            </div>
          </div>
          
           <div id="about-contact">
         
            <div className="row">
             <div className="col-12">
             <h1>Contact Us For Quality Business Support.</h1>
              <p className='about-contact-para'>Do you want to talk about your project with us? We have flexible and skilled team members who can work on your projects and are always available to assist you.</p>
              
             </div>
             <div className="col-12">
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
         
         </div>

        </div> 
         
        
        <Footer/>
       </section>
      
    </>
  )
}
