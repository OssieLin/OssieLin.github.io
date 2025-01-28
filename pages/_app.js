import '../styles/style.css'; // Assuming your CSS file is in the 'styles' directory
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // You can put any JavaScript code here that needs to run globally
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;