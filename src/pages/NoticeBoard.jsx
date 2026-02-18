import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bell, Calendar, FileText, Download, Search,
    Filter, Pin, Eye, Clock, ChevronRight, AlertCircle
} from 'lucide-react';

const NoticeBoard = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Expanded notice data with realistic school notices
    const allNotices = [
        {
            id: 1,
            type: 'notice',
            category: 'General',
            title: 'Winter Break 2026',
            date: '15 Dec 2025',
            content: 'School will remain closed for winter break from 20th December 2025 to 5th January 2026. Reopening on 6th January.',
            pinned: true,
            attachments: ['holiday_list.pdf'],
            views: 245,
            author: 'Principal'
        },
        {
            id: 2,
            type: 'exam',
            category: 'Examinations',
            title: 'Mid-Term Exam Schedule (Class 9-12)',
            date: '10 Jan 2026',
            content: 'Mid-term examinations will begin from 25th January. Detailed timetable attached. Please check your sections.',
            pinned: true,
            attachments: ['midterm_schedule.pdf', 'exam_rules.pdf'],
            views: 567,
            author: 'Examination Cell'
        },
        {
            id: 3,
            type: 'event',
            category: 'Events',
            title: 'Annual Sports Day 2026',
            date: '20 Jan 2026',
            content: 'Annual Sports Day will be held on 5th February. Students interested in participating must register by 25th January.',
            pinned: false,
            attachments: ['sports_registration_form.pdf'],
            views: 189,
            author: 'Sports Department'
        },
        {
            id: 4,
            type: 'holiday',
            category: 'Holidays',
            title: 'Republic Day Holiday',
            date: '25 Jan 2026',
            content: 'School will remain closed on 26th January on account of Republic Day.',
            pinned: false,
            attachments: [],
            views: 112,
            author: 'Admin'
        },
        {
            id: 5,
            type: 'notice',
            category: 'Fee',
            title: 'Fee Payment Deadline Extended',
            date: '05 Jan 2026',
            content: 'The last date for Q3 fee payment has been extended to 15th January without late fee.',
            pinned: false,
            attachments: ['fee_notice.pdf'],
            views: 301,
            author: 'Accounts'
        },
        {
            id: 6,
            type: 'event',
            category: 'Workshop',
            title: 'Parent-Teacher Meeting',
            date: '18 Jan 2026',
            content: 'PTM for classes 9-12 will be held on 25th January from 9 AM to 1 PM. Schedule attached.',
            pinned: true,
            attachments: ['ptm_schedule.pdf'],
            views: 423,
            author: 'Academic Coordinator'
        },
        {
            id: 7,
            type: 'exam',
            category: 'Results',
            title: 'Term 1 Results Released',
            date: '02 Jan 2026',
            content: 'Term 1 results for classes 9-12 are now available on the student portal. Hard copies will be distributed soon.',
            pinned: false,
            attachments: [],
            views: 890,
            author: 'Examination Cell'
        },
    ];

    // Categories for filter
    const categories = ['all', 'General', 'Examinations', 'Events', 'Holidays', 'Fee', 'Workshop', 'Results'];

    // Filter notices based on tab, category, and search
    const filteredNotices = allNotices.filter(notice => {
        // Tab filter
        if (activeTab !== 'all' && notice.type !== activeTab) return false;
        // Category filter
        if (selectedCategory !== 'all' && notice.category !== selectedCategory) return false;
        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return notice.title.toLowerCase().includes(query) ||
                notice.content.toLowerCase().includes(query) ||
                notice.author.toLowerCase().includes(query);
        }
        return true;
    });

    // Separate pinned notices
    const pinnedNotices = filteredNotices.filter(n => n.pinned);
    const regularNotices = filteredNotices.filter(n => !n.pinned);

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
                        Notice Board
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-green-100 max-w-2xl mx-auto text-lg"
                    >
                        Stay updated with the latest announcements, exam schedules, events, and holidays.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-6 py-12">
                {/* Search and Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search notices..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 items-center">
                        <Filter size={18} className="text-gray-400" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 outline-none bg-white"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-8 border-b border-green-100 pb-4">
                    {[
                        { id: 'all', label: 'All', icon: Bell },
                        { id: 'notice', label: 'Notices', icon: Bell },
                        { id: 'exam', label: 'Exams', icon: FileText },
                        { id: 'event', label: 'Events', icon: Calendar },
                        { id: 'holiday', label: 'Holidays', icon: AlertCircle }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-green-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Pinned Notices Section */}
                {pinnedNotices.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <Pin size={18} className="text-green-600" /> Pinned Notices
                        </h3>
                        <div className="space-y-4">
                            {pinnedNotices.map((notice) => (
                                <NoticeCard key={notice.id} notice={notice} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Regular Notices */}
                <div className="space-y-4">
                    {regularNotices.length === 0 && pinnedNotices.length === 0 ? (
                        <div className="text-center py-16 bg-gray-50 rounded-3xl">
                            <Bell size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500 text-lg">No notices found.</p>
                        </div>
                    ) : (
                        regularNotices.map((notice) => (
                            <NoticeCard key={notice.id} notice={notice} />
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

// Individual Notice Card Component
const NoticeCard = ({ notice }) => {
    const [expanded, setExpanded] = useState(false);

    const getIcon = () => {
        switch (notice.type) {
            case 'exam': return <FileText size={24} />;
            case 'event': return <Calendar size={24} />;
            case 'holiday': return <AlertCircle size={24} />;
            default: return <Bell size={24} />;
        }
    };

    const getColor = () => {
        switch (notice.type) {
            case 'exam': return 'bg-orange-100 text-orange-600';
            case 'event': return 'bg-purple-100 text-purple-600';
            case 'holiday': return 'bg-red-100 text-red-600';
            default: return 'bg-green-100 text-green-600';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-green-100 hover:shadow-xl transition-all overflow-hidden"
        >
            <div className="p-6">
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getColor()}`}>
                        {getIcon()}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                            <h3 className="font-bold text-xl text-gray-800">{notice.title}</h3>
                            <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full flex items-center gap-1">
                                <Clock size={14} /> {notice.date}
                            </span>
                        </div>
                        <p className={`text-gray-600 mb-3 ${expanded ? '' : 'line-clamp-2'}`}>
                            {notice.content}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="text-gray-400 flex items-center gap-1">
                                <Eye size={14} /> {notice.views} views
                            </span>
                            <span className="text-gray-400">Posted by: {notice.author}</span>
                            {notice.attachments.length > 0 && (
                                <span className="text-gray-400 flex items-center gap-1">
                                    <FileText size={14} /> {notice.attachments.length} attachment(s)
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                        {notice.attachments.length > 0 && (
                            <button className="p-2 hover:bg-green-50 rounded-lg text-green-600 transition">
                                <Download size={20} />
                            </button>
                        )}
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition"
                        >
                            <ChevronRight size={20} className={`transform transition-transform ${expanded ? 'rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Attachments preview (if expanded) */}
                {expanded && notice.attachments.length > 0 && (
                    <div className="mt-4 pl-16 border-t border-green-100 pt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Attachments:</h4>
                        <div className="flex flex-wrap gap-3">
                            {notice.attachments.map((file, idx) => (
                                <button key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-green-50 transition">
                                    <FileText size={16} className="text-green-600" />
                                    <span className="text-sm text-gray-700">{file}</span>
                                    <Download size={14} className="text-gray-400" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default NoticeBoard;