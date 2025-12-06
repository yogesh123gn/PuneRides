import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">PuneRides</h3>
                        <p className="text-gray-400">
                            The smartest way to rent premium bikes in Pune.
                            Zero hassle, fully transparent.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-white">Our Fleet</Link></li>
                            <li><Link to="/requirements" className="hover:text-white">Rental Terms</Link></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Location</h3>
                        <p className="text-gray-400">
                            Shop No. 5, Phoenix Mall Road,<br />
                            Viman Nagar, Pune - 411014<br />
                            License No: MH/RTO/2024/001
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>© 2026 PuneRides Vehicle Rental Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
