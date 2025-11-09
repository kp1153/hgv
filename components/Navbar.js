"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function MashalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "होम", href: "/" },
    { name: "हमारे बारे में", href: "/about" },
    {
      name: "विचार / सिद्धांत",
      href: "/theory",
      submenu: [
        { name: "मार्क्सवाद-लेनिनवाद", href: "/theory/marxism-leninism" },
        { name: "वर्ग-संघर्ष", href: "/theory/class-struggle" },
        { name: "क्रांति और समाजवाद", href: "/theory/revolution-socialism" },
        { name: "अंतरराष्ट्रीय दृष्टिकोण", href: "/theory/international" },
      ],
    },
    {
      name: "राजनीति / देश-दुनिया",
      href: "/politics",
      submenu: [
        { name: "भारतीय राजनीति", href: "/politics/indian" },
        { name: "अंतरराष्ट्रीय परिदृश्य", href: "/politics/international" },
        { name: "फासीवाद और प्रतिरोध", href: "/politics/fascism-resistance" },
        { name: "किसान-मजदूर आंदोलन", href: "/politics/movements" },
      ],
    },
    {
      name: "आंदोलन / संघर्ष",
      href: "/movements",
      submenu: [
        { name: "किसान आंदोलन", href: "/movements/farmers" },
        { name: "मजदूर संघर्ष", href: "/movements/workers" },
        { name: "छात्र-युवा आंदोलन", href: "/movements/students" },
        { name: "महिलाओं के अधिकार", href: "/movements/women" },
      ],
    },
    {
      name: "संस्कृति / साहित्य",
      href: "/culture",
      submenu: [
        { name: "क्रांतिकारी कविता", href: "/culture/poetry" },
        { name: "कला, फिल्म, और नाटक", href: "/culture/art-film" },
        { name: "लोक-संस्कृति", href: "/culture/folk" },
        { name: "आलोचना", href: "/culture/criticism" },
      ],
    },
    { name: "लेखक / संपादक मंडल", href: "/authors" },
    { name: "संपर्क / योगदान", href: "/contact" },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-red-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto py-4">
          <div className="flex-1 flex justify-center items-center">
            <a href="/" className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-4xl sm:text-5xl">🔥</span>
                <span className="text-3xl sm:text-4xl font-black tracking-wide">मशाल</span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-tight max-w-xs">
                नई समाजवादी क्रांति का वाहक<br />मजदूर-पक्षीय अखबार
              </p>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-red-600 absolute right-4 top-4"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-red-800 border-t border-red-600">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium hover:bg-red-700 transition"
                    >
                      <span>{item.name}</span>
                      {openDropdown === item.name ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 rounded-md text-sm hover:bg-red-700 transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 rounded-md text-base font-medium hover:bg-red-700 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}