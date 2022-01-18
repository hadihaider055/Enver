import React from "react";
import Layout from "../components/layout";
import Contact from "../views/contact";
import Hero from "../views/hero";
import Portfolio from "../views/portfolio";
import Services from "../views/services";
import VideoView from "../views/video";
import { SEO } from "../components";

const Home = () => {
  return (
    <Layout>
      <SEO
        seo={{
          title: "Home",
          description:
            "Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.",
        }}
      />
      <Hero />
      <VideoView />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default Home;
