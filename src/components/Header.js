import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 py-4 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.nav
          className={`bg-secondary/90 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center shadow-lg border border-gray-800 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''
            }`}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              WI
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Whahidul
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.a
                  className="hover:text-primary transition-colors relative"
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <motion.a
            className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-primary hover:bg-orange-600 text-white text-sm font-medium rounded-full transition-colors shadow-lg shadow-orange-500/30"
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            Download CV <FaDownload className="ml-2" />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-icons-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </motion.button>
        </motion.nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 bg-secondary/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-800"
          >
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    className="block text-gray-300 hover:text-primary transition-colors py-2"
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.a
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-orange-600 text-white text-sm font-medium rounded-full transition-colors shadow-lg shadow-orange-500/30"
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Download CV <FaDownload className="ml-2" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;