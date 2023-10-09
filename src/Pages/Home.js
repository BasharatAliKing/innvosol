import React from 'react'
import "../utilities/Home.css";
import ServicesCards from '../Components/ServicesCards';
import DiscussCard from '../Components/DiscussCard';
import ImproveCard from '../Components/ImproveCard';
import ModalEngagement from '../Components/ModalEngagement';
import Footer from '../layout/Footer';
import "../utilities/HomeResponcive.css";
export default function Home() {
  return (
    <>
      {/* Home Section start here */}
      <div id="home">
        <div className="container">
         <div className="row">
          <div className="col-12 text-center"> <h1 className='home-h1'><span>Digital Marketing</span> Agency that <br /> Delivers Success</h1></div>
           <div className=" offset-lg-2 col-lg-10">
            <p className='home-para'>We are an experienced team equipped with the latest tools, delivering web, software, mobile apps, and digital solutions. We prioritize communication to ensure timely project completion and exceed expectations. Choose us as your partner for personalized service that will help your business grow.</p>
          
             <div className="offset-md-2 col-md-6">
                 <div className="row">
                 <div className="col-md-6"><button className='btn touch btn-primary'>Get in touch</button></div>
              <div className="col-md-6"><button className='btn portfolio'>View our Portfolio</button></div>
             </div>
             </div>
           </div>
         </div>
        </div>
         {/* Services section start here */}
      <div id="services">
        <div className="container">
          <div className="row">
            <div className="col-12"><h1>Our Services</h1></div>
            <div className="col-12"><p>We are committed to our vision of providing high-level service and value to clients through enhanced services that include diligence.</p></div>
           <div className="col-12">
           <div className="row">

      
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
      </div>

      {/* discussing a project section */}
      <div id="discussing">
       <DiscussCard title="Discussing a Project?" para="We’re happy to help you. Send us a message for a free online meeting with the top software development company in the USA, and we’ll make a customized plan for your project." btn="Let's Talk" />
      </div>
     {/* business grow section start Here */}
     <div id="business-grow">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>We Can Help Different Types Of <span>Businesses Grow.</span></h1>
            <p>We create useful software for different businesses that can help them work better. Our software solutions are innovative and groundbreaking.</p>
            <div className="col-12">
              <div className="row">
                <div className="col-md-6">
                  <ul className='navbar-nav'>
                    <li className='nav-item'><i className='fa fa-check'></i>Custom Software Development </li>
                    <li className='nav-item'><i className='fa fa-check'></i>E-commerce Solutions </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Oil & Gas Solutions </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Point of Sale Solutions </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Shipping & Logistics </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Enterprise Resource Planning </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Real Estate & Housing IT Solutions </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className='navbar-nav'>
                    <li className='nav-item'><i className='fa fa-check'></i>Custom Software Development </li>
                    <li className='nav-item'><i className='fa fa-check'></i>E-commerce Solutions </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Oil & Gas Solutions </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Point of Sale Solutions </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Shipping & Logistics </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Enterprise Resource Planning </li>
                    <li className='nav-item'><i className='fa fa-check'></i>Real Estate & Housing IT Solutions </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id='pic' className="col-lg-6 ">
            <img className='upper-one' src={process.env.PUBLIC_URL+"./main-logo.svg"} alt="My-Pic" width="22%" />
             <img className='main-img' src={process.env.PUBLIC_URL+"./Busines-Growth.webp"} alt="My-Pic" width="100%" />
            <img className='upper-two' src={process.env.PUBLIC_URL+"./wifi-signal.svg"} alt="my-pic" width="15%" />
          </div>
        </div>
      </div>
     </div>


     {/* Improve section start here */}
     <div id="improve">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>We help you strengthen and improve your abilities.</h1>
          </div>
          <div className="col-12 mt-5">
            <div className="row">
              <div className="col-md-5" id='first'>
                <h3>Custom Software Development</h3>
                <p>We solve software problems by making customized solutions that work well and can be trusted. We also create new and different solutions.</p>
                <h3>Included with...</h3>
                <ul className='navbar-nav'>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Competitive Edge </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Customized Resolutions </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Timely Dispatch </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Improved Effectiveness </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Client Protection </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Sustainability and Confidentiality </li>
                </ul>
              </div>
              <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6"> <ImproveCard title="CMS Development" para="We’ll make the customer experience better by using dependable business software." /></div>
                    <div className="col-md-6"> <ImproveCard title="Module Development" para="“Easy-to-use solutions that give better outcomes.”" /></div>
                    <div className="col-md-6 mt-4"> <ImproveCard title="API Integrations" para="Make tasks easier and improve how users interact with technology using automation." /></div>
                    <div className="col-md-6 mt-4"> <ImproveCard title="Support & Maintenence" para="We design software and offer maintenance services without any interruptions." /></div>
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    
    {/* Core Strength section start here */}
    <div id="core">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1>Our Core Strengths</h1>
          <p>We are a skilled and experienced software development agency with extensive knowledge of the latest technologies, languages, and frameworks. Our expert developers can create innovative solutions for web, mobile, and desktop applications that exceed expectations and are fully customized to meet your business needs. Choose us for top-notch quality software and let us bring your vision to life with our expertise and experience.</p></div>
          <div >
           <div id='item-section'>
           <div id="item">Web Development</div>
            <div id="item">Mobile App Development</div>
            <div id="item">Custom Software Development</div>
            <div id="item">BlockChain 3.0</div>
            <div id="item">UI/UX Design</div>
            <div id="item">DevOps</div>
            <div id="item">Digital Marketing</div>
            <div id="item">WordPress</div>
            <div id="item">Shopify</div>
            <div id="item">WoCommerce</div>
            <div id="item">Vue.JS</div>
            <div id="item">Quality Assurance</div>
            <div id="item">Business Development</div>
            <div id="item">Support and Maintenence</div>
           </div>
          </div>
        </div>
      </div>
    </div>


    <div id="hire">
       <DiscussCard title="You can hire an InnovSol employee quickly." para="Get access to the best tech talent worldwide! Say goodbye to the tiresome hiring process and welcome expert developers, designers, and engineers to make your tech experience even better. Hire now to unlock the full potential of your projects." btn="Hire A Pro Innvosol" />  
    </div>

    
    {/* Customer line section start here */}
    <div id="customer-says">
      <div className="container">
        <div className="row">
        <div className="col-12">
        <h1>What our customer says about us</h1>
          <p>Testimonials from Satisfied Clients: Hear What They Have to Say About Our Services!</p>
        </div>
        </div>
      </div>
    </div>

    
    {/* Engagement models section start here */}
    <div id="engagement">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img className='upper-one' src={process.env.PUBLIC_URL+"./main-logo.svg"} alt="My-Pic" width="22%" />
            <img className='main' src={process.env.PUBLIC_URL+"./engagement.webp"} alt="My-Pic" width="100%" />
            <img className='upper-two' src={process.env.PUBLIC_URL+"./wifi-signal.svg"} alt="my-pic" width="15%" />
          </div>
          <div className="col-md-6 b">
            <h1>Engagement Models</h1>
            <p>We solve your biggest business pains and help you succeed.Here is how we can work together</p>
            <ModalEngagement  icon="fa fa-users" title="Staff/Resource Augmentation" para="Our approach to staff augmentation aims to assist organizations in securing the necessary expertise for their projects." />
            <ModalEngagement  icon="fa fa-product-hunt" title="Produce Development" para="Our project-based model ensures end-to-end product development, led by a team of expert software engineering consultants." />
            <ModalEngagement  icon="fa fa-lightbulb-o" title="Dadicated Development Team" para="Highly skilled developers delivering top-notch development services with a focus on quality." />
          </div>
        </div>
      </div>
    </div>

    {/* Quick Support Section Start Here */}

     <div id="quick-support">
      <div className="container">
       <div className="row">
       <div className="col-lg-6">
          <h3>Quick Support</h3>
          <h1>Get in Touch Today!</h1>
          <p>We provide scalable services that prioritize transparency, honesty, and building trust with our clients. Our solutions empower you to make informed decisions and achieve your business goals.</p>
          <ul className='navbar-nav'>
            <li className='nav-item'><i className='fa fa-phone'></i> +923094758983 </li>
            <li className='nav-item'><i className='fa fa-comment mr-1'></i> Email Now! </li>
            <li className='nav-item'><i className='fa fa-map-marker mr-3'></i> Locations </li>
          </ul>
        </div>
        <div id='for' className="offset-lg-1 col-lg-5">
          <form className='shadow p-4 ' >
            <h2>Fill out the form and we'll be in touch ASAP.</h2>
            <div className="row mt-3">
              <div className="col-md-6"><input type="text" className='form-control' placeholder='First Name' /></div>
              <div className="col-md-6"><input type="text" className='form-control' placeholder='Last Name' /></div>
            </div>
            <input type="email" placeholder='Email Address' className='form-control mt-4' />
            <input type="phone" placeholder='Mobile Number' max="12" className='form-control mt-4' />
            <textarea className='form-control mt-4' name="" id="" cols="20" placeholder='Tell us more about your projects?' rows="5"></textarea>
            <button className='btn form-control mt-4'>Submit Form</button>
          </form>
        </div>
       </div>
      </div>
     </div>


     {/* footer section start here */}
     <Footer/>

      </div>

     
    </>
  )
}
