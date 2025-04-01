import React from 'react'
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <>
    <Helmet>
        {/* Meta Title */}
        <title>Contact Us | Tana Tech Studios – Get in Touch</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get in touch with Tana Tech Studios for inquiries about web development, AI solutions, and custom software. Let's bring your ideas to life!"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="contact Tana Tech Studios, tech support, web development inquiries, AI consulting, software solutions, get in touch"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Contact Us | Tana Tech Studios – Get in Touch" />
        <meta
          property="og:description"
          content="Reach out to Tana Tech Studios for top-tier tech solutions. We're here to help with web development, AI, and custom software."
        />
        <meta property="og:image" content="https://yourwebsite.com/contact-og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Tana Tech Studios – Get in Touch" />
        <meta
          name="twitter:description"
          content="Have questions? Contact Tana Tech Studios for expert tech solutions in web development, AI, and software engineering."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/contact-twitter-image.jpg" />
      </Helmet>
    <div>Contact</div>
    </>
  )
}

export default Contact