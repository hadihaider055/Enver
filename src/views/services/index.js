import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { data } from "./data";
import ServiceCard from "../../components/service-card";
import * as styles from "./styles.module.scss";

const Services = () => {
  return (
    <div
      id="services"
      className="mt-28 max-w-screen-xl w-full mx-auto px-6 relative"
    >
      <span className={styles.herobg}></span>
      <div className="md:w-1/2 mx-auto">
        <StaticImage
          src={"../../images/triangles.png"}
          alt="Triangles"
          className="absolute -top-16  md:left-28"
          width={50}
          height={50}
        />
        <h2 className="md:text-center font-nunito text-white text-5xl font-bold tracking-wide">
          The Service We Provide For You
        </h2>
        <StaticImage
          src={"../../images/add.png"}
          className="absolute top-24 md:top-16 right-0 md:right-20 rotate-12"
          width={40}
          height={40}
          alt="Add Icon"
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-[400px] w-full mx-auto text-center p-5"
          >
            <ServiceCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
