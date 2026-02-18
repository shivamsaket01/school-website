import React from 'react';
import { motion } from 'framer-motion';
import {
    Trophy, Medal, Star, Target, Users, Award,
    Footprints, Bike, Sparkles, ChevronRight
} from 'lucide-react';

const Sports = () => {
    // All sports offered at LG Public School
    const sports = [
        {
            name: "Football",
            icon: <Users size={32} />,
            description: "Professional coaching with regular inter-school tournaments. Our under-14 team won the district championship 2025.",
            color: "bg-green-100 text-green-700"
        },
        {
            name: "Cricket",
            icon: <Target size={32} />,
            description: "Well-maintained pitch with nets. Coaching by former Ranji players. Regular matches on weekends.",
            color: "bg-emerald-100 text-emerald-700"
        },
        {
            name: "Basketball",
            icon: <Star size={32} />,
            description: "Indoor and outdoor courts. Girls' team runners-up at state level 2024.",
            color: "bg-green-100 text-green-700"
        },
        {
            name: "Swimming",
            icon: <Footprints size={32} />,
            description: "Olympic-size pool with trained lifeguards. Annual swimming gala and inter-school competitions.",
            color: "bg-emerald-100 text-emerald-700"
        },
        {
            name: "Athletics",
            icon: <Trophy size={32} />,
            description: "Track events, long jump, shot put. Our athletes have won medals at district and state meets.",
            color: "bg-green-100 text-green-700"
        },
        {
            name: "Tennis",
            icon: <Award size={32} />,
            description: "Two synthetic courts with professional coaching. Students participate in AITA events.",
            color: "bg-emerald-100 text-emerald-700"
        },
        {
            name: "Volleyball",
            icon: <Users size={32} />,
            description: "Beach volleyball court and indoor facility. Regular inter-house tournaments.",
            color: "bg-green-100 text-green-700"
        },
        {
            name: "Chess",
            icon: <Star size={32} />,
            description: "Chess club meets weekly. Students have represented at national level.",
            color: "bg-emerald-100 text-emerald-700"
        },
        {
            name: "Badminton",
            icon: <Target size={32} />,
            description: "Four indoor courts with synthetic flooring. Coaching by state-level players.",
            color: "bg-green-100 text-green-700"
        },
    ];

    // Student achievements
    const achievements = [
        { year: "2025", title: "Under-14 Football Champions", student: "Team A", category: "Team", medal: "Gold" },
        { year: "2025", title: "100m Sprint (District)", student: "Arjun Mehta", category: "Individual", medal: "Gold" },
        { year: "2024", title: "State Swimming Championship", student: "Priya Singh", category: "Individual", medal: "Silver" },
        { year: "2024", title: "Basketball Runners-up", student: "Girls Team", category: "Team", medal: "Silver" },
        { year: "2023", title: "Chess Nationals", student: "Rohan Sharma", category: "Individual", medal: "Bronze" },
        { year: "2023", title: "Cricket District Cup", student: "Boys Team", category: "Team", medal: "Gold" },
        { year: "2022", title: "Tennis State Level", student: "Ananya Gupta", category: "Individual", medal: "Gold" },
        { year: "2022", title: "Athletics 400m", student: "Vikram Joshi", category: "Individual", medal: "Silver" },
    ];

    // Top athletes spotlight
    const topAthletes = [
        { name: "Priya Singh", sport: "Swimming", achievement: "State Silver Medalist 2024", image: "https://images.unsplash.com/photo-1551069613-1904dbdcda11?q=80&w=1374&auto=format&fit=crop" },
        { name: "Arjun Mehta", sport: "Athletics", achievement: "District Gold (100m) 2025", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1470&auto=format&fit=crop" },
        { name: "Rohan Sharma", sport: "Chess", achievement: "National Bronze 2023", image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1470&auto=format&fit=crop" },
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-700 to-emerald-800 py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Champions on the <span className="text-green-200">Field</span>
                            </h1>
                            <p className="text-green-100 text-lg mb-8">
                                At LG Public School, sports are an integral part of holistic development. With world-class facilities and professional coaches, we nurture athletes who excel at district, state, and national levels.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
                                    <p className="text-3xl font-bold text-white">25+</p>
                                    <p className="text-green-200 text-sm">Sports Offered</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
                                    <p className="text-3xl font-bold text-white">150+</p>
                                    <p className="text-green-200 text-sm">Trophies Won</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
                                    <p className="text-3xl font-bold text-white">500+</p>
                                    <p className="text-green-200 text-sm">Active Athletes</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1565514020125-fac51fd79906?q=80&w=1587&auto=format&fit=crop"
                                alt="Sports facilities"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
                                <Trophy className="text-green-600" size={32} />
                                <div>
                                    <p className="text-sm text-gray-500">Recent Achievement</p>
                                    <p className="font-bold text-gray-800">Football District Champs 2025</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sports Grid */}
            <section className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Sports We Offer</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From team sports to individual disciplines, we provide coaching and facilities for every student.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sports.map((sport, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl p-6 shadow-md border border-green-100 hover:shadow-xl transition group"
                        >
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${sport.color} group-hover:scale-110 transition-transform`}>
                                {sport.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{sport.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{sport.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-green-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">🏆 Our Trophy Cabinet</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Celebrating the hard work and dedication of our student athletes.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((ach, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl p-5 shadow-md border border-green-100 hover:shadow-lg transition relative overflow-hidden"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-sm font-semibold text-green-600">{ach.year}</span>
                                        <h3 className="font-bold text-gray-800 mt-1">{ach.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{ach.student}</p>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${ach.medal === 'Gold' ? 'bg-yellow-100 text-yellow-600' :
                                            ach.medal === 'Silver' ? 'bg-gray-100 text-gray-500' :
                                                'bg-orange-100 text-orange-600'
                                        }`}>
                                        <Medal size={20} />
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center gap-1 text-xs">
                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">{ach.category}</span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 opacity-10">
                                    <Trophy size={60} className="text-green-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Athlete Spotlight */}
            <section className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">⭐ Rising Stars</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Meet some of our exceptional athletes who are making us proud.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {topAthletes.map((athlete, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-green-100 group"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={athlete.image}
                                    alt={athlete.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">{athlete.name}</h3>
                                <p className="text-green-600 font-medium">{athlete.sport}</p>
                                <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
                                    <Award size={16} className="text-green-600" /> {athlete.achievement}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto px-6 pb-20">
                <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 text-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join a Team?</h3>
                    <p className="text-green-100 max-w-xl mx-auto mb-8">
                        Tryouts for all sports are held at the beginning of each semester. No prior experience required – just passion!
                    </p>
                    <button className="px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition shadow-lg inline-flex items-center gap-2">
                        View Tryout Schedule <ChevronRight size={18} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Sports;