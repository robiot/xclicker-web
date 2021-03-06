import Head from "next/head";

export default function Layout({ children, title, home = false }) {
  return (
    <div className="flex flex-col min-h-screen bg-custom_gray_medium text-white">
      <Head>
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

        <title>{home ? `XClicker - ${title}` : `${title} - XClicker`}</title>
      </Head>

      {children}
    </div>
  );
}
