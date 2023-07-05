import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Home from './pages/Home';
import Navbar from './components/navbar';
import EditHome from './admin/editHome';
import EditRoom from './admin/EditRoom';
import Rooms from './customer/Rooms';
import Bookings from './customer/bookings';




export default function App() {
  return (
    <>
    <header></header>

    <Router> 
    <Navbar/>
      <Routes>
        <Route path='/login' element= {<Login/>} /> 
        <Route path='/register' element= {<Register/>} />
        <Route path='/' element= {<Home/>} />
        <Route path='/edithome' element= {<EditHome/>}/>
        <Route path='/editroom' element= {<EditRoom/>}/>
        <Route path='/Rooms' element= {<Rooms/>}/>
        <Route path='/bookings' element= {<Bookings/>}/>
      </Routes>
    </Router>

    {/* <Login/> */}
    
    </>
  )
}


