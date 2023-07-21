import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import SkyHotel from '../images/SkyHotel.png'
import { getAuth, signOut } from 'firebase/auth';




export default function Navbar() {

	const [userRole, setUserRole] = useState('')

	const adminLinks = document.querySelectorAll('.admin')
	const guestsLinks = document.querySelectorAll('.all')



	const setUP = (role) => {

		setUserRole(role)
		console.log(setUserRole);

		if (role === "guest") {
			adminLinks.forEach(item => item.style.display = "none")
			guestsLinks.forEach(item => item.style.display = "block")
		}
		else {

			{userRole === "admin"&& adminLinks.forEach(item => item.style.display = "block")}
			{userRole === "admin" && guestsLinks.forEach(item => item.style.display = "block")}

		}

	}


	const navigate = useNavigate('')

	const logout = () => {

		const auth = getAuth();
		signOut(auth).then(() => {
			alert("User has logged out Successfully")
			navigate('/login')
		})
	}

	return (
		<>

			<nav className='navMenu'>
				<h3>_.::._ Sky_Hotel _.::._</h3>

				{ <Link to='/editHome' className='admin'> Edit Home  </Link>} {/* //admin only */}
				{<Link to='/EditRoom' className='admin'> Edit Rooms </Link>}
				<Link to='/' className='all'> Home  </Link>
				<Link to='/Rooms' className='all'> Rooms  </Link>
				<Link to='/bookings' className='all'> Bookings  </Link>
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
