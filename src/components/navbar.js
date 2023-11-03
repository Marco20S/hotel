import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserRoleContext } from "./userRoleContext";


import SkyHotel from '../images/SkyHotel.png'
import { getAuth, signOut } from 'firebase/auth';




export default function Navbar({ setUP }) {

	//const [userRole, setUserRole] = useState('')
	const { userRole } = useContext(UserRoleContext);

	console.log(userRole);
	const navigate = useNavigate('')

	const adminLinks = document.querySelectorAll('.admin')
	const guestsLinks = document.querySelectorAll('.all')



	// const setUP = (role) => {

	// 	setUserRole(role)
	// 	console.log(setUserRole);

	// 	if (role === "guest") {
	// 		adminLinks.forEach(item => item.style.display = "none")
	// 		guestsLinks.forEach(item => item.style.display = "block")
	// 	}
	// 	else {

	// 		{userRole === "admin"&& adminLinks.forEach(item => item.style.display = "block")}
	// 		{userRole === "admin" && guestsLinks.forEach(item => item.style.display = "block")}

	// 	}

	// }




	const logout = () => {

		const auth = getAuth();
		signOut(auth).then(() => {
			alert("User has logged out Successfully")
			navigate('/login')
		})
	}

	// const login  =(e)={

	// 	navigate('/')

	// }

	return (
		<>

			<nav className='navMenu'>
				<h3>_.::._ Sky_Hotel _.::._</h3>

				{userRole && userRole.role === "admin" && (<Link to='/editHome' className='admin'> Edit Home  </Link>)}
				{userRole && userRole.role === "admin" && (<Link to='/EditRoom' className='admin'> Edit Rooms </Link>)}

				<Link to='/' className='all'> Home  </Link>
				<Link to='/Rooms' className='all'> Rooms  </Link>
				<Link to='/bookings' className='all'> Bookings  </Link>
				{userRole !== null ? <button type='submit' onClick={logout} className="btnsign"> Signout</button> :
					<button type='submit' onClick={() => { navigate('/login') }} className="btnsign"> Login</button>}
				{/*   */}
				<div className="dot"></div>
			</nav>
			<br />

			{/* <body>
				<nav className="navMenu">
				<a href='/'> Home </a>
				<a href='/Rooms'> Rooms </a>
				<a href='/bookings'> Bookings </a>
				<a href='/login'> Signout</a>
					<div className="dot"></div>
				</nav>
			</body> */}


		</>
	);
}

;
