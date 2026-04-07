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
import { motion, AnimatePresence } from "framer-motion";

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

        {/* Hamburger Trigger */}
        <div
          className={`${styles.hamburgerWrapper} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile menu and Desktop links */}
        <AnimatePresence>
          {(!mounted || menuOpen || (typeof window !== 'undefined' && window.innerWidth > 1150)) && (
            <motion.ul
              className={`${styles.navbarLinks} ${menuOpen ? styles.menuActive : ""}`}
              initial={menuOpen ? { opacity: 0, y: -20 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navItems.map((item, idx) => (
                <motion.li
                  key={item.name}
                  className={`${styles.navbarLink} ${isActive(item.path) ? styles.activeLink : ""}`}
                  initial={menuOpen ? { opacity: 0, x: -10 } : false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuOpen ? idx * 0.05 : 0 }}
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
                </motion.li>
              ))}

              <motion.div
                className={styles.navbarActionGroup}
                initial={menuOpen ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ delay: menuOpen ? 0.4 : 0 }}
              >
                <Image
                  width={22}
                  height={22}
                  src="/resources/Footer/social/github.svg"
                  alt="GitHub"
                  className={styles.navbarGithubIcon}
                  onClick={() => { window.location.href = "https://github.com/BuildNinja-CICD"; }}
                />

                <button
                  className={styles.navbarStartTrialButton}
                  onClick={() => handleNavigation("/install")}
                >
                  Try Free
                </button>
              </motion.div>
            </motion.ul>
          )}
        </AnimatePresence>

        <AvatarMenu />
        <ThemeToggle />
      </div>
    </nav>
  );
}
