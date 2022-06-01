import Link from "next/link";
import React from "react";

export function Navbar_item({
  children,
  href,
  navbar,
  external = false
}: {
  children: any;
  href: string;
  navbar: boolean;
  external?: boolean;
}) {
  const element: JSX.Element = external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`navbar-item ${!navbar ? "active" : ""}`}
    >
      {children}
    </a>
  ) : (
    <Link href={href}>
      <a href={href} className={`navbar-item ${!navbar ? "active" : ""}`}>
        {children}
      </a>
    </Link>
  );

  return element;
}
