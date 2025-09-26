"use client";

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-background/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-playfair italic font-bold text-foreground hover:text-foreground/70 transition-colors"
        >
          Paean
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 md:space-x-10 font-hauora text-lg md:text-xl text-foreground/90">
          <li>
            <Link
              href="/"
              className="hover:text-foreground/70 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/poetry"
              className="hover:text-foreground/70 transition-colors"
            >
              Paean
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-foreground/70 transition-colors"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
