import React, { useEffect, useState } from 'react'
import Footer from '../pages/Footer'
import Bookinglist from './bookinglist';
import { useLocation } from 'react-router-dom'

import { database } from '../config/firebase'
import { addDoc, collection, doc, getDoc, getDocs, where } from 'firebase/firestore';

export default function Bookings({ roomId, roomPrice, roomNAME }) {

  const data = useLocation();
  // console.log("tshego ======== ", data)

  const [name, setName] = useState('');
  const [occupents, setOccupents] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomID, setRoomID] = useState(roomId)
  const [roomName, setRoomName] = useState(data.state.roomNAME)
  const [price, setPrice] = useState(data.state.roomPrice)
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

  // const totalRoomCost = Number(data.state.roomPrice) * (new Date(checkInDate) - new Date(checkOutDate)) / (1000 * 60 * 60 * 24);

  function createTimestamp(checkInDate) {
    var timestamp = new Date(checkInDate).getTime();
    return timestamp;
  }

  const totalRoomCost = Number(data.state.roomPrice) * ((createTimestamp(checkOutDate) - createTimestamp(checkInDate)) / (1000 * 60 * 60 * 24));
  // console.log(typeof   createTimestamp(checkInDate) );


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
    const newBookingLocal = await addDoc(value, { name: name, price: totalRoomCost, occupents: occupents, checkInDate: checkInDate, checkOutDate: checkOutDate, roomID: data.state.roomId, roomtype: roomName })

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
      roomName: data.state.roomNAME,
      roomID: data.state.roomId,
      price: totalRoomCost,
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
    console.log("line150 -------------", data.state.roomNAME);

    // book()

    // if (!availability) {
    //   alert('The room is available for the selected dates.');
    //   // book()
    //   // alert("Congratulations, We have booked your room")

    //   return;
    // } else {
    //   alert("The room is available for the selected dates")
    // }









    // try {

    //   //const price = getDocs(collection(database, "AddNewRooms"))

    //   // Reference the 'bookings' collection

    //   const bookingRef = await addDoc(collection(database, 'bookings'), newBooking);
    //   // Add the booking data to Firestore

    //   console.log("Booking ref id", bookingRef.id);
    //   setName('');
    //   setOccupents('');
    //   setCheckInDate('');
    //   setCheckOutDate('');
    //   setRoomID(data.state.roomId);
    //   setRoomName(roomName)
    //   setPrice('');
    //   setTotalCost(price);

    //   // alert("congratulations we have booked your room")


    // } catch (error) {

    //   console.log('Error adding booking:', error);

    // }

    setNewBookings(newBooking)
  };


  // const checkAvailability = async (newBooking) => {

  //   const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4'
  //   const url = `https://firestore.googleapis.com/v1/projects/hotel-lll/databases/(default)/documents/bookings`;

  //   let isRoombooked = false

  //   await fetch(url).then(

  //     response => {


  //       return (response.json())
  //     }
  //   ).then(
  //      (json) => {

  //       const documents = json.documents

  //       // console.log(json);




  //        documents.some(doc => {
  //         const idarray = doc.name.split('/')


  //         const bookingId = idarray[idarray.length - 1];

  //         const roomId = doc.fields.roomID?.stringValue
  //         // const roomType = doc.fields.roomName?.stringValue
  //         const checkIn = doc.fields.checkInDate?.stringValue
  //         const checkOut = doc.fields.checkOutDate?.stringValue

  //         const roomIDName = newBooking?.roomID
  //         const roomCheckin = newBooking?.checkInDate
  //         const roomCheckOut = newBooking?.checkOutDate
  //         // console.log(roomType);

  //         // if(roomId == newBooking.roomID){
  //         //   console.log("Booked room", roomId );
  //         // }
  //         // else{
  //         //   console.log("Available",  roomId);
  //         // }

  //         console.log('new booking ', newBooking);




  //         // check if room is available to book

  //         if (roomId === newBooking?.roomID) {
  //           console.log("Booked room", roomIDName, roomId);


  //           if (checkIn === newBooking?.checkInDate) {
  //             console.log("Booked Check in date ===", roomCheckin, checkIn);
  //             isRoombooked = true;

  //             // alert("This room is Booked");
  //           }else if (checkIn >= newBooking?.checkInDate) {
  //             console.log("Booked  Check in date ===", roomCheckin, checkIn);
  //             // console.log();(" This room is Booked");
  //             isRoombooked = true;
  //           }
  //           else if (checkOut === newBooking?.checkOutDate) {
  //             console.log("Booked  Check Out date ===", roomCheckOut, checkOut);
  //             isRoombooked = true;

  //             // alert(" This room is Booked");
  //           }

  //           else if (checkOut <= newBooking?.checkOutDate) {
  //             console.log("Booked  Check Out date ===", roomCheckOut, checkOut);
  //             isRoombooked = true;

  //             // console.log();(" This room is Booked");
  //           }
  //           else {
  //             console.log("Room is available 1");
  //             // isRoombooked = true;
  //             // alert(" This Room is available 1");
  //             // book()
  //             // alert("Congratulations, We have booked your room")
  //           }
  //         }

  //         else {
  //           // alert("Room is available");
  //           // book()
  //           // alert("Congratulations, We have booked your room")
  //         }

  //         if (isRoombooked) {
  //           console.log(isRoombooked);
  //           alert("This room is Booked");
  //         } else {
  //           console.log(isRoombooked);
  //           alert("The Room is Available for booking");
  //         }





  //         // if (roomId === newBooking?.roomID) {
  //         //   console.log("Booked room", roomIDName, roomId);
  //         // }
  //         // else if (checkIn === newBooking?.checkInDate) {
  //         //   console.log("Booked Checkinhg date ===", roomCheckin, checkIn);
  //         // } 
  //         // else if (checkOut === newBooking?.checkOutDate) {
  //         //   console.log("Booked room", roomCheckOut, checkOut);
  //         // }
  //         // else {
  //         //   console.log("Room is not available");
  //         // }



  //         // myMenuArray.push({
  //         //   bookingId : bookingId ,
  //         //     ...doc.fields.
  //         // })


  //       })



  //       // alert( (isRoombooked ? "This room is Booked": "The Room is Available"));
  //       // console.log(" records ..........", myMenuArray);

  //       // setNewBooking(myMenuArray)


  //     }
  //   ).catch(
  //     error => console.log("error", error)
  //   )
  //   // .finally(() => {

  //   //   if (isRoombooked) {
  //   //     console.log(isRoombooked);
  //   //     alert("This room is Booked")

  //   //   } else {
  //   //     console.log(isRoombooked);

  //   //     alert("The Room is Available")

  //   //   }
  //   // })

  // }

  // const checkAvailability = async (newBooking) => {
  //   const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4';
  //   const url = `https://firestore.googleapis.com/v1/projects/hotel-lll/databases/(default)/documents/bookings`;
  //   let isRoombooked = false;

  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const documents = json.documents;

  //       documents.some((doc) => {
  //         const idarray = doc.name.split('/');
  //         const bookingId = idarray[idarray.length - 1];
  //         const roomId = doc.fields.roomID?.stringValue;
  //         const checkIn = doc.fields.checkInDate?.stringValue;
  //         const checkOut = doc.fields.checkOutDate?.stringValue;

  //         const roomIDName = newBooking?.roomID;
  //         const roomCheckin = newBooking?.checkInDate;
  //         const roomCheckOut = newBooking?.checkOutDate;

  //         console.log('new booking ', newBooking);

  //         if (roomId === newBooking?.roomID) {
  //           console.log("Booked room", roomIDName, roomId);

  //           if (checkIn === newBooking?.checkInDate) {
  //             console.log("Booked Check in date ===", roomCheckin, checkIn);
  //             isRoombooked = true;
  //           } else if (checkIn >= newBooking?.checkInDate) {
  //             console.log("Booked  Check in date ===", roomCheckin, checkIn);
  //             isRoombooked = true;
  //           } else if (checkOut === newBooking?.checkOutDate) {
  //             console.log("Booked  Check Out date ===", roomCheckOut, checkOut);
  //             isRoombooked = true;
  //           } else if (checkOut <= newBooking?.checkOutDate) {
  //             console.log("Booked  Check Out date ===", roomCheckOut, checkOut);
  //             isRoombooked = true;
  //           } else {
  //             console.log("Room is available");
  //           }
  //         }
  //         return isRoombooked;
  //       });


  //     })
  //     .catch(
  //       (error) => console.log("error", error)
  //     ).finally(()=>{


  //       if (isRoombooked == true) {
  //         console.log(isRoombooked);
  //         alert("This room is Booked");
  //       } else {
  //         console.log(isRoombooked);
  //         alert("The Room is Available for booking");
  //         // book()
          
  //       }
  //     });
  // };


  const checkAvailability = async (newBooking) => {
    const key = 'AIzaSyDta77butI5H-YwVKXt4f0j9iz0KhdVqN4';
    const url = `https://firestore.googleapis.com/v1/projects/hotel-lll/databases/(default)/documents/bookings`;
    let isRoombooked = false;
  
    await fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const documents = json.documents;
  
        documents.forEach((doc) => {
          const idarray = doc.name.split('/');
          const bookingId = idarray[idarray.length - 1];
          const roomId = doc.fields.roomID?.stringValue;
          const checkIn = doc.fields.checkInDate?.stringValue;
          const checkOut = doc.fields.checkOutDate?.stringValue;
  
          const roomIDName = newBooking?.roomID;
          const roomCheckin = newBooking?.checkInDate;
          const roomCheckOut = newBooking?.checkOutDate;
  
          console.log('new booking ', newBooking);
  
          if (roomId === newBooking?.roomID) {
            console.log("Booked room", roomIDName, roomId);
  
            if (checkIn === newBooking?.checkInDate || checkOut === newBooking?.checkOutDate) {
              console.log("Booked Check in/out date ===", roomCheckin, checkIn, roomCheckOut, checkOut);
              isRoombooked = true;
            }
          }
        });
  
        if (isRoombooked === true) {
          console.log(isRoombooked);
          alert("This room is Booked");
        } else if(isRoombooked === false) {
          console.log(isRoombooked);
          alert("The Room is Available for booking");
          // book()
          // alert("Congratulations this room is booked for the selected dates")
        }
      })
      .catch((error) => console.log("error", error));
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

      <div className="card">

        <div className="container">
          <h3>{name}</h3>
          {/* //<h4>Room Type {bookings.roomId}</h4> */}
          <h5>Room Type: {roomName} </h5>

          <p>Total Cost: R {totalRoomCost}</p>
          <p>Occupents: {occupents}</p>
          <p>Check-in: {checkInDate}</p>
          <p>Check-out: {checkOutDate}</p>
        </div>

      </div>

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

