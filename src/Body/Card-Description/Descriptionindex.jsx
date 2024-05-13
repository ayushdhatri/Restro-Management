import React from 'react';
import Carousel from './Carousel/carousel.jsx';
import Images from '../images.js'
import "./Descriptionindex.css"
import Restaurantdetails from './Restaurantsdetails/Restaurantdetails.jsx';

const Descriptionindex = () => {
  return (
    <>
    <div className='carousel-div'>
      <Carousel images={Images}/>
      <Restaurantdetails/>
    </div>
    </>
  );
};

export default Descriptionindex;
