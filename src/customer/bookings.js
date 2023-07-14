import React, { useState } from 'react'
import Footer from '../pages/Footer'

import { database } from '../config/firebase'

export default function Bookings({ onBookingSubmit }) {

  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  //const value = collection(database, "AddNewRooms")


  const handleSubmit = async (e) => {
    e.preventDefault();

    const booking = {
      name,
      checkInDate,
      checkOutDate,
    };

    try {
      const bookingRef = await database.collection('bookings').add(booking);
      console.log('Booking added with ID: ', bookingRef.id);
      setName('');
      setCheckInDate('');
      setCheckOutDate('');
    } catch (error) {
      console.error('Error adding booking: ', error);
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

        <input type="date" className='mail' placeholder="Check-in Date"  onChange={(e) => setCheckInDate(e.target.value)}
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

      <div>
        <section className='footer'>
          <br></br>
          <Footer />
        </section>
      </div>
    </>

  )
}

