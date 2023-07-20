import React from 'react'
import Footer from '../pages/Footer'
import { useLocation } from 'react-router-dom'
import { logDOM } from '@testing-library/react';




export default function Room() {

    const data = useLocation().state; 

    console.log(data.room.images);



  return (
    <div>
        
        <h1>Room </h1>
        
        
        <br/>
        <br/>
        <br/>
        <br/>
        

    <section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<div class="controls">
					<i hidden class="material-icons">share</i>
					<i hidden class="material-icons">favorite_border</i>
				</div>
				<img src={data.room.images[0]} alt="green apple slice"/>
			</div>
			<div class="photo-album">
				<ul>
					<li><img src={data.room.images[0]} alt="green apple"/></li>
					<li><img src={data.room.images[1]} alt="green apple"/></li>
					<li><img src={data.room.images[2]} alt="green apple"/></li>
					{/* <li><img src={data.images[0]} alt="green apple"/></li> */}
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>{data.room.type}</h1>
			
		</div>
		<div class="price">
			R <span>{data.room.price}</span>
		</div>
		
		<div class="description">

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
		<button class="btnsign">Book Now</button>
	</div>
</section>

<br/>
<br/>

<Footer/>

</div>
  )
}
