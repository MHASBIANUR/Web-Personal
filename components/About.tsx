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

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiPrisma
} from "react-icons/si";

import { useTheme } from "next-themes";


export default function About() {
  const { theme } = useTheme();

  const techIcons = [
    { icon: <FaHtml5 className="text-[#e34c26]" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS" },
    { icon: <FaJsSquare className="text-[#f7df1e]" />, name: "JavaScript" },
    { icon: <FaReact className="text-[#61DBFB]" />, name: "React" },
    { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-[#38bdf8]" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-[#6cc24a]" />, name: "Node.js" },
    { icon: <SiExpress className="text-black" />, name: "Express.js" },
    { icon: <SiPostgresql className="text-[#31648c]" />, name: "PostgreSQL" },
    { icon: <SiPrisma className="text-[#0c344b]" />, name: "Prisma ORM" },
    { icon: <SiTypescript className="text-[#3178c6]" />, name: "TypeScript" },
    { icon: <FaGitAlt className="text-[#f1502f]" />, name: "Git" },
  ];


  const services = [
    {
      img: "/02.svg",
      title: "Fullstack Web Development",
      desc: "Building complete web applications from frontend UI to backend APIs and databases.",
      delay: 0.1,
    },
    {
      img: "/03.svg",
      title: "Frontend Engineering",
      desc: "Creating responsive, clean, and interactive user interfaces using React, Next.js, and Tailwind CSS.",
      delay: 0.3,
    },
    {
      img: "/01.svg",
      title: "Backend & API Development",
      desc: "Developing scalable REST APIs with Node.js, Express, Prisma, and both SQL/NoSQL databases.",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col justify-center py-20 px-6 sm:px-10 md:px-20 overflow-hidden
        transition-colors duration-300
        ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-black"}`}
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
            Hi, I’m <b className="text-[#6f1d1b] dark:text-[#e0a899]">M. Hasbianur</b>, a Fullstack Developer who builds
            end-to-end web applications — from interactive interfaces to fast and scalable backend services.
          </p>

          <p>
            I work with technologies like React, Next.js, Node.js, Express, SQL/NoSQL, and modern UI frameworks to deliver
            efficient, secure, and user-focused digital experiences. I enjoy transforming ideas into products that work smoothly
            across devices and platforms.
          </p>
          <div className="mt-8">
            <button
              className={`border px-8 py-3 rounded-none uppercase tracking-[2px] font-semibold transition-all duration-300
                ${theme === "dark"
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
          className="
            flex-1 
            grid 
            grid-cols-3 
            xs:grid-cols-3
            sm:grid-cols-4 
            md:grid-cols-3 
            gap-4 sm:gap-6 
            justify-items-center
          "
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className={`
                flex flex-col items-center justify-center 
                w-full h-24 sm:h-32
                rounded-xl shadow-sm hover:shadow-md 
                transition-all 
                ${theme === "dark" ? "bg-[#13282c]" : "bg-[#f9fafb]"}
              `}
            >
              <div className="text-3xl sm:text-5xl mb-1">{tech.icon}</div>
              <p className="text-sm sm:text-base font-medium text-center">{tech.name}</p>
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
                  className={`object-contain transition-all duration-300
                    ${theme === "dark" ? "invert brightness-0" : ""}
                  `}
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
