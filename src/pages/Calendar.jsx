import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, ChevronRight, Calendar as CalendarIcon,
    Award, Bell, Sun, Moon, Download
} from 'lucide-react';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(11); // December
    const [currentYear, setCurrentYear] = useState(2025);
    const [selectedDate, setSelectedDate] = useState(null);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Event data (realistic for a school)
    const events = [
        { date: 5, title: 'Science Fair', type: 'event', description: 'Annual science exhibition showcasing student projects.', time: '9:00 AM - 2:00 PM' },
        { date: 12, title: 'Math Olympiad', type: 'exam', description: 'Inter-school mathematics competition.', time: '10:00 AM - 1:00 PM' },
        { date: 15, title: 'Winter Break Starts', type: 'holiday', description: 'School closed for winter vacation.', time: 'All day' },
        { date: 20, title: 'PTA Meeting', type: 'meeting', description: 'Parent-teacher association meeting.', time: '5:00 PM - 7:00 PM' },
        { date: 25, title: 'Christmas', type: 'holiday', description: 'Christmas holiday.', time: 'All day' },
        { date: 28, title: 'Sports Trials', type: 'sports', description: 'Selection for basketball team.', time: '3:00 PM - 5:00 PM' },
    ];

    // Get days in month
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Get first day of month (0 = Sunday)
    const getFirstDay = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
        setSelectedDate(null);
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
        setSelectedDate(null);
    };

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDay(currentMonth, currentYear);
    const emptyCells = Array(firstDay).fill(null);

    // Get events for selected date
    const selectedEvents = selectedDate
        ? events.filter(e => e.date === selectedDate)
        : [];

    // Get all events for the month (for side panel)
    const monthEvents = events.sort((a, b) => a.date - b.date);

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
                        Academic Calendar
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-green-100 max-w-2xl mx-auto text-lg"
                    >
                        Plan your year ahead with our detailed schedule of events, exams, and holidays.
                    </motion.p>
                </div>
            </section>

            {/* Calendar Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Calendar */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between p-6 border-b border-green-100">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <CalendarIcon size={24} className="text-green-600" />
                                {monthNames[currentMonth]} {currentYear}
                            </h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={handlePrevMonth}
                                    className="p-2 hover:bg-green-50 rounded-lg transition-colors text-gray-600 hover:text-green-700"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNextMonth}
                                    className="p-2 hover:bg-green-50 rounded-lg transition-colors text-gray-600 hover:text-green-700"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="p-6">
                            {/* Day headers */}
                            <div className="grid grid-cols-7 mb-3">
                                {days.map(day => (
                                    <div key={day} className="text-center text-sm font-semibold text-gray-500">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Dates grid */}
                            <div className="grid grid-cols-7 gap-2">
                                {/* Empty cells for days before month start */}
                                {emptyCells.map((_, idx) => (
                                    <div key={`empty-${idx}`} className="aspect-square p-2 bg-gray-50 rounded-lg opacity-30"></div>
                                ))}

                                {/* Actual days */}
                                {[...Array(daysInMonth)].map((_, idx) => {
                                    const day = idx + 1;
                                    const dayEvents = events.filter(e => e.date === day);
                                    const hasEvent = dayEvents.length > 0;
                                    const isSelected = selectedDate === day;

                                    return (
                                        <motion.div
                                            key={day}
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => setSelectedDate(isSelected ? null : day)}
                                            className={`
                                                aspect-square p-2 rounded-lg border-2 cursor-pointer transition-all
                                                ${isSelected
                                                    ? 'border-green-600 bg-green-50'
                                                    : hasEvent
                                                        ? 'border-green-200 hover:border-green-400'
                                                        : 'border-transparent hover:border-gray-200'
                                                }
                                                ${hasEvent ? 'bg-green-50/50' : 'bg-white'}
                                            `}
                                        >
                                            <div className="flex flex-col h-full">
                                                <span className={`text-sm font-medium ${hasEvent ? 'text-green-700' : 'text-gray-700'}`}>
                                                    {day}
                                                </span>
                                                {hasEvent && (
                                                    <div className="mt-1 flex flex-wrap gap-1">
                                                        {dayEvents.slice(0, 2).map((e, i) => (
                                                            <span
                                                                key={i}
                                                                className={`
                                                                    w-2 h-2 rounded-full
                                                                    ${e.type === 'holiday' ? 'bg-red-500' :
                                                                        e.type === 'exam' ? 'bg-orange-500' :
                                                                            e.type === 'event' ? 'bg-blue-500' :
                                                                                e.type === 'sports' ? 'bg-green-500' :
                                                                                    'bg-purple-500'}
                                                                `}
                                                            />
                                                        ))}
                                                        {dayEvents.length > 2 && (
                                                            <span className="text-xs text-gray-400">+{dayEvents.length - 2}</span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="p-4 border-t border-green-100 flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                <span className="text-gray-600">Event</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                                <span className="text-gray-600">Exam</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="text-gray-600">Holiday</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-gray-600">Sports</span>
                            </div>
                        </div>
                    </div>

                    {/* Side Panel: Event Details & Upcoming Events */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Selected Date Details */}
                        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Bell size={18} className="text-green-600" />
                                {selectedDate ? `Events on ${selectedDate} ${monthNames[currentMonth]}` : 'Select a date'}
                            </h3>
                            {selectedDate ? (
                                selectedEvents.length > 0 ? (
                                    <div className="space-y-4">
                                        {selectedEvents.map((event, idx) => (
                                            <div key={idx} className="p-4 bg-green-50 rounded-xl border border-green-100">
                                                <div className="flex items-start justify-between">
                                                    <h4 className="font-semibold text-gray-800">{event.title}</h4>
                                                    <span className={`
                                                        text-xs px-2 py-1 rounded-full
                                                        ${event.type === 'holiday' ? 'bg-red-100 text-red-700' :
                                                            event.type === 'exam' ? 'bg-orange-100 text-orange-700' :
                                                                event.type === 'event' ? 'bg-blue-100 text-blue-700' :
                                                                    event.type === 'sports' ? 'bg-green-100 text-green-700' :
                                                                        'bg-purple-100 text-purple-700'}
                                                    `}>
                                                        {event.type}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                                                <p className="text-xs text-gray-500 mt-2">{event.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 text-sm">No events scheduled for this date.</p>
                                )
                            ) : (
                                <p className="text-gray-500 text-sm">Click on a date to view events.</p>
                            )}
                        </div>

                        {/* Upcoming Events List */}
                        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Award size={18} className="text-green-600" />
                                Upcoming This Month
                            </h3>
                            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                {monthEvents.map((event, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 hover:bg-green-50 rounded-xl transition cursor-pointer"
                                        onClick={() => setSelectedDate(event.date)}
                                    >
                                        <div className={`
                                            w-10 h-10 rounded-lg flex items-center justify-center text-white
                                            ${event.type === 'holiday' ? 'bg-red-500' :
                                                event.type === 'exam' ? 'bg-orange-500' :
                                                    event.type === 'event' ? 'bg-blue-500' :
                                                        event.type === 'sports' ? 'bg-green-500' :
                                                            'bg-purple-500'}
                                        `}>
                                            {event.date}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-800 text-sm">{event.title}</h4>
                                            <p className="text-xs text-gray-500">{event.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download Calendar */}
                        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl border border-green-100 p-6 text-center">
                            <Sun size={32} className="mx-auto text-green-600 mb-3" />
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Download Calendar</h3>
                            <p className="text-sm text-gray-500 mb-4">Get the full academic calendar as PDF.</p>
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition flex items-center justify-center gap-2">
                                <Download size={18} /> Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Calendar;