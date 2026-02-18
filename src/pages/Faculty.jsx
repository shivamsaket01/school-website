import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail, Linkedin, Award, BookOpen, GraduationCap,
    Users, Heart, Target, Star, Quote, ChevronRight
} from 'lucide-react';

const Faculty = () => {
    // Enhanced faculty data with more realistic Indian names and details
    const principal = {
        id: 1,
        name: "Dr. Alok Sharma",
        role: "Principal",
        qual: "Ph.D. in Educational Leadership",
        experience: "28+ Years",
        subject: "School Administration",
        specialization: "Curriculum Development & Teacher Training",
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
        bio: "Under Dr. Sharma's leadership, our school has consistently achieved 100% board results and won multiple awards for academic excellence. He believes in nurturing both students and teachers to reach their full potential.",
        achievements: ["Best Principal Award 2023", "Educational Innovator of the Year", "Published 15+ research papers"]
    };

    const teachers = [
        { id: 2, name: "Mrs. Sunita Verma", role: "Vice Principal", qual: "M.Sc. Physics, B.Ed.", experience: "22 Years", subject: "Physics", specialization: "Quantum Mechanics", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop", achievements: "Gold Medalist" },
        { id: 3, name: "Ms. Priya Nair", role: "HOD English", qual: "M.A. English, M.Phil.", experience: "18 Years", subject: "English Literature", specialization: "Shakespearean Studies", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop", achievements: "Best Teacher Award 2021" },
        { id: 4, name: "Mr. Rajesh Kumar", role: "HOD Mathematics", qual: "M.Sc. Mathematics, B.Ed.", experience: "15 Years", subject: "Mathematics", specialization: "Number Theory", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop", achievements: "Olympiad Coach" },
        { id: 5, name: "Dr. Meena Singh", role: "HOD Science", qual: "Ph.D. Chemistry", experience: "20 Years", subject: "Chemistry", specialization: "Organic Chemistry", img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1470&auto=format&fit=crop", achievements: "Research Excellence Award" },
        { id: 6, name: "Mr. Anil Kapoor", role: "Senior Teacher", qual: "M.A. History, B.Ed.", experience: "16 Years", subject: "History", specialization: "Medieval Indian History", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop", achievements: "Best Teacher 2022" },
        { id: 7, name: "Ms. Deepa Menon", role: "Teacher", qual: "M.Sc. Botany, B.Ed.", experience: "12 Years", subject: "Biology", specialization: "Environmental Science", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop", achievements: "Eco Club Coordinator" },
        { id: 8, name: "Mr. Vikram Rathore", role: "Teacher", qual: "M.P.Ed.", experience: "14 Years", subject: "Physical Education", specialization: "Sports Psychology", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop", achievements: "State Level Coach" },
        { id: 9, name: "Mrs. Kavita Joshi", role: "Teacher", qual: "M.A. Hindi, B.Ed.", experience: "10 Years", subject: "Hindi", specialization: "Poetry", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop", achievements: "Literary Award" },
        { id: 10, name: "Mr. Suresh Iyer", role: "Teacher", qual: "M.Sc. Computer Science", experience: "9 Years", subject: "Computer Science", specialization: "AI & Robotics", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop", achievements: "Robotics Club Mentor" },
    ];

    // Faculty statistics
    const facultyStats = [
        { icon: <Users size={28} />, value: "45+", label: "Total Teachers", color: "bg-green-100 text-green-700" },
        { icon: <Award size={28} />, value: "12", label: "Ph.D. Holders", color: "bg-emerald-100 text-emerald-700" },
        { icon: <Target size={28} />, value: "15 yrs", label: "Avg. Experience", color: "bg-green-50 text-green-600" },
        { icon: <Heart size={28} />, value: "8:1", label: "Student-Teacher Ratio", color: "bg-green-100 text-green-700" },
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-800 to-emerald-900 py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-[80px] -ml-40 -mb-40"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Our Faculty
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-green-100 max-w-2xl mx-auto text-lg md:text-xl"
                    >
                        Dedicated educators who inspire, guide, and nurture every student to achieve excellence.
                    </motion.p>
                </div>
            </section>

            {/* Faculty Stats */}
            <section className="container mx-auto px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {facultyStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Principal Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex items-center justify-center gap-3 mb-16">
                    <Award className="w-8 h-8 text-green-600" />
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">School Leadership</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-green-100"
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Principal Image */}
                        <div className="relative h-[500px] md:h-auto overflow-hidden">
                            <img
                                src={principal.img}
                                alt={principal.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6">
                                <span className="px-5 py-2 bg-green-600 text-white text-sm font-bold rounded-full shadow-lg">
                                    {principal.role}
                                </span>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white md:hidden">
                                <p className="font-bold text-lg">{principal.name}</p>
                                <p className="text-sm text-green-100">{principal.qual}</p>
                            </div>
                        </div>

                        {/* Principal Info */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{principal.name}</h3>
                            <p className="text-green-600 font-medium text-lg mb-4">{principal.qual}</p>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">{principal.bio}</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <GraduationCap className="w-6 h-6 text-green-600 mb-2" />
                                    <p className="text-sm text-gray-500">Experience</p>
                                    <p className="font-bold text-gray-800">{principal.experience}</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <BookOpen className="w-6 h-6 text-green-600 mb-2" />
                                    <p className="text-sm text-gray-500">Department</p>
                                    <p className="font-bold text-gray-800">{principal.subject}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="font-semibold text-gray-800 mb-2">Key Achievements:</p>
                                <ul className="space-y-2">
                                    {principal.achievements.map((ach, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                                            <span className="text-gray-600 text-sm">{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                                    <Mail size={18} /> Contact Principal
                                </button>
                                <button className="p-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition">
                                    <Linkedin size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Why Our Faculty Section */}
            <section className="bg-green-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Our Faculty Stands Out</h2>
                        <p className="text-gray-600 text-lg">Our teachers are not just educators; they are mentors, guides, and lifelong learners.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Star size={32} />, title: "Highly Qualified", desc: "Over 60% hold postgraduate degrees, 12 have doctorates." },
                            { icon: <Heart size={32} />, title: "Student-Centric", desc: "Personalized attention with a focus on holistic development." },
                            { icon: <Target size={32} />, title: "Continuous Training", desc: "Regular workshops on modern teaching methodologies." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-green-100 text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teaching Staff Grid */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex items-center justify-center gap-3 mb-16">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">Our Teaching Staff</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teachers.map((teacher, idx) => (
                        <motion.div
                            key={teacher.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-green-100 group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={teacher.img}
                                    alt={teacher.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                                {/* Role badge */}
                                <div className="absolute top-3 right-3">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-md ${teacher.role.includes('HOD') ? 'bg-green-600 text-white' :
                                            teacher.role.includes('Vice') ? 'bg-emerald-600 text-white' :
                                                teacher.role.includes('Senior') ? 'bg-green-500 text-white' :
                                                    'bg-gray-600 text-white'
                                        }`}>
                                        {teacher.role}
                                    </span>
                                </div>
                                {/* Hover overlay with contact */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-green-600 transition">
                                        <Mail size={18} />
                                    </button>
                                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#0077b5] transition">
                                        <Linkedin size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-gray-800 mb-1">{teacher.name}</h3>
                                <p className="text-green-600 font-medium text-sm mb-2">{teacher.qual}</p>
                                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                                    <BookOpen size={14} /> {teacher.subject} • {teacher.specialization}
                                </p>
                                <div className="flex items-center justify-between pt-3 border-t border-green-100">
                                    <span className="text-sm text-gray-500">{teacher.experience} exp.</span>
                                    <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">{teacher.achievements}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-50 transition inline-flex items-center gap-2">
                        View All Faculty <ChevronRight size={18} />
                    </button>
                </div>
            </section>

            {/* Testimonial from a teacher */}
            <section className="bg-green-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100 relative">
                        <Quote className="absolute top-6 right-6 text-green-200" size={60} />
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">M</div>
                            <div>
                                <p className="font-bold text-gray-800 text-xl">Mrs. Sunita Verma</p>
                                <p className="text-green-600">Vice Principal (22 years experience)</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-lg italic">
                            "I have been part of LG Public School for over two decades. The supportive environment, passionate students, and excellent infrastructure make it a joy to teach here. We don't just prepare students for exams; we prepare them for life."
                        </p>
                    </div>
                </div>
            </section>

            {/* Join Our Team CTA */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-[3rem] p-12 md:p-16 text-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team of Educators</h3>
                    <p className="text-green-100 max-w-2xl mx-auto mb-8 text-lg">
                        We are always looking for passionate teachers who want to make a difference. If you have the dedication and skills, we would love to hear from you.
                    </p>
                    <button className="px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition shadow-lg">
                        View Current Openings
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Faculty;