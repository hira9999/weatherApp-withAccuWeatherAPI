import React from 'react';
import NextHead from 'next/head';

const Head = () => {
  return (
    <>
      <NextHead>
        <title>eyeoftheTyphoon</title>
        <meta name="description" content="Take a rain check" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UFT-8" />
        {/* favicon */}
        <link
          rel="icon"
          href="/favicon/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/favicon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link rel="mask-icon" href="/favicon/favicon.ico" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Snippit" />
        <meta name="application-name" content="Typhoon" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EyeoftheTyphoon" />
        <meta property="og:description" content="Take a rain check" />
        <meta property="og:url" content="https://eyeoftheTyphoon.vercel.app" />
        <meta property="og:site_name" content="EyeoftheTyphoon" />
        <meta property="og:image" content="" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="EyeoftheTyphoon" />
        <meta name="twitter:description" content="Take a rain check" />
        <meta name="twitter:creator" content="hira99" />
        <meta name="twitter:image" content="" />
      </NextHead>
    </>
  );
};

export default Head;
