import React from "react";
import Hero from "../views/hero";
import Portfolio from "../views/portfolio";
import Services from "../views/services";
import VideoView from "../views/video";

const Home = () => {
  return (
    <div>
      <Hero />
      <VideoView />
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;
