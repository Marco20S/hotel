import React, { useState } from 'react';




export default function bookingForm() {

    const [name, setName] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onBookingSubmit({ name, checkInDate, checkOutDate });
      setName('');
      setCheckInDate('');
      setCheckOutDate('');
    };
  
    return (
        <>

        <h1> Bookings </h1>
        <br/>

        <p>You can book a room below. Please select the following fields in order to complete your booking.</p>
        <br/>

      <form onSubmit={handleSubmit}>

      <h3> Confirm Booking</h3>

        <input type="text" className='mail' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
        />
        <br></br>

        <input type="date" className='mail' placeholder="Check-in Date" value={checkInDate}  onChange={(e) => setCheckInDate(e.target.value)}
        />
        <br></br>

        <input type="date" className='mail' placeholder="Check-out Date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)}
        />
        <br></br>

        <button type="submit" className="btnsign">Book Now</button>
      </form>

      <br></br>

</>
    );
  };


