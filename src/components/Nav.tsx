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
