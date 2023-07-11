import React from 'react'

import Footer from './Footer'
import Welcome from '../components/welcome'
import SingleCard from '../components/singleCard'


export default function Home() {

  return (

    <>
      <section>

        <Welcome/>
        
      </section>


      <section className="main-container">
      <SingleCard/>
     
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>

      </section>

      <section className='footer'>
        <Footer />
      </section>


    </>
  )
}

