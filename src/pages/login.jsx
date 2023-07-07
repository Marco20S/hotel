import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";


export default function Login() {

    const navigate = useNavigate('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const gotohomePage = ((e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(() => {
            alert("Successfully Logged in")
            navigate('/')

        }).catch((error) => {

            document.getElementById('message').style.display = "block"
            document.getElementById('message').style.color = "red"
            document.getElementById('message').hidden = false

        })

    })



    // const gotohomePage = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         alert("Successfully Logged in")
    //         navigate('/')
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });




    return (
        <>
            <div>
                <form>
                    <br />

                    <h1>Login Page </h1>
                    <br />

                    <label>Email</label>
                    <br />
                    <input type='email' className='mail' name="mail" placeholder="Email" id='form2Example1' label='Email address' onChange={(e) => setEmail(e.target.value)} />

                    <br></br>
                    <br />

                    <label>Password</label>
                    <br />
                    <input type='password' className='mail' name="password" placeholder="Password" id='form2Example2' label='Password' onChange={(e) => setPassword(e.target.value)} />
                    <br />

                    <div className='mb-4'>

                        < MDBCol>
                            <a href='#!'>Forgot password?</a>
                        </ MDBCol>
                    </div>
                    <br></br>

                    <p id="message" hidden className="message" >User entered the incorrect Username or Password! </p>

                    <button type='submit' onClick={gotohomePage} className="btnsign" >
                        Sign in
                    </button>
                    <br />
                    <Link to='/register'>Don't have an account? Register here</Link>
                    <br />

                </form >
            </div>
        </>
    );
}