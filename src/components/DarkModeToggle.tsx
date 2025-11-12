// src/components/DarkModeToggle.jsx
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // On mount, check saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.theme;
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.theme = newDarkMode ? "dark" : "light";
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-black/90 hover:text-indigo-500 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110
                 dark:text-white dark:hover:text-yellow-400"
    >
      {isDark ? (
        <SunIcon className="size-5 " />
      ) : (
        <MoonIcon className="size-5 " />
      )}
    </button>
  );
}
