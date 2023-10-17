import React from 'react'
import "../utilities/WebDevelopment.css";
import Form from '../Components/Form';
import WebMedia from '../Components/WebMedia';
import DiscussCard from "../Components/DiscussCard";
import WebAppCards from '../Components/WebAppCards';
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
                <div className="col-lg-4"><WebMedia clsnm="b" img={process.env.PUBLIC_URL+"./process-icon.webp"} heading="Free Consulting" para="Fill out the form." /></div>
                <div className="col-lg-4"><WebMedia clsnm="c" img={process.env.PUBLIC_URL+"./process-icon.webp"} heading="Get a Proposal" para="Fill out the form." /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="web-discuss">
      <DiscussCard title="Schedule A 7-Day Trial To Witness Our Quality Standards" para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit enim sit harum nobis ut ullam tempore saepe dignissimos suscipit consequatur!" btn="Discuss Your Project"/>
      </div>
      <div id="web-app">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Web App <span>Development Process.</span></h1>
              <p>Our Agile experts can create bespoke applications, platforms and products to meet the requirements of your business or new venture.</p>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 col-md-6"><WebAppCards title="Planning" para="Create a detailed plan for the project, outlining all necessary steps, goals, budget, technology, and timelines. This will help ensure project success and keep us on track." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Design" para="Create a detailed plan for the project, outlining all necessary steps, goals, budget, technology, and timelines. This will help ensure project success and keep us on track." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Prototyping" para="Research customer's needs, design and test a low-risk prototype with our team using streamlined methods. Improve based on feedback for a successful product." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Development" para="We create a unique, safe, and customizable website tailored to your business needs. Our skilled team uses SCRUM methodology for efficient product development." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Software Quality Assurance" para="Our software reduces code errors and improves system integration, leading to increased profits. We prioritize user experience with carefully developed tools and ensure software security with our penetration testing service." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Release & Evolution" para="We provide cutting-edge Software Solutions to streamline and refine enterprise processes that increase productivity and growth." /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="web-discuss">
      <DiscussCard title="Website Speed Optimization" para="We make websites work better so people enjoy using them more. Our team can help your site load faster – just contact us. When a website loads quickly, more people are likely to visit and buy things. People trust good websites, so if yours work well, more people will want to use it. Google also likes good websites, so if your site is optimized, more people can find it." btn="Let's Optimize"/>
      </div>

      <div id="create-website">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>We can help you create a website.</h1>
              <p>We provide website solutions that focus on customers and deliver results for your business. We also help your business establish its presence on the internet in a constantly changing digital world.</p>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 col-md-6"><WebAppCards title="E-Commerce Development" para="We make and take care of online shops. This helps people recognize your brand and sell more." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Custom Web Development" para="We create customized websites with eye-catching designs that set you apart and offer a unique experience to your visitors." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Web Portal Development" para="We create tailor-made web portals for clients to simplify tasks and facilitate information exchange in real-time, improving business communication." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Third Party Integration" para="Connect your web app to other services to improve its usability. We can improve your app even further with our unique approach." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Enterprice Web App Development" para="We create web apps that boost businesses with productivity, outreach, and revenue. Our goal: ease the digital transition." /></div>
                <div className="col-lg-4 col-md-6"><WebAppCards title="Frontend & Backend Development" para="We create websites with a front-end for users and a back-end for functionality and security." /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tools">
        <div className="container">
          <div className="row">
          <div className="col-12">  <h3>Our Preferred Folder With The Technologies We Use.</h3></div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-2 a"><img src={process.env.PUBLIC_URL+"./html.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2 b"><img src={process.env.PUBLIC_URL+"./bootstrap-5.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2 a"><img src={process.env.PUBLIC_URL+"./vuejs.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2 b"><img src={process.env.PUBLIC_URL+"./tailwind.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2 a"><img src={process.env.PUBLIC_URL+"./react-JS.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2"><img src={process.env.PUBLIC_URL+"./react-native.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2"><img src={process.env.PUBLIC_URL+"./php.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2"><img src={process.env.PUBLIC_URL+"./codeigniter.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2"><img src={process.env.PUBLIC_URL+"./angularjs.webp"} alt="My-Pic" /></div>
              <div className="col-lg-2"><img src={process.env.PUBLIC_URL+"./wordpress.webp"} alt="My-Pic" /></div>
            </div>
          </div>
          </div>
        </div>
      </div>

    </>
  )
}
