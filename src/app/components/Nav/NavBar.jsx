"use client";
import "./NavBar.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import AvatarMenu from "./AvatarMenu";
import { fetchPlansFromAPI } from "../../../services/plans/plans";
import Banner from "./Banner/Banner";
export default function Navbar() {
  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHover, setHover] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

// uncomment this for sticky navbar
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY && window.scrollY > 50) {
  //       setShow(false);
  //     } else {
  //       setShow(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    // { name: "Docs", link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview` },
    { name: "Docs", path:"/docs" },
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
    //For Non-sticky
    // <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}> 
    //For Sticky
    <nav className={"navbar"}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNavigation("/")}>
          <Image
            src={isHover ? "/resources/BuildNinjaPink.png" : "/resources/BuildNinjaDark.png"}
            alt="BuildNinja Logo"
            width={178}
            height={48.5}
            className="logo-image"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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
          {
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
                  if (item.path) {
                    // Internal route = same tab
                    handleNavigation(item.path);
                  } else if (item.link) {
                    // External URL = new tab
                    window.open(item.link, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {item.name}
              </li>
            ))}
          <button className="navbarStartTrialButton" onClick={() => handleNavigation("/install")}>Try BuildNinja Free</button>
        </ul>
        <AvatarMenu />
      </div>
      <Banner />
    </nav>
  );
}
