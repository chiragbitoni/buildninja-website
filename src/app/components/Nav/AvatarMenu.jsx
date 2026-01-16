"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./AvatarMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { logoutUserAPI } from "@/services/auth/logout";
import { usePathname } from "next/navigation";
import { User, CreditCard, Package, LucideLogOut } from 'lucide-react';
import { paths } from "../../../../public/static/paths";

export default function AvatarMenu() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  // Close dropdown on outside click
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
        className="am-login-btn"
        onClick={() => {
          (window.location.href =
            `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/login?redirect=${window.location.href}`);
        }}

      >
        Login
      </button>

    );
  }
  async function handleLogout() {
    try {
      const userId = user?.userId;

      const res = await logoutUserAPI(userId);
      // console.log("Logout API:", res);

      // treat logout as always successful
      dispatch(logoutUser());
      // window.location.href = process.env.NEXT_PUBLIC_MYACCOUNT_URL;

    } catch (err) {
      console.error("Logout error:", err);
    }
  }

  return (
    <div className="am-wrapper" ref={menuRef}>
      {/* Avatar */}
      <div
        className="am-avatar-circle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {user?.profileImage || true ? (
          <Image
            src={"/resources/Navbar/ninjaAvatar.png"}
            alt="avatar"
            width={40}
            height={40}
            className="am-avatar-img"
          />
        ) : (
          <span className="am-avatar-initials">
            {getInitials(user?.fullName || user?.email)}
          </span>
        )}
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="am-dropdown">
          <div className="am-dropdown-header">
            <strong>{user.fullName}</strong>
            <p>{user.email}</p>
          </div>

          <div
            className="am-dropdown-item"
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/profile`;
              setMenuOpen(false);
            }}
          >
            <User />My Profile
          </div>

          <div
            className="am-dropdown-item am-dropdown-item-bottom-border"
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/profile?tab=subscription`;
              setMenuOpen(false);
            }}
          >
            <CreditCard />My Subscriptions
          </div>

          <div
            className="am-dropdown-item"
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/orders`;
              setMenuOpen(false);
            }}
          >
            <Package />My Orders
          </div>

          <div
            className="am-dropdown-item am-dropdown-item-bottom-border"
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/orders?tab=licenses`;
              setMenuOpen(false);
            }}
          >
            <img src={paths.icons.license} alt="Grapecity License Icon"></img>My Licenses
          </div>

          <div className="am-dropdown-item am-logout" onClick={handleLogout}>
            <LucideLogOut /> Logout
          </div>
        </div>
      )}
    </div>
  );
}
