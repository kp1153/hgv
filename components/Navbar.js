"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function MashalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "होम", href: "/" },
    { name: "देश-दुनिया", href: "/desh-duniya" },
    { name: "मजदूरों के संघर्ष", href: "/majdoor-sangharsh" },
    { name: "मजदूरों के हालात", href: "/majdoor-halat" },
    { name: "वैचारिकी", href: "/vaichariki" },
    { name: "कला-संस्कृति", href: "/kala-sanskriti" },
    { name: "वीडियो", href: "/video" },
  ];

  return (
    <nav className="shadow-lg">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        {/* Logo and Tagline Section */}
        <div className="py-6 text-center relative bg-white">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden p-2 rounded-md hover:bg-gray-200 absolute right-4 top-4"
            aria-label="Menu"
          >
            {isOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="block w-7 h-0.5 bg-black"></span>
                <span className="block w-7 h-0.5 bg-black"></span>
                <span className="block w-7 h-0.5 bg-black"></span>
              </div>
            )}
          </button>

          <a href="/" className="inline-block">
            <div className="mb-2">
              <Image
                src="/logo.jpeg"
                alt="मशाल"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto mx-auto"
              />
            </div>
            <p className="text-base sm:text-lg font-semibold text-black">
              समाजवादी क्रांति की दिशा
            </p>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center bg-red-700 text-white">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex-1 text-center px-2 py-4 text-base font-medium hover:bg-red-600 transition border-r border-red-600 last:border-r-0"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="block lg:hidden bg-red-700 text-white border-t border-red-600">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-md text-base font-medium hover:bg-red-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
