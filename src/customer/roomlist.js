import React, { useEffect, useState } from 'react'
import { database } from '../config/firebase'
import { collection, query, getDocs } from 'firebase/firestore';

import room1c from "../images/room1c.jpg";
import SingleCard from '../components/singleCard';


export default function Roomlist() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {

                // Fetch all Rooms from Firestore

                const snapshot = await getDocs(collection(database, 'AddNewRooms'))

                const roomData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log(roomData);
                setRooms(roomData);
            } catch (error) {
                console.log('Error fetching Rooms:', error);
            }
        };
 
        fetchRooms();
       
    }, []);

 console.log(rooms.length);

    return (

        <>
            
{/* 
            <div class="card">
                {rooms.map((room) => (
                    <div >
                        <div key={room.id} class="container">
                            <img src={room1c} alt="Avatar" />
                            <h4><b>{room.type}</b></h4>
                            <p>With a choice of our incredible bachelor rooms,<br></br> boasting extra-length king- beds and a kitchen in every room,as well as our Deluxe and Executive
                                Suites featuring some of the largest suites in the city.</p>
                            <p>Room Number: {room.roomNumber} </p>
                            <p>Price: R {room.price} </p>
                            <p>Occupents: {room.occupents}</p>
                            <p>Number of Bed: {room.beds} </p>
                            <div className='button'><button className='btnsign'> More Details </button></div>
                        </div>
                    </div>
                ))}
            </div> */}

            {rooms.map((room) => (
                 <SingleCard room={room} />


            ))}

        </>

    )
}
