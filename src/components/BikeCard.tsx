import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface BikeProps {
    name: string;
    image: string;
    price: number;
    type: string;
}

const BikeCard = ({ name, image, price, type }: BikeProps) => {
    const handleBooking = () => {
        const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
        const text = `Hi, I am interested in renting the ${name}. Is it available?`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 transition-colors duration-300"
        >
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-slate-700">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-1">{name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Mandatory: Valid DL & Aadhaar</p>

                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{price}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">/day</span>
                    </div>
                    <button
                        onClick={handleBooking}
                        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                        <MessageCircle size={18} />
                        <span>Book Now</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default BikeCard;
