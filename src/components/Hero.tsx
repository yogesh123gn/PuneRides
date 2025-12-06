import type React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80"
                    alt="Motorcycle on road"
                    className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    Explore Pune on <span className="text-blue-500">Two Wheels</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-200 mb-8"
                >
                    Premium bikes, zero hassle. Starting at just ₹399/day.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-blue-700 transition-colors"
                >
                    View Available Bikes
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;
