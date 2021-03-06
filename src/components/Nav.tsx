/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { GitHub, Twitter } from "@material-ui/icons";
import { Navbar_item } from "./Navbar_item";
import Link from "next/link";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    setNavbar(!(window.scrollY <= 10));
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  });
  return (
    <div className={`sticky top-0 z-50 navbar ${navbar ? "active" : ""}`}>
      <div className="text-white flex items-center justify-between container-xl mx-auto px-4 h-16">
        {/* Left */}
        <div className="flex h-full">
          <Link href="/" passHref>
            <a className={`navbar-item ${!navbar ? "active" : ""}`}>
              <img src="/icon.png" className="h-12 mr-2" alt="Icon" />
              <div className="text-xl font-semibold">XClicker</div>
            </a>
          </Link>

          <div className="hidden md:flex">
            <Navbar_item href="/downloads" navbar={navbar} external={false}>
              Downloads
            </Navbar_item>

            <Navbar_item href="/test" navbar={navbar}>
              Test it
            </Navbar_item>
          </div>
        </div>

        <div className="flex h-full">
          <Navbar_item
            href="https://twitter.com/notrobiot"
            navbar={navbar}
            external={true}
          >
            <Twitter width="0" />
          </Navbar_item>

          <Navbar_item
            href="https://github.com/robiot/xclicker"
            navbar={navbar}
            external={true}
          >
            <GitHub width="0" />
          </Navbar_item>
        </div>
      </div>
    </div>
  );
}
