import React, { useState } from 'react';

import Room1 from '../images/Room1.jpg'
import Room2 from '../images/room2.jpg'
import Room3 from '../images/room3.jpg'


const Slideshow = () => {
    const images = [
        Room1,
        Room2,
        Room3
     ];
    
     const [currentImage, setCurrentImage] = useState(0);
    
     const prevImage = () => {
        if (currentImage === 0) {
          setCurrentImage(images.length - 1);
        } else {
          setCurrentImage(currentImage - 1);
        }
     };
    
     const nextImage = () => {
        if (currentImage === images.length - 1) {
          setCurrentImage(0);
        } else {
          setCurrentImage(currentImage + 1);
        }
     };
    
     return (
        <div className="App">
          <div className="slider">
            <img src={images[currentImage]} alt="current" />
          </div>
          <div className="button-container">
            <button className='btnsign' onClick={prevImage}>Prev</button>
            <button  className='btnsign' onClick={nextImage}>Next</button>
          </div>
        </div>
     );
    }
export default Slideshow;