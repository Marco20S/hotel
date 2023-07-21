import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';


import Register from './pages/register';
import Home from './pages/Home';
import Navbar from './components/navbar';
import EditHome from './admin/editHome';
import EditRoom from './admin/EditRoom';
import Rooms from './customer/Rooms';
import Bookings from './customer/bookings';
import singleCard from './components/singleCard';
import Room from './customer/room';


const loggedOutLinks = document.querySelectorAll('.admin')
const loggedinLinks = document.querySelectorAll('.all')
const adminLinks = document.querySelectorAll('.admin')


const setUP = (role) => {


  if (role === "guest") {
    loggedOutLinks.forEach(item => item.style.display = "none")
    loggedinLinks.forEach(item => item.style.display = "block")

    console.log(role);
  }
  else {

    loggedOutLinks.forEach(item => item.style.display = "block")
    loggedinLinks.forEach(item => item.style.display = "block")

  }

  console.log(role);

}




export default function App() {

  const [isloggedin, setUserstate] = useState(false)
  const [userRole, setUserRole] = useState('guest')

  const loggedOutLinks = document.querySelectorAll('.admin')
  const loggedinLinks = document.querySelectorAll('.all')
  const adminLinks = document.querySelectorAll('.admin')


  const setUP = (role) => {

    setUserRole(role)
    
    if (role === "guest") {
      loggedOutLinks.forEach(item => item.style.display = "none")
      loggedinLinks.forEach(item => item.style.display = "block")

      console.log(role);
    }
    else {

      loggedOutLinks.forEach(item => item.style.display = "block")
      loggedinLinks.forEach(item => item.style.display = "block")

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


