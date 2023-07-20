import React from "react";

import hero from "../images/hero.jpg"
import room1c from "../images/room1c.jpg"
import { Link, NavLink } from "react-router-dom";

export default function SingleCard({ room }) {
    
    console.log( room)

    return (



        <>


            {/* <div class="card">
                <img src={hero} alt="Avatar"  />
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div> */}

            <div key={room.id} class="card">
                <img src={room.images[0]} alt="Avatar" />
                <h4><b>{room.type}</b></h4>
                <p>With a choice of our incredible bachelor rooms,<br></br> boasting extra-length king- beds and a kitchen in every room,as well as our Deluxe and Executive
                    Suites featuring some of the largest suites in the city.</p>
                <p>Room Number: {room.room} </p>
                <p>Price: R {room.price} </p>
                <p>Occupents: {room.occupents}</p>
                <p>Number of Bed: {room.beds} </p>
                <Link to={"room"} state ={{room:room }} className='button'><button className='btnsign'> More Details </button></Link>
            </div>

            {/* <div className="card">
                {ooms.map((room) => (
                    <div key={room.id} className="container">
                        <h3>{room.name}</h3>
                        //<h4>Room Type {bookings.roomId}</h4>
                        <p>Room Number: {room.Rooms} </p>
                <p>Price: R {room.price1} </p>
                <p>Occupents: {room.occupents1}</p>
                <p>Number of Bed: {room.beds1} </p>
                <div className='button'><button className='btnsign'> More Details </button></div>
                    </div>
                ))}
            </div> */}
            
            {/* <div class="wrapper">
                <h1>PHILIPPINES</h1>
                <div class="image i1"></div>
                <div class="details"><h1><em>Boracay Island</em></h1>
                    <h2>Surfer's Home</h2>
                    <p>3 Days - 2 Nights</p></div>
                <h1>£750</h1>

            </div> */}
        </>
    )
}
