import React from 'react'
import "../utilities/DiscussCard.css";
import MainPara from './MainPara';
import MainHeading from './MainHeading';
import ButtonOne from './ButtonOne';
export default function DiscussCard(props) {
  return (
    <>
       <div id='discussing'>
         <div className='container'>
          <div className='row'>
          <div className="col-12">
             <MainHeading mainheading={props.title}/>
             <MainPara mainpara={props.para} />
             <ButtonOne btnOne={props.btn} />
             <div className="left-circle"></div>
            <div className="right-circle"></div>
            <div className="bottom-circle"></div>
          </div>
          </div>
        </div></div>
    </>
  )
}
