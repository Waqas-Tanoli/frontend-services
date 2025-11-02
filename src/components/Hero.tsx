
'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 ">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-blue-100/60 to-purple-100/50" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated Dots */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-40"
              style={{
                left: `${15 + (i * 6)}%`,
                top: `${40 + Math.sin(i) * 30}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-cyan-600 rounded-full filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center m-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trusted By Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 mb-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-600 text-lg font-semibold">TRUSTED BY LEADING COMPANIES</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Next Generation
            </span>
            <br />
            <span className="text-slate-800">AI Platform</span>
          </motion.h1>

          {/* Client's Text */}
          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with cutting-edge artificial intelligence solutions. 
            Smart, fast, and incredibly powerful.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
              Get Started Free
            </button>
            <button className="px-10 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-slate-300">
              View Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: '99.9%', label: 'Accuracy' },
              { number: '2.5x', label: 'Faster' },
              { number: '50k+', label: 'Models' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-blue-500 mb-1">{stat.number}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
