"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./AvatarMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { logoutUserAPI } from "@/services/auth/logout";
import { User, CreditCard, Package, LucideLogOut } from "lucide-react";
import { paths } from "../../../public/static/paths";

export default function AvatarMenu() {
  const dispatch = useDispatch();
  const router = useRouter();
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

  const getInitials = (text) => {
    if (!text) return "";
    const parts = text.split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  if (!isLoggedIn) {
    return (
      <button
        className={styles.amLoginBtn}
        onClick={() => {
          window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/login?redirect=${window.location.href}`;
        }}
      >
        Login
      </button>
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

  return (
    <div className={styles.amWrapper} ref={menuRef}>
      {/* Avatar */}
      <div
        className={styles.amAvatarCircle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image
          src="/resources/Navbar/ninjaAvatar.png"
          alt="avatar"
          width={34}
          height={34}
          className={styles.amAvatarImg}
        />
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <div className={styles.amDropdown}>
          <div className={styles.amDropdownHeader}>
            <strong>{user.fullName}</strong>
            <p>{user.email}</p>
          </div>

          <div
            className={styles.amDropdownItem}
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/profile`;
              setMenuOpen(false);
            }}
          >
            <User size={15} />
            My Profile
          </div>

          <div
            className={`${styles.amDropdownItem} ${styles.amDropdownItemBottomBorder}`}
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/profile?tab=subscription`;
              setMenuOpen(false);
            }}
          >
            <CreditCard size={15} />
            My Subscriptions
          </div>

          <div
            className={styles.amDropdownItem}
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/orders`;
              setMenuOpen(false);
            }}
          >
            <Package size={15} />
            My Orders
          </div>

          <div
            className={`${styles.amDropdownItem} ${styles.amDropdownItemBottomBorder}`}
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/orders?tab=licenses`;
              setMenuOpen(false);
            }}
          >
            <Image width={15} height={15} src={paths.icons.license} alt="License" />
            My Licenses
          </div>

          <div
            className={`${styles.amDropdownItem} ${styles.amLogout}`}
            onClick={handleLogout}
          >
            <LucideLogOut size={15} />
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
