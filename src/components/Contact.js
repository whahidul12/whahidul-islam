import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setFormData({ name: '', email: '', message: '' });
            setSubmitStatus('success');
            console.log('Form submitted:', formData);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 3000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
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

    const socialLinks = [
        { name: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/sairakarim', color: '#333' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/sairakarim', color: '#0077b5' },
        { name: 'Twitter', icon: 'fab fa-twitter', href: 'https://twitter.com/sairakarim', color: '#1da1f2' },
        { name: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com/sairakarim', color: '#e4405f' },
        { name: 'Dribbble', icon: 'fab fa-dribbble', href: 'https://dribbble.com/sairakarim', color: '#ea4c89' }
    ];

    return (
        <section className="py-20 bg-background-dark relative overflow-hidden" id="contact">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
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
            </div>

            <div className="container mx-auto px-4 relative z-10">
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
                        Get In Touch
                    </motion.h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Work Together
                    </h3>
                    <p className="text-text-dark text-lg leading-relaxed">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                        Let's create something amazing together.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Information Section */}
                        <motion.div
                            className="space-y-8"
                            variants={itemVariants}
                        >
                            {/* Contact Cards */}
                            <div className="space-y-6">
                                {/* Email Card */}
                                <motion.div
                                    className="bg-secondary-light p-6 rounded-2xl border border-gray-800 group"
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: "rgba(255, 122, 80, 0.3)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center space-x-4">
                                        <motion.div
                                            className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <span className="material-icons-outlined text-primary">email</span>
                                        </motion.div>
                                        <div>
                                            <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
                                            <motion.a
                                                href="mailto:saira@example.com"
                                                className="text-white font-medium hover:text-primary transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                saira@example.com
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Phone Card */}
                                <motion.div
                                    className="bg-secondary-light p-6 rounded-2xl border border-gray-800 group"
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: "rgba(255, 122, 80, 0.3)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center space-x-4">
                                        <motion.div
                                            className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <span className="material-icons-outlined text-primary">phone</span>
                                        </motion.div>
                                        <div>
                                            <p className="text-gray-400 text-sm font-medium mb-1">Phone</p>
                                            <motion.a
                                                href="tel:+1234567890"
                                                className="text-white font-medium hover:text-primary transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                +1 (234) 567-8910
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Location Card */}
                                <motion.div
                                    className="bg-secondary-light p-6 rounded-2xl border border-gray-800 group"
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: "rgba(255, 122, 80, 0.3)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <motion.div
                                            className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <span className="material-icons-outlined text-primary">location_on</span>
                                        </motion.div>
                                        <div>
                                            <p className="text-gray-400 text-sm font-medium mb-1">Location</p>
                                            <address className="text-white font-medium not-italic leading-relaxed">
                                                San Francisco, CA<br />
                                                United States
                                            </address>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Media Links */}
                            <motion.div
                                className="pt-8"
                                variants={itemVariants}
                            >
                                <p className="text-gray-400 font-medium mb-6">Follow me on social media</p>
                                {/* Social Media Links */}
                                <motion.div
                                    className="flex justify-start items-center gap-6 flex-wrap"
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
                        </motion.div>

                        {/* Contact Form Section */}
                        <motion.div
                            className="bg-secondary-light p-8 rounded-2xl border border-gray-800"
                            variants={itemVariants}
                            whileHover={{ borderColor: "rgba(255, 122, 80, 0.2)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <motion.div
                                        className="space-y-2"
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label
                                            className="text-sm font-medium text-gray-300"
                                            htmlFor="name"
                                        >
                                            Your Name
                                        </label>
                                        <motion.input
                                            className="w-full bg-gray-800 border border-gray-700 focus:border-primary focus:ring-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all duration-200"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your full name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            whileFocus={{
                                                scale: 1.02,
                                                borderColor: "#FF7A50",
                                                boxShadow: "0 0 0 3px rgba(255, 122, 80, 0.1)"
                                            }}
                                        />
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div
                                        className="space-y-2"
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label
                                            className="text-sm font-medium text-gray-300"
                                            htmlFor="email"
                                        >
                                            Email Address
                                        </label>
                                        <motion.input
                                            className="w-full bg-gray-800 border border-gray-700 focus:border-primary focus:ring-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all duration-200"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email address"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            whileFocus={{
                                                scale: 1.02,
                                                borderColor: "#FF7A50",
                                                boxShadow: "0 0 0 3px rgba(255, 122, 80, 0.1)"
                                            }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Message Field */}
                                <motion.div
                                    className="space-y-2"
                                    whileHover={{ scale: 1.005 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label
                                        className="text-sm font-medium text-gray-300"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <motion.textarea
                                        className="w-full bg-gray-800 border border-gray-700 focus:border-primary focus:ring-0 rounded-lg px-4 py-4 text-white placeholder-gray-500 resize-none transition-all duration-200"
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project or just say hello..."
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        whileFocus={{
                                            scale: 1.01,
                                            borderColor: "#FF7A50",
                                            boxShadow: "0 0 0 3px rgba(255, 122, 80, 0.1)"
                                        }}
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{
                                        scale: 1.02,
                                        y: -2,
                                        boxShadow: "0 20px 25px -5px rgba(255, 122, 80, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.span
                                        className="flex items-center justify-center"
                                        animate={isSubmitting ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
                                        transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <motion.span
                                                    className="material-icons-outlined ml-2 text-lg"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                >
                                                    send
                                                </motion.span>
                                            </>
                                        )}
                                    </motion.span>

                                    {/* Success/Error Overlay */}
                                    <AnimatePresence>
                                        {submitStatus && (
                                            <motion.div
                                                className={`absolute inset-0 flex items-center justify-center rounded-lg ${submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
                                                    }`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <span className="flex items-center text-white font-semibold">
                                                    <span className="material-icons-outlined mr-2">
                                                        {submitStatus === 'success' ? 'check_circle' : 'error'}
                                                    </span>
                                                    {submitStatus === 'success' ? 'Message Sent!' : 'Failed to Send'}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </motion.form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;