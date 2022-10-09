import React from "react";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import ContactUs from "./Contact";
import Blog from "./Blog";
import Gallery from "./Gallery";

const ProjectView = () => {
  return (
    <>
      <LandingPage />
      <About />
      <Gallery />
      <Blog />

      <ContactUs />
    </>
  );
};

export default ProjectView;
