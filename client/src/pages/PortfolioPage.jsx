import React from "react";
import { Helmet } from "react-helmet";
import PortfolioList from "../components/PortfolioList";

function Portfolio() {


  return (
    <>
      <Helmet>
        <title>Portfolio | Tana Tech Studios</title>
        <meta name="description" content="Explore the projects and work we've done at Tana Tech Studios." />
      </Helmet>

      <PortfolioList/>
    </>
  );
}

export default Portfolio;
