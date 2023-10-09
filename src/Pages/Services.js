import React from 'react'
import "../utilities/Services.css";
import ServicesCards from '../Components/ServicesCards';
import Footer from "../layout/Footer"
export default function Services() {
  return (
    <>
       {/* Services section start here */}
       <section id="Services">
        <div className="container">
          <div className="row">
            <div className="col-12"><h1 id='main-heading'>Services</h1><h2>Our Services</h2></div>
            <div className="col-12"><p className='para'>We are committed to our vision of providing high-level service and value to clients through enhanced services that include diligence.</p></div>
           <div className="col-12">
           <div className="row ">
              <div className="col-lg-4 col-md-6">
                <ServicesCards img="fa fa-desktop" title="Web Design & Development" para="We’ve reached significant milestones in providing the best web development services." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServicesCards img="fa fa-mobile" title="Mobile App Development" para="Need a mobile app developed? We develop mobile apps for IOS and Android Operating System." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServicesCards img="fa fa-gift" title="E-Commerce" para="We are thought leaders in creating rewarding through responsive web design and emerging UX technologies." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServicesCards img="fa fa-paint-brush" title="Brand Strategy & UI/UX" para="We have skilled graphic designers who can portray and develop your ideas perfectly." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServicesCards img="fa fa-users" title="Staff Augmentation" para="Hiring a skilled developer at a reasonable price takes months, not weeks." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServicesCards img="fa fa-cloud-upload" title="Cloud Application Development" para="To build cloud apps, use affordable and popular cloud tools that offer flexibility, security, and reliability." />
              </div>
                </div>
              
                  </div>
                    </div>
                      </div>
                        </section>
                        <section id="conversation">
                          <div className="container-fluid">
                            <div className="row">
                 <div className="col-12" id='conversation'>
                 <h1>Let’s Start A Conversation.</h1>
                 <button className='btn'>Schedule A Free Consultation</button>
                 </div>
                  </div>
                 </div>  
                        </section>
                        <section id="tech">
                          <div className="container">
                            <div className="row">
                              <div className="col-12">
                                <h1>Our Tech Stack for Software Solutions.</h1>
                                <p>We are a skilled and experienced software development agency with extensive knowledge of the latest technologies, languages, and frameworks. Our expert developers can create innovative solutions for web, mobile, and desktop applications that exceed expectations and are fully customized to meet your business needs. Choose us for top-notch quality software and let us bring your vision to life with our expertise and experience.</p>
                                <div className="row">
                                  <div className="box">PHP</div>
                                  <div className="box">Java</div>
                                  <div className="box">IOS</div>
                                  <div className="box">React Native</div>
                                  <div className="box">MEAN</div>
                                  <div className="box">Laravel</div>
                                  <div className="box">WordPress</div>
                                  <div className="box">Shopify</div>
                                  <div className="box">WoCommerce</div>
                                  <div className="box">Vue.JS</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <Footer/>
                      
                        

    </>
  )
}
