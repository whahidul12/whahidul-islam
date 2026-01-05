import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCodepen } from 'react-icons/fa';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-dark via-secondary to-background-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 122, 80, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 122, 80, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          className="my-6"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium tracking-wide"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 122, 80, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            👋 Hello, I'm Whahidul Islam
          </motion.span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
          variants={itemVariants}
        >
          <motion.span
            className="block text-white"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Creative
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent bg-300% animate-gradient"
            style={{
              backgroundSize: "300% 300%"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Full Stack
          </motion.span>
          <motion.span
            className="block text-white"
            animate={{
              textShadow: [
                "0 0 0px rgba(255, 122, 80, 0)",
                "0 0 20px rgba(255, 122, 80, 0.3)",
                "0 0 0px rgba(255, 122, 80, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Developer
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I build scalable, high-performance web applications using <motion.span
            className="text-primary font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            React, Next.js, Node.js, MongoDB, Express, and modern web technologies.
          </motion.span> I specialize in crafting secure back-ends and responsive front-end experiences that turn ideas into reliable products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-primary hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 overflow-hidden"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 25px 50px -12px rgba(255, 122, 80, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <FaCodepen className='ml-2' />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>

                  {/* Social Media Links */}
        <motion.div
          className="flex justify-center items-center gap-6 flex-wrap"
          variants={itemVariants}
        >
          {[
            { 
              name: 'GitHub', 
              icon: 'fab fa-github', 
              url: 'https://github.com/whahidul12', 
              color: '#333',
              hoverColor: '#24292e'
            },
            { 
              name: 'LinkedIn', 
              icon: 'fab fa-linkedin-in', 
              url: 'https://linkedin.com/in/whahidul12', 
              color: '#76B947',
              hoverColor: '#2F5233'
            },
            { 
              name: 'Twitter', 
              icon: 'fab fa-twitter', 
              url: 'https://x.com/whahidul12', 
              color: '#1da1f2',
              hoverColor: '#0d8bd9'
            },
            { 
              name: 'Facebook', 
              icon: 'fab fa-facebook', 
              url: 'https://facebook.com/whahidul12', 
              color: '#e4405f',
              hoverColor: '#d62976'
            }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 1.2 + index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.15,
                y: -5,
                boxShadow: `0 10px 25px -5px ${social.color}40`
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.i
                className={`${social.icon} text-lg text-gray-400 group-hover:text-white transition-colors duration-300`}
                whileHover={{ 
                  color: social.color,
                  textShadow: `0 0 10px ${social.color}60`
                }}
              />
              
              {/* Floating Animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    `0 0 0 0 ${social.color}00`,
                    `0 0 0 8px ${social.color}20`,
                    `0 0 0 0 ${social.color}00`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />

              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {social.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-9 left-[48%] transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1, color: "#FF7A50" }}
          >
            <span className="text-xs mb-2 tracking-wider">SCROLL</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
              whileHover={{ borderColor: "#FF7A50" }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border border-primary/30 rounded-full"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-16 h-16 bg-primary/20 rounded-lg rotate-45"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-purple-500/30 rounded-full"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
    </section>
  );
};

export default Hero;