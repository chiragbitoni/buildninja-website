"use client";
import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import AvatarMenu from "./AvatarMenu";
import ThemeToggle from "./ThemeToggle";
import { fetchPlansFromAPI } from "../../services/plans/plans";
import { useDispatch } from "react-redux";
import { closeVideo } from "@/redux/slice/videoPopupSlice";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHover, setHover] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Dojo", path: "/dojo" },
    { name: "Docs", path: "/docs" },
    { name: "Install", path: "/install" },
    { name: "Partners", path: "/partners" },
    { name: "Support", path: "/support" },
  ];

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedPlans = localStorage.getItem("plans");
    if (storedPlans) return;
    async function init() {
      const plans = await fetchPlansFromAPI();
      if (plans) localStorage.setItem("plans", JSON.stringify(plans));
    }
    init();
  }, []);

  const getLogoSrc = () => {
    if (!mounted) return "/resources/BuildNinjaDark.png";
    if (isHover) return "/resources/BuildNinjaPink.png";
    return resolvedTheme === "dark" 
      ? "/resources/BuildNinjaDark.png" 
      : "/resources/BuildNinjaLight.png";
  };

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>

        {/* Logo */}
        <div className={styles.navbarLogo} onClick={() => handleNavigation("/")}>
          <Image
            src={getLogoSrc()}
            alt="BuildNinja Logo"
            width={178}
            height={48.5}
            className={styles.logoImage}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </div>

        {/* Hamburger */}
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`${styles.navbarLinks} ${menuOpen ? styles.menuActive : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`${styles.navbarLink} ${isActive(item.path) ? styles.activeLink : ""}`}
            >
              <a
                href={item.path}
                className={styles.navbarAnchor}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.path);
                  dispatch(closeVideo());
                }}
              >
                {item.name}
                {item.name === "Dojo" && <span className={styles.navDot} />}
              </a>
            </li>
          ))}

          <Image
            width={22}
            height={22}
            src="/resources/Footer/social/github.svg"
            alt="GitHub"
            className={styles.navbarGithubIcon}
            onClick={() => { window.location.href = "https://github.com/BuildNinja-CICD"; }}
          />

          <ThemeToggle />

          <button
            className={styles.navbarStartTrialButton}
            onClick={() => handleNavigation("/install")}
          >
            Try Free
          </button>
        </ul>

        <AvatarMenu />
      </div>
    </nav>
  );
}
