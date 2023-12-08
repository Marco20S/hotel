import React, { useEffect, useState } from 'react'
import Footer from '../pages/Footer'
import Bookinglist from './bookinglist';
import { useLocation } from 'react-router-dom'

import { database } from '../config/firebase'
import { addDoc, collection, doc, getDoc, getDocs, where } from 'firebase/firestore';

export default function Bookings({ roomId, roomPrice }) {

  const data = useLocation();
  // console.log("tshego ======== ", data)

  const [name, setName] = useState('');
  const [occupents, setOccupents] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomID, setRoomID] = useState(roomId)
  const [price, setPrice] = useState(roomPrice)
  const [selectedCheckIn, setSelectedCheckIn] = useState('')
  const [selectedCheckOut, setSelectedCheckOut] = useState('')
  const [totalCost, setTotalCost] = useState(0)
  const [availability, setAvailability] = useState(false)
  const [newBookings, setNewBookings] = useState('')

  const value = collection(database, "bookings")


  useEffect(() => {

  }, [])



  function today() {
    const date = new Date()
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return `${day}/${month}/${year}`;
  }


  //getting room price in forestore
  async function getPrice(price) {
    const productRef = doc(database, "AddNewRooms", price);
    const productDoc = await getDoc(productRef);
    const productData = productDoc.data();
    const roomPrice = productData.price;

    return roomPrice;
  }

  const PriceChange = (e) => {
    const newPrice = parseFloat(e.target.value)
    setPrice(newPrice)

    //getting room in firestore
    async function getRoom(room) {

    }



    //culculates days between both checkin and checkout dates

    if (checkInDate && checkOutDate) {

      //stay in days id the duration period in the room

      const stayInDays = (new Date(checkInDate) - new Date(checkOutDate)) / (1000 * 60 * 60 * 24)
      setTotalCost(stayInDays)
    }

  }

  // console.log(newBookings)

  const book = async (roomPrice) => {
    const newBookingLocal = await addDoc(value, { name: name, price: data.state.roomPrice, occupents: occupents, checkInDate: checkInDate, checkOutDate: checkOutDate, roomID: data.state.roomId, })

    setNewBookings(newBookingLocal)
      ;

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

    const newBooking = {
      name,
      occupents,
      checkInDate,
      checkOutDate,
      roomID: data.state.roomId,
      price: data.state.roomPrice,
      totalCost: totalCost,


    };


    checkAvailability(newBooking)
    //if statement to check if room is available

    // if (room <= numberOfRooms) {
    //   alert("this room is available")
    // } else {

    //   if (selectedCheckIn == checkInDate) {
    //     alert('this room is not available')
    //   } else if (selectedCheckIn == checkOutDate) {
    //     alert('this room is not available')
    //   } else if (selectedCheckIn <= checkInDate) {
    //     alert('this room is not available')
    //   } else if (selectedCheckOut >= checkOutDate) {
    //     alert('this room is not available')
    //   }
    // }
    console.log("line129 -------------", data.state.roomId);



    if (!availability) {
      alert('The room is available for the selected dates.');
      // book()
      // alert("Congratulations, We have booked your room")

      return;
    } else {
      alert("The room is available for the selected dates")
    }

    // book()





    setNewBookings(newBooking)

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
      setRoomID(data.state.roomId);
      setPrice('');
      setTotalCost(price);
      alert("congratulations we have booked your room")

    } catch (error) {

      console.log('Error adding booking:', error);

    }
  };


  const checkAvailability = async (newBooking) => {

    const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
    const url = `https://firestore.googleapis.com/v1/projects/hotel-lll/databases/(default)/documents/bookings`;

    await fetch(url).then(

      response => {


        return (response.json())
      }
    ).then(
      (json) => {

        const documents = json.documents

        // console.log(json);


        let myMenuArray = []

        documents.forEach(doc => {
          const idarray = doc.name.split('/')


          const bookingId = idarray[idarray.length - 1];

          const roomId = doc.fields.roomID?.stringValue
          const checkIn = doc.fields.checkInDate?.stringValue
          const checkOut = doc.fields.checkOutDate?.stringValue

          const roomIDName = newBooking?.roomID
          const roomCheckin = newBooking?.checkInDate
          const roomCheckOut = newBooking?.checkOutDate

          // if(roomId == newBooking.roomID){
          //   console.log("Booked room", roomId );
          // }
          // else{
          //   console.log("Available",  roomId);
          // }

          console.log('new booking ', newBooking);


          // check if room is available to book

          if (roomId === newBooking?.roomID) {
            console.log("Booked room", roomIDName, roomId);

            // if (checkIn === newBooking?.checkInDate) {
            //   console.log("Booked Checkinhg date ===", roomCheckin, checkIn);
            // }
            // else if (checkOut === newBooking?.checkOutDate) {
            //   console.log("Booked  Check Out date ===", roomCheckOut, checkOut);
            // }
            // else {
            //   console.log("Room is available 1");
            // }

            if (checkIn === newBooking?.checkInDate) {
              console.log("Booked Check in date ===", roomCheckin, checkIn);
            }
            else if (checkIn === newBooking?.checkInDate) {
              console.log("Booked  Check in date ===", roomCheckin, checkIn);
            }
            else if (checkIn >= newBooking?.checkInDate) {
              console.log("Booked  Check in date ===", roomCheckin, checkIn);
            }
            else if (checkOut === newBooking?.checkOutDate) {
              console.log("Booked  Check Out date ===", roomCheckOut, checkOut);
            }
            // else if (checkOut === newBooking?.checkOutDate) {
            //   console.log("Booked  Check Out date ===", roomCheckOut, checkOut);
            // }
            else if (checkOut <= newBooking?.checkOutDate) {
              console.log("Booked  Check Out date ===", roomCheckOut, checkOut);
            }
            else {
              console.log("Room is available 1");
              book()
            }
          }
          else {
            console.log("Room is available");

          }





          // if (roomId === newBooking?.roomID) {
          //   console.log("Booked room", roomIDName, roomId);
          // }
          // else if (checkIn === newBooking?.checkInDate) {
          //   console.log("Booked Checkinhg date ===", roomCheckin, checkIn);
          // } 
          // else if (checkOut === newBooking?.checkOutDate) {
          //   console.log("Booked room", roomCheckOut, checkOut);
          // }
          // else {
          //   console.log("Room is not available");
          // }



          // myMenuArray.push({
          //   bookingId : bookingId ,
          //     ...doc.fields.
          // })


        })

        // console.log(" records ..........", myMenuArray);

        // setNewBooking(myMenuArray)


      }
    ).catch(
      error => console.log("error", error)
    );

  }


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
              // handleDatesChange();
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

          <input type="date" className='mail' placeholder="Check-out Date" value={checkOutDate} onChange={(e) => {
            setCheckOutDate(e.target.value)
            handleDatesChange()
          }
          } />
          <br></br>


          <button type="submit" className="btnsign" onClick={() => { checkAvailability() }}>Book Now</button>

          <br></br>
        </form>
      </div>
      <br></br>

      {/* <Bookinglist totalCost={totalCost} availability={availability} /> */}

      <div>
        <section className='footer'>
          <br></br>
          <Footer />
        </section>
      </div>
    </>

    // const value = collection(database, "bookings")disabled={!availability}

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

