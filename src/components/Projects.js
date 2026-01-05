import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Stripe API"],
      description: "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern web technologies to provide a seamless shopping experience.",
      liveLink: "https://ecommerce-demo.vercel.app",
      githubLink: "https://github.com/username/ecommerce-platform",
      challenges: [
        "Implementing secure payment processing with Stripe",
        "Managing complex state for cart and user sessions",
        "Optimizing database queries for product searches",
        "Ensuring responsive design across all devices"
      ],
      improvements: [
        "Add real-time inventory management",
        "Implement advanced search filters",
        "Add product recommendation system",
        "Integrate with multiple payment gateways"
      ]
    },
    {
      id: 2,
      name: "Task Management App",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Frontend",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Framer Motion"],
      description: "A modern task management application with drag-and-drop functionality, real-time collaboration, and intuitive user interface. Features include project organization, deadline tracking, and team collaboration tools.",
      liveLink: "https://taskmanager-pro.vercel.app",
      githubLink: "https://github.com/username/task-manager",
      challenges: [
        "Implementing smooth drag-and-drop interactions",
        "Real-time synchronization between multiple users",
        "Complex state management for nested task structures",
        "Performance optimization for large task lists"
      ],
      improvements: [
        "Add calendar integration",
        "Implement time tracking features",
        "Add mobile app version",
        "Integrate with third-party tools like Slack"
      ]
    },
    {
      id: 3,
      name: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Frontend",
      technologies: ["React.js", "JavaScript", "CSS3", "OpenWeather API", "Chart.js", "Geolocation API"],
      description: "An interactive weather dashboard providing current conditions, 7-day forecasts, and weather maps. Features location-based weather, search functionality, and beautiful data visualizations with charts and graphs.",
      liveLink: "https://weather-dashboard-pro.netlify.app",
      githubLink: "https://github.com/username/weather-dashboard",
      challenges: [
        "Handling API rate limits and error states",
        "Creating responsive charts and visualizations",
        "Implementing accurate geolocation features",
        "Managing different weather data formats"
      ],
      improvements: [
        "Add weather alerts and notifications",
        "Implement historical weather data",
        "Add weather-based activity suggestions",
        "Create offline functionality"
      ]
    },
    {
      id: 4,
      name: "Social Media Dashboard",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS", "JWT"],
      description: "A comprehensive social media management dashboard with real-time messaging, post scheduling, analytics, and user engagement tracking. Built for content creators and social media managers.",
      liveLink: "https://social-dashboard.vercel.app",
      githubLink: "https://github.com/username/social-dashboard",
      challenges: [
        "Implementing real-time messaging with Socket.io",
        "Complex user authentication and authorization",
        "Managing large amounts of social media data",
        "Creating intuitive analytics visualizations"
      ],
      improvements: [
        "Add AI-powered content suggestions",
        "Implement multi-platform posting",
        "Add advanced analytics and reporting",
        "Create mobile companion app"
      ]
    },
    {
      id: 5,
      name: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Frontend",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS", "Netlify", "CSS3"],
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience. Features smooth animations, contact forms, and optimized performance for excellent user experience.",
      liveLink: "https://saira-portfolio.netlify.app",
      githubLink: "https://github.com/username/portfolio-website",
      challenges: [
        "Creating smooth, performant animations",
        "Optimizing images and loading times",
        "Implementing effective SEO strategies",
        "Ensuring cross-browser compatibility"
      ],
      improvements: [
        "Add blog section with CMS integration",
        "Implement dark/light theme toggle",
        "Add project filtering and search",
        "Create admin panel for content management"
      ]
    },
    {
      id: 6,
      name: "Recipe Finder App",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      technologies: ["React.js", "Express.js", "MongoDB", "Spoonacular API", "Material-UI", "Node.js"],
      description: "A recipe discovery application that helps users find recipes based on available ingredients, dietary preferences, and cooking time. Features include meal planning, shopping lists, and nutritional information.",
      liveLink: "https://recipe-finder-app.herokuapp.com",
      githubLink: "https://github.com/username/recipe-finder",
      challenges: [
        "Integrating multiple food APIs effectively",
        "Creating complex search and filter logic",
        "Managing user preferences and dietary restrictions",
        "Optimizing API calls to reduce costs"
      ],
      improvements: [
        "Add meal planning calendar",
        "Implement user recipe sharing",
        "Add grocery delivery integration",
        "Create nutrition tracking features"
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-background-dark" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
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
            My Portfolio
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h3>
          <p className="text-text-dark text-lg leading-relaxed">
            Explore my latest work showcasing modern web development techniques, 
            creative problem-solving, and attention to user experience design.
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
              key={project.id}
              className="bg-secondary-light rounded-2xl overflow-hidden border border-gray-800 group cursor-pointer relative"
              variants={cardVariants}
              whileHover={{
                y: -10,
                borderColor: "rgba(255, 122, 80, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h4
                  className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.name}
                </motion.h4>

                {/* Technology Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Brief Description */}
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description.substring(0, 120)}...
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-4 py-2 bg-primary hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 hover:border-primary text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="material-icons-outlined text-sm mr-1">launch</span>
                    Live
                  </motion.a>
                </div>
              </div>

              {/* Floating Decoration */}
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-primary/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-secondary-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="material-icons-outlined">close</span>
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.name}
                </h3>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technology Stack */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Technology Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gray-800 text-primary font-medium rounded-lg border border-gray-700"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mb-8">
                  <motion.a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-primary hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="material-icons-outlined mr-2">launch</span>
                    View Live Project
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 border border-gray-600 hover:border-primary text-gray-300 hover:text-white font-semibold rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub Repository
                  </motion.a>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Challenges Faced</h4>
                  <ul className="space-y-3">
                    {selectedProject.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="material-icons-outlined text-primary text-sm mr-3 mt-0.5">
                          arrow_right
                        </span>
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Future Improvements */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Future Improvements</h4>
                  <ul className="space-y-3">
                    {selectedProject.improvements.map((improvement, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="material-icons-outlined text-primary text-sm mr-3 mt-0.5">
                          trending_up
                        </span>
                        {improvement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;