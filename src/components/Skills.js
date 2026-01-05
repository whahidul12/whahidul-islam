import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      description: "Creating engaging user interfaces with modern frameworks and responsive design",
      skills: [
        { name: 'React.js', icon: 'fab fa-react', color: 'cyan', percentage: 95 },
        { name: 'Next.js', icon: 'fas fa-layer-group', color: 'gray', percentage: 90 },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: 'yellow', percentage: 92 },
        { name: 'HTML', icon: 'fab fa-html5', color: 'orange', percentage: 98 },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: 'blue', percentage: 95 },
        // { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'teal', percentage: 88 }
      ]
    },
    {
      title: "Back-End Development",
      description: "Building robust server-side applications and database management",
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: 'green', percentage: 85 },
        { name: 'Express.js', icon: 'fas fa-server', color: 'gray', percentage: 82 },
        { name: 'MongoDB', icon: 'fas fa-leaf', color: 'green', percentage: 80 },
        { name: 'REST API', icon: 'fas fa-exchange-alt', color: 'purple', percentage: 88 },
        { name: 'Firebase', icon: 'fas fa-fire', color: 'orange', percentage: 75 }
      ]
    },
    {
      title: "Tools & Others",
      description: "Essential development tools and design software for efficient workflow",
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', color: 'red', percentage: 90 },
        { name: 'GitHub', icon: 'fab fa-github', color: 'gray', percentage: 92 },
        { name: 'VS Code', icon: 'fas fa-code', color: 'blue', percentage: 95 },
        { name: 'Postman', icon: 'fas fa-paper-plane', color: 'orange', percentage: 85 },
        { name: 'Figma', icon: 'fab fa-figma', color: 'purple', percentage: 78 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { y: 30, opacity: 0 },
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
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-primary font-semibold uppercase tracking-widest text-sm mb-4"
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Technical Skills
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Development Expertise
          </h3>
          <p className="text-text-dark text-lg leading-relaxed">
            Proficient in modern web technologies with a focus on creating scalable,
            user-friendly applications. From front-end interfaces to back-end architecture,
            I bring ideas to life with clean, efficient code.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="relative"
              variants={categoryVariants}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <motion.h4
                  className="text-2xl md:text-3xl font-bold text-white mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.title}
                </motion.h4>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="bg-secondary-light p-6 rounded-2xl shadow-sm border border-gray-800 text-center group relative overflow-hidden"
                    variants={skillVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      boxShadow: "0 25px 50px -12px rgba(255, 122, 80, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />

                    {/* Icon Container */}
                    <motion.div
                      className="relative w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <i className={`${skill.icon} text-3xl text-${skill.color}-500 group-hover:text-primary transition-colors`}></i>
                    </motion.div>

                    {/* Skill Name */}
                    <h5 className="text-lg font-bold text-white mb-4 relative z-10">
                      {skill.name}
                    </h5>

                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-gray-700 rounded-full overflow-hidden mb-2">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-orange-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>

                    {/* Percentage */}
                    <motion.span
                      className="text-xs font-semibold text-gray-400 relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1 }}
                    >
                      {skill.percentage}%
                    </motion.span>

                    {/* Floating Decoration */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-primary/30 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: skillIndex * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Category Separator */}
              {categoryIndex < skillCategories.length - 1 && (
                <motion.div
                  className="mt-16 flex items-center justify-center"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-full max-w-md"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.p
            className="text-gray-400 mb-8 text-lg"
            whileHover={{ scale: 1.02 }}
          >
            Ready to bring your ideas to life with these technologies?
          </motion.p>
          <motion.a
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-orange-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-orange-500/25"
            href="#contact"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 25px 50px -12px rgba(255, 122, 80, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
            <motion.span
              className="material-icons-outlined ml-2 text-lg"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              arrow_forward
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;