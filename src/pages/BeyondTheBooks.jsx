import React from 'react';
import { BookOpen } from 'lucide-react';

const BeyondTheBooks = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
            <div className="text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-school-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-10 h-10 text-school-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-school-secondary mb-4 font-playfair">
                    Beyond The Books
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Explore our holistic approach to education that goes beyond traditional classroom learning.
                </p>
                <div className="bg-white p-8 rounded-2xl shadow-premium border border-gray-100">
                    <p className="text-gray-500 italic">Content coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default BeyondTheBooks;
