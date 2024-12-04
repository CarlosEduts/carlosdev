"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";

// Icons: Tabler-icons
const darkIcon: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
    <path d="M19 11h2m-1 -1v2" />
  </svg>
);

const lightIcon: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-sun-low"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M4 12h.01" />
    <path d="M12 4v.01" />
    <path d="M20 12h.01" />
    <path d="M12 20v.01" />
    <path d="M6.31 6.31l-.01 -.01" />
    <path d="M17.71 6.31l-.01 -.01" />
    <path d="M17.7 17.7l.01 .01" />
    <path d="M6.3 17.7l.01 .01" />
  </svg>
);

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar o tema preferido do usuário
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Alterar o tema
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--background", "#040404");
      document.documentElement.style.setProperty("--foreground", "#ededed");
    } else {
      document.documentElement.style.setProperty("--background", "#ffffff");
      document.documentElement.style.setProperty("--foreground", "#171717");
    }
  }, [isDarkMode]);

  return (
    <header className="flex justify-between">
      <div className="font-bold ">CARLOSDEV</div>
      <div className="flex gap-4">
        <div>
          <button onClick={toggleTheme} className="text-sm hover:opacity-80">
            {isDarkMode ? lightIcon : darkIcon}
          </button>
        </div>

        <div className="flex gap-2 font-semibold p-0.5 cursor-pointer border-b-[--foreground] border-b">
          <Link href="pt" className="text-sm hover:opacity-80">
            PT
          </Link>
          <Link href="en" className="text-sm hover:opacity-80">
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
