// src/components/Navbar.jsx

import React, { useState } from "react";
// Impor ikon yang akan kita gunakan
import {
  IoHomeOutline,
  IoDocumentTextOutline,
  IoBriefcaseOutline,
  IoChatboxEllipsesOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Kita buat data link navigasi dalam bentuk array of objects agar lebih rapi
const navLinks = [
  {
    name: "Home",
    href: "#",
    icon: <IoHomeOutline size={20} />,
    description: "Kembali ke halaman utama",
  },
  {
    name: "Blog",
    href: "#",
    icon: <IoDocumentTextOutline size={20} />,
    description: "Tulisan, tutorial, dan ide",
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <IoBriefcaseOutline size={20} />,
    description: "Lihat proyek-proyek saya",
  },
  {
    name: "About",
    href: "#",
    icon: <IoPersonOutline size={20} />,
    description: "Cari tahu lebih tentang saya",
  },
];

const Navbar = () => {
  // State untuk mengontrol menu di mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeLink = "Projects"; // Ganti ini sesuai halaman aktif

  // Tampilan untuk Desktop
  const DesktopNav = () => (
    <div className="hidden md:flex justify-center">
      <div className="bg-gray-800/60 backdrop-blur-lg rounded-full px-6 py-2">
        <ul className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeLink === link.name
                    ? "text-green-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Tampilan untuk Mobile
  const MobileNav = () => (
    <div className="md:hidden flex justify-end">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-lg rounded-lg px-4 py-2 text-sm text-white"
      >
        <span>Menu</span>
        {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );

  // Tampilan Menu Overlay saat di mobile
  const MobileMenu = () => (
    <div
      className="fixed inset-0 bg-black/50 z-50 md:hidden"
      onClick={() => setIsMenuOpen(false)}
    >
      <div
        className="absolute top-20 right-4 left-4 bg-gray-900 border border-gray-700 rounded-lg p-4"
        onClick={(e) => e.stopPropagation()} // Mencegah menu tertutup saat klik di dalam menu
      >
        <ul className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center p-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                <div className="mr-4 text-gray-400">{link.icon}</div>
                <div>
                  <p className="font-semibold text-white">{link.name}</p>
                  <p className="text-xs text-gray-400">{link.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="container mx-auto">
          {/* Tampilkan Navigasi yang sesuai */}
          <DesktopNav />
          <MobileNav />
        </div>
      </nav>
      {/* Tampilkan menu overlay jika isMenuOpen true */}
      {isMenuOpen && <MobileMenu />}
    </>
  );
};

export default Navbar;
