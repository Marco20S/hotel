import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth, database } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import Register from './pages/register';
import Home from './pages/Home';
import Navbar from './components/navbar';
import EditHome from './admin/editHome';
import EditRoom from './admin/EditRoom';
import Rooms from './customer/Rooms';
import Bookings from './customer/bookings';
import singleCard from './components/singleCard';
import Room from './customer/room';




export default function App() {

  
  const [isloggedin, setUserstate] = useState(false)
  const [userRole, setUserRole] = useState('guest')
  const [currentUser, setCurrentUser] = useState('')
  // const navigate = useNavigate()


  const adminLinks = document.querySelectorAll('.admin')
  const guestLinks = document.querySelectorAll('.all')



  useEffect  (() => {
    console.log("outside ===== OnAuth change")

    auth.onAuthStateChanged(async (user) => {

      console.log("OnAuth change", user.email)

      if (user) {

        const EmailRef = await getDoc(doc(database, 'admin', user.email))

        console.log(EmailRef);
        if (EmailRef.exists()) {

          setUP(EmailRef)

          // navigate('/')
        }
        else {
          setUP()
        }

      }
    })
  }, [])

  //user goes to homepage when logged in
  // const gotohomePage = ((e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password).then(() => {



  //     alert("Successfully Logged in")
  //     setUP()
  //     navigate('/')

  //   }).catch((error) => {

  //     document.getElementById('message').style.display = "block"
  //     document.getElementById('message').style.color = "red"
  //     document.getElementById('message').hidden = false

  //   })

  // })


  const setUP = (role) => {

    setUserRole(role)

    if (role === "guest") {
      adminLinks.forEach(item => item.style.display = "none")
      guestLinks.forEach(item => item.style.display = "block")

      console.log(role);
    }
    else {

      adminLinks.forEach(item => item.style.display = "block")
      guestLinks.forEach(item => item.style.display = "block")

    }

    console.log(role);

  }


  return (
    <>
      {/* isPrivate:true */}
      <header></header>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login setUP={setUP} />} />
          <Route path='/Rooms/room' element={<Room />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/edithome' element={<EditHome />} />
          <Route path='/editroom' element={<EditRoom />} />
          <Route path='/Rooms' element={<Rooms />} />
          <Route path='/cards' element={<singleCard />} />
          <Route path='/bookings' element={<Bookings />} />



        </Routes>
      </Router>

      {/* <Login/> */}

    </>
  )
}


