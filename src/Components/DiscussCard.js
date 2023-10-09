import React from 'react'
import "../utilities/DiscussCard.css";
export default function DiscussCard(props) {
  return (
    <>
       <div id='discussing' className="container">
          <div id='box-discuss' className="col-12">
            <div className="left-circle"></div>
            <div className="right-circle"></div>
            <div className="bottom-circle"></div>
            <h1>{props.title}</h1>
            <p>{props.para}</p>
            <button className='btn'>{props.btn}</button>
          </div>
        </div>
    </>
  )
}
