import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen, FileText, Download, Search,
    Library, Calendar, BookMarked, ExternalLink,
    Clock, Users, BookPlus, TrendingUp, MessageCircle,
    Star, ChevronRight, X, Send
} from 'lucide-react';

const StudyMaterial = () => {
    // Expanded materials array with more items
    const materials = [
        { id: 1, subject: 'Mathematics', topic: 'Quadratic Equations', class: 'Class 10', type: 'PDF', pages: 24, downloads: 1234 },
        { id: 2, subject: 'Science', topic: 'Periodic Table', class: 'Class 9', type: 'PDF', pages: 18, downloads: 987 },
        { id: 3, subject: 'English', topic: 'The Sound of Music', class: 'Class 9', type: 'PDF', pages: 15, downloads: 756 },
        { id: 4, subject: 'Social Science', topic: 'French Revolution', class: 'Class 9', type: 'PDF', pages: 22, downloads: 843 },
        { id: 5, subject: 'Mathematics', topic: 'Trigonometry', class: 'Class 10', type: 'PDF', pages: 30, downloads: 1567 },
        { id: 6, subject: 'Science', topic: 'Carbon Compounds', class: 'Class 10', type: 'PDF', pages: 20, downloads: 1102 },
        { id: 7, subject: 'Physics', topic: 'Laws of Motion', class: 'Class 11', type: 'PDF', pages: 28, downloads: 892 },
        { id: 8, subject: 'Chemistry', topic: 'Chemical Bonding', class: 'Class 11', type: 'PDF', pages: 26, downloads: 945 },
        { id: 9, subject: 'Biology', topic: 'Human Anatomy', class: 'Class 11', type: 'PDF', pages: 34, downloads: 763 },
        { id: 10, subject: 'Mathematics', topic: 'Calculus Basics', class: 'Class 12', type: 'PDF', pages: 32, downloads: 1321 },
        { id: 11, subject: 'Physics', topic: 'Electromagnetism', class: 'Class 12', type: 'PDF', pages: 29, downloads: 1045 },
        { id: 12, subject: 'Chemistry', topic: 'Organic Reactions', class: 'Class 12', type: 'PDF', pages: 27, downloads: 1189 },
    ];

    // Library highlights with 4 items
    const libraryHighlights = [
        { icon: <Library size={28} />, label: '12,000+ Books', value: 'Including reference & fiction', color: 'bg-green-100 text-green-700' },
        { icon: <BookMarked size={28} />, label: '60+ National Journals', value: 'Regular subscriptions', color: 'bg-emerald-100 text-emerald-700' },
        { icon: <Calendar size={28} />, label: 'Open Mon–Sat', value: '8:00 AM – 4:00 PM', color: 'bg-green-50 text-green-600' },
        { icon: <TrendingUp size={28} />, label: '500+ Daily Visitors', value: 'Peak hours: 10am–2pm', color: 'bg-green-100 text-green-700' },
    ];

    // New arrivals (simulated)
    const newArrivals = [
        { title: 'NCERT Exemplar – Class 10 Science', author: 'NCERT', date: 'Feb 2026' },
        { title: 'Concise Mathematics – Class 9', author: 'R.K. Bansal', date: 'Jan 2026' },
        { title: 'The Blue Umbrella – Ruskin Bond', author: 'Ruskin Bond', date: 'Dec 2025' },
        { title: 'Competition Success Review', author: 'CSR', date: 'Monthly' },
    ];

    // Testimonials
    const testimonials = [
        { name: 'Anjali Sharma', class: 'Class 12', text: 'The library has all the reference books I need for my board exams. The digital section is a bonus!' },
        { name: 'Rahul Mehta', class: 'Class 10', text: 'I love the quiet reading area. It helps me focus and complete my homework quickly.' },
        { name: 'Mrs. Sunita Devi', parent: true, text: 'My son borrows books every week. The librarian is very helpful.' },
    ];

    // State for "Ask a Librarian" modal
    const [showModal, setShowModal] = useState(false);
    const [request, setRequest] = useState({ name: '', email: '', message: '' });

    const handleRequestChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const submitRequest = (e) => {
        e.preventDefault();
        alert('Request sent to librarian!');
        setShowModal(false);
        setRequest({ name: '', email: '', message: '' });
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* HERO SECTION – Enhanced */}
            <section className="relative bg-gradient-to-br from-green-800 to-emerald-900 py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Library & Study Resources
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-green-100 max-w-2xl mx-auto text-lg md:text-xl"
                    >
                        A world of knowledge at your fingertips – both physical and digital.
                    </motion.p>
                </div>
            </section>

            {/* LIBRARY HIGHLIGHTS – 4 cards with more detail */}
            <section className="container mx-auto px-6 -mt-12 relative z-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {libraryHighlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">{item.label}</h3>
                            <p className="text-gray-500 text-sm mt-1">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* QUICK STATS – extra info */}
            <section className="container mx-auto px-6 py-16">
                <div className="bg-green-50 rounded-3xl p-8 flex flex-wrap justify-around items-center gap-6">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-700">45,000+</p>
                        <p className="text-gray-600">Books Issued (Yearly)</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-700">1,200+</p>
                        <p className="text-gray-600">Active Members</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-700">150+</p>
                        <p className="text-gray-600">E‑Resources</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-700">25</p>
                        <p className="text-gray-600">Newspapers/Magazines</p>
                    </div>
                </div>
            </section>

            {/* SEARCH & FILTER – expanded with more filters */}
            <section className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by title, subject, author..."
                            className="w-full pl-12 pr-4 py-4 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white shadow-sm"
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['All', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Competitive', 'Fiction'].map((filter) => (
                            <button
                                key={filter}
                                className="px-5 py-2.5 bg-white border border-green-200 rounded-full text-gray-700 font-medium hover:bg-green-600 hover:text-white hover:border-green-600 transition whitespace-nowrap shadow-sm"
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* MATERIALS GRID – 12 items */}
            <section className="container mx-auto px-6 py-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {materials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-green-100 group"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-700 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <FileText size={22} />
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-700 rounded-full">
                                    {item.class}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-1">{item.topic}</h4>
                            <p className="text-green-600 font-medium text-sm mb-2">{item.subject}</p>
                            <p className="text-gray-500 text-xs mb-3">{item.pages} pages • {item.type} • {item.downloads} downloads</p>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 border border-green-300 rounded-lg text-green-700 text-sm font-medium hover:bg-green-50 transition flex items-center justify-center gap-1">
                                    <Download size={14} /> PDF
                                </button>
                                <button className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition flex items-center justify-center gap-1">
                                    <BookOpen size={14} /> Read
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <button className="px-8 py-3 border-2 border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-50 transition inline-flex items-center gap-2">
                        Browse All Resources <ExternalLink size={18} />
                    </button>
                </div>
            </section>

            {/* NEW ARRIVALS & FEATURED */}
            <section className="bg-green-50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">✨ New Arrivals & Featured</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newArrivals.map((book, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-5 shadow-md border border-green-100 hover:shadow-lg transition"
                            >
                                <BookOpen size={32} className="text-green-600 mb-3" />
                                <h4 className="font-bold text-gray-800">{book.title}</h4>
                                <p className="text-sm text-gray-500">by {book.author}</p>
                                <p className="text-xs text-green-600 mt-2">Added: {book.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PHYSICAL LIBRARY DETAILS – expanded */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">📚 Physical Library</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our library is spread over 3,500 sq. ft. with separate reading areas for junior and senior students. We have a collection of over 12,000 books including textbooks, reference books, fiction, and biographies.
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2.5"></span>
                                <span><strong>Reading Halls:</strong> Two air-conditioned halls with 150+ seating capacity.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2.5"></span>
                                <span><strong>Digital Catalogue:</strong> Search and reserve books online.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2.5"></span>
                                <span><strong>Borrowing Limit:</strong> 3 books for 15 days (renewable).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2.5"></span>
                                <span><strong>Reference Section:</strong> Encyclopedias, yearbooks, competitive exam guides.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop"
                            alt="Library interior"
                            className="rounded-3xl shadow-2xl"
                        />
                        <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                            <Users className="text-green-600" size={24} />
                            <div>
                                <p className="font-bold text-gray-800">Mrs. Meena Kumari</p>
                                <p className="text-xs text-gray-500">Librarian (20+ years)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIGITAL LIBRARY SECTION */}
            <section className="bg-gradient-to-r from-green-50 to-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">💻 Digital Library</h2>
                            <p className="text-gray-600 text-lg mb-4">Access thousands of e‑books, past exam papers, and study notes from anywhere, anytime.</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-600 rounded-full"></span> 2,500+ e‑books (NCERT, reference)</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-600 rounded-full"></span> 10 years of board exam papers</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-600 rounded-full"></span> Audio books for languages</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-600 rounded-full"></span> Mobile app available</li>
                            </ul>
                            <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition shadow-lg">
                                Explore Digital Library
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100">
                            <h3 className="text-xl font-bold mb-4">Student Login</h3>
                            <input type="text" placeholder="Admission No." className="w-full p-3 border border-green-200 rounded-xl mb-3" />
                            <input type="password" placeholder="Password" className="w-full p-3 border border-green-200 rounded-xl mb-4" />
                            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700">Login to e‑Library</button>
                            <p className="text-xs text-gray-500 mt-3 text-center">Forgot password? Contact library</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">💬 What Students & Parents Say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-md border border-green-100"
                        >
                            <Star className="text-yellow-400 fill-current mb-3" size={20} />
                            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.class || 'Parent'}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ASK A LIBRARIAN / REQUEST FORM */}
            <section className="bg-green-50 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">📞 Ask a Librarian</h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-8">Need help finding a book or resource? Our librarian is here to assist.</p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition inline-flex items-center gap-2 shadow-lg"
                    >
                        <MessageCircle size={20} /> Request Assistance
                    </button>
                </div>
            </section>

            {/* MODAL for request */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl max-w-md w-full p-8 relative"
                    >
                        <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Request a Book / Assistance</h3>
                        <form onSubmit={submitRequest}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={request.name}
                                onChange={handleRequestChange}
                                className="w-full p-3 border border-green-200 rounded-xl mb-3"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={request.email}
                                onChange={handleRequestChange}
                                className="w-full p-3 border border-green-200 rounded-xl mb-3"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Describe the book or resource you need"
                                rows="4"
                                value={request.message}
                                onChange={handleRequestChange}
                                className="w-full p-3 border border-green-200 rounded-xl mb-4"
                                required
                            ></textarea>
                            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 flex items-center justify-center gap-2">
                                <Send size={18} /> Send Request
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}

            {/* FINAL CTA – multiple options */}
            <section className="container mx-auto px-6 py-16">
                <div className="bg-white rounded-3xl shadow-xl p-12 border border-green-100 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Explore?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Visit the library during school hours or access our digital resources from home.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition shadow-lg">
                            Browse Online Catalogue
                        </button>
                        <button className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-50 transition">
                            Library Timings & Rules
                        </button>
                        <button className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-50 transition">
                            Contact Librarian
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudyMaterial;