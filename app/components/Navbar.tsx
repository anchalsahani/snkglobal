"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              {/* Replace with your logo */}
              <Image
                src="/logo.png"
                alt="MegaMed Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Center: Search bar (hidden on small screens) */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="w-full max-w-lg">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          {/* Right: Icons / Links */}
          <div className="flex items-center space-x-4">
            {/* Example links/icons */}
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link href="/cart" className="flex items-center text-gray-700 hover:text-blue-600">
              {/* Replace with an icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h14l-1.35 6.75A2 2 0 0117.7 22H6.3a2 2 0 01-1.95-1.75L3 4h0"
                />
              </svg>
              <span className="ml-1 text-sm">Cart</span>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                type="button"
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {/* Hamburger */}
                {mobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/login" className="block text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link href="/cart" className="block text-gray-700 hover:text-blue-600">
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
