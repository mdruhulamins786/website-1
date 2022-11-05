import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand_1 from "../../../assets/brands/1.jpg";
import Brand_2 from "../../../assets/brands/2.jpg";
import Brand_3 from "../../../assets/brands/3.jpg";

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Brand_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Brand_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Brand_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
