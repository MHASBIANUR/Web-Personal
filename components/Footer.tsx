"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <Github size={22} />, href: "https://github.com/MHASBIANUR" },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/muhammad-hasbianur-4277361a6/" },
    { icon: <Instagram size={22} />, href: "https://www.instagram.com/hasbii.nur/" },
    { icon: <FaWhatsapp size={22} />, href: "https://wa.me/6282353236845" }, 
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-linear-to-b from-[#0c1618] via-[#142325] to-[#0c1618] text-gray-300 py-12 mt-24">
      {/* === Decorative Blur Circles === */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#6eb1b9]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#b5dde8]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6 text-center relative z-10">
        {/* === Social Icons === */}
        <div className="flex gap-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <span className="drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">{social.icon}</span>
            </a>
          ))}
        </div>

        {/* === Copyright === */}
        <p className="text-sm text-gray-400">
          © {currentYear} <span className="text-white font-semibold">M. Hasbianur</span>. All rights reserved.
        </p>
      </div>

      {/* === Scroll to Top Button === */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full shadow-md hover:bg-white/20 transition-all duration-300"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
