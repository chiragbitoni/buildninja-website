"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavDropdown.module.css";

export default function NavDropdown({
  label = "Resources",
  items = [],
  activePaths = [],
  handleNavigation,
  isActive,
  variant = "desktop",
  onNavigate,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);

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
  const hoveredItem = activeItem ? items.find((i) => i.name === activeItem) : items[0];

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
            stroke="currentColor" strokeWidth="2"
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
                item.children ? (
                  <div key={item.name}>
                    <span
                      className={styles.mobileSubItem}
                      onClick={() =>
                        setActiveItem(activeItem === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <motion.svg
                        animate={{ rotate: activeItem === item.name ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </motion.svg>
                    </span>
                    <AnimatePresence>
                      {activeItem === item.name && (
                        <motion.div
                          className={styles.mobileSubSubItems}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <a
                            href={item.path}
                            className={styles.mobileSubLink}
                            onClick={(e) => handleLinkClick(e, item.path)}
                          >
                            {item.name}
                          </a>
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

  return (
    <li
      className={`${styles.desktopItem} ${isAnyActive ? styles.activeLink : ""}`}
      ref={menuRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => { setIsOpen(false); setActiveItem(null); }}
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
            className={styles.dropdown}
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
          >
            <div className={styles.megaColumns}>
              <motion.div
                className={styles.leftColumn}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`${styles.columnItem} ${activeItem === item.name ? styles.columnItemActive : ""}`}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    onMouseEnter={() => setActiveItem(item.name)}
                  >
                    <span>{item.name}</span>
                    {item.children && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    )}
                  </a>
                ))}
              </motion.div>
              {hoveredItem?.children && (
                <motion.div
                  className={styles.rightColumn}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.1, duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <a
                    href={hoveredItem.path}
                    className={styles.rightLink}
                    onClick={(e) => handleLinkClick(e, hoveredItem.path)}
                  >
                    {hoveredItem.name}
                  </a>
                  {hoveredItem.children.map((child) => (
                    <a
                      key={child.name}
                      href={child.path}
                      className={styles.rightLink}
                      onClick={(e) => handleLinkClick(e, child.path)}
                    >
                      {child.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
