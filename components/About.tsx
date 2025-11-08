"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useTheme } from "next-themes";

export default function About() {
  const { theme } = useTheme();

  const techIcons = [
    { icon: <FaHtml5 className="text-[#e34c26]" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS" },
    { icon: <FaJsSquare className="text-[#f7df1e]" />, name: "JavaScript" },
    { icon: <FaReact className="text-[#61DBFB]" />, name: "React" },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-[#38bdf8]" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-[#6cc24a]" />, name: "Node.js" },
    { icon: <SiTypescript className="text-[#3178c6]" />, name: "TypeScript" },
    { icon: <FaGitAlt className="text-[#f1502f]" />, name: "Git" },
  ];

  const services = [
    {
      img: "/02.svg",
      title: "Frontend Development",
      desc: "Developing responsive and dynamic websites using modern tools.",
      delay: 0.1,
    },
    {
      img: "/03.svg",
      title: "React & Next.js",
      desc: "Building modern web apps with React and Next.js for SPA and SSR.",
      delay: 0.3,
    },
    {
      img: "/01.svg",
      title: "Responsive Design",
      desc: "Crafting mobile-friendly and visually appealing layouts with Tailwind CSS and CSS3.",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col justify-center py-20 px-6 sm:px-10 md:px-20 overflow-hidden
        transition-colors duration-300
        ${theme === "dark" ? "bg-black text-gray-200" : "bg-white text-black"}`}
    >
      {/* Background blur */}
      <div
        className={`absolute top-[-100px] left-[-100px] w-[250px] h-[250px] rounded-full blur-3xl opacity-50 -z-10
        ${theme === "dark" ? "bg-[#112224]" : "bg-[#e9f3f6]"}`}
      />
      <div
        className={`absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full blur-3xl opacity-40 -z-10
        ${theme === "dark" ? "bg-[#13282c]" : "bg-[#e0f0f5]"}`}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        About Me
      </motion.h2>
      <br />

      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-justify text-base sm:text-lg leading-relaxed space-y-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Hi, I’m <b className="text-[#6f1d1b] dark:text-[#e0a899]">M. Hasbianur</b>, a Frontend Developer who loves
            crafting, modern, and user-friendly web interfaces.
          </p>

          <p>
            I focus on building seamless digital experiences using technologies like React, Next.js, and Tailwind CSS —
            ensuring every line of code not only works efficiently but also delivers great design consistency across devices.
          </p>

          <div className="mt-8">
            <button
              className={`border px-8 py-3 rounded-none uppercase tracking-[2px] font-semibold transition-all duration-300
                ${
                  theme === "dark"
                    ? "border-white text-white hover:bg-white hover:text-[#0c1618]"
                    : "border-[#0c1618] text-[#0c1618] hover:bg-[#0c1618] hover:text-white"
                }`}
            >
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          className="flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-6 justify-items-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105
                ${theme === "dark" ? "bg-[#13282c]" : "bg-[#f9fafb]"}`}
              whileHover={{ scale: 1.08 }}
            >
              <div className="text-4xl sm:text-5xl">{tech.icon}</div>
              <p className="text-sm sm:text-base font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* What I Do */}
      <motion.div
        className="mt-24 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-2xl font-semibold mb-6">What I Do</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-2
                ${theme === "dark" ? "bg-[#13282c]" : "bg-[#f7fbfd]"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-base leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
