import React from 'react'
import "../utilities/WebMedia.css";
export default function WebMedia(props) {
  return (
    <>
     <div className={props.clsnm}>
     <div class="media">
  <img class="mr-3" src={props.img} alt="Generic placeholder image"/>
  <div class="media-body">
    <h3 class="mt-0">{props.heading}</h3>
    <p>{props.para}</p>
  </div>
</div>
     </div>
    </>
  )
}
