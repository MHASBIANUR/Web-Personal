"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Project() {
  const { theme } = useTheme();

  const projects = [
    {
      src: "/project1.jpg",
      title: "Taskora",
      desc: "To-Do App",
      link: "https://taskora-phi.vercel.app/",
    },
    {
      src: "/project2.jpg",
      title: "MediMine",
      desc: "AI Integration App",
      link: "#",
    },
    {
      src: "/project3.jpg",
      title: "ResuMatch",
      desc: "Web Development App in Telegram",
      link: "https://resumatch-ivory.vercel.app/",
    },
    {
      src: "/projectt4.jpg",
      title: "My Portfolio",
      desc: "Portfolio Web",
      link: "#",
    },
  ];

  return (
    <section
      id="project"
      className={`relative py-24 w-full overflow-hidden transition-colors duration-500
        ${theme === "dark" ? "bg-black text-gray-200" : "bg-[#f8fbfc] text-black"}`}
    >
      {/* Background blur */}
      <div
        className={`absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full blur-3xl -z-10 opacity-50
        ${theme === "dark" ? "bg-[#13282c]" : "bg-[#e0f3f7]"}`}
      />
      <div
        className={`absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl -z-10 opacity-40
        ${theme === "dark" ? "bg-[#1a2c2f]" : "bg-[#d6eff5]"}`}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Projects
          </motion.h2>
          <p className="text-lg opacity-80">
            Some of my featured works and experiments.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group rounded-xl shadow-md hover:shadow-2xl transition-all duration-500
                ${theme === "dark" ? "bg-[#13282c]" : "bg-white"}`}
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-40 sm:h-48 md:h-60">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover rounded-xl transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end rounded-xl">
                  <div className="p-4 sm:p-6 text-white translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h5 className="uppercase tracking-widest font-semibold text-base sm:text-lg mb-1">
                      {project.title}
                    </h5>
                    <p className="text-sm sm:text-base tracking-wide">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
