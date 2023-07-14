import React from "react";

import hero from "../images/hero.jpg"
import room1c from "../images/room1c.jpg"

export default function SingleCard() {
    return (

        <>

            {/* <div class="card">
                <img src={hero} alt="Avatar"  />
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div> */}

            <div class="card">
                <img src={room1c} alt="Avatar"  />
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>With a choice of our incredible bachelor rooms,<br></br> boasting extra-length king- beds and a kitchen in every room,as well as our Deluxe and Executive
                    Suites featuring some of the largest suites in the city.</p>
                    <p>Price: R </p>
                    <div className='button'><button className='btnsign'> More Details </button></div>
                </div>
            </div>
{/* 
            <div class="wrapper">
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
