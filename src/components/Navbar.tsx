import React from 'react';
import { Bike, Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Bike className="h-8 w-8 text-blue-600" />
                        <Link to="/" className="ml-2 text-xl font-bold text-gray-900 dark:text-white">PuneRides</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                        </button>
                        <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Fleet</Link>
                        <Link to="/requirements" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Requirements</Link>
                        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            Contact Us
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {
                isOpen && (
                    <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 p-4">
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="text-gray-600 dark:text-gray-300">Our Fleet</Link>
                            <Link to="/requirements" className="text-gray-600 dark:text-gray-300">Requirements</Link>
                            <a href="#" className="text-blue-600 font-medium">Contact Us</a>
                        </div>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
