'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { RootLayoutActions } from '@/src/(root)/components/RootLayoutActions';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-bold text-slate-800">
              IntelliCore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:block">
            <RootLayoutActions />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-slate-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span
                className={`block h-0.5 bg-slate-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block h-0.5 bg-slate-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={
            isMenuOpen ?
              { height: 'auto', opacity: 1 }
            : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-slate-200">
            <Link
              href="/"
              className="block text-slate-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="block text-slate-700 hover:text-blue-600 font-medium"
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="block text-slate-700 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-slate-700 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-slate-200">
              <RootLayoutActions />
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
