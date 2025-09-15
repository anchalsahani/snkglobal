"use client";

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background shadow-md">
      <div className="max-w-9xl mx-auto px-7 py-5 flex items-center">
        <ul className="flex space-x-6 font-bold text-[color:var(--foreground)]">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pane">Paean</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
