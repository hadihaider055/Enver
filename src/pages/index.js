import React from "react";
import Hero from "../views/hero";
import Services from "../views/services";
import VideoView from "../views/video";

const Home = () => {
  return (
    <div>
      <Hero />
      <VideoView />
      <Services />
    </div>
  );
};

export default Home;
