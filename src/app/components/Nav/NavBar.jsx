"use client";
import "./NavBar.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import AvatarMenu from "./AvatarMenu";
import { fetchPlansFromAPI } from "../../../services/plans/plans";
export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const storedPlans = localStorage.getItem("plans");

    // If plans already exist → do not fetch
    if (storedPlans) return;

    async function init() {
      const plans = await fetchPlansFromAPI();
      if (plans) {
        localStorage.setItem("plans", JSON.stringify(plans));
      }
    }

    init();
  }, []);


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
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Docs", link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview` },
    { name: "Pricing", path: "/pricing" },
    { name: "Install", path: "/install" },
    { name: "Support", path: "/support" },
    // { name: "FAQ", path: "/faq" },
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
          {mounted &&
            navItems.map((item) => (
              <li
                key={item.name}
                className={`navbar-link ${item.path === "/"
                  ? pathname === "/" ? "active-link" : ""
                  : pathname.startsWith(item.path)
                    ? "active-link"
                    : ""
                  }`}

                onClick={() => {
                  if (item.path) handleNavigation(item.path);
                  else window.location.href = item.link;
                }}
              >
                {item.name}
              </li>
            ))}
          <button className="navbarStartTrialButton" onClick={() => handleNavigation("/install")}>Start Shipping Faster</button>
        </ul>
        <AvatarMenu />
      </div>
    </nav>
  );
}
