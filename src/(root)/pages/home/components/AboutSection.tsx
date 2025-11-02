'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Users, Building, FileText, ArrowRight, Zap, Calendar } from 'lucide-react';

export function AboutSection() {
  const missionVision = [
    {
      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Our Mission",
      content: "Automate public sector workflows with AI to eliminate manual processes and drive efficiency.",
    },
    {
      icon: <Eye className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Our Vision", 
      content: "A future where AI handles administrative work so organizations can focus on community impact.",
    }
  ];

  const servedOrganizations = [
    {
      icon: <Building className="h-4 w-4 sm:h-5 sm:w-5" />,
      name: "Government",
      count: "50+"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
      name: "Nonprofits", 
      count: "200+"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5" />,
      name: "Schools",
      count: "100+"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* About Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden" id='about'>
        {/* Background Elements - Palantir Style */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 mb-4 sm:mb-6">
              <Zap className="h-3 w-3" />
              OUR PURPOSE
            </div>
            <h2 
              className="text-[32px] sm:text-[42px] lg:text-[68px] font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight mt-4 sm:mt-6 leading-[0.9]"
              style={{ fontFamily: 'Chakra Petch, sans-serif' }}
            >
              About <span className="text-gray-900">Our Mission</span>
            </h2>
            <p 
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Transforming public sector workflows through AI-powered automation and intelligent solutions
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-300 p-6 sm:p-8 text-center hover:border-gray-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-900 text-white flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                  style={{ fontFamily: 'Chakra Petch, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-sm sm:text-base"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Organizations Served */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h3 
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 tracking-tight"
              style={{ fontFamily: 'Chakra Petch, sans-serif' }}
            >
              Serving Public Sector Organizations
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {servedOrganizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-300 p-6 sm:p-8 text-center hover:border-gray-400 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                    {org.icon}
                  </div>
                  <div 
                    className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2"
                    style={{ fontFamily: 'Chakra Petch, sans-serif' }}
                  >
                    {org.count}
                  </div>
                  <div 
                    className="text-base sm:text-lg font-semibold text-gray-700"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {org.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button 
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 sm:gap-3 rounded-lg bg-gray-900 px-6 py-3 sm:px-8 sm:py-4 text-white font-medium border border-gray-900 shadow-sm hover:bg-white hover:text-gray-900 hover:border-gray-900 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
    </>
  );
}