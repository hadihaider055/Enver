import React, { useState, useRef } from "react";
import * as styles from "./styles.module.scss";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { portfolioData } from "./data";

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
          slidesToShow: 3,
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
          spaceBetween: 5,
        },
      },
    ],
  };
  const slider = useRef(null);
  const next = () => {
    setclass("lostopacity");
    setTimeout(() => {
      setclass("fullopacity");
    }, 1000);
    slider.current.slickNext();
  };
  const previous = () => {
    setclass("lostopacity");
    setTimeout(() => {
      setclass("fullopacity");
    }, 1000);
    slider.current.slickPrev();
  };
  const [currentclass, setclass] = useState("fullopacity");

  return (
    <div
      id="portfolio"
      className="mt-28 max-w-screen-xl w-full mx-auto px-6 relative"
    >
      <div>
        <h2 className="font-nunito text-white text-5xl font-bold tracking-wide">
          Our Awesome Portofolio
        </h2>
        <img
          src={require("../../images/circles.png").default}
          alt="Circles"
          className="absolute top-16 right-5 md:right-28"
          width={50}
          height={50}
        />
        <span className={styles.herobgDown}></span>
      </div>
      <div className="w-full">
        <div
          className={`flex absolute ${styles.reviewsBtnLeft} ${currentclass} bg-secondary rounded-full px-5 py-3  text-3xl z-10 text-white items-center justify-center cursor-pointer`}
          onClick={() => {
            previous();
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div
          className={`flex absolute right-0 ${styles.reviewsBtnRight} ${currentclass} bg-secondary rounded-full px-5 py-3 text-3xl z-10 text-white items-center justify-center cursor-pointer`}
          onClick={() => {
            next();
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="w-full">
          <Slider {...settings} ref={slider}>
            {portfolioData.map((item) => (
              <div key={item.id} className="flex w-full justify-center py-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-4/5 review-card p-5 md:p-20"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
