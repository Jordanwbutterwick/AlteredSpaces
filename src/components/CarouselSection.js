import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function CarouselSection(props) {
  return (
    <Carousel>
      {props.items.map((item, index) => (
        <Carousel.Item key={index}>
          <Image
            width="100%"
            height="75%"
            layout="responsive"
            src={item.image}
            alt={item.caption}
          />
          <Carousel.Caption>
            <p>{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselSection;
