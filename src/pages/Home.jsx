import React from 'react'

import Footer from './Footer'
import Welcome from '../components/welcome'
import Slideshow from '../components/Slideshow'
import SingleCard from '../components/singleCard'
import homeHero from '../images/homeHero.jpg'
import image1 from '../images/image1.jpg'
import roomdisplay from '../images/roomdisplay.jpg'
import Room1 from '../images/Room1.jpg'
import Room2 from '../images/room2.jpg'
import Room3 from '../images/room3.jpg'
import Ammenities from '../images/amenities.jpg'



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

        <div className="container">
          <div>
            <img src={homeHero} alt='hotel image' width={1200} height={550} style={{ alignItems: 'center' }} className='image' />
            {/* <img src={image1} alt='hotel image' width={500} height={350} style={{ alignItems: 'center' }} className='image' /> */}
            <div className="overlay">
              <div className="text">Hello World And Welcome to Sky Hotel</div>
            </div>
          </div>
        </div>


        <br />
        <br />

        <h3>Rooms</h3>
--+




        <p className='small'>With a choice of our incredible bachelor rooms, boasting extra-length king- beds and a kitchen in every room,<br></br>as well as our Deluxe and Executive
          Suites featuring some of the largest suites in<br /> the city at impressively affordable rates. Here are some pctures of our suites </p>


        <Slideshow />

        {/* <Ammenities></Ammenities> */}

        <br />
        <br />

        <h3>Ammenitie</h3>

        <p className='small'>With a choice of our incredible bachelor rooms, boasting extra-length king- beds and a kitchen in every room,<br></br>as well as our Deluxe and Executive
          Suites featuring some of the largest suites in<br /> the city at impressively affordable rates. Here are some pctures of our suites </p>

        <div className="container">
          <div>
            <img src={Ammenities} alt='hotel image' width={1200} height={550} style={{ alignItems: 'center' }} className='image' />
            {/* <img src={image1} alt='hotel image' width={500} height={350} style={{ alignItems: 'center' }} className='image' /> */}
            {/* <div className="overlay">
              <div className="text"> Sky Hotel</div>
            </div> */}
          </div>
        </div>


      </section>

      <section className='footer'>

        <br />
        <br />
        <Footer />
      </section>


    </>
  )
}

