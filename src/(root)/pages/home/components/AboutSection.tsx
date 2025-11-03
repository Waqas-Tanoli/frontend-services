'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Users,
  Building,
  FileText,
  ArrowRight,
  Zap,
} from 'lucide-react';

export function AboutSection() {
  const missionVision = [
    {
      icon: <Target className="size-5 sm:size-6" />,
      title: 'Our Mission',
      content:
        'Automate public sector workflows with AI to eliminate manual processes and drive efficiency.',
    },
    {
      icon: <Eye className="size-5 sm:size-6" />,
      title: 'Our Vision',
      content:
        'A future where AI handles administrative work so organizations can focus on community impact.',
    },
  ];

  const servedOrganizations = [
    {
      icon: <Building className="size-4 sm:size-5" />,
      name: 'Government',
      count: '50+',
    },
    {
      icon: <Users className="size-4 sm:size-5" />,
      name: 'Nonprofits',
      count: '200+',
    },
    {
      icon: <FileText className="size-4 sm:size-5" />,
      name: 'Schools',
      count: '100+',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-white py-16 sm:py-20"
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="inset-0 sm:bg-[size:48px_48px]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center sm:mb-16"
          >
            <div className="my-4 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 sm:my-6 sm:px-4 sm:py-2 sm:text-sm">
              <Zap className="size-3" /> OUR PURPOSE
            </div>

            <h2
              className="my-4 text-[32px] font-bold leading-[0.9] tracking-tight text-gray-900 sm:my-6 sm:text-[42px] lg:text-[68px]"
              style={{ fontFamily: 'Chakra Petch, sans-serif' }}
            >
              About <span className="text-gray-900">Our Mission</span>
            </h2>

            <p
              className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:px-0 sm:text-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Transforming public sector workflows through AI-powered automation
              and intelligent solutions
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            className="mb-16 grid grid-cols-1 gap-6 sm:mb-20 sm:gap-8 md:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {missionVision.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-gray-300 bg-white p-6 text-center transition-all duration-300 hover:border-gray-400 hover:shadow-md sm:p-8"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition-transform duration-300 group-hover:scale-105 sm:mb-6 sm:size-14">
                  {item.icon}
                </div>
                <h3
                  className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl"
                  style={{ fontFamily: 'Chakra Petch, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-gray-600 sm:text-base"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Organizations Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center sm:mb-16"
          >
            <h3
              className="mb-8 text-2xl font-bold tracking-tight text-gray-900 sm:mb-12 sm:text-3xl"
              style={{ fontFamily: 'Chakra Petch, sans-serif' }}
            >
              Serving Public Sector Organizations
            </h3>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {servedOrganizations.map((org, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border border-gray-300 bg-white p-6 text-center transition-all duration-300 hover:border-gray-400 hover:shadow-md sm:p-8"
                >
                  <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-transform duration-300 group-hover:scale-105 sm:mb-4 sm:size-12">
                    {org.icon}
                  </div>
                  <div
                    className="mb-1 text-2xl font-bold text-gray-900 sm:mb-2 sm:text-3xl"
                    style={{ fontFamily: 'Chakra Petch, sans-serif' }}
                  >
                    {org.count}
                  </div>
                  <div
                    className="text-base font-semibold text-gray-700 sm:text-lg"
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-white hover:text-gray-900 sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Learn More About Us
              <ArrowRight className="size-4 sm:size-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Fonts */}
      <style
        jsx
        global
      >
        {`
          @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        `}
      </style>
    </>
  );
}
