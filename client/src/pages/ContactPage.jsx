import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../components/ContactUs";

function Contact() {

  return (
    <>
      <Helmet>
        <title>Contact Us | Tana Tech Studios</title>
        <meta name="description" content="Get in touch with Tana Tech Studios. We provide tech solutions and digital services to elevate your business." />
      </Helmet>

      <ContactUs/>
      
    </>
  );
}

export default Contact;
