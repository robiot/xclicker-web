import Head from "next/head";
import Script from "next/script";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://xclicker.xyz" />
      </Head>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7904229907530891"
        crossOrigin="anonymous"
      ></Script>

      <Component {...pageProps} />
    </>
  );
};

export default App;
