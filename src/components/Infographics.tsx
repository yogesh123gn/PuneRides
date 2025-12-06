import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, Clock, Zap } from 'lucide-react';

const Infographics = () => {
    // Data for charts
    const costData = [
        { name: 'Own Car', cost: 600, label: 'Cost/Day (₹)' },
        { name: 'Ride Hailing', cost: 850, label: 'Cost/Day (₹)' },
        { name: 'Rental Bike', cost: 250, label: 'Cost/Day (₹)' },
    ];

    const emissionData = [
        { name: 'Car (Petrol)', co2: 200, fill: '#ef4444' },
        { name: 'Car (EV)', co2: 90, fill: '#f59e0b' },
        { name: 'Rental Bike', co2: 21, fill: '#22c55e' },
    ];

    const timeData = [
        { name: 'Peak Traffic Time (10km)', car: 45, bike: 25 },
    ];

    const [activeTab, setActiveTab] = useState('cost');

    const renderCustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white dark:bg-slate-800 p-4 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg">
                    <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
                    <p className="text-blue-600 dark:text-blue-400">
                        {payload[0].value} {activeTab === 'cost' ? '₹' : activeTab === 'environment' ? 'g CO2/km' : 'mins'}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Why Renting Makes Sense
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Real data shows that renting a bike is not just fun—it's smarter for your wallet, the planet, and your time.
                    </motion.p>
                </div>

                {/* Feature Cards / Facts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <FactCard
                        icon={<TrendingUp className="w-8 h-8 text-blue-500" />}
                        title="Save 60%"
                        description="On daily commute costs compared to cab services."
                        delay={0.1}
                    />
                    <FactCard
                        icon={<Leaf className="w-8 h-8 text-green-500" />}
                        title="90% Less CO₂"
                        description="Reduce your carbon footprint significantly vs cars."
                        delay={0.2}
                    />
                    <FactCard
                        icon={<Clock className="w-8 h-8 text-purple-500" />}
                        title="Beat Traffic"
                        description="Save up to 20 mins every 10km in peak city traffic."
                        delay={0.3}
                    />
                    <FactCard
                        icon={<Zap className="w-8 h-8 text-yellow-500" />}
                        title="Zero Maint."
                        description="No insurance, service, or depreciation worries."
                        delay={0.4}
                    />
                </div>

                {/* Interactive Chart Section */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden border border-gray-200 dark:border-slate-700">
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {['cost', 'environment', 'time'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)} Analysis
                            </button>
                        ))}
                    </div>

                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            {activeTab === 'cost' ? (
                                <BarChart data={costData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                    <XAxis dataKey="name" stroke="#888888" />
                                    <YAxis stroke="#888888" label={{ value: 'Daily Cost (₹)', angle: -90, position: 'insideLeft', fill: '#888888' }} />
                                    <Tooltip content={renderCustomTooltip} />
                                    <Bar dataKey="cost" fill="#3b82f6" radius={[10, 10, 0, 0]} barSize={60} animationDuration={1500}>
                                        {costData.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 2 ? '#22c55e' : '#3b82f6'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            ) : activeTab === 'environment' ? (
                                <BarChart data={emissionData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
                                    <XAxis type="number" stroke="#888888" />
                                    <YAxis dataKey="name" type="category" stroke="#888888" width={100} />
                                    <Tooltip content={renderCustomTooltip} />
                                    <Bar dataKey="co2" radius={[0, 10, 10, 0]} barSize={40} animationDuration={1500}>
                                        {emissionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            ) : (
                                <BarChart data={timeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                    <XAxis dataKey="name" stroke="#888888" />
                                    <YAxis stroke="#888888" label={{ value: 'Minutes', angle: -90, position: 'insideLeft', fill: '#888888' }} />
                                    <Tooltip content={renderCustomTooltip} />
                                    <Legend />
                                    <Bar dataKey="car" name="Car (Peak Traffic)" fill="#ef4444" radius={[10, 10, 0, 0]} barSize={50} />
                                    <Bar dataKey="bike" name="Bike (Same Route)" fill="#22c55e" radius={[10, 10, 0, 0]} barSize={50} />
                                </BarChart>
                            )}
                        </ResponsiveContainer>
                    </div>

                    <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
                        *Data based on average Pune city rates and traffic conditions (2025 estimates).
                    </div>
                </div>
            </div>
        </section>
    );
};

const FactCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
    >
        <div className="mb-4 bg-gray-50 dark:bg-slate-900 w-14 h-14 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {description}
        </p>
    </motion.div>
);

export default Infographics;
