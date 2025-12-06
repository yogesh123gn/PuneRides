import type React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileCheck, ShieldCheck, Clock, IndianRupee, BadgeCheck, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Requirements = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Rental Requirements</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Simple, transparent, and hassle-free. Here is everything you need to know.</p>
                </div>

                {/* The 3-Step Process */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Clock className="w-8 h-8 text-blue-600" />,
                                title: "1. Book via WhatsApp",
                                desc: "Choose your bike and click 'Book Now'. We'll confirm availability instantly."
                            },
                            {
                                icon: <FileCheck className="w-8 h-8 text-blue-600" />,
                                title: "2. Verify Documents",
                                desc: "Send a photo of your License & Aadhaar card on WhatsApp for quick KYC."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                                title: "3. Pay & Ride",
                                desc: "Pay the deposit & rent via UPI. Pick up your bike and enjoy the ride!"
                            }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 text-center"
                            >
                                <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Mandatory Documents Requirements */}
                <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800 mb-16">
                    <div className="bg-blue-600 px-8 py-6">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <BadgeCheck className="w-8 h-8" />
                            Mandatory Documents
                        </h2>
                    </div>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold">1</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Driving License</h3>
                                    <p className="text-gray-500 dark:text-gray-400">A valid Indian Driving License (Original required for verification at pickup).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold">2</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">ID Proof</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Aadhaar Card, Voter ID, or Passport (Soft copy is acceptable for WhatsApp KYC).</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <IndianRupee className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                Security Deposit
                            </h3>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Scooters: ₹1,000 (Refundable)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Motorcycles: ₹2,000 (Refundable)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Premium/EV: ₹3,000 (Refundable)
                                </li>
                            </ul>
                            <p className="text-xs text-gray-400 mt-4">* Deposit is refunded instantly upon safe return of the vehicle.</p>
                        </div>
                    </div>
                </section>

                {/* Important Terms */}
                <section className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-500 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Important Policies
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-900/80 dark:text-yellow-200/80 text-sm">
                        <li>• Fuel is not included in the rental price.</li>
                        <li>• 1 Helmet is provided free of charge. Pillion helmet chargeable.</li>
                        <li>• Late return penalty: ₹100/hour.</li>
                        <li>• Use of vehicle for racing/stunts is strictly prohibited.</li>
                        <li>• Speed limit of 80 km/ph applies for safety.</li>
                        <li>• Any traffic challans are to be paid by the rider.</li>
                    </ul>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Requirements;
