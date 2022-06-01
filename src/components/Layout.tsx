import Head from "next/head";

export default function Layout({ children, title, home = false }) {
  return (
    <div className="flex flex-col min-h-screen bg-custom_gray_medium text-white">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://xclicker.xyz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A fast gui autoclicker for linux"
          title="XClicker"
        />
        <meta
          name="google-site-verification"
          content="UZOj4M_ugOJQPcEAqmfrahzsftorK6dvp0vAmcbldIg"
        />
        <meta property="og:image" content="/embed.png" />
        <meta
          property="og:image:alt"
          content="A fast gui autoclicker for linux."
        />
        <meta property="og:site_name" content="XClicker" />
        <meta property="og:url" content="https://xclicker.xyz" />
        <meta
          property="og:description"
          content="A fast gui autoclicker for linux."
        />
        <meta property="og:title" content="XClicker" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7547559176584156"
          crossOrigin="anonymous"
        ></script>
        {/* <script>
      if (window.location.hostname == "xclicker.pages.dev") {
        window.location.href = "https://xclicker.xyz";
      }
    </script> */}

        <title>{home ? `XClicker - ${title}` : `${title} - XClicker`}</title>
      </Head>

      {children}
    </div>
  );
}
