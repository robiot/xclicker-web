import Head from "next/head";
import Script from "next/script";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
