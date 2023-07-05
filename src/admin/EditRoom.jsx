import React, { useState } from 'react'

export default function EditRoom() {

    const [show, setShow] = useState(false)


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

                    <input type='text' className='mail' placeholder="Type" id='form2Example1' label='Address' />

                    <br />
                    <input type='text' className='mail' placeholder="Price" id='form2Example1' label='Map URL/ Location' />

                    <br />
                    <input type='file' className='mail' placeholder="Main Room Image" id='form2Example2' label='Password' />

                    <br />
                    <input type='file' className='mail' placeholder="Sub Images Of Room" id='form2Example2' label='Password' />

                    <br />
                    <input type='number' className='mail' placeholder="Number Of Beds" id='form2Example2' label='Password' />

                    <br />
                    <input type='number' className='mail' placeholder="Number Of Occupents" id='form2Example2' label='Password' />
                    <br />

                    <br></br>

                    <button type='submit' className="btnsign" >
                        Add Rooms
                    </button>
                    <br />

                </form > : true
            }
            <br />

            <button className="btnsign" onClick={() => setShow(!show)}>Enter New Room Form</button>


            <br></br>
            <br></br>
            <br></br>

            <h1>Details Assigned</h1>





        </>
    )
}
