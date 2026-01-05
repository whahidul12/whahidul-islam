import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Robert J.',
      position: 'CEO at Acme',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzk_a29j9qmH_AVIDpA-HiPGqSA0tOkYrEblzfJzCbHUwyNGzR2XS1IiXcXS0HP5UnronsV-1GYWBNy-XZJZ5GLgoD3-pl2iCuYipZ_51oWina7h8cYizvKIPVoPHwwa3c8hPdmTBD5ME5k0nvBUkwAus726uP_1FbPdBD6Zicjtk80Xijt7sRmO6YWclaaUXbOiCNEbQwL0Z2sosCmeU1JO_gbzypUwTlNbzDvzLOK4abE2wNyzJkuPFroWB5mBbANXe3nW7N4gZ_',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
    },
    {
      name: 'Janica',
      position: 'Designation',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5AL0qBJYt79qr0ggjD2UKZ_SGWFhQ9saG2EssHgWHQnaRQKmzZewztIqsDDKwyrzTd22jWEnj_SbukSws0TJeI2VhygB5EWUsXt-BGichkyhPE6RtAqNOvsIZZHEex7l0RS4W4DPHFXc20ph-V4Qd1Xwt7lwKUoXebfsJUZtUm6K-aNRCoqznJEZsWTqeKrxLYgWBNpifaOLp8o4q_7i49oF3bMk033pnpDMWsyM6H3-ZVJ9bqPuot8XXaBv89nPICd7nVuGHtkhk',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
    },
    {
      name: 'Justin B.',
      position: 'Designation',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6v1WG_NczjepTbRi7I7WCMYplbgA46mOL0sqK1aRPIwp0Gv3GSQ7OrxWwfb921ZZOJziWtQg39Rn4S5ey8XnOKBOloKQujgAREwY-UDHt5rIRc9vmM_RNoz8FXiM1I7ZH0sXIqcNXJ4J0_jyVyph2NNNUIocKazKlVDkuFlwZXmruPF6QlQMBBPP5rWghjSYWXL26vi8411jWdQ19LUCfNfSdJ8tzd3uqouZZevlyev48PIf-JOkvrnpMNUr2DfcqmVC24g5CmUWV',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
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
    <section className="py-20 bg-[#08080C]">
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
            Testimonials
          </motion.h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What My Clients Say
          </h3>
          <p className="text-text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-secondary-light p-8 rounded-2xl shadow-sm border border-gray-800 relative group"
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Star Rating */}
              <motion.div
                className="flex text-primary mb-4 text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.i
                    key={i}
                    className="fas fa-star"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.4 + i * 0.1,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                  />
                ))}
              </motion.div>

              {/* Client Info */}
              <motion.div
                className="flex items-center mb-6"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20"
                  whileHover={{ scale: 1.1, borderColor: "rgba(255, 122, 80, 0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt={`Client ${testimonial.name}`}
                    className="w-full h-full object-cover"
                    src={testimonial.image}
                  />
                </motion.div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.position}</p>
                </div>
                <motion.i
                  className="fas fa-quote-right ml-auto text-4xl text-gray-700 group-hover:text-primary/20 transition-colors"
                  animate={{
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Testimonial Text */}
              <motion.p
                className="text-gray-400 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                {testimonial.text}
              </motion.p>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
              />

              {/* Floating Animation */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;