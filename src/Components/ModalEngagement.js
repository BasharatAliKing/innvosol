import React from 'react'
import "../utilities/ModalEngagement.css";
export default function ModalEngagement(props) {
  return (
    <>
   
      <div id='modal-engagement'  class="media">
  <i className={props.icon}></i>
  <div class="media-body">
    <h5 class="mt-0">{props.title}</h5>
    <p>{props.para}</p>
  </div>
</div>
    </>
  )
}
