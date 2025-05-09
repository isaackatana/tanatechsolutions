import React from "react";
import { Helmet } from "react-helmet";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Tana Tech Studios</title>
        <meta name="description" content="Learn more about Tana Tech Studios, our mission, and the team behind the innovation." />
      </Helmet>

      <AboutUs/>
    </>
  );
}

export default About;
