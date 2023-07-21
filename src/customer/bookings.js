import React, { useEffect, useState } from 'react'
import Footer from '../pages/Footer'
import Bookinglist from './bookinglist';

import { database } from '../config/firebase'
import { addDoc, collection, getDocs, where } from 'firebase/firestore';

export default function Bookings() {

  const [name, setName] = useState('');
  const [occupents, setOccupents] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomID, setRoomID] = useState('')
  const [price, setPrice] = useState('')
  const [totalCost, setTotalCost] = useState(0)
  const [availability, setAvailability] = useState('')


  function today() {
    const date = new Date()
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return `${day}/${month}/${year}`;
  }



  const PriceChange = (e) => {
    const newPrice = parseFloat(e.target.value)
    setPrice(newPrice)

    //culculates days between both checkin and checkout dates

    if (checkInDate && checkOutDate) {

      //stay in days id the duration period in the room

      const stayInDays = (new Date(checkInDate) - new Date(checkOutDate)) / (1000 * 60 * 60 * 24)
      setTotalCost(stayInDays)
    }

  }

  const handleDatesChange = () => {
    if (checkInDate && checkOutDate && price) {

      const durationInDays = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);
      setTotalCost(durationInDays * price);

      // Check room availability
      const bookingsQuery = getDocs(
        collection(database, 'bookings'),
        where('roomId', '==', roomID),
        where('checkOutDate', '>', checkInDate),
        where('checkInDate', '<', checkOutDate)
      );

      getDocs(bookingsQuery)
        .then((querySnapshot) => {
          setAvailability(querySnapshot.size === 0);
        })
        .catch((error) => {
          alert('Error checking availability: ', error);
        });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!availability) {
      alert('The room is not available for the selected dates.');
      return;
    }

    const newBooking = {
      name,
      occupents,
      checkInDate,
      checkOutDate,
      roomID,
      price,
      totalCost,
    };

    try {

      //const price = getDocs(collection(database, "AddNewRooms"))


      // Reference the 'bookings' collection

      const bookingRef = await addDoc(collection(database, 'bookings'), newBooking);
      // Add the booking data to Firestore

      console.log("Booking ref id", bookingRef.id);
      setName('');
      setOccupents('');
      setCheckInDate('');
      setCheckOutDate('');
      setRoomID(roomID);
      setPrice('');
      setTotalCost(0);

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

          <input type="number" className='mail' placeholder="Number of occupents" value={occupents}
            onChange={(e) => {
              setOccupents(e.target.value);
              handleDatesChange();
            }}
          />
          <br></br>

          <input type="date" className='mail' min={today()} placeholder="Check-in Date"
            onChange={(e) => {
              setCheckInDate(e.target.value);
              handleDatesChange();
            }}
          />
          <br></br>

          <input type="date" className='mail' placeholder="Check-out Date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <br></br>


          <button type="submit" disabled={!availability} className="btnsign">Book Now</button>

          <br></br>
        </form>
      </div>
      <br></br>

      <Bookinglist totalCost={totalCost} availability={availability} />

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

