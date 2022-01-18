import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import * as styles from "./styles.module.scss";
import Slider from "react-slick";

const Portfolio = () => {
  const settings = {
    infinite: true,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    speed: 1500,
    noSwiping: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          spaceBetween: 10,
        },
      },
    ],
  };
  const slider = useRef(null);

  return (
    <div
      id="portfolio"
      className="mt-28 max-w-screen-xl w-full mx-auto px-6 relative"
    >
      <div className="">
        <h2 className="font-nunito text-white text-5xl font-bold tracking-wide">
          Our Awesome Portofolio
        </h2>
        <StaticImage
          src={"../../images/circles.png"}
          alt="Circles"
          className="absolute top-20 right-5 md:right-28"
          width={50}
          height={50}
        />
        <span className={styles.herobgDown}></span>
      </div>
      <Slider {...settings} ref={slider}></Slider>
    </div>
  );
};

export default Portfolio;
