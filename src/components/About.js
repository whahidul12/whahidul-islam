import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  const contactInfo = [
    { label: 'Name:', value: 'Whahidul Islam' },
    { label: 'Phone:', value: '+880 183 943 9896' },
    { label: 'Email:', value: 'whahidul.islam.tech@gmail.com' },
    { label: 'Username (all):', value: 'whahidul12' }
  ];

  return (
    <section className="py-20 bg-background-dark" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Profile Image Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center relative"
            variants={itemVariants}
          >
            {/* Floating Elements */}
            <motion.div
              className="absolute top-0 right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-full border-dashed opacity-30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full z-0 opacity-80"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-10 -right-6 w-12 h-12 bg-yellow-400 rounded-full z-10 border-4 border-background-dark"
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Profile Image */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-8 border-secondary-light shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  alt="Portrait of Saira"
                  className="w-full h-full object-cover"
                  src="https://avatars.githubusercontent.com/u/117866392?v=4O"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-secondary-light border border-gray-700 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white"
              variants={itemVariants}
            >
              I’m a{' '}
              <motion.span
                className="text-primary"
                animate={{
                  textShadow: [
                    "0 0 0px #FF7A50",
                    "0 0 10px #FF7A50",
                    "0 0 0px #FF7A50"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Full-Stack MERN Developer
              </motion.span>{' '}
              who started coding out of curiosity.
            </motion.h2>

            <motion.p
              className="text-text-dark mb-8 leading-relaxed"
              variants={itemVariants}
            >
              That curiosity quickly became a passion for building complete applications, from responsive user interfaces to reliable back-end systems.

              I enjoy working with React, Node.js, Express, and MongoDB, especially on projects where problem-solving, clean architecture, and scalability matter. What motivates me most is creating software that feels simple to use but is thoughtfully built behind the scenes.
            </motion.p>

            {/* Contact Info Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-8 p-6 bg-secondary-light rounded-2xl border border-gray-800"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <p className="text-primary text-sm font-semibold mb-1">{info.label}</p>
                  <p className="font-medium text-gray-200">{info.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <motion.a
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-orange-600 text-white font-medium rounded-full transition-all shadow-lg shadow-orange-500/30"
                href="#"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(255, 122, 80, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk{' '}
                <motion.span
                  className="material-icons-outlined text-sm ml-2"
                  animate={{ rotate: [0, 45, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  arrow_outward
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;