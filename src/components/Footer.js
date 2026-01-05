import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const contactInfo = [
    { icon: 'call', text: '+(234) 567-8910' },
    { icon: 'email', text: 'example@domain.com' },
    { icon: 'location_on', text: 'Kazipur, Sirajganj, BD' },
    { icon: 'schedule', text: 'Mon - Fri / 8am-10pm' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' },
    { icon: 'fab fa-instagram', href: '#' }
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

  const itemVariants = {
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
    <footer className="bg-background-dark pt-20 pb-8 border-t border-gray-800" id="contact">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                WI
              </motion.div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Whahidul Islam
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Full-Stack MERN Developer focused on building clean, scalable, and user-friendly web applications. Passionate about turning ideas into reliable digital experiences through thoughtful design and solid development.
            </p>
          </motion.div>

          {/* Navigation Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    className="hover:text-primary transition-colors flex items-center group"
                    href={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="material-icons-outlined text-xs mr-2 group-hover:text-primary"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      chevron_right
                    </motion.span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={info.text}
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span
                    className="material-icons-outlined text-primary text-lg mr-3 mt-0.5 group-hover:scale-110"
                    transition={{ duration: 0.2 }}
                  >
                    {info.icon}
                  </motion.span>
                  <span>{info.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">
              Get the latest information
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Newsletter Form */}
            <motion.form
              className="flex mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input
                className="w-full bg-secondary-light border border-gray-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-primary text-white transition-colors"
                placeholder="Your email"
                type="email"
              />
              <motion.button
                className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg transition-colors"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="material-icons-outlined text-sm"
                  animate={{ rotate: [0, 45, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  arrow_outward
                </motion.span>
              </motion.button>
            </motion.form>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon}
                  className="w-8 h-8 rounded bg-secondary-light text-gray-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${social.icon} text-xs`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Copyright © 2026 By Whahidul Islam. All Rights Reserved.
          </motion.p>
          <motion.div
            className="space-x-4 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              className="hover:text-primary transition-colors"
              href="#"
              whileHover={{ scale: 1.1 }}
            >
              Terms & Service
            </motion.a>
            <span>|</span>
            <motion.a
              className="hover:text-primary transition-colors"
              href="#"
              whileHover={{ scale: 1.1 }}
            >
              Privacy Policy
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;