import React from "react";
import { Helmet } from "react-helmet";
import ServicesList from "../components/ServicesList";

function Services() {

  return (
    <>
      <Helmet>
        <title>Services | Tana Tech Studios</title>
        <meta name="description" content="Explore the services we offer at Tana Tech Studios." />
      </Helmet>
      <ServicesList/>
    </>
  );
}

export default Services;
