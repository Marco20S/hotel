import React from 'react';
import { Link } from 'react-router-dom';

import SkyHotel from '../images/SkyHotel.png'
import { getAuth, signOut } from 'firebase/auth';



export default function Navbar() {

	const logout = () => {

		const auth = getAuth();
		signOut(auth).then(() => {
			alert("User has logged out Successfully")
		})
	}

	return (
		<>

			<nav className='navMenu'>
				Logo

				<Link to='/editHome'> Edit Home  </Link> {/* //admin only */}
				<Link to='/EditRoom'> Edit Rooms </Link>
				<Link to='/'> Home  </Link>
				<Link to='/Rooms'> Rooms  </Link>
				<Link to='/bookings'> Bookings  </Link>
				<button type='submit' onClick={logout} className="btnsign"> Signout</button>
				<div className="dot"></div>
			</nav>
			<br />

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
