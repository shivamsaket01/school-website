import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Music, Mic, Palette, Code, Trophy, Star,
    Users, Camera, Globe, Heart, Sparkles
} from 'lucide-react';

const CoCurriculum = () => {
    const [activeTab, setActiveTab] = useState('performing');

    // Realistic co-curricular activities for LG Public School
    const activities = {
        performing: {
            title: "Music & Performing Arts",
            icon: <Music size={28} />,
            description: "Our performing arts program nurtures creativity through music, dance, and drama. Students participate in annual productions, inter-school competitions, and community performances.",
            features: [
                "School choir & instrumental band",
                "Classical & contemporary dance",
                "Annual theater production",
                "Music theory & composition workshops"
            ],
            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1470&auto=format&fit=crop",
            color: "bg-purple-100 text-purple-600"
        },
        debate: {
            title: "Debate & Public Speaking",
            icon: <Mic size={28} />,
            description: "The Debate Society builds confidence and critical thinking. Students engage in parliamentary debates, Model United Nations, and elocution contests at regional and national levels.",
            features: [
                "Model United Nations (MUN)",
                "Inter-school debate championships",
                "Extempore & storytelling",
                "Leadership & communication workshops"
            ],
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop",
            color: "bg-blue-100 text-blue-600"
        },
        visual: {
            title: "Visual Arts & Crafts",
            icon: <Palette size={28} />,
            description: "From painting to pottery, our art studios inspire creativity. Students explore various mediums and exhibit their work at our annual art show.",
            features: [
                "Painting, sketching & printmaking",
                "Pottery & sculpture",
                "Digital art & photography",
                "Art exhibitions & competitions"
            ],
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop",
            color: "bg-orange-100 text-orange-600"
        },
        robotics: {
            title: "Robotics & Innovation",
            icon: <Code size={28} />,
            description: "Our innovation hub introduces students to coding, robotics, and AI. They design and program robots for national competitions and solve real-world problems.",
            features: [
                "Arduino & Raspberry Pi projects",
                "LEGO Mindstorms challenges",
                "AI & machine learning basics",
                "Annual tech fest 'Innovision'"
            ],
            image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1374&auto=format&fit=crop",
            color: "bg-green-100 text-green-600"
        },
        sports: {
            title: "Competitive Sports",
            icon: <Trophy size={28} />,
            description: "We offer professional coaching in multiple sports. Our students regularly win at district and state-level championships, fostering teamwork and discipline.",
            features: [
                "Cricket, football & basketball academies",
                "Swimming & athletics",
                "Yoga & fitness training",
                "Inter-house tournaments"
            ],
            image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1470&auto=format&fit=crop",
            color: "bg-red-100 text-red-600"
        },
        community: {
            title: "Community Service",
            icon: <Heart size={28} />,
            description: "We instill empathy and social responsibility through various outreach programs. Students lead initiatives like teaching underprivileged children and environmental drives.",
            features: [
                "Teaching at local schools",
                "Tree plantation & cleanliness drives",
                "Fundraising for NGOs",
                "Awareness campaigns"
            ],
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop",
            color: "bg-pink-100 text-pink-600"
        },
    };

    return (
        <section className="pt-24 pb-20 bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-green-700 to-emerald-800 py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Beyond the Classroom
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-green-100 max-w-2xl mx-auto text-lg"
                    >
                        Nurturing talents, building character, and fostering holistic growth through diverse co-curricular activities.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                {/* Introduction Text */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-gray-600 text-lg">
                        At LG Public School, we believe education extends beyond textbooks. Our wide range of co-curricular programs helps students discover passions, develop life skills, and build lasting friendships.
                    </p>
                </div>

                {/* Activity Tabs - Horizontal Scroll on Mobile */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {Object.keys(activities).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${activeTab === key
                                    ? 'bg-green-600 text-white shadow-lg shadow-green-200'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <span className={`${activeTab === key ? 'text-white' : activities[key].color.split(' ')[1]}`}>
                                {activities[key].icon}
                            </span>
                            <span className="hidden sm:inline">{activities[key].title.split(' ')[0]}</span>
                            <span className="sm:hidden">{activities[key].title.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>

                {/* Animated Content Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden"
                    >
                        <div className="grid md:grid-cols-2">
                            {/* Image Side */}
                            <div className="h-80 md:h-auto relative">
                                <img
                                    src={activities[activeTab].image}
                                    alt={activities[activeTab].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r"></div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${activities[activeTab].color}`}>
                                        {activities[activeTab].icon}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                        {activities[activeTab].title}
                                    </h2>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {activities[activeTab].description}
                                </p>

                                <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <Sparkles size={18} className="text-green-600" /> Key Highlights
                                </h3>

                                <ul className="space-y-2">
                                    {activities[activeTab].features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-4 border-t border-green-100">
                                    <button className="text-green-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                                        Learn More <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Additional Info: Clubs & Committees */}
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Users className="text-green-600" size={24} /> Student Clubs
                        </h3>
                        <p className="text-gray-600">Literary Club, Science Club, Eco Club, Photography Club, and more – run by students, guided by teachers.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Globe className="text-green-600" size={24} /> Annual Events
                        </h3>
                        <p className="text-gray-600">Cultural Fest, Sports Day, Science Exhibition, and Inter-School Competitions bring out the best in our students.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Camera className="text-green-600" size={24} /> Field Trips & Excursions
                        </h3>
                        <p className="text-gray-600">Educational tours and adventure camps broaden horizons and create lifelong memories.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoCurriculum;