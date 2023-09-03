import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const MainDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://xclicker.xyz" />
                <Script
                    async
                    src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2302639948729272"}
                    strategy="lazyOnload"
                    crossOrigin="anonymous"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MainDocument;
