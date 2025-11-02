'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

import JCentrelLogo from '../../../../../public/images/logo_centrel.png';
import CornellTechLogo from '../../../../../public/images/logo_cornell_tech.png';
import CornelUniversityLogo from '../../../../../public/images/logo_cornell_university.png';
import HatsLogo from '../../../../../public/images/logo_hats.png';
import RobinhoodLogo from '../../../../../public/images/logo_robinhood.svg';
import VisibleHandsLogo from '../../../../../public/images/logo_visible_hands.png';

const COMPANIES = [
  {
    id: 1,
    src: VisibleHandsLogo,
    alt: 'Visible Hands',
    website: 'https://www.visiblehands.vc/',
    category: 'Nonprofit',
    description: 'Community development partner'
  },
  {
    id: 2,
    src: HatsLogo,
    alt: 'Housing Authority of Travis County',
    website: 'https://hatctx.com/',
    category: 'Government',
    description: 'Public housing authority'
  },
  {
    id: 3,
    src: JCentrelLogo,
    alt: 'J-Centrel',
    website: 'https://www.jcentrel.com/',
    category: 'Technology',
    description: 'Public sector technology'
  },
  {
    id: 4,
    src: CornelUniversityLogo,
    alt: 'Cornell University',
    website: 'https://www.cornell.edu/',
    category: 'Education',
    description: 'Research & innovation partner'
  },
  {
    id: 5,
    src: RobinhoodLogo,
    alt: 'Robinhood',
    website: 'https://robinhood.org/',
    category: 'Non-Profit',
    description: 'Community foundation'
  },
  {
    id: 6,
    src: CornellTechLogo,
    alt: 'Cornell Tech',
    website: 'https://tech.cornell.edu/',
    category: 'Education',
    description: 'Technology innovation partner'
  },
];

// Enhanced company data with colors and roles
const ENHANCED_COMPANIES = COMPANIES.map((company, index) => ({
  ...company,
  color: [
    'from-blue-500/20 to-cyan-500/20',
    'from-emerald-500/20 to-green-500/20', 
    'from-violet-500/20 to-purple-500/20',
    'from-orange-500/20 to-red-500/20',
    'from-rose-500/20 to-pink-500/20',
    'from-indigo-500/20 to-blue-500/20'
  ][index],
  glowColor: [
    'rgba(59, 130, 246, 0.15)',
    'rgba(16, 185, 129, 0.15)',
    'rgba(139, 92, 246, 0.15)',
    'rgba(249, 115, 22, 0.15)',
    'rgba(244, 63, 94, 0.15)',
    'rgba(99, 102, 241, 0.15)'
  ][index],
  role: [
    'Community Partner',
    'Government Partner', 
    'Technology Partner',
    'Education Partner',
    'Nonprofit Partner',
    'Innovation Partner'
  ][index],
  isWhiteLogo: company.id === 6,
  isDarkLogo: [1, 2, 3, 4, 5].includes(company.id)
}));

export const TrustedBySection = () => {
  const [activeCompany, setActiveCompany] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  const handleCompanyHover = (companyId: number | null) => {
    if (isMobile) return;
    setActiveCompany(companyId);
  };

  const getLogoFilterClass = (company: typeof ENHANCED_COMPANIES[0]) => {
    if (company.isWhiteLogo) {
      return "brightness-0 invert-0 opacity-80 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100";
    }
    if (company.isDarkLogo) {
      return "brightness-0 opacity-70 group-hover:brightness-100 group-hover:opacity-100";
    }
    return "opacity-70 group-hover:opacity-100";
  };

  return (
    <section ref={sectionRef} id='careers' className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-1 h-1 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-purple-500 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-cyan-500 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="root-container relative z-10">
        {/* Enhanced Header with Modern Fonts */}
        <motion.div 
          className="text-center mb-16 md:mb-24 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/60 px-4 py-2 text-sm font-medium text-gray-700 mb-6 md:mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
            <span className="font-semibold tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              TRUSTED PARTNERS
            </span>
          </motion.div>
          
   <h1 
  className="text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-bold text-gray-900 mb-6 mt-6 leading-tight"
  style={{ fontFamily: 'Chakra Petch, sans-serif' }}
>
  Partnered with high-impact organizations
</h1>
          
        
        </motion.div>

        {/* Enhanced Grid with Palantir-inspired Design */}
        <motion.div
          style={!isMobile ? {
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          } : {}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 perspective-1000"
        >
          {ENHANCED_COMPANIES.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.7,
                type: "spring",
                stiffness: 90,
                damping: 20
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={!isMobile ? { 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              } : {}}
              className="relative group"
            >
              <motion.a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative rounded-2xl md:rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-md p-6 md:p-8 transition-all duration-500 ${
                  !isMobile ? 'hover:shadow-2xl hover:border-gray-300/80' : 'active:scale-95'
                } overflow-hidden ${
                  activeCompany === company.id ? 'scale-[1.02] shadow-xl' : 'shadow-sm'
                }`}
                onMouseEnter={() => handleCompanyHover(company.id)}
                onMouseLeave={() => handleCompanyHover(null)}
                whileHover={!isMobile ? { 
                  borderColor: "rgba(59, 130, 246, 0.4)",
                } : {}}
                style={{
                  boxShadow: activeCompany === company.id 
                    ? `0 25px 50px -12px ${company.glowColor}`
                    : '0 4px 24px -6px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Animated Gradient Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 ${
                    !isMobile ? 'group-hover:opacity-100' : 'group-active:opacity-50'
                  } transition-all duration-500`} 
                />
                
                {/* Animated Border Glow */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${company.glowColor}, transparent)`,
                    filter: 'blur(8px)',
                    margin: '-1px'
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Logo Container */}
                  <div className="flex items-center justify-center mb-6 md:mb-8">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Image
                        src={company.src}
                        alt={company.alt}
                        className={`h-10 md:h-14 w-auto object-contain transition-all duration-500 ${getLogoFilterClass(company)}`}
                      />
                    </motion.div>
                  </div>

                  {/* Company Info */}
                  <div className="text-center space-y-3 md:space-y-4">
                    <h3 
                      className="text-base md:text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {company.alt}
                    </h3>
                    <div className="space-y-2">
                      <span 
                        className="inline-block px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100/80 rounded-full border border-gray-200/60 backdrop-blur-sm"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {company.role}
                      </span>
                      {/* Enhanced Description */}
                      <motion.p 
                        className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 hidden md:block"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {company.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Enhanced Hover Indicator */}
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-500 hidden md:flex items-center justify-center w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                  >
                    <ExternalLink className="h-3 w-3 text-gray-600" />
                  </motion.div>
                </div>
              </motion.a>

              {/* Enhanced Floating Particles */}
              {!isMobile && activeCompany === company.id && (
                <>
                  <motion.div
                    className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60 shadow-lg"
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    animate={{ scale: 1, opacity: 0.6, rotate: 180 }}
                    exit={{ scale: 0, opacity: 0, rotate: 0 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full opacity-40 shadow-lg"
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    animate={{ scale: 1, opacity: 0.4, rotate: -180 }}
                    exit={{ scale: 0, opacity: 0, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 md:mt-24 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
     
        </motion.div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Import Modern Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};