import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth, database } from './config/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
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
import { UserRoleContext } from "./components/userRoleContext"




export default function App() {


  const [isloggedin, setUserstate] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  // const navigate = useNavigate()


  const adminLinks = document.querySelectorAll('.admin');
  const guestLinks = document.querySelectorAll('.all');



  useEffect(() => {
    console.log("outside ===== OnAuth change")

    auth.onAuthStateChanged(async (user) => {

      if (user) {
        console.log("OnAuth change", user)

        // const emailRef = await getDoc(doc(database, 'admin', user.email))
        // const emailRef = doc(collection(database, 'admin', user.email))
        // const onSnapshot = await getDoc(emailRef)

        // console.log('Email Reference from firestore', emailRef.data());

        // if ( emailRef.exists()) {

        //   console.log('Document database',  emailRef.data());
        //   //setUP(EmailRef)

        //   // navigate('/')
        // }
        // else {
        //   //setUP()
        // }

        const docRef = doc(database, 'admin', user.email);
        const docSnap = await getDoc(docRef);
        console.log(docRef.firestore.toJSON());

        if (docSnap.exists()) {
          const emailRef = docSnap.data();
          // do something with emailRef
          console.log('Document database', emailRef);
          setUP(emailRef)


        } else {
          console.log("No such document exists!");

        }

      } else {
        setUP(null)
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

    if (role === "admin") {
      adminLinks.forEach(item => item.style.display = "none")
      guestLinks.forEach(item => item.style.display = "block")

      console.log(role);
    }
    else {

      adminLinks.forEach(item => item.style.display = "block")
      guestLinks.forEach(item => item.style.display = "block")

    }

    //console.log(role);

  }


  return (
    <>
      {/* isPrivate:true */}
      <header></header>

      <Router>
        <UserRoleContext.Provider value={{ userRole, setUserRole }}>
          <Navbar roles={setUP} />
        </UserRoleContext.Provider>
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


