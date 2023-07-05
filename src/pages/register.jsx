import React from "react";
import { useState } from "react";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/firebase"




export default function Register() {


    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const register = (e) => {
        e.preventDefault();
        console.log("line 26");
        createUserWithEmailAndPassword(auth,email, password).then(()=>{

            alert("User has been registered successfully")
           // console.log("User has been registered successfully")

        }).catch((error)=>{

            console.log(error.message)


        })

    }




    return (
        <>
            <div>
                <form>

                    <h1>Sign Up </h1>
                    <br />

                    <label>Email</label>
                    <br />
                    <input type='email' className='mail' placeholder="Email" id='form2Example1' label='Email address' onChange={(e) => setEmail(e.target.value)} />

                    <br></br>
                    <br />

                    {/* <label>Username</label>
                    <br />
                    <input type='text' className='mail' placeholder="Username" id='form2Example1' label='Username' onChange={(e)=> setUsername(e.target.value)} />

                    <br></br> */}

                    <label>Password</label>
                    <br />
                    <input type='password' className='mail' placeholder="Password" id='form2Example2' label='Password' onChange={(e) => setPassword(e.target.value)} />

                    <div className='mb-4'>

                        < MDBCol>
                            <a href='/login'>Login</a>
                        </ MDBCol>
                    </div>
                    <br></br>

                    <button type='submit' onClick={register} className="btnsign" >
                        Register
                    </button>
                    <br />

                </form >
            </div>
        </>
    );
}