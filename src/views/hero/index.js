import React from "react";
import Layout from "../../components/layout";
import * as styles from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <Layout>
      <div>
        <span className={styles.herobg}></span>
        <div className="max-w-screen-xl w-full px-6 mx-auto flex items-center justify-center md:justify-between flex-col md:flex-row">
          <div>
            <h1 className="font-sans text-white text-6xl font-bold tracking-wide">
              Build Your <br /> Awesome <br /> Platform
            </h1>
            <p className="font-nunito text-primary font-normal tracking-wide mt-10">
              Enver studio is a digital studio that offers several services such
              as UI/UX Design to developers, we will provide the best service
              for those of you who use our services.
            </p>
            <button
              type="button"
              className="text-white bg-secondary hover:bg-secondaryDark transition duration-700 ease-in-out rounded-lg px-5 py-4 w-44 mt-10 flex items-center justify-between font-nunito text-lg"
            >
              Our Services <FiArrowUpRight fontSize={24} />
            </button>
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
    </Layout>
  );
};

export default Hero;
