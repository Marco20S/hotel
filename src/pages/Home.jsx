import React from 'react'

import Footer from './Footer'
import Welcome from '../components/welcome'
import SingleCard from '../components/singleCard'
import homeHero from '../images/homeHero.jpg'


export default function Home() {

  return (

    <>
      <section>

        <Welcome />

      </section>
      <br />
      <br />

      <section className="main-container-header">

        <h1>Welcome to the Sky Hotel</h1>
        <br />

        <h3 > One of the Finest Hotels in Johannesburg</h3>
        <br />

        {/* <p>---------------------------------------------------------------------</p> */}

        <br />

        <p className='small'>With a choice of our incredible bachelor rooms,<br></br> boasting extra-length king- beds and a kitchen in every room,as well as our Deluxe and Executive
          Suites featuring some of the largest suites in<br /> the city at impressively affordable rates, we have the perfect room for any occasion.
          The Sky Hotel has all-day dining for breakfast, lunch and dinner.</p>

        {/* <SingleCard/> */}
        <br></br>

        <div class="container">
          <div>
            <img src={homeHero} alt='hotel image' width={1200} height={750} style={{ alignItems: 'center' }} className='image' />
            <div class="overlay">
              <div class="text">Hello World And Welcome to Sky Hotel</div>
            </div>
          </div>
        </div>


        <br />

        <h3>Rooms</h3>

        <p className='small'>With a choice of our incredible bachelor rooms,<br></br> boasting extra-length king- beds and a kitchen in every room,as well as our Deluxe and Executive
          Suites featuring some of the largest suites in<br /> the city at impressively affordable rates. Here are some pctures of our suites </p>



      </section>

      <section className='footer'>

        <br />
        <br />
        <Footer />
      </section>


    </>
  )
}

