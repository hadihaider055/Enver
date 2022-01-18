import React from "react";
import * as styles from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../components/button";

const Hero = () => {
  return (
    <div id="home">
      <span className={styles.herobg}></span>
      <div className="max-w-screen-xl w-full px-6 mx-auto flex items-center justify-center md:justify-between flex-col md:flex-row">
        <div>
          <h1 className="font-sans text-white text-6xl font-bold tracking-wide">
            Build Your <br /> Awesome <br /> Platform
          </h1>
          <p className="font-nunito text-primary font-normal tracking-wide mt-10">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <Button title="Our Services" width="w-44" destination="services" />
        </div>
        <div className="w-full">
          <StaticImage
            src={"../../images/home.png"}
            alt="hero"
            placeholder="blurred"
            className="w-full"
          />
        </div>
      </div>
      <span className={styles.herobgDown}></span>
    </div>
  );
};

export default Hero;
