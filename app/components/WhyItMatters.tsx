'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyItMatters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageAreaVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
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
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8"
              >
                Why It{' '}
                <span className="relative">
                  Matters?
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform origin-left"
                  />
                </span>
              </motion.h2>

              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                We don't just manage care, we redesign it. By embedding equity, predictive analytics,
                and prevention into every workflow, we help our partners deliver care that's not only
                compliant but also transformative.
              </motion.p>
            </div>

            {/* Key Impact Areas */}
            <motion.div
              variants={textVariants}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Equity-First Design</h3>
                  <p className="text-gray-600">
                    Built-in algorithms ensure fair care delivery across all patient populations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Predictive Intelligence</h3>
                  <p className="text-gray-600">
                    Advanced analytics identify risks before they become critical issues
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 2,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 bg-blue-800 rounded-full mt-2 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prevention-Centered</h3>
                  <p className="text-gray-600">
                    Proactive interventions that prevent costly complications and improve outcomes
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual Space */}
          <motion.div
            variants={imageAreaVariants}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 flex items-center justify-center overflow-hidden">

              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    style={{
                      left: `${(i % 4) * 25 + 12.5}%`,
                      top: `${Math.floor(i / 4) * 25 + 12.5}%`,
                    }}
                  />
                ))}
              </div>

              {/* Central Visual Element */}
              <div className="relative z-10 text-center space-y-6">

                {/* Interconnected Circles */}
                <div className="relative w-40 h-40 mx-auto">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    {/* Outer circles */}
                    {['Equity', 'Analytics', 'Prevention'].map((label, index) => {
                      const angle = (index * 120) * Math.PI / 180;
                      const x = Math.cos(angle) * 60;
                      const y = Math.sin(angle) * 60;

                      return (
                        <motion.div
                          key={label}
                          className="absolute w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                          style={{
                            left: `calc(50% + ${x}px - 24px)`,
                            top: `calc(50% + ${y}px - 24px)`,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-xs font-bold text-white">
                            {label.charAt(0)}
                          </span>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* Center circle */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-xl flex items-center justify-center"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  </motion.div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                    {[0, 120, 240].map((angle, index) => {
                      const x1 = 80 + Math.cos(angle * Math.PI / 180) * 30;
                      const y1 = 80 + Math.sin(angle * Math.PI / 180) * 30;
                      const x2 = 80 + Math.cos(angle * Math.PI / 180) * 60;
                      const y2 = 80 + Math.sin(angle * Math.PI / 180) * 60;

                      return (
                        <motion.line
                          key={index}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        />
                      );
                    })}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#9333ea" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-500 font-medium">Transformative Care</p>
                  <p className="text-sm text-gray-400">Integrated approach to healthcare innovation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;