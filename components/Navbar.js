"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "होम", path: "/" },
    { name: "करेंट अफेयर्स", path: "/current-affairs" },
    { name: "राजनीतिक विमर्श", path: "/political-discourse" },
    { name: "स्त्री विमर्श", path: "/women-discourse" },
    { name: "साहित्य-जगत", path: "/literature" },
    { name: "पशु चिकित्सा", path: "/veterinary" },
    { name: "विविध", path: "/misc" },
  ];

  return (
    <nav className="bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Website Name - Centered */}
        <div className="flex justify-center items-center py-6">
          <Link href="/" className="text-center">
            <div className="text-4xl font-extrabold text-amber-600">
              डॉ. सत्यवान सौरभ
            </div>
            <div className="text-xl font-medium text-blue-700 mt-1">
              सामाजिक न्याय से जुड़े मामलों के लेखक
            </div>
          </Link>
        </div>

        {/* Desktop Menu - Third Line */}
        <div className="hidden md:flex justify-center space-x-8 py-4 border-t border-zinc-700">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white absolute top-6 right-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-zinc-700">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="block py-2 text-white hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
