import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BikeCard from '../components/BikeCard';
import Footer from '../components/Footer';
import Infographics from '../components/Infographics';
import { bikes } from '../data/bikes';

const Home = () => {
    const [filter, setFilter] = useState('All');

    const filteredBikes = filter === 'All'
        ? bikes
        : bikes.filter(bike => bike.type === filter);

    const categories = ['All', 'Scooter', 'Cruiser', 'Sport', 'EV'];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <Hero />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">Featured Fleet</h2>
                    <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBikes.map(bike => (
                        <BikeCard
                            key={bike.id}
                            {...bike}
                        />
                    ))}
                </div>
            </main>

            <Infographics />

            <Footer />
        </div>
    );
};

export default Home;
