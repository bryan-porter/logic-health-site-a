'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WelcomeSection = () => {
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

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
      },
    },
  };

  const logoAreaVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >

          {/* Left Column - Text Content */}
          <motion.div variants={textVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={textVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  LOGIC
                </span>{' '}
                Health Management
              </motion.h2>

              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                A trusted partner in delivering scalable, compliant, and equity-driven care management solutions. We operate the full spectrum of CMS-recognized models, empowering providers, provider groups, and hospitals to provide high-impact, audit-ready care across every setting.
              </motion.p>
            </div>

            {/* Key Highlights */}
            <motion.div
              variants={textVariants}
              className="space-y-4"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Scalable Solutions</span> -
                  Designed to grow with your organization's needs
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Compliance-First</span> -
                  Built-in CMS requirements and regulatory standards
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-800 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Equity-Driven</span> -
                  Ensuring fair and accessible care for all populations
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={textVariants} className="pt-6">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn More About Our Approach
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Logo/Image Space */}
          <motion.div
            variants={logoAreaVariants}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">

              {/* Placeholder for Logo/Image */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-500 font-medium">LOGIC Logo</p>
                  <p className="text-sm text-gray-400">Placeholder for company logo or image</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-full transform origin-left"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;