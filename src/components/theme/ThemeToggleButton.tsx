"use client";

import { useTheme } from "@/context/ThemesContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      Mode : {theme === "light" ? "🌞 Clair" : "🌚 Sombre"}
    </button>
  );
}