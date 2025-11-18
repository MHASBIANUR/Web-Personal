"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  const navItems = ["Home", "About", "Project", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      let currentSection = "home";
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background hero
  const heroBg = theme === "dark" ? "bg-gray-800" : "bg-[#f4f7f8]";

  // Sticky background
  const stickyBg =
    theme === "dark"
      ? "bg-gray-800/90 backdrop-blur-md shadow-md"
      : "bg-white/90 backdrop-blur-md shadow-md";

  const headerBg = isSticky ? stickyBg : heroBg;
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}
    >
      <nav className="flex items-center justify-between py-5 px-6 md:px-20 max-w-[1400px] mx-auto">
        {/* Logo */}
        <h1 className={`text-2xl mt-3 tracking-[3px] ${textColor}`}>
          M.H
        </h1>

        {/* Desktop Menu */}
        <div className="flex items-center gap-8">
          <ul
            className={`hidden md:flex items-center gap-10 text-[16px] tracking-wide ${textColor}`}
          >
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <li key={item} className="relative group">
                  <Link
                    href={`#${id}`}
                    className="transition-all duration-300 pb-1"
                  >
                    {item}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "w-full bg-[#6f1d1b]"
                          : "w-0 bg-[#6f1d1b] group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden ${textColor}`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — SAME STYLE AS DESKTOP */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full backdrop-blur-md
          ${theme === "dark" ? "bg-gray-800/95" : "bg-white/95"} shadow-md py-6`}
        >
          <ul className="flex flex-col items-center gap-6 text-lg font-medium">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <li key={item} className="relative group">
                  <Link
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="transition-all duration-300 pb-1"
                  >
                    {item}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "w-full bg-[#6f1d1b]"
                          : "w-0 bg-[#6f1d1b] group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
