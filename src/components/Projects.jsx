import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-3xl font-semibold lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} // Subtle scaling
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.img
              src={project.image}
              alt={`Preview of ${project.name}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100"
            >
              <h3 className="mb-3 text-lg font-bold lg:text-xl">{project.name}</h3>
              <p className="mb-6 px-4 text-center text-sm lg:text-base">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black transition-all hover:bg-gray-300"
              >
                <span>View on GitHub</span>
                <MdArrowOutward size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
