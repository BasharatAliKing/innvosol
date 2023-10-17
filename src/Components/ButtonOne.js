import React from 'react'
import "../utilities/ButtonOne.css";
export default function ButtonOne(props) {
  return (
    <>
      <button className='btnone'>{props.btnOne}</button>
    </>
  )
}
