import React, { useEffect, useState } from 'react'
import Footer from '../pages/Footer'
import Bookinglist from './bookinglist';

import { database } from '../config/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore';

export default function Bookings() {

  const [name, setName] = useState('');
  const [occupents, setOccupents] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');


  //data will be pushed into this array
  const [val, setVal] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBooking = {
      name,
      occupents,
      checkInDate,
      checkOutDate,
    };

    try {
      // Reference the 'bookings' collection
      
      const bookingRef = await addDoc(collection(database, 'bookings'), newBooking);
      // Add the booking data to Firestore
      
      console.log("Booking ref id", bookingRef.id);
      setName('');
      setOccupents('');
      setCheckInDate('');
      setCheckOutDate('');

    } catch (error) {

      console.log('Error adding booking:', error);

    }
  };


  return (
    <>
      <h1> Bookings </h1>
      <br />
      <div>
        <form onSubmit={handleSubmit}>

          <h3> Confirm Booking</h3>

          <p>You can book a room below. Please select the following fields in order to complete your booking.</p>
          <br />

          <input type="text" className='mail' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
          />
          <br></br>

          <input type="number" className='mail' placeholder="Number of occupents" value={occupents} onChange={(e) => setOccupents(e.target.value)}
          />
          <br></br>

          <input type="date" className='mail' placeholder="Check-in Date" onChange={(e) => setCheckInDate(e.target.value)}
          />
          <br></br>

          <input type="date" className='mail' placeholder="Check-out Date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <br></br>


          <button type="submit" className="btnsign">Book Now</button>

          <br></br>
        </form>
      </div>
      <br></br>

      <Bookinglist />

      <div>
        <section className='footer'>
          <br></br>
          <Footer />
        </section>
      </div>
    </>

    // const value = collection(database, "bookings")

    // //useEffects
    // useEffect(() => {
    //   const getData = async () => {
    //     const dbVal = await getDocs(value)
    //     setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    //   }
    //   getData()
    // })

    // //submitting room info to firestore database
    // const handleCreate = async () => {

    //   await addDoc(value, { Name: name, Checkin: checkInDate, CheckOut :checkOutDate })

    // }

  )
}

