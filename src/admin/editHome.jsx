import React, { useState } from 'react'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function EditHome() {

  const [show, setShow] = useState(false)

  const [address, setAddress] = useState('')
  const [map, setMap] = useState('')
  const [contact, setContact] = useState('')
  const [socials, setSocials] = useState('')
  const [facalties, setFacalties] = useState('')
  const [policy, setPolicy] = useState('')
  const [rating, setRating] = useState('')
  const [check, setCheck] = useState('')


  return (
    <div>
      <h1>Edit Home page</h1>
      <br />
      <br />

      <p>Welcome, Admin in order for you to add a new information about the hotel click the button below</p>
      <br />

      {show ?
        <form>
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


        </form > : true
      }
      <br />

      <button className="btnsign" onClick={() => setShow(!show)}>Show Form</button>


      <br></br>
      <br></br>
      <br></br>

      <h1>Details Assigned </h1>

      <table className="table">
        <tbody>
          <tr>
            <th>Address </th>
            <th>Map </th>
            <th>Contact details </th>
            <th>Cocial media Icons </th>
            <th>Facalties </th>
            <th>Policy </th>
            <th>Rating </th>
            <th>Check in/ Check Out Dates </th>
            <th>Operations </th>

          </tr>

          {/* {((data, index) => {

                        return (
                            <tr>

                                <td>{data.address}</td>
                                <td>{data.map}</td>
                                <td>{data.contact}</td>
                                <td>{data.socials}</td>
                                <td>{data.facalties}</td>
                                <td>{data.policy}</td>
                                <td>{data.rating}</td>
                                <td>{data.check}</td>

                                <td>
                                    <button >Delete</button>
                                    <button >Update</button>
                                </td>
                            </tr>



                        )
                    })} */}


        </tbody>
      </table>

    </div>
  )
}

