import React from 'react'
import "../utilities/Form.css";
export default function Form(props) {
  return (
    <>
      <div id="Form-alone">
        <div className="container">
            <div className="row">
            <form className='shadow p-4 ' >
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
            <div className="row mt-3">
              <div className="col-md-6"><input type="text" className='form-control' placeholder='First Name' /></div>
              <div className="col-md-6"><input type="text" className='form-control' placeholder='Last Name' /></div>
            </div>
            <input type="email" placeholder='Email Address' className='form-control mt-4' />
            <input type="phone" placeholder='Mobile Number' max="12" className='form-control mt-4' />
            <textarea className='form-control mt-4' name="" id="" cols="20" placeholder='Tell us more about your projects?' rows="5"></textarea>
            <button className='btn form-control mt-4'>Submit Form</button>
          </form>
            </div>
        </div>
      </div>
    </>
  )
}
