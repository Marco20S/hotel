import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Welcome() {

    const navigate = useNavigate('')

    const gotobookings = ((e) => {

        navigate('/bookings')
    })

    return (
        <>

            <div className='container'>
                <br />
                {/* <img src="../src/images/sandy.jpg" width="" /> */}

                <h1>Welcome to The Sky Hotel </h1>

                <h3>The coolest hotel in the South Coast!</h3>

                <br />
                <p className='small'>Come see for yourself why we are the most loved hotel for both local & international travellers!
                    </p>

                    {/* <p>With a choice of our incredible bachelor rooms,<br></br> boasting extra-length king- beds and a kitchen in every room,as well as our Deluxe and Executive
                    Suites featuring some of the largest suites in<br/> the city at impressively affordable rates, we have the perfect room for any occasion.
                    The VillaParade has all-day dining for breakfast, lunch and dinner.</p> */}

                <br />
                <div className='button'> <button className='btnsign' onClick={gotobookings} > Book Now </button></div>

            </div>



        </>
    )
}
