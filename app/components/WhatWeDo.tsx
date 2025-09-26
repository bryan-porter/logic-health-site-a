'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 'awv',
      title: 'AWV',
      description: 'Annual Wellness Visit (AWV) with personalized prevention plans, HRA logic, and Z-code capture aligned with CMS.',
      angle: 0,
    },
    {
      id: 'prevention',
      title: 'Prevention & Wellness',
      description: 'Prevention and Wellness Visit evidence-based screenings, immunizations, and lifestyle interventions aligned with CMS and USPSTF guidelines.',
      angle: 36,
    },
    {
      id: 'ccm',
      title: 'CCM',
      description: 'Chronic Care Management (CCM) with streamlined documentation, supervision logic, and Z-code overlays.',
      angle: 72,
    },
    {
      id: 'bhi',
      title: 'BHI',
      description: 'Behavioral Health Integration (BHI) with embedded PROMs and risk stratification.',
      angle: 126,
    },
    {
      id: 'pcm',
      title: 'PCM',
      description: 'Principal Care Management (PCM) tailored for high-risk patients and specialty alignment.',
      angle: 162,
    },
    {
      id: 'rpm',
      title: 'RPM',
      description: 'Remote Patient Monitoring (RPM) with device integration, alert routing, and compliance dashboards.',
      angle: 198,
    },
    {
      id: 'rtm',
      title: 'RTM',
      description: 'Remote Therapeutic Monitoring (RTM) tracking and managing non-physiological data, like therapy adherence, pain levels, and behavioral health engagement, outside the clinic.',
      angle: 234,
    },
    {
      id: 'tcm',
      title: 'TCM',
      description: 'Transitional Care Management (TCM) with discharge coordination, care management, and equity mapping.',
      angle: 270,
    },
    {
      id: 'chi-pin',
      title: 'CHI & PIN',
      description: 'Community Health Integration and Principal Illness Navigation (CHI & PIN) with SDoH-driven workflows.',
      angle: 306,
    },
    {
      id: 'teams',
      title: 'Hospital TEAMs',
      description: 'Hospital-based Team Evaluation and Augmented Management (TEAMs) models for scalable inpatient and outpatient care.',
      angle: 342,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const serviceVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const centralGlowVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const getPositionFromAngle = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    };
  };

  return (
    <section ref={ref} className="min-h-screen py-20 px-6" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Title and Subtitle */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                What We{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Offer
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                We integrate clinical logic, regulatory nuance, and team-based workflows across:
              </p>
            </div>

            {/* Additional descriptive text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 animate-pulse" />
                <p className="text-gray-400">
                  <span className="text-white font-semibold">Comprehensive Care Models</span> -
                  From preventive care to complex care management
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 animate-pulse" />
                <p className="text-gray-400">
                  <span className="text-white font-semibold">Regulatory Compliance</span> -
                  Built-in CMS requirements and quality measures
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 animate-pulse" />
                <p className="text-gray-400">
                  <span className="text-white font-semibold">Workflow Integration</span> -
                  Seamless integration with existing clinical workflows
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Circular Visualization */}
          <div className="relative flex items-center justify-center min-h-[900px] w-full">

            {/* Central Glow Effect */}
            <motion.div
              variants={centralGlowVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute inset-0 flex items-center justify-center"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute w-20 h-20 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-spin"
                   style={{ animationDuration: '8s' }} />
            </motion.div>

            {/* Central Core */}
            <motion.div
              variants={centralGlowVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-purple-500/50 z-10 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-8 h-8 bg-white rounded-full"
              />
            </motion.div>

            {/* Services arranged in circle */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative w-full h-full flex items-center justify-center"
            >
              {services.map((service, index) => {
                const position = getPositionFromAngle(service.angle, 350);

                return (
                  <motion.div
                    key={service.id}
                    variants={serviceVariants}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Connection Line to Center */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
                      style={{
                        width: '350px',
                        transformOrigin: 'right center',
                        transform: `rotate(${service.angle + 180}deg)`,
                        right: '50%',
                        top: '50%',
                      }}
                    />

                    {/* Service Card */}
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 w-[240px] max-w-[240px] group-hover:border-purple-400/50 transition-all duration-300">

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                      <div className="relative z-10">
                        <h3 className="text-white font-bold text-sm mb-2 group-hover:text-purple-200 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      {/* Pulse Indicator */}
                      <motion.div
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Orbital Rings */}
            {[500, 550, 600].map((radius, index) => (
              <motion.div
                key={radius}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 1 }}
                className="absolute border border-gray-600/20 rounded-full pointer-events-none"
                style={{
                  width: `${radius}px`,
                  height: `${radius}px`,
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20 + index * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;