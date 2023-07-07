import React from 'react'

export default function editInfo() {
  return (
    <div> <form>
    <br />

    <p>Please enter the following details</p>
    <br />

    <input type='text' className='mail' placeholder="Address" id='form2Example1' label='Address' />

    <br />
    <input type='text' className='mail' placeholder="Map Url" id='form2Example1' label='Map URL' />

    <br />
    <input type='text' className='mail' placeholder="Contact details" id='form2Example1' label='Contact' />
    <br />
    <input type='text' className='mail' placeholder="Socials" id='form2Example1' label='Map URL/ Location' />

    <br />
    <input type='text' className='mail' placeholder="Facalties " id='form2Example1' label='Map URL/ Location' />

    <br />
    <input type='text' className='mail' placeholder="Policy/Policies" id='form2Example1' label='Map URL/ Location' />

    <br />
    <input type='text' className='mail' placeholder="Rating" id='form2Example1' label='Map URL/ Location' />

    <br />
    <input type='datetime-local' className='mail' placeholder="Check In/Check Out Dates" id='form2Example2' label='Password' />
    <br />


    <br></br>

    <button type='submit' className="btnsign" >
      Add Information
    </button>


  </form > </div>
  )
}
