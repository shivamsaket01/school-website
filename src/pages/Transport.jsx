import React from 'react';
import { motion } from 'framer-motion';
import {
    Bus, Phone, MapPin, Clock, Shield, Users,
    Map, ChevronRight, Download, User
} from 'lucide-react';

const Transport = () => {
    // Realistic route data
    const routes = [
        {
            id: 101,
            name: "North Campus Route",
            color: "bg-green-100 text-green-700",
            stops: ["City Centre", "Public Library", "Green Park", "Railway Station", "School"],
            driver: "Mr. Ramesh Singh",
            contact: "+91 98765 43210",
            timings: "7:15 AM – 3:45 PM",
            via: "Main Road, Park Avenue"
        },
        {
            id: 102,
            name: "South City Route",
            color: "bg-emerald-100 text-emerald-700",
            stops: ["South Extension", "Bus Stand", "Lake View", "Market Complex", "School"],
            driver: "Mr. Suresh Yadav",
            contact: "+91 98765 43211",
            timings: "7:30 AM – 4:00 PM",
            via: "Ring Road, MG Marg"
        },
        {
            id: 103,
            name: "East End Route",
            color: "bg-green-100 text-green-700",
            stops: ["East Colony", "Community Center", "Hospital", "Temple", "School"],
            driver: "Mr. Vikram Mehta",
            contact: "+91 98765 43212",
            timings: "7:00 AM – 3:30 PM",
            via: "NH 33, Barmasia Bypass"
        },
        {
            id: 104,
            name: "West Zone Route",
            color: "bg-emerald-100 text-emerald-700",
            stops: ["West End", "Police Line", "Garden", "College Road", "School"],
            driver: "Mr. Anand Kumar",
            contact: "+91 98765 43213",
            timings: "7:20 AM – 3:50 PM",
            via: "New Link Road"
        },
    ];

    // Safety features
    const safetyFeatures = [
        { icon: <Shield size={24} />, title: "GPS Tracking", desc: "Real-time bus tracking for parents" },
        { icon: <Users size={24} />, title: "Female Attendant", desc: "On every bus for student safety" },
        { icon: <Clock size={24} />, title: "Live ETA", desc: "Get notified before bus arrives" },
    ];

    // Coverage areas
    const coverageAreas = [
        "City Centre", "Green Park", "Railway Station", "South Extension",
        "Lake View", "East Colony", "West End", "MG Marg", "Ring Road",
        "Barmasia Bypass", "College Road", "Market Complex"
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-700 to-emerald-800 py-20 overflow-hidden">
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
                        Safe & Reliable Transport
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-green-100 max-w-2xl mx-auto text-lg"
                    >
                        Our fleet of 10+ buses covers all major areas of Barmasia with GPS tracking and trained staff.
                    </motion.p>
                </div>
            </section>

            {/* Quick Stats / Highlights */}
            <section className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {safetyFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 border border-green-100"
                        >
                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Coverage Map Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Map className="text-green-600" /> Coverage Area
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We cover over 25+ locations across Barmasia and surrounding areas. If you live in any of these zones, our bus service is available.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {coverageAreas.map((area, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    {area}
                                </div>
                            ))}
                        </div>
                        <button className="mt-8 px-6 py-3 border-2 border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-50 transition inline-flex items-center gap-2">
                            <Download size={18} /> Download Route Map
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1471&auto=format&fit=crop"
                            alt="School bus map"
                            className="rounded-3xl shadow-2xl border-4 border-white"
                        />
                    </div>
                </div>
            </section>

            {/* Route Cards */}
            <section className="bg-green-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Bus Routes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose the route that covers your area. Each bus is equipped with GPS and has a dedicated female attendant.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        {routes.map((route, index) => (
                            <motion.div
                                key={route.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border border-green-100"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${route.color}`}>
                                        <Bus size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-800">{route.name}</h4>
                                        <p className="text-sm text-gray-500">Route #{route.id} • {route.via}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start gap-2">
                                        <MapPin size={18} className="text-green-600 mt-0.5" />
                                        <div className="flex flex-wrap gap-1">
                                            {route.stops.map((stop, idx) => (
                                                <span key={idx} className="text-sm text-gray-600 after:content-['→'] after:mx-1 last:after:hidden">
                                                    {stop}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} className="text-green-600" />
                                        <span className="text-sm text-gray-600">Timings: {route.timings}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={18} className="text-green-600" />
                                        <span className="text-sm text-gray-600">{route.driver} – {route.contact}</span>
                                    </div>
                                </div>

                                <button className="w-full py-3 border border-green-200 text-green-700 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition flex items-center justify-center gap-2">
                                    View Full Route <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transport Coordinator Contact */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-green-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Transport Coordinator</h3>
                        <p className="text-gray-600 mb-4">
                            For any queries regarding bus routes, timings, or fees, please contact our transport in-charge.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                                <User size={24} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">Mrs. Anita Sharma</p>
                                <p className="text-sm text-gray-500">+91 98765 43215 | transport@lgpublicschool.edu.in</p>
                            </div>
                        </div>
                    </div>
                    <button className="px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition shadow-lg whitespace-nowrap">
                        Contact Transport Team
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Transport;