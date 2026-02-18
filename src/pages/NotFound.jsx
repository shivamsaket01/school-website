import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="relative">
                <h1 className="text-9xl font-bold text-gray-200 select-none">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl md:text-4xl font-playfair font-bold text-school-secondary">Page Not Found</span>
                </div>
            </div>

            <p className="text-gray-500 max-w-md mx-auto mb-8 mt-4 text-lg">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex gap-4">
                <Link
                    to="/"
                    className="px-8 py-3 bg-school-primary text-white font-bold rounded-full shadow-lg shadow-pink-500/20 hover:scale-105 transition-transform flex items-center gap-2"
                >
                    <Home size={18} /> Go Home
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="px-8 py-3 bg-white text-school-secondary font-bold rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                    <ArrowLeft size={18} /> Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;
