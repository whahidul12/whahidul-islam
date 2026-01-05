import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'UI/UX Design',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDnPSN-gyA59DnD-ufhcuvV6v8uv7HcATDyJHnDXhlHGvP-hVjmO9lV0DvdxBGqt0xH6H778pGLOz-y4FR6GoDeAr8Gah8DQGQvgEXSEdPXMx462tnVz0c1JHy-dUdgEh44FpzkhgOvqY5uqkQ3tDuUZeH9DGj7MHMexrxm9CIEnBz8P4EM_Ywl0rUvjLbk1n-B3Bla1_5IdrrPA_Uq7vYiUQOcX4q81ZLwBpYaoLmBxi6TEDx3VGQoCY7KCYoCXV_AyPvq95j8pgA',
      alt: 'UI UX Design workspace'
    },
    {
      title: 'Web Design',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbIlijywa6se5C_tRGE1HyakGMsMWozePbt9cycjSrKa_tVYvRdMI_ah_SM9NQoapFfs6FqI-b3KD4JxKd6PF2h2ZUtfn5bSGshFcEwMS91tLP0npAHlf7qDwKmjpVWlwAtacovCffoJ0YIcbbVnUU0NYkIQkAOrl-6FBkDKoyNMXDPMnzb__36j76tahd3_gxitJc_tWRrm0BnG_o2QPtaXEL2mA7XQBP0-lqQBhq3yzriRkPrMXS3iNYVoP2lQxvlfxqBR02n0e4',
      alt: 'Web design wireframes'
    },
    {
      title: 'Web Development',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8_KemJHOi1CAL0Dg-eT-xMOnr2RGAFOyDT0OGW025LrQIph0bIN1RNWFcP3X0jRIa8rf1qrErQd_6GkNMRDm0rsy8nqojiNcMjPJ0gdCqpPxLeajDOltZPeOKDuLM_D_uaOfuBqN86kxIyTmElxJyCtIUZjY7RdUolQWEhf2EjzESUfRCtDirW77fqp0Sa4pOzgR6Tsv63LtDHukKrrnDFx9UmeijPEQ54ASZWnlfM8XBnINKMpP5BQupIQJ1zAqyJSClomEojIUv',
      alt: 'Coding setup'
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

  const cardVariants = {
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

  return (
    <section className="py-20 bg-background-dark" id="projects">
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
            What I Do
          </motion.h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Project
          </h3>
          <p className="text-text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-secondary-light rounded-2xl overflow-hidden border border-gray-800 group cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -10,
                borderColor: "rgba(255, 122, 80, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Title */}
              <div className="p-8 pb-4">
                <motion.h4
                  className="text-xl font-bold text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h4>
              </div>

              {/* Project Image */}
              <div className="px-4">
                <motion.div
                  className="relative aspect-video rounded-xl overflow-hidden mb-6 group-hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Arrow Button */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transform translate-y-14 group-hover:translate-y-0 transition-transform duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: 45
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="material-icons-outlined text-sm">arrow_outward</span>
                  </motion.div>

                  {/* Ripple Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    whileHover={{
                      boxShadow: [
                        "0 0 0 0 rgba(255, 122, 80, 0.4)",
                        "0 0 0 10px rgba(255, 122, 80, 0.1)",
                        "0 0 0 20px rgba(255, 122, 80, 0)"
                      ]
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
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
            See All{' '}
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
      </div>
    </section>
  );
};

export default Projects;