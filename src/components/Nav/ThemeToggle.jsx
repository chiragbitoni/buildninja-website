"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.togglePlaceholder} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      className={styles.themeToggle}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <div className={`${styles.iconWrapper} ${isDark ? styles.dark : styles.light}`}>
        {isDark ? (
          <Moon className={styles.icon} size={18} />
        ) : (
          <Sun className={styles.icon} size={18} />
        )}
      </div>
    </button>
  );
}
