'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Clock,
  Zap,
  ArrowRight,
  Shield,
  Star,
  CheckCircle,
} from 'lucide-react';

// RequestDemoForm component included directly
const RequestDemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="h-8 w-8 text-green-600" />
        </motion.div>
        <h3
          className="text-xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: 'Chakra Petch, sans-serif' }}
        >
          Demo Request Sent!
        </h3>
        <p
          className="text-gray-600"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          We'll contact you within 24 hours to schedule your demo.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
          placeholder="Enter your full name"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
          placeholder="Enter your work email"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-gray-700 mb-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Organization *
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          required
          value={formData.organization}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
          placeholder="Enter your organization name"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          What challenges are you facing?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 resize-none"
          placeholder="Tell us about your workflow challenges..."
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        />
      </div>

      {/* Palantir-style Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-medium hover:bg-white hover:text-gray-900 hover:border-2 hover:border-gray-900 transition-all duration-300 border border-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ?
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </div>
        : 'Request Demo'}
      </motion.button>
    </form>
  );
};

export const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 12,
        duration: 1,
      },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const emailHoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
  };

  // Combined variants for the email link
  const combinedEmailVariants = {
    ...itemVariants,
    hover: emailHoverVariants.hover,
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <motion.div
          className="absolute top-1/4 left-10 w-2 h-2 bg-gray-600 rounded-full opacity-20"
          variants={floatVariants}
          animate="float"
        />
        <motion.div
          className="absolute top-1/3 right-20 w-3 h-3 bg-gray-400 rounded-full opacity-15"
          variants={floatVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="root-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 mb-6"
            >
              <Zap className="h-4 w-4" />
              GET STARTED
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
              style={{ fontFamily: 'Chakra Petch, sans-serif' }}
            >
              See Our AI Platform in{' '}
              <span className="text-gray-900">Action</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Get a personalized demo of how our AI automation can transform
              your public sector workflows. Just 4 quick fields—done in 30
              seconds.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 mb-8 justify-center lg:justify-start"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-gray-700" />
                <span className="font-medium">48-hour demo</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="h-5 w-5 text-gray-700" />
                <span className="font-medium">Secure & Private</span>
              </div>
            </motion.div>

            {/* Email Option */}
            <motion.a
              href="mailto:admin@liiv.com?subject=Demo Request&body=Hi, I'm interested in learning more about your AI workflow automation platform."
              variants={combinedEmailVariants}
              whileHover="hover"
              className="group block bg-gray-50 rounded-xl p-6 border border-gray-300 transition-all duration-300 cursor-pointer"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 text-white shadow-sm"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: 'spring', stiffness: 300, damping: 10 },
                  }}
                >
                  <Mail className="h-6 w-6" />
                </motion.div>
                <div className="flex-1 text-left">
                  <h4
                    className="font-semibold text-gray-900 mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Prefer Email?
                  </h4>
                  <p
                    className="text-gray-600 text-sm mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Get a quick response within 2 hours
                  </p>
                  <div className="flex items-center gap-2 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    <span>admin@liiv.com</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Trust Indicators - GOLDEN STARS */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.5 + star * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                </motion.div>
              ))}
              <span className="text-sm text-gray-600 font-medium">
                Rated 4.9/5 by public sector organizations
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{
                y: -2,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="bg-white rounded-xl border border-gray-300 p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Form Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <motion.div
                  className="inline-flex items-center gap-2 mb-4"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Quick & Secure
                  </span>
                </motion.div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Chakra Petch, sans-serif' }}
                >
                  Request Your Demo
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  See how AI automation transforms public sector workflows
                </p>
              </motion.div>

              {/* Form with Palantir-style Button */}
              <RequestDemoForm />

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-6 pt-6 border-t border-gray-300"
              >
                <p
                  className="text-sm text-gray-500 flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  <Shield className="h-4 w-4 text-gray-600" />
                  Your information is secure • No spam • No commitment required
                </p>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-6 h-6 bg-gray-400 rounded-full opacity-20"
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
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
