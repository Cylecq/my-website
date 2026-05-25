"use client";

import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={{
        padding: "0.5em 1em",
        borderRadius: 4,
        border: "1px solid #ccc",
        background: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#222",
        cursor: "pointer",
      }}
      aria-label="Toggle light/dark mode"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
