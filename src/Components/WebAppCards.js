import React from 'react'
import "../utilities/WebAppCards.css"
export default function WebAppCards(props) {
  return (
    <div>
      <div className="card">
        <h4>{props.title}</h4>
        <p>{props.para}</p>
      </div>
    </div>
  )
}
