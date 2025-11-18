"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Buttons from "./Buttons";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`relative flex flex-col md:flex-row items-center justify-between
        px-6 md:px-20 pt-32 md:pt-44 pb-20 md:pb-28 w-full gap-10 md:gap-16
        font-['Poppins',sans-serif]
        transition-colors duration-300
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-[#f4f7f8] text-black"}`}
    >
      {/* TEXT SECTION */}
      <div className="max-w-xl text-center md:text-left flex-1 space-y-4 order-2 md:order-1">
        <p
          className={`text-xs md:text-sm font-medium tracking-[0.3em] uppercase ${
            theme === "dark" ? "text-[#e0a899]" : "text-[#6f1d1b]"
          }`}
        >
          Hello, I am
        </p>

        <h1
          className={`text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-medium leading-tight ${
            theme === "dark" ? "text-white" : "text-[#0b0c0c]"
          }`}
        >
          M. Hasbianur
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl font-normal ${
            theme === "dark" ? "text-gray-300" : "text-[#4b5563]"
          }`}
        >
          Frontend Developer
        </p>

        {/* Social Links */}
        <div className="mt-6">
          <SocialLinks />
        </div>

        {/* FOTO KHUSUS UNTUK MOBILE */}
        <div className="flex justify-center md:hidden mt-8">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96">
            <Image
              src="/myfotoo.jpg"
              alt="Profile"
              fill
              className="object-contain rounded-2xl shadow-md"
              priority
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
          <Buttons />
        </div>
      </div>

      {/* FOTO UTAMA UNTUK DESKTOP */}
      <div className="order-1 md:order-2 hidden md:flex relative w-[260px] h-[330px] sm:w-[320px] sm:h-[420px] md:w-[400px] md:h-[550px] justify-center md:justify-end flex-1">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/myfotoo.jpg"
            alt="Profile"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
