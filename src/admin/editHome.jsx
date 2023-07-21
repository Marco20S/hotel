import React, { useState, useEffect } from 'react'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

import { database } from '../config/firebase'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { storage } from "../config/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

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
  const [id, setId] = useState('')

  const [val, setVal] = useState([])//data will be pushed into this array

  const value = collection(database, "Hotel")

  //useeffect to retreve data in firestore

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value)
      setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  })

  //submitting room info to firestore database
  const handleCreate = async () => {

    await addDoc(value, { Address: address, Map: map, Contacts: contact, Socials: socials, facalties: facalties, Policies: policy, Rating: rating, "checkIN/Out": check })

  }

  //delete the initial room info from firestore database
  const handleDelete = async (id) => {
    //e.preventDefault()
    const deleteVal = doc(database, "Hotel", id)
    await deleteDoc(deleteVal)
  }

  //Updates the initial room info from firestore database
  const handleEdit = async (id, address, map, contact, socials, facalties, policy, rating, check) => {
    setId(id)
    setAddress(address)
    setMap(map)
    setContact(contact)
    setSocials(socials)
    setFacalties(facalties)
    setPolicy(policy)
    setRating(rating)
    setCheck(check)

    setShow(true)

  }

  const handleUpdate = async () => {
    const updateData = doc(database, "Hotel", id)
    await updateDoc(updateData, { Address: address, Map: map, Contacts: contact, Socials: socials, facalties: facalties, Policies: policy, Rating: rating, "checkIN/Out": check })
    setShow(false)
  }






  return (
    <div>
      <h1>Edit Home page</h1>
      <br />
      <br />

      <p>Welcome, Admin in order for you to add a new information about the hotel click the button below</p>
      <br />


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

        {!show ? <button onClick={handleCreate} className="btnsign" >Add Rooms</button> :
          <button onClick={handleUpdate} className="btnsign" >
            Update
          </button>}

      </form >

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

          {val.map((data) => {

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
                  <button className="btnsign" onClick={() => handleDelete(data.id)} >Delete</button>
                  <button className="btnsign" onClick={() => handleEdit(data.id, data.address, data.map, data.contact, data.socials, data.facalties, data.policy, data.rating, data.check)} >Update</button>
                </td>
              </tr>



            )
          })}


        </tbody>
      </table>

    </div>
  )
}

