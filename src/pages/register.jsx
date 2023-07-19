import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/firebase"
import { database } from '../config/firebase'
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';


export default function Register() {

    const navigate = useNavigate('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('guest')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    const newUsers = async () => {

        const newUser = {
            email,
            name,
            role,
        };

        try {
            // Reference the 'admin' collection

            // const userRef = await addDoc(collection(database, 'admin'), newUser);
            const userRef = await setDoc(doc(database, 'admin', newUser.email), newUser)


            // Add the user data to Firestore
            console.log("User ref id", userRef.id);
            setEmail('');
            setPassword('*****************')
            setName('');
            setRole('guest');

        } catch (error) {

            console.log('Error adding new User:', error);

        }
    };


    const register = (e) => {
        e.preventDefault();

        alert("User has been registered successfully")


        createUserWithEmailAndPassword(auth, email, password,).then(() => {

            newUsers();

            navigate('/')
            // console.log("User has been registered successfully")

        }).catch((error) => {

            console.log(error.message)


        })

    }




    return (
        <>
            <div >
                <br />
                <form>

                    <h1>Sign Up </h1>
                    <br />

                    <label>Email</label>
                    <br />
                    <input type='email' className='mail' placeholder="Email" id='form2Example1' label='Email address' onChange={(e) => setEmail(e.target.value)} />

                    <br></br>
                    <br />

                    <label>Username</label>
                    <br />
                    <input type='text' className='mail' placeholder="Username" id='form2Example1' label='Username' onChange={(e) => setName(e.target.value)} />

                    <br></br>

                    <label>Password</label>
                    <br />
                    <input type='password' className='mail' placeholder="Password" id='form2Example2' label='Password' onChange={(e) => setPassword(e.target.value)} />


                    <br></br>

                    <button type='submit' onClick={register} className="btnsign" >
                        Register
                    </button>

                    <br />
                    <p>Already have an account? <Link to='/login'> Login</Link></p>
                    <br />

                    <br />

                </form >
            </div>
        </>
    );
}