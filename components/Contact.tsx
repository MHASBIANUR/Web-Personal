"use client";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Contact() {
  const { theme } = useTheme();
  const email = "hasbianur16@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className={`relative min-h-screen flex flex-col justify-center py-16 px-4 sm:px-10 md:px-20 overflow-hidden
        transition-colors duration-300
        ${isDark ? "bg-black text-gray-200" : "bg-white text-black"}`}
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Contact Me
        </motion.h2>
        <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">Let’s Collaborate</h3>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Have an idea you’d like to bring to life? Whether it’s a full
            project, a redesign, or a creative partnership, I’m excited to hear
            it.
          </p>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">Get In Touch</h3>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Don’t hesitate to reach out — I’d love to connect and discuss how we
            can work together to make something great.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <motion.a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-full md:w-auto justify-center items-center gap-2 bg-[#772E25] hover:bg-[#5c211b] text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold shadow-lg transition-colors duration-300"
        >
          <FaPaperPlane />
          Send Email
        </motion.a>
      </div>
    </section>
  );
}
