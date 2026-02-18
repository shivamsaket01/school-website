import React from 'react';
import { Cpu } from 'lucide-react';

const SkillBasedPrograms = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
            <div className="text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-school-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Cpu className="w-10 h-10 text-school-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-school-secondary mb-4 font-playfair">
                    Skill Based Programs
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Discover our specialized programs designed to equip students with practical skills for the future.
                </p>
                <div className="bg-white p-8 rounded-2xl shadow-premium border border-gray-100">
                    <p className="text-gray-500 italic">Content coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default SkillBasedPrograms;
