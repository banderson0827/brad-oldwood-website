import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false} className="relative">
      {images.map((image, index) => (
        <div key={index} className="w-[600px] items-center justify-center flex">
          <Image
            src={image} 
            alt={`Image ${index + 1}`}
            width="600"
            height="800"
            className="w-[600px] object-cover max-h-[800px] 2xl:max-h-[900px] items-center justify-center"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
