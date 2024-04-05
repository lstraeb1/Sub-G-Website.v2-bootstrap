import React from 'react';
import App from 'next/app';
import '../styles/globals.css'; // Import global styles here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;