import React from 'react'
import Footer from '../pages/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { logDOM } from '@testing-library/react';




export default function Room() {
	const navigate = useNavigate('')



	const data = useLocation().state;

	console.log(data.room.images);



	return (
		<div>

			<h1>Room </h1>


			<br />
			<br />
			<br />
			<br />


			<section className="product">
				<div className="product__photo">
					<div className="photo-container">
						<div className="photo-main">
							<div className="controls">
								<i hidden className="material-icons">share</i>
								<i hidden className="material-icons">favorite_border</i>
							</div>
							<img src={data.room.images[0]} alt="green apple slice" />
						</div>
						<div className="photo-album">
							<ul>
								<li><img src={data.room.images[0]} alt="green apple" /></li>
								<li><img src={data.room.images[1]} alt="green apple" /></li>
								<li><img src={data.room.images[2]} alt="green apple" /></li>
								{/* <li><img src={data.images[0]} alt="green apple"/></li> */}
							</ul>
						</div>
					</div>
				</div>
				<div className="product__info">
					<div className="title">
						<h1>{data.room.type}</h1>

					</div>
					<div className="price">
						R <span>{data.room.price}</span>
					</div>

					<div className="description">

						<h3>DISCRIPTION</h3>


						<p></p>
						<h3>AMENITIES</h3>
						<ul>
							<li>Toiletries </li>
							<li>Coffee Kit</li>
							<li>TV</li>
							<li>Free WiFi internet access</li>
							<li> Free parking</li>
							<li> In-room beer taps</li>
							<li>In-room games</li>
							<li>Bar carts and cocktail stations</li>
						</ul>
					</div>
					<button className="btnsign" onClick={() => { navigate('/bookings', { state: { roomId: data.room.id , roomPrice:data.room.price }  }) }}>Book Now</button>
				</div>
			</section>

			<br />
			<br />

			<Footer />

		</div>
	)
}
