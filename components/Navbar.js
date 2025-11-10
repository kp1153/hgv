"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function MashalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "होम", href: "/" },
    { name: "देश-दुनिया", href: "/desh-duniya" },
    { name: "मजदूरों का संघर्ष", href: "/majdoor-sangharsh" },
    { name: "मजदूरों के हालात", href: "/majdoor-halat" },
    { name: "वैचारिकी", href: "/vaichariki" },
    { name: "कला-संस्कृति", href: "/kala-sanskriti" },
    { name: "वीडियो", href: "/video" },
    { name: "नए-पुराने अंक", href: "/issues" },
  ];

  return (
    <nav className="bg-red-700 text-white shadow-lg">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        {/* Logo and Tagline Section */}
        <div className="py-6 text-center relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-red-600 absolute right-4 top-4"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            <p className="text-base sm:text-lg font-semibold">
              समाजवादी क्रांति की दिशा
            </p>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center border-t border-red-600">
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
        <div className="lg:hidden bg-red-800 border-t border-red-600">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-md text-base font-medium hover:bg-red-700 transition"
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
