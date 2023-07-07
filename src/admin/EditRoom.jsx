import React, { useEffect, useState } from 'react'
//import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle, Modal } from "react-bootstrap";


import { database } from '../config/firebase'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

export default function EditRoom() {

    const [show, setShow] = useState(false)
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')
    const [mainImage, setMainImages] = useState('')
    const [subImages, setSubImages] = useState('')
    const [beds, setBeds] = useState('')
    const [occupents, setOccupents] = useState('')
    const [id, setId] = useState('')

    const [val, setVal] = useState([])//data will be pushed into this array


    const value = collection(database, "AddNewRooms")

    //useeffect to retreve data in firestore

    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value)
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData()
    })


    //submitting room info to firestore database
    const handleCreate = async (e) => {
        e.preventDefault()
        await addDoc(value, { type1: type, price1: price, mainImage1: mainImage, subImages1: subImages, beds1: beds, occupents1: occupents })

    }

    //delete the initial room info from firestore database
    const handleDelete = async (id) => {
        //e.preventDefault()
        const deleteVal = doc(database, "AddNewRooms", id)
        await deleteDoc(deleteVal)
    }

    //Updates the initial room info from firestore database
    const handleEdit = async (id, type1, price1, mainImage1, subImage1, beds1, occupents1) => {
        setType(type1)
        setPrice(price1)
        setMainImages(mainImage1)
        setSubImages(subImage1)
        setBeds(beds1)
        setOccupents(occupents1)
        setId(id)
        setShow(true)

    }

    const handleUpdate = async () => {
        const updateData = doc(database, "AddNewRooms", id)
        await updateDoc(updateData, { type1: type, price1: price, mainImage1: mainImage, subImages1: subImages, beds1: beds, occupents1: occupents })
        setShow(false)
    }

    // const handleShow = (t) => {
    //     setCurrentTask(t)
    //     setShow(true)
    //     console.log("display.js", t)

    // }




    return (
        <>

            <h1>Edit Rooms  </h1>
            <br />

            <p>Welcome, Admin in order for you to add a new room click the button below</p>


            {show ?
                <form >

                    <br />
                    <br />

                    <p>Please enter the following details</p>
                    <br />

                    <input type='text' value={type} className='mail' placeholder="Type" id='form2Example1' label='Address' onChange={(e) => setType(e.target.value)} />

                    <br />
                    <input type='text' value={price} className='mail' placeholder="Price" id='form2Example1' label='Map URL/ Location' onChange={(e) => setPrice(e.target.value)} />

                    <br />
                    <input type='file' value={mainImage} className='mail' placeholder="Main Room Image" id='form2Example2' label='Password' onChange={(e) => setMainImages(e.target.value)} />

                    <br />
                    <input type='file' value={subImages} className='mail' placeholder="Sub Images Of Room" id='form2Example2' label='Password' onChange={(e) => setSubImages(e.target.value)} />

                    <br />
                    <input type='number' value={beds} className='mail' placeholder="Number Of Beds" id='form2Example2' label='Password' onChange={(e) => setBeds(e.target.value)} />

                    <br />
                    <input type='number' value={occupents} className='mail' placeholder="Number Of Occupents" id='form2Example2' label='Password' onChange={(e) => setOccupents(e.target.value)} />
                    <br />

                    <br></br>

                    {show?<button  onClick={handleCreate} className="btnsign" >Add Rooms</button>:
                   <button onClick={handleUpdate} className="btnsign" >
                        Update
                    </button>}
                    <br />

                </form > : true
            }
            <br />

            <button className="btnsign" onClick={() => setShow(!show)}>Enter New Room Form</button>


            <br></br>
            <br></br>
            <br></br>

            <h1>Details Assigned</h1>

            <br></br>

            <table className="table">
                <tbody>
                    <tr>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Main Image</th>
                        <th>Sub Image</th>
                        <th>Number of Beds</th>
                        <th>Number of Occupents</th>
                        <th>Operations</th>

                    </tr>

                    {val.map((data) => {

                        return (
                            <tr>

                                <td>{data.type1}</td>
                                <td>{data.price1}</td>
                                <td>{data.mainImage1}</td>
                                <td>{data.subImage1}</td>
                                <td>{data.beds1}</td>
                                <td>{data.occupents1}</td>

                                <td>
                                    <button onClick={() => handleDelete(data.id)} >Delete</button>
                                    <button onClick={() => handleEdit(data.id, data.type1, data.price1,)} >Update</button></td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>

            {/* <Modal show={show} onHide={handleClose} closebuttom>
                <ModalHeader>
                    <ModalTitle>Edit Task details below</ModalTitle>

                </ModalHeader>
                <ModalBody>

                    <EditInfo />

                </ModalBody>
                <ModalFooter>

                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                </ModalFooter>

            </Modal> */}



        </>
    )
}
