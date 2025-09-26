'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="relative py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 m -60 0 l 60 0' fill='none' stroke='white' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >

          {/* Heading */}
          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Ready to Transform{' '}
            <span className="relative">
              Care Delivery?
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-white/30 rounded-full transform origin-left"
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Let's co-design the future of healthcare, where compliance meets compassion,
            and innovation drives impact.
          </motion.p>

          {/* Contact Button */}
          <motion.div
            variants={buttonVariants}
            className="pt-6"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-12 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Contact Us
              <motion.div
                className="ml-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5 transition-transform duration-200" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-8"
          >
            <p className="text-white/70 text-sm md:text-base">
              Join healthcare leaders who trust LOGIC to deliver measurable results
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={isInView ? { opacity: 0.1, rotate: 0 } : { opacity: 0, rotate: -45 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/2 right-20 w-12 h-12 border-2 border-white transform rotate-45"
        />
      </div>
    </section>
  );
};

export default CTASection;