import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Image1 from './image1.jpg';
import Image2 from './image2.jpg';
import Image3 from './image3.jpg';
import Image4 from './image4.jpg';
import './carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='carousel'>
      <Slider {...settings}>
        <div>
          <h2 className='title-description'>Bargains Abound!</h2>
          <p className='description'>
            Save 20% on 4+ Used Books from our Bargain Bin!
          </p>
          <img className='image' src={Image1} alt='' />
        </div>
        <div>
          <p className='description2'> Reading Shapes You</p>
          <img className='image' src={Image2} alt='' />
        </div>
        <div>
          <img className='image' src={Image3} alt='' />
        </div>
        <div>
          <h2 className='description3'>And you, why do you read?</h2>
          <img className='image' src={Image4} alt='' />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
