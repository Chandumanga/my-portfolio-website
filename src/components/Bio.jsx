import React from "react";
import { BIO } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, // Stagger animation for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Bio = () => {
  return (
    <section className="mx-auto max-w-4xl flex flex-col gap-12 pt-20" id="bio">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center text-3xl font-semibold lg:text-4xl"
      >
        Bio
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-6"
      >
        {BIO.map((bio, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className="text-lg leading-relaxed text-gray-400 lg:text-xl"
          >
            {bio}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Bio;
