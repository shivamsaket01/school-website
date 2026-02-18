import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, Award, Users, BookOpen, Target, Heart,
    Lightbulb, Shield, Star, Quote, Play, CheckCircle2, MapPin, Calendar
} from 'lucide-react';

const About = () => {
    // Realistic stats for LG Public School
    const stats = [
        { number: "30+", label: "Years of Excellence", icon: Award, color: "bg-green-100 text-green-700" },
        { number: "5,000+", label: "Students Enrolled", icon: Users, color: "bg-emerald-100 text-emerald-700" },
        { number: "98%", label: "Success Rate", icon: Target, color: "bg-green-50 text-green-600" },
        { number: "180+", label: "Expert Faculty", icon: BookOpen, color: "bg-emerald-100 text-emerald-700" }
    ];

    // Core values tailored to LG Public School
    const coreValues = [
        { title: "Integrity", description: "Building strong character through honesty and ethical conduct.", icon: Shield, color: "from-green-600 to-emerald-800" },
        { title: "Excellence", description: "Striving for the highest standards in academics and beyond.", icon: Star, color: "from-emerald-500 to-green-600" },
        { title: "Innovation", description: "Embracing modern teaching methods and technology.", icon: Lightbulb, color: "from-green-500 to-emerald-600" },
        { title: "Compassion", description: "Fostering empathy and service before self.", icon: Heart, color: "from-emerald-400 to-green-500" }
    ];

    // Key highlights of the school
    const highlights = [
        "State-of-the-art science & computer labs",
        "Smart classrooms with digital boards",
        "Well-stocked library & reading room",
        "Sports complex with cricket, football, basketball",
        "Safe and green 15-acre campus",
        "Focus on holistic development"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION – Green & White Gradient */}
            <section className="relative bg-gradient-to-br from-green-800 to-emerald-900 min-h-[80vh] flex items-center overflow-hidden">
                {/* Abstract background shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-300/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
                                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                                <span className="text-green-200 text-sm font-medium tracking-wider uppercase">Est. 1995</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white leading-tight mb-6">
                                LG Public School
                                <span className="block text-3xl md:text-4xl font-light text-green-200 mt-2">
                                    Barmasia, Jharkhand
                                </span>
                            </h1>

                            <p className="text-green-50 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                                A place where tradition meets innovation. We nurture young minds, build strong character, and prepare students for a lifetime of success.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="group px-8 py-4 bg-white text-green-800 rounded-full font-semibold hover:bg-green-50 transition-all flex items-center gap-2 shadow-lg">
                                    Explore Campus
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                                    <Play className="w-5 h-5" />
                                    Watch Video
                                </button>
                            </div>
                        </motion.div>

                        {/* Right image with floating card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-900/30">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"
                                    alt="Students collaborating"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating stat card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                                        <MapPin className="w-7 h-7 text-green-700" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">#2 Mahanth Nagar</p>
                                        <p className="text-sm text-gray-500">Barmasia – 560018</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-20 bg-white border-b border-green-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STORY SECTION – Asymmetric layout */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        {/* Image column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-green-200 rounded-[2rem]"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop"
                                    alt="School campus"
                                    className="relative z-10 rounded-[2rem] w-full h-[500px] object-cover shadow-xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-green-800 text-white p-6 rounded-2xl z-20 max-w-xs">
                                    <p className="text-green-200 font-bold text-lg mb-1">Our Mission</p>
                                    <p className="text-sm text-green-50">Empowering students to become compassionate, innovative global citizens rooted in Indian values.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7"
                        >
                            <span className="text-green-700 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                                A Legacy of <span className="text-green-700">Excellence</span> Since 1995
                            </h2>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                                <p>
                                    LG Public School was founded in 1995 by a group of visionary educators who believed in providing quality education to the children of Barmasia. What started as a small institution with 50 students has now grown into one of the most respected schools in the region.
                                </p>
                                <p>
                                    Our sprawling 15‑acre campus is designed to inspire learning. From well‑equipped laboratories to expansive sports grounds, every facility supports our commitment to holistic development. We take pride in our experienced faculty, many of whom have been with us for over a decade.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES – Bento Grid Style */}
            <section className="py-24 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-green-700 font-bold tracking-widest uppercase text-sm mb-4 block">Our Foundation</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Core Values</h2>
                        <p className="text-gray-600 text-lg">The principles that guide our teaching and shape our students' character.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color}`}></div>
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>

                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-green-100 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRINCIPAL'S MESSAGE – Dark Green Section */}
            <section className="py-24 bg-green-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Principal image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop"
                                    alt="Principal"
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                        <p className="text-white font-bold text-xl">Dr. Alok Sharma</p>
                                        <p className="text-green-300 font-medium">Principal</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
                                <Quote className="w-10 h-10 text-white" />
                            </div>
                        </motion.div>

                        {/* Message text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-green-300 font-bold tracking-widest uppercase text-sm mb-4 block">From the Principal's Desk</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                A Message of Inspiration
                            </h2>

                            <div className="space-y-6 text-green-100 text-lg leading-relaxed">
                                <p>
                                    "At LG Public School, we believe that education goes beyond textbooks. It's about nurturing curiosity, building resilience, and instilling values that last a lifetime. Our dedicated team of educators works tirelessly to create an environment where every child feels valued and empowered.
                                </p>
                                <p>
                                    We focus on academic excellence while encouraging students to explore their passions in sports, arts, and community service. Together, we prepare them not just for examinations, but for the challenges of tomorrow."
                                </p>
                                <p className="text-white font-medium">
                                    – Dr. Alok Sharma
                                </p>
                            </div>

                            <div className="mt-10 pt-10 border-t border-green-700">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"
                                    alt="Signature"
                                    className="h-12 mb-2 opacity-80 invert"
                                />
                                <p className="text-green-300 text-sm">Dr. Alok Sharma, Principal</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION – Green gradient */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Begin Your Journey
                            </h2>
                            <p className="text-white/90 text-lg md:text-xl mb-10">
                                Admissions open for 2026–27. Limited seats available. Contact us today for a campus tour.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-all shadow-lg">
                                    Apply Now
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all">
                                    Schedule a Visit
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;