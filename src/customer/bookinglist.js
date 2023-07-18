import React, { useEffect, useState } from 'react'
import { database } from '../config/firebase'
import { collection, query, getDocs } from 'firebase/firestore';


export default function Bookinglist({ }) {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {

                // Fetch all bookings from Firestore

                const snapshot = await getDocs(collection(database, 'bookings'))
                //where('roomId', '==', roomId))
                const bookingsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setBookings(bookingsData);
            } catch (error) {
                console.log('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <>
            <h2>Bookings:</h2>

            <div className="card">
                {bookings.map((booking) => (
                    <div key={booking.id} className="container">
                        <h3>{booking.name}</h3>
                        {/* //<h4>Room Type {bookings.roomId}</h4> */}
                        <p>Occupents: {booking.occupents}</p>
                        <p>Check-in: {booking.checkInDate}</p>
                        <p>Check-out: {booking.checkOutDate}</p>
                    </div>
                ))}
            </div>
            <br />
            <br />

            {/* 
            {bookings.map((booking) => (
                <div key={booking.id}>
                    <h3>{booking.name}</h3>
                    <p>Check-in: {booking.checkInDate}</p>
                    <p>Check-out: {booking.checkOutDate}</p>
                </div>
            ))} */}

        </>
    )
}
