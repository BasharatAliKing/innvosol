import React from 'react'
import ServicesCards from '../Components/ServicesCards'

export default function mokedata() {
  return (
    <>
      const array=[
        {  <ServicesCards img="fa fa-desktop" title="Web Design & Development" para="We’ve reached significant milestones in providing the best web development services." /> },
        { <ServicesCards img="fa fa-mobile" title="Mobile App Development" para="Need a mobile app developed? We develop mobile apps for IOS and Android Operating System." />},
        { <ServicesCards img="fa fa-gift" title="E-Commerce" para="We are thought leaders in creating rewarding through responsive web design and emerging UX technologies." />},
        {  <ServicesCards img="fa fa-paint-brush" title="Brand Strategy & UI/UX" para="We have skilled graphic designers who can portray and develop your ideas perfectly." />},
        {   <ServicesCards img="fa fa-users" title="Staff Augmentation" para="Hiring a skilled developer at a reasonable price takes months, not weeks." />},
        {  <ServicesCards img="fa fa-cloud-upload" title="Cloud Application Development" para="To build cloud apps, use affordable and popular cloud tools that offer flexibility, security, and reliability." />}
      ];
    return array;
    </>
  )
}
