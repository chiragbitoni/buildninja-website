"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./AvatarMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";

export default function AvatarMenu() {
  const dispatch = useDispatch();
  const router = useRouter();

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
        onClick={() => (window.location.href = process.env.NEXT_PUBLIC_MYACCOUNT_GRAPEHUB_LOGIN_URL)}
      >
        Login
      </button>

    );
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
              window.location.href = "https://dev-myaccount.grapehub.io/profile";
              setMenuOpen(false);
            }}
          >
            My Profile
          </div>

          <div
            className="am-dropdown-item"
            onClick={() => {
              window.location.href = "https://dev-myaccount.grapehub.io/profile?tab=subscription";
              setMenuOpen(false);
            }}
          >
            My Subscriptions
          </div>

          <div
            className="am-dropdown-item"
            onClick={() => {
              window.location.href = "https://dev-myaccount.grapehub.io/orders";
              setMenuOpen(false);
            }}
          >
            My Orders
          </div>

          <div
            className="am-dropdown-item"
            onClick={() => {
              window.location.href = "https://dev-myaccount.grapehub.io/orders?tab=licenses";
              router.push("/licenses");
              setMenuOpen(false);
            }}
          >
            My Licenses
          </div>

          <div
            className="am-dropdown-item am-logout"
            onClick={async () => {
              await fetch("/api/Auth/logout", { method: "POST" }); 
              dispatch(logoutUser()); // clear redux
              setMenuOpen(false);
              window.location.href = process.env.NEXT_PUBLIC_MYACCOUNT_GRAPEHUB_LOGIN_URL;
            }}


          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
