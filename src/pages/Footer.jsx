import React from 'react'

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (

    <>
    
    <MDBFooter bgColor='rgba(0, 0, 0, 0.05)'  className='text-center text-lg-start text-muted' style={{ paddingTop: 10 ,backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Sky Hotel
              </h6>
             
              <p>One of the Finest Hotels in Johannesburg.</p>
              
              <br/>
              <p> With the Finest rooms in the country, we can assure you that we will provide the best 
              services that will make your stay unforgettable.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Location</h6>
              <p>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.662303051203!2d28.264556776043964!3d-25.74867887736008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560451d408f9d%3A0xb180e978338dcefd!2smLab%20Southern%20Africa!5e0!3m2!1sen!2sza!4v1689319671347!5m2!1sen!2sza"
               width="400" height="300" 
               style= {{border: "0"}}
               allowfullscreen="" 
               loading="lazy" 
               referrerpolicy="no-referrer-when-downgrade"></iframe>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
             
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Innovation Hub, Petoria South Africa
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                SkyHotel@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />  011 123 4321
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 083 234 5678
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    
    </>
    
  )
}
