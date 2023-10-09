import React from 'react'
import "../utilities/ContactCards.css"
export default function ContactCards(props) {
  return (
    <>
      <div class="card">
   <i className={props.icon}></i>
  <div class="card-body">
    <h2 class="card-title">{props.title}</h2>
    <p class="card-text">{props.para}</p>
    <a href="#" class="btn btn-primary">{props.btn}</a>
  </div>
</div>
    </>
  )
}
