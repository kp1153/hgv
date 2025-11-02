"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "919996865069";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="bg-white shadow-md">
      {/* 🔄 Top Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 text-sm text-gray-700 gap-2">
          {/* ⬅️ Left Side: Hosting Message */}
          <div className="font-black text-pink-700 text-center md:text-left">
            होस्टिंग वर्सेल पर, अभी के लिए मुफ्त
          </div>

          {/* ➡️ Right Side: Contact Info */}
          <div className="flex flex-col md:flex-row items-center md:space-x-4 gap-2 md:gap-0">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-green-600 transition-colors duration-300"
            >
              <svg
                viewBox="0 0 32 32"
                className="w-5 h-5 mr-1 fill-current text-green-500"
              >
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.826.735 5.482 2.024 7.784L.057 31.191l7.613-1.995A15.923 15.923 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.334c-2.548 0-4.948-.709-6.988-1.94l-.502-.298-5.194 1.362 1.387-5.068-.327-.52A13.265 13.265 0 012.667 16c0-7.364 5.97-13.334 13.333-13.334S29.333 8.636 29.333 16 23.363 29.334 16 29.334zm7.317-9.988c-.4-.2-2.37-1.169-2.738-1.303-.367-.133-.634-.2-.901.2-.267.4-1.034 1.303-1.268 1.57-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.984-1.189-1.06-1.991-2.368-2.224-2.768-.233-.4-.025-.617.176-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.901-2.17-1.234-2.97-.325-.78-.655-.674-.901-.687-.233-.012-.5-.015-.767-.015s-.7.1-1.067.5c-.367.4-1.401 1.37-1.401 3.34s1.434 3.874 1.634 4.141c.2.267 2.822 4.308 6.837 6.043.955.413 1.701.66 2.282.845.959.305 1.832.262 2.522.159.77-.115 2.37-.969 2.704-1.905.334-.936.334-1.738.234-1.905-.1-.167-.367-.267-.767-.467z" />
              </svg>
              9996865069
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="mailto:prasad.kamta@gmail.com"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              prasad.kamta@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* 🔷 Branding Heading */}
      <div className="text-center bg-amber-600 py-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white">
          क्रिएटिव सॉल्यूशंस
        </h1>
      </div>

      {/* 🔽 Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
        </button>

        {/* Menu */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:justify-center gap-3 md:gap-6 text-gray-700 font-medium mt-3 md:mt-0`}
        >
          <li>
            <a
              href="#home"
              className="block py-2 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block py-2 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#why-us"
              className="block py-2 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
          </li>
          <li>
            <a
              href="#tech-stack"
              className="block py-2 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#work-process"
              className="block py-2 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Work Process
            </a>
          </li>
          <li>
            <a
              href="#language"
              className="block py-2 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Language
            </a>
          </li>
          <li>
            <Link
              href="/gallery"
              className="block py-2 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
