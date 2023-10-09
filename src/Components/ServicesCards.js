import React from 'react'
import "../utilities/ServicesCards.css";
export default function ServicesCards(props) {
  return (
    <>
      <div className="media">
      <i className={props.img}></i>
  <div className="media-body">
    <h5 className="mt-0">{props.title}</h5>
    <p>{props.para}</p>
  </div>
</div>
    </>
  )
}
