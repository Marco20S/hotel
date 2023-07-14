import React from 'react'

import SingleCard from '../components/singleCard'
import Footer from '../pages/Footer'

export default function Rooms() {
  return (
    <div>

      <h1 style={{alignItems: 'center'}}>Rooms</h1>
      <br></br>


      <p className='small'>With a choice of our incredible bachelor rooms, boasting extra-length king- beds and a kitchen in every room, <br/>
      as well as our Deluxe and Executive Suites featuring some of the largest suites in the city at impressively<br/> affordable rates, we have the perfect room for any occasion.
          </p>

          <p className='small'>We have the provided rooms available below:</p>


      <section className="main-container">

        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />

      </section>

      <section className='footer'>
        <br/>
        <br/>
        <Footer />
      </section>


    </div>


  )
}
