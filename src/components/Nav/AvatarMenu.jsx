"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AvatarMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slice/authSlice";
import { logoutUserAPI } from "@/services/auth/logout";
import { User, CreditCard, Package, LucideLogOut } from "lucide-react";
import { paths } from "../../../public/static/paths";

export default function AvatarMenu() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!isLoggedIn) {
    return (
      <motion.button
        className={styles.amLoginBtn}
        onClick={() => {
          window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/login?redirect=${window.location.href}`;
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Login
      </motion.button>
    );
  }

  async function handleLogout() {
    try {
      await logoutUserAPI(user?.userId);
      dispatch(logoutUser());
    } catch (err) {
      console.error("Logout error:", err);
    }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.05,
        delayChildren: 0.1
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      filter: "blur(4px)",
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
  };

  const menuItems = [
    { label: "My Profile", icon: User, href: `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/profile` },
    { label: "My Subscriptions", icon: CreditCard, href: `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/profile?tab=subscription`, border: true },
    { label: "My Orders", icon: Package, href: `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/orders` },
    { label: "My Licenses", icon: "img", src: paths.icons.license, href: `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/orders?tab=licenses`, border: true },
  ];

  return (
    <div className={styles.amWrapper} ref={menuRef}>
      {/* Avatar */}
      <motion.div
        className={styles.amAvatarCircle}
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src="/resources/Navbar/ninjaAvatar.png"
          alt="avatar"
          width={34}
          height={34}
          className={styles.amAvatarImg}
        />
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className={styles.amDropdown}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.amDropdownHeader}>
              <motion.strong variants={itemVariants}>{user.fullName}</motion.strong>
              <motion.p variants={itemVariants}>{user.email}</motion.p>
            </div>

            {menuItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`${styles.amDropdownItem} ${item.border ? styles.amDropdownItemBottomBorder : ""}`}
                variants={itemVariants}
                onClick={() => {
                  window.location.href = item.href;
                  setMenuOpen(false);
                }}
              >
                {item.icon === "img" ? (
                  <Image width={16} height={16} src={item.src} alt={item.label} />
                ) : (
                  <item.icon size={16} />
                )}
                {item.label}
              </motion.div>
            ))}

            <motion.div
              className={`${styles.amDropdownItem} ${styles.amLogout}`}
              variants={itemVariants}
              onClick={handleLogout}
            >
              <LucideLogOut size={16} />
              Logout
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


