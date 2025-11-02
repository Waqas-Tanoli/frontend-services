'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    { name: "DocFlow", description: "Document Automation Platform", color: "text-blue-600" },
    { name: "OneLearn", description: "Learning Management System", color: "text-green-600" },
    { name: "Connect", description: "Donation Management Hub", color: "text-purple-600" },
    { name: "Donor Hub", description: "Donor Management System", color: "text-orange-600" },
    { name: "Cursus", description: "Workforce & Asset Management", color: "text-pink-600" }
  ];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-700 hover:text-blue-600 px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:bg-white/50 backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Products
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-200 p-4 z-50"
          >
            <div className="space-y-3">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-all duration-200 border border-transparent hover:border-slate-200"
                >
                  <div className={`font-semibold ${product.color} text-lg`}>
                    {product.name}
                  </div>
                  <div className="text-slate-600 text-sm mt-1">
                    {product.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
