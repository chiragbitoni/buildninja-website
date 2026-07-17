"use client";
import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavDropdown.module.css";

function ColumnIcon({ type }) {
  if (type === "docs") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.33398 16.2505V3.7495C3.33398 3.19692 3.55346 2.66698 3.94412 2.27624C4.33478 1.88551 4.86463 1.666 5.41711 1.666H15.8327C16.0537 1.666 16.2657 1.7538 16.4219 1.9101C16.5782 2.06639 16.666 2.27837 16.666 2.4994V17.5006C16.666 17.7216 16.5782 17.9336 16.4219 18.0899C16.2657 18.2462 16.0537 18.334 15.8327 18.334H5.41711C4.86463 18.334 4.33478 18.1145 3.94412 17.7238C3.55346 17.333 3.33398 16.8031 3.33398 16.2505ZM3.33398 16.2505C3.33398 15.6979 3.55346 15.168 3.94412 14.7772C4.33478 14.3865 4.86463 14.167 5.41711 14.167H16.666" stroke="#FF4F81" stroke-width="2" stroke-linecap="round"/>
      </svg>
    );
  }
  if (type === "blog") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2.50008H4.16667C3.72464 2.50008 3.30072 2.67567 2.98816 2.98823C2.67559 3.30079 2.5 3.72472 2.5 4.16674V15.8334C2.5 16.2754 2.67559 16.6994 2.98816 17.0119C3.30072 17.3245 3.72464 17.5001 4.16667 17.5001H15.8333C16.2754 17.5001 16.6993 17.3245 17.0118 17.0119C17.3244 16.6994 17.5 16.2754 17.5 15.8334V10.0001M15.3126 2.18777C15.6441 1.85624 16.0937 1.67 16.5626 1.67C17.0314 1.67 17.4811 1.85624 17.8126 2.18777C18.1441 2.51929 18.3303 2.96892 18.3303 3.43776C18.3303 3.90661 18.1441 4.35624 17.8126 4.68776L10.3017 12.1994C10.1039 12.3971 9.85942 12.5419 9.59091 12.6203L7.19674 13.3203C7.12504 13.3412 7.04903 13.3424 6.97667 13.3239C6.90431 13.3054 6.83827 13.2677 6.78545 13.2149C6.73263 13.1621 6.69499 13.096 6.67645 13.0237C6.65791 12.9513 6.65916 12.8753 6.68008 12.8036L7.38008 10.4094C7.45885 10.1411 7.60386 9.89698 7.80174 9.69943L15.3126 2.18777Z" stroke="#FF4F81" stroke-width="2" stroke-linecap="round"/>
      </svg>
    );
  }
  if (type === "compare") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clip-path="url(#clip0_954_108)">
          <path d="M10 2.5V17.5M15.8338 6.66667L18.334 13.3333C17.6127 13.8743 16.7354 14.1667 15.8338 14.1667C14.9322 14.1667 14.0549 13.8743 13.3336 13.3333L15.8338 6.66667ZM15.8338 6.66667V5.83333M2.49942 5.83333H3.33282C5.65833 5.83333 7.94809 5.26094 10 4.16667C12.0519 5.26094 14.3417 5.83333 16.6672 5.83333H17.5006M4.16622 6.66667L6.66642 13.3333C5.94512 13.8743 5.06783 14.1667 4.16622 14.1667C3.2646 14.1667 2.38731 13.8743 1.66602 13.3333L4.16622 6.66667ZM4.16622 6.66667V5.83333M5.83302 17.5H14.167" stroke="#FF4F81" stroke-width="2" stroke-linecap="round"/>
        </g>
        <defs>
          <clipPath id="clip0_954_108">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    );
  }
  return null;
}

