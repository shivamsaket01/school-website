import React from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen, FlaskConical, Globe, Cpu, Palette, Calculator,
    Award, Users, Target, ChevronRight
} from 'lucide-react';

const Academics = () => {
    // Academic programs offered at LG Public School
    const programs = [
        {
            icon: <BookOpen size={40} />,
            title: 'Primary Education (Class 1–5)',
            description: 'A nurturing environment where foundational skills in literacy, numeracy, and social development are built through activity-based learning.',
            details: ["English, Hindi & Mathematics", "Environmental Studies", "Art, Music & Physical Education"]
        },
        {
            icon: <Globe size={40} />,
            title: 'Secondary Education (Class 6–10)',
            description: 'Comprehensive curriculum following the State Board, with emphasis on conceptual clarity and analytical thinking.',
            details: ["Science, Social Science & Maths", "Three Language Formula", "Leadership & Life Skills"]
        },
        {
            icon: <FlaskConical size={40} />,
            title: 'STEM & Innovation',
            description: 'Special focus on Science, Technology, Engineering and Mathematics through labs, projects and inter-school competitions.',
            details: ["Robotics Club", "Science Exhibitions", "Math Olympiad Training"]
        },
    ];

    // Core academic departments
    const departments = [
        { name: "Science", icon: <FlaskConical />, color: "bg-emerald-500" },
        { name: "Mathematics", icon: <Calculator />, color: "bg-green-600" },
        { name: "Languages", icon: <BookOpen />, color: "bg-green-500" },
        { name: "Social Science", icon: <Globe />, color: "bg-emerald-600" },
        { name: "Computer Science", icon: <Cpu />, color: "bg-green-700" },
        { name: "Arts & Crafts", icon: <Palette />, color: "bg-emerald-400" }
    ];

    return (
        <section id="academics" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-green-600 uppercase mb-4 block"
                    >
                        Academics at LG Public School
                    </motion.span>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                    >
                        Empowering <span className="text-green-600">Young Minds</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Our curriculum blends the State Board framework with modern pedagogical practices to ensure every child excels academically and personally.
                    </motion.p>
                </div>

                {/* Programs Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group"
                        >
                            <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center text-green-700 mb-6 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                {program.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-3 text-gray-800">{program.title}</h4>
                            <p className="text-gray-600 leading-relaxed mb-5">{program.description}</p>
                            <ul className="space-y-2">
                                {program.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Academic Approach – Green Highlight Section */}
                <div className="relative bg-gradient-to-br from-green-700 to-emerald-800 rounded-[3rem] p-12 md:p-16 mb-32 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-green-200 font-bold tracking-widest uppercase text-sm mb-3 block">Our Approach</span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Personalized Learning Journeys
                            </h3>
                            <p className="text-green-50 text-lg leading-relaxed mb-8">
                                We believe every child learns differently. With small class sizes and dedicated mentors, we tailor instruction to each student’s strengths and interests.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-4xl font-bold text-white mb-1">25:1</p>
                                    <p className="text-green-200 uppercase text-xs tracking-widest font-medium">Student-Teacher Ratio</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-white mb-1">100%</p>
                                    <p className="text-green-200 uppercase text-xs tracking-widest font-medium">Board Exam Pass Rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
                                alt="Students learning"
                                className="rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Award className="w-6 h-6 text-green-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800">Best School Award</p>
                                        <p className="text-xs text-gray-500">2024 – Academic Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Departments – Bento Grid Style */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Academic Departments</h2>
                        <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {departments.map((dept, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border border-green-100 hover:shadow-xl transition-all cursor-pointer group"
                            >
                                <div className={`${dept.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                                    {dept.icon}
                                </div>
                                <p className="text-sm font-semibold text-gray-700 text-center">{dept.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Special Academic Features – Two Column Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Career Counseling */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-green-800 text-white p-8 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/20 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-green-400/30 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                                <Users size={32} className="text-green-200" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Career & College Counseling</h3>
                            <p className="text-green-100 mb-6 leading-relaxed">
                                From Class 9 onwards, students receive expert guidance on stream selection, competitive exams, and university admissions. Regular sessions with alumni and industry professionals.
                            </p>
                            <button className="flex items-center gap-2 text-white font-semibold bg-green-600 px-5 py-2.5 rounded-xl hover:bg-green-500 transition">
                                Learn More <ChevronRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Olympiad & Competition Training */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-green-50 rounded-full blur-[60px] -mr-16 -mt-16"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-700">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Olympiad & Competition Training</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Special coaching for National Science Olympiad, Math Olympiad, and Cyber Olympiad. Our students have consistently ranked in the top 100 nationally.
                            </p>
                            <button className="flex items-center gap-2 text-green-700 font-semibold border border-green-600 px-5 py-2.5 rounded-xl hover:bg-green-50 transition">
                                View Achievements <ChevronRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Academics;