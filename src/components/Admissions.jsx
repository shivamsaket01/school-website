import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Send, CheckCircle } from 'lucide-react';

const Admissions = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "users"), {
                ...formData,
                feesPending: 0,
                createdAt: serverTimestamp()
            });
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            setFormData({ studentName: '', parentName: '', email: '', phone: '', grade: '', message: '' });
            alert("Application submitted successfully!");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to submit. Please try again.");
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
                    Apply for Admission
                </h2>

                <div className="flex justify-center">
                    <div className="w-full md:w-3/4 bg-white p-8 rounded-3xl shadow-xl border border-green-100">
                        {submitted ? (
                            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"
                                >
                                    <CheckCircle size={48} />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-4">Application Received!</h3>
                                <p className="text-gray-600 text-lg">Thank you for applying. Our admissions counselor will contact you within 48 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Student's Full Name *</label>
                                        <input
                                            type="text"
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Parent's Name *</label>
                                        <input
                                            type="text"
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Applying for Class *</label>
                                    <select
                                        name="grade"
                                        value={formData.grade}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                    >
                                        <option value="">Select Class</option>
                                        <option value="Nursery">Nursery</option>
                                        <option value="KG">Kindergarten</option>
                                        <option value="1">Class 1</option>
                                        <option value="2">Class 2</option>
                                        <option value="3">Class 3</option>
                                        <option value="4">Class 4</option>
                                        <option value="5">Class 5</option>
                                        <option value="6">Class 6</option>
                                        <option value="7">Class 7</option>
                                        <option value="8">Class 8</option>
                                        <option value="9">Class 9</option>
                                        <option value="10">Class 10</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2"
                                >
                                    <Send size={20} /> Submit Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admissions;
