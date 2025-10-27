"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Pricing", path: "/Pricing" },
    { name: "Features", path: "/Features" },
    { name: "Demo", path: "/Demo" },
    { name: "Documentation", path: "/Documentation" },
    { name: "Install", path: "/Install" },
    { name: "Support", path: "/Support" },
    { name: "FAQ", path: "/Faq" },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/resources/BuildNinja.png"
            alt="BuildNinja Logo"
            width={120}
            height={40}
            className="object-contain"
            onClick={()=>handleNavigation("/")}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-black cursor-pointer"
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
