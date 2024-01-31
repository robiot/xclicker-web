/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { GitHub, Twitter } from "@material-ui/icons";
import { Navbar_item } from "./Navbar_item";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    setNavbar(!(window.scrollY <= 10));
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  });
  return (
    <>
      <a
        className="w-full bg-gray-800 items-center flex justify-center gap-5 pb-6 md:pb-3 p-3 flex-col text-center md:text-left md:flex-row"
        href="https://getnotan.com?rel=xclicker-banner"
      >
        <Image src="/notan.png" alt="notan" width={231} height={69} className="h-9 w-auto"/>

        <div className="flex flex-col">
          <span className="text-gray-300">
            I made a browser extension for taking <b>notes</b> for your{" "}
            <b>current page</b> without leaving the browser{" "}
            <span className="text-gray-300 underline">
              <b>Check it out</b>
            </span>
          </span>
        </div>
      </a>
      <div className={`sticky top-0 z-50 navbar ${navbar ? "active" : ""}`}>
        <div className="text-white flex items-center justify-between container-xl mx-auto px-4 h-16">
          {/* Left */}
          <div className="flex h-full">
            <Link href="/" className={`navbar-item ${!navbar ? "active" : ""}`}>
              <img src="/icon.png" className="h-12 mr-2" alt="Icon" />
              <div className="text-xl font-semibold">XClicker</div>
            </Link>

            <div className="hidden md:flex">
              <Navbar_item href="/downloads" navbar={navbar}>
                Downloads
              </Navbar_item>

              <Navbar_item href="/cps" navbar={navbar}>
                CPS test
              </Navbar_item>
            </div>
          </div>

          <div className="flex h-full">
            <Navbar_item href="https://twitter.com/robiot103" navbar={navbar}>
              <Twitter width="0" />
            </Navbar_item>

            <Navbar_item
              href="https://github.com/robiot/xclicker"
              navbar={navbar}
            >
              <GitHub width="0" />
            </Navbar_item>
          </div>
        </div>
      </div>
    </>
  );
}
