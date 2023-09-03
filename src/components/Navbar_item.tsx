import Link from "next/link";
import React from "react";

export function Navbar_item({
  children,
  href,
  navbar
}: {
  children: any;
  href: string;
  navbar: boolean;
}) {
  return (
    <Link href={href} className={`navbar-item ${!navbar ? "active" : ""}`}>
      {children}
    </Link>
  );
}
