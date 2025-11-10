"use client";
import "./NavBar.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname(); // 👈 Get current path

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
    { name: "Pricing", path: "/pricing" },
    { name: "Features", path: "/features" },
    { name: "Demo", path: "/demo" },
    { name: "Documentation", path: "/documentation" },
    { name: "Download", path: "/download" },
    { name: "Support", path: "/support" },
    { name: "FAQ", path: "/faq" },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNavigation("/")}>
          <Image
            src="/resources/BuildNinjaDark.png"
            alt="BuildNinja Logo"
            width={120}
            height={40}
            className="logo-image"
          />
        </div>

        {/* Hamburger icon (mobile) */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? "menu-active" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`navbar-link ${pathname === item.path ? "active-link" : ""
                }`} // 👈 Highlight active link
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
