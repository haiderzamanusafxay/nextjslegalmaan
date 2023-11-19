import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <div>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img
                src="https://legalmaan.com/wp-content/uploads/2023/06/attorney-70x70.png"
                alt="legalmaan logo"
              />
            </span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  TM Form
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Design Patent Form
                </a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <a href="https://wa.me/923180968295">Contact Now</a>
            </button>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
