/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "../styles/globals.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import Nav from "../components/Nav";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "XClicker - Autoclicker For Linux",
  description: "A fast gui autoclicker for linux",
  openGraph: {
    title: "Social credit",
    images: "/embed.png",
    siteName: "XCLicker",
    url: "https://xclicker.xyz",
    description: "A fast gui autoclicker for linux"
  },
  other: {
    "google-site-verification": "UZOj4M_ugOJQPcEAqmfrahzsftorK6dvp0vAmcbldIg"
  }
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2302639948729272"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-custom_gray_medium text-white">
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
