"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function SocialLinks() {
  const { theme } = useTheme();

  const iconColor =
    theme === "dark"
      ? "text-[#f4f7f8] hover:text-[#e0a899]" // warna terang saat dark
      : "text-[#0c1618] hover:text-[#6f1d1b]"; // warna gelap saat light

  const iconClass = `text-[26px] sm:text-[28px] transition-colors duration-300 ${iconColor}`;

  return (
    <div className="flex items-center justify-center md:justify-start gap-6">
      <a
        href="https://github.com/MHASBIANUR"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <FaGithub className={iconClass} />
      </a>

      <a
        href="https://www.linkedin.com/in/muhammad-hasbianur-4277361a6/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <FaLinkedin className={iconClass} />
      </a>

      <a
        href="https://wa.me/6282353236845"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className={iconClass} />
      </a>

      <a
        href="https://www.instagram.com/hasbii.nur/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <FaInstagram className={iconClass} />
      </a>
    </div>
  );
}
