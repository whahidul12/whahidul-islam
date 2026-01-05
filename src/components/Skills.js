import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Figma', icon: 'fab fa-figma', color: 'purple', percentage: 99 },
    { name: 'WordPress', icon: 'fab fa-wordpress', color: 'blue', percentage: 99 },
    { name: 'Web Development', icon: 'fas fa-code', color: 'cyan', percentage: 95 },
    { name: 'Web Design', icon: 'fas fa-palette', color: 'pink', percentage: 97 },
    { name: 'Sketch', icon: 'fab fa-sketch', color: 'yellow', percentage: 93 },
    { name: 'Adobe Xd', icon: 'Xd', color: 'fuchsia', percentage: 99 },
    { name: 'Video Editing', icon: 'fas fa-video', color: 'indigo', percentage: 94 },
    { name: 'Mobile App', icon: 'fas fa-mobile-alt', color: 'green', percentage: 90 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-[#08080C]" id="skills">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-primary font-semibold uppercase tracking-widest text-sm mb-2"
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            My Skills
          </motion.h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Work Skills
          </h3>
          <p className="text-text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-secondary-light p-8 rounded-2xl shadow-sm border border-gray-800 text-center group"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon Container */}
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {skill.name === 'Adobe Xd' ? (
                  <span className={`text-2xl font-black text-${skill.color}-600 group-hover:text-primary transition-colors`}>
                    Xd
                  </span>
                ) : (
                  < { skill.icon } />
                )}
              </motion.div>

              {/* Skill Name */}
              <h4 className="text-xl font-bold text-white mb-4">
                {skill.name}
              </h4>

              {/* Progress Bar */}
              <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-primary rounded-full text-[10px] text-white flex items-center justify-center font-bold"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    {skill.percentage}%
                  </motion.span>
                </motion.div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;