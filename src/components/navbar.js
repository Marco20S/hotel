import React from 'react';
import { Link } from 'react-router-dom';

import SkyHotel from '../images/SkyHotel.png'



export default function Navbar() {

	return (
		<>
		
			<nav className='navMenu'>
				Logo

				<Link to='/editHome'> Edit Home  </Link>
				<Link to='/EditRoom'> Edit Rooms </Link>
				<Link to='/'> Home  </Link>
				<Link to='/Rooms'> Rooms  </Link>
				<Link to='/bookings'> Bookings  </Link>
				<button type='submit' className="btnsign"><a href='/login'> Signout</a></button>
				<div className="dot"></div>
			</nav>
			<br/>

			{/* <body>
				<nav class="navMenu">
				<a href='/'> Home </a>
				<a href='/Rooms'> Rooms </a>
				<a href='/bookings'> Bookings </a>
				<a href='/login'> Signout</a>
					<div class="dot"></div>
				</nav>
			</body> */}


		</>
	);
}

;
