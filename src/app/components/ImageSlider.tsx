// Third Party Components Depending on client-only features
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import Image from "next/image";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image
            src="https://images.pexels.com/photos/15918322/pexels-photo-15918322.jpeg"
            alt="Coffee and a bunch of tulips"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/350345/pexels-photo-350345.jpeg"
            alt="Bouquet of tulips near coffee mug"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/291629/pexels-photo-291629.jpeg"
            alt="Flat lay photography of cup filled with coffee"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/20567363/pexels-photo-20567363.jpeg"
            alt="Cup of coffee next to a vase of tulips"
            width={500}
            height={500}
          />
        </div>
      </Slider>
    </div>
  );
}
