"use client";

import { useTheme } from "next-themes";

export default function Buttons() {
  const { theme } = useTheme();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-6 pt-4">
      {/* MY PORTFOLIO button */}
      <button
        className={`text-sm px-10 py-3 font-bold uppercase tracking-[0.3em] transition-colors duration-200
          ${theme === "dark"
            ? "bg-[#f4f7f8] text-[#0c1618] hover:bg-[#e0a899]"
            : "bg-[#0c1618] text-white hover:bg-[#1a1a1a]"
          }`}
      >
        MY PORTFOLIO
      </button>

      {/* CONTACT ME button */}
      <button
        onClick={handleScrollToContact}
        className={`text-sm px-10 py-3 font-bold uppercase tracking-[0.3em] border-[3px] transition-all duration-200
          ${theme === "dark"
            ? "border-[#f4f7f8] text-[#f4f7f8] hover:bg-[#f4f7f8] hover:text-[#0c1618]"
            : "border-[#0c1618] text-[#0c1618] hover:bg-[#0c1618] hover:text-white"
          }`}
      >
        CONTACT ME
      </button>
    </div>
  );
}
