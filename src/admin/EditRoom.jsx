import React, { useEffect, useState } from 'react'
//import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle, Modal } from "react-bootstrap";


import { database } from '../config/firebase'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { storage } from "../config/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export default function EditRoom() {

    const [show, setShow] = useState(false)
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')
    const [roomNumber, setRoomNumber] = useState('')
    const [subImages, setSubImages] = useState([])
    const [imageUrls, setImageUrls] = useState([])
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
    const handleCreate = async () => {

        await addDoc(value, { type: type, price: price, room: roomNumber, subImages: imageUrls, beds: beds, occupents: occupents })

    }

    //delete the initial room info from firestore database
    const handleDelete = async (id) => {
        //e.preventDefault()
        const deleteVal = doc(database, "AddNewRooms", id)
        await deleteDoc(deleteVal)
    }

    //Updates the initial room info from firestore database
    const handleEdit = async (id, type, price, roomNumber, subImage, beds, occupents) => {
        setType(type)
        setPrice(price)
        setRoomNumber(roomNumber)
        setSubImages(subImage)
        setBeds(beds)
        setOccupents(occupents)
        setId(id)
        setShow(true)

    }

    const handleUpdate = async () => {
        const updateData = doc(database, "AddNewRooms", id)
        await updateDoc(updateData, { type: type, price: price, Room: roomNumber, subImages: subImages, beds: beds, occupents: occupents })
        setShow(false)
    }



    // uploade multipule (Sub) images
    const uploadImages = async () => {
        const imageURl = [];

        for (let i = 0; i < subImages.length; i++) {

            const imageRefe = ref(storage, `Room/Subimage/${subImages[i].name}`);

            await uploadBytes(imageRefe, subImages[i]).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    imageURl.push(url);
                })
            }).catch(() => {
                console.log("Error")
            })
        }
        console.log(imageURl);
        // setSubImages(imageURl)
        setImageUrls(imageURl)

    }

    const upload = (event) => {
        event.preventDefault();
        //uploadFirstImages();
        uploadImages().then(() => {
            handleCreate();
        });
     

    }


    return (
        <>

            <h1>Edit Rooms  </h1>
            <br />

            <p>Welcome, Admin in order for you to add a new room click the button below</p>


            {/* {show ? */}
            <form >

                <br />
                <br />

                <p>Please enter the following details</p>
                <br />

                <input type='text' value={type} className='mail' placeholder="Type" id='form2Example1' label='Address' onChange={(e) => setType(e.target.value)} />

                <br />
                <input type='text' value={price} className='mail' placeholder="Price" id='form2Example1' label='Map URL/ Location' onChange={(e) => setPrice(e.target.value)} />

                <br />
                <input type='text' value={roomNumber} className='mail' placeholder="Room Number" id='form2Example2' label='Password' onChange={(e) => setRoomNumber(e.target.value)} />

                <br />
                <input type='file' multiple className='mail' placeholder="Sub Images Of Room" id='form2Example2' label='Password' onChange={(e) => setSubImages(e.target.files)} />

                <br />
                <input type='number' value={beds} className='mail' placeholder="Number Of Beds" id='form2Example2' label='Password' onChange={(e) => setBeds(e.target.value)} />

                <br />
                <input type='number' value={occupents} className='mail' placeholder="Number Of Occupents" id='form2Example2' label='Password' onChange={(e) => setOccupents(e.target.value)} />
                <br />

                <br></br>

                {!show ? <button onClick={upload} className="btnsign" >Add Rooms</button> :
                    <button onClick={handleUpdate} className="btnsign" >
                        Update
                    </button>}
                <br />

            </form >
            {/* } */}
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
                        <th>Room Number</th>
                        <th>Sub Image</th>
                        <th>Number of Beds</th>
                        <th>Number of Occupents</th>
                        <th>Operations</th>

                    </tr>

                    {val.map((data) => {

                        return (
                            <tr>

                                <td>{data.type}</td>
                                <td>{data.price}</td>
                                <td>{data.room}</td>
                                <td>{data.subImages[0]}</td>
                                <td>{data.beds}</td>
                                <td>{data.occupents}</td>


                                <td>
                                    <button onClick={() => handleDelete(data.id)} >Delete</button>
                                    <button onClick={() => handleEdit(data.id, data.type, data.price,)} >Update</button></td>
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
