'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Zap,
  FileText,
  Users,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const SuccessStories = () => {
  const metrics = [
    {
      value: '89%',
      label: 'Faster Processing',
      icon: <Clock className="h-5 w-5" />,
    },
    {
      value: '98%',
      label: 'Accuracy Rate',
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      value: '47K',
      label: 'Documents Automated',
      icon: <FileText className="h-5 w-5" />,
    },
    {
      value: '200+',
      label: 'Organizations Served',
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const caseStudies = [
    {
      organization: 'City School District',
      result: 'Reduced document processing from 3 weeks to 2 hours',
      metric: '94% faster',
      category: 'Education',
    },
    {
      organization: 'Nonprofit Network',
      result: 'Automated donor management and reporting',
      metric: '65% time saved',
      category: 'Nonprofit',
    },
    {
      organization: 'Government Agency',
      result: 'Streamlined public record requests',
      metric: '5x faster',
      category: 'Government',
    },
  ];

  const transformationSteps = [
    {
      title: 'Raw Input',
      description: 'Unstructured documents, emails, and data sources',
      icon: '📄',
      color: 'from-red-500/10 to-orange-500/10',
      status: 'chaos',
    },
    {
      title: 'AI Processing',
      description: 'Intelligent extraction and categorization',
      icon: '⚡',
      color: 'from-blue-500/20 to-purple-500/20',
      status: 'processing',
      glow: true,
    },
    {
      title: 'Structured Output',
      description: 'Organized, actionable data categories',
      icon: '📊',
      color: 'from-green-500/10 to-emerald-500/10',
      status: 'clarity',
    },
  ];

  const dataCategories = [
    { name: 'Financial Records', count: '12,458', trend: '+15%' },
    { name: 'Legal Documents', count: '8,342', trend: '+22%' },
    { name: 'Public Records', count: '15,927', trend: '+18%' },
    { name: 'Compliance Files', count: '6,831', trend: '+31%' },
    { name: 'Operational Data', count: '11,205', trend: '+12%' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 "
      id="solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reducto-Style Transformation Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 px-4 py-2 text-sm font-medium text-blue-700 mb-6 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              AI-POWERED TRANSFORMATION
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-bold text-gray-900 mb-6 mt-6"
              style={{ fontFamily: 'Chakra Petch, sans-serif' }}
            >
              From Chaos to Clarity
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Watch messy, unstructured data transform into organized
              intelligence through our AI engine
            </p>
          </motion.div>

          {/* Transformation Pipeline */}
          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400 via-blue-500 to-green-400 transform -translate-y-1/2 z-0 hidden md:block" />

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {transformationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div
                    className={`relative rounded-3xl border border-gray-200/80 bg-white/80 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                      step.glow ? 'shadow-xl border-blue-300/50' : ''
                    }`}
                  >
                    {/* Glow Effect for Processing Step */}
                    {step.glow && (
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    )}

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 text-2xl`}
                      >
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-3 ${
                          step.status === 'chaos' ? 'text-red-600'
                          : step.status === 'processing' ? 'text-blue-600'
                          : 'text-green-600'
                        }`}
                        style={{ fontFamily: 'Chakra Petch, sans-serif' }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-gray-600 leading-relaxed"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow between steps - hidden on mobile */}
                  {index < transformationSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Categories Output */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Chakra Petch, sans-serif' }}
              >
                Structured Data Categories
              </h3>
              <p
                className="text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                AI automatically categorizes and organizes your data into
                actionable insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {dataCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-200/60 p-6 text-center hover:shadow-lg hover:border-green-300/50 transition-all duration-300 group"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {category.count}
                  </div>
                  <div
                    className="font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {category.name}
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    {category.trend}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Success Stories Section */}
        <motion.div>
          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 sm:gap-3 rounded-lg bg-gray-900 px-6 py-3 sm:px-8 sm:py-4 text-white font-medium border border-gray-900 shadow-sm hover:bg-white hover:text-gray-900 hover:border-gray-900 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              See how it Works
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Global Styles */}
      <style
        jsx
        global
      >{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};