export default function NavDropdown({
  label = "Resources",
  items = [],
  activePaths = [],
  handleNavigation,
  isActive,
  variant = "desktop",
  onNavigate,
  isOpen: externalOpen,
  onOpenChange,
  closeTimerRef,
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownPos, setDropdownPos] = useState(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const setIsOpen = onOpenChange || setInternalOpen;

  const updatePosition = useCallback(() => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const left = Math.round((window.innerWidth - rect.width) / 2);
      const navEl = menuRef.current?.closest("nav");
      const navRect = navEl?.getBoundingClientRect();
      const top = navRect ? Math.round(navRect.bottom + 12) : 80;
      const triggerEl = menuRef.current?.querySelector('[class*="desktopTrigger"]');
      let arrowLeft = null;
      if (triggerEl) {
        const triggerRect = triggerEl.getBoundingClientRect();
        const triggerCenter = triggerRect.left + triggerRect.width / 2;
        arrowLeft = Math.round(triggerCenter - left - 5);
      }
      setDropdownPos({ left, top, arrowLeft });
    }
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    } else {
      setDropdownPos(null);
    }
  }, [isOpen, updatePosition]);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
        setActiveItem(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const goTo = (path) => {
    setIsOpen(false);
    setActiveItem(null);
    if (onNavigate) onNavigate();
    if (path.includes("://")) {
      window.location.href = path;
    } else {
      handleNavigation(path);
    }
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    goTo(path);
  };

  const isAnyActive = activePaths.some((p) => isActive(p));

  if (variant === "mobile") {
    return (
      <li className={styles.mobileItem} ref={menuRef}>
        <span
          className={`${styles.mobileTrigger} ${isAnyActive ? styles.activeLink : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {label}
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </span>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.mobileSubItems}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {items.map((item) =>
                item.children && item.children.length > 0 ? (
                  <div key={item.name}>
                    <MobileSubItem
                      item={item}
                      handleLinkClick={handleLinkClick}
                    />
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.path}
                    className={styles.mobileSubItem}
                    onClick={(e) => handleLinkClick(e, item.path)}
                  >
                    {item.name}
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    );
  }

  const hoverHandlers = externalOpen === undefined
    ? {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => { setIsOpen(false); setActiveItem(null); },
      }
    : {};

  return (
    <li
      className={`${styles.desktopItem} ${isAnyActive ? styles.activeLink : ""}`}
      ref={menuRef}
      {...hoverHandlers}
    >
      <span className={styles.desktopTrigger}>
        {label}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            className={styles.dropdown}
            style={dropdownPos ? {
              left: dropdownPos.left,
              top: dropdownPos.top,
              "--arrow-left": dropdownPos.arrowLeft != null ? `${dropdownPos.arrowLeft}px` : undefined,
            } : undefined}
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            onMouseEnter={() => {
              if (closeTimerRef?.current) clearTimeout(closeTimerRef.current);
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              if (closeTimerRef) {
                closeTimerRef.current = setTimeout(() => setIsOpen(false), 300);
              }
            }}
          >
            <div className={styles.megaColumns}>
              {items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  className={styles.megaCol}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, delay: idx * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className={styles.colHeader}>
                    <span className={styles.colIcon}>
                      <ColumnIcon type={item.icon} />
                    </span>
                    <div className={styles.colHeaderText}>
                      <span className={styles.colTitle}>{item.name}</span>
                    </div>
                  </div>
                  <div className={styles.colDivider} />
                  <div className={styles.colLinks}>
                    {item.children && item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.path}
                        className={styles.colLink}
                        onClick={(e) => handleLinkClick(e, child.path)}
                      >
                        <span className={styles.colDot} />
                        <span className={styles.colLinkText}>{child.name}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileSubItem({ item, handleLinkClick }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span
        className={styles.mobileSubItem}
        onClick={() => setOpen(!open)}
      >
        {item.name}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="10" height="10" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileSubSubItems}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {item.children.map((child) => (
              <a
                key={child.name}
                href={child.path}
                className={styles.mobileSubLink}
                onClick={(e) => handleLinkClick(e, child.path)}
              >
                {child.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
