import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ Added AnimatePresence
import {
    CreditCard, History, Download, Wallet,
    Phone, Mail, User, BookOpen, Calendar,
    CheckCircle, AlertCircle, ArrowRight,
    Smartphone, Landmark, Lock, Shield
} from 'lucide-react';

const FeePayment = () => {
    const [studentId, setStudentId] = useState('');
    const [studentVerified, setStudentVerified] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [processing, setProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    // Sample student data (would be fetched from API in real app)
    const studentData = {
        name: "Aarav Sharma",
        class: "10 A",
        rollNo: "1012",
        dues: [
            { id: 1, description: "Tuition Fee (Q3 2026)", amount: 12500, dueDate: "15 Mar 2026" },
            { id: 2, description: "Transport Fee (March)", amount: 1800, dueDate: "10 Mar 2026" },
            { id: 3, description: "Activity Fee (Annual)", amount: 2000, dueDate: "20 Mar 2026" }
        ],
        totalDue: 16300
    };

    // Payment history
    const paymentHistory = [
        { id: 1, date: "10 Dec 2025", description: "Q2 Tuition Fee", amount: 12500, status: "success", receipt: "#RCPT001" },
        { id: 2, date: "05 Dec 2025", description: "Transport Fee (Dec)", amount: 1800, status: "success", receipt: "#RCPT002" },
        { id: 3, date: "15 Nov 2025", description: "Exam Fee", amount: 800, status: "success", receipt: "#RCPT003" },
        { id: 4, date: "01 Nov 2025", description: "Library Fee", amount: 500, status: "success", receipt: "#RCPT004" }
    ];

    const handleVerifyStudent = (e) => {
        e.preventDefault();
        if (studentId.trim()) {
            setStudentVerified(true);
        }
    };

    const handlePayment = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setPaymentSuccess(true);
            setStudentVerified(false);
            setStudentId('');
            setTimeout(() => setPaymentSuccess(false), 5000);
        }, 2000);
    };

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
                        Fee Payment Portal
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-green-100 max-w-2xl mx-auto text-lg"
                    >
                        Secure online payment for tuition, transport, and other fees. Instant receipts and transaction history.
                    </motion.p>
                </div>
            </section>

            {/* Payment Success Message */}
            <AnimatePresence>
                {paymentSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-28 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
                    >
                        <CheckCircle size={24} className="text-green-600" />
                        <span className="font-semibold">Payment successful! Receipt sent to email.</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6 py-12">
                {/* Student Verification */}
                {!studentVerified ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8 border border-green-100 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Verify Student</h2>
                        <form onSubmit={handleVerifyStudent} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Student ID / Admission No.</label>
                                <input
                                    type="text"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                    placeholder="e.g., LGP20241012"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Class (Optional)</label>
                                    <select className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none bg-white">
                                        <option>Select</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Section (Optional)</label>
                                    <select className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none bg-white">
                                        <option>Select</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg"
                            >
                                <User size={20} /> Proceed to Payment
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 text-center mt-4">
                            Demo: Enter any ID to proceed
                        </p>
                    </motion.div>
                ) : (
                    /* Payment Section */
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left: Student Info & Dues */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-3xl shadow-xl p-6 border border-green-100 sticky top-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">{studentData.name}</h3>
                                        <p className="text-sm text-gray-500">Class {studentData.class} | Roll No. {studentData.rollNo}</p>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <AlertCircle size={18} className="text-green-600" /> Pending Dues
                                </h4>

                                <div className="space-y-3 mb-6">
                                    {studentData.dues.map((due) => (
                                        <div key={due.id} className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                                            <div>
                                                <p className="font-medium text-gray-800 text-sm">{due.description}</p>
                                                <p className="text-xs text-gray-500">Due: {due.dueDate}</p>
                                            </div>
                                            <span className="font-bold text-green-700">₹{due.amount}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-green-100 pt-4 mb-4">
                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <span>Total Payable</span>
                                        <span className="text-green-700">₹{studentData.totalDue}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-500 bg-green-50 p-3 rounded-xl">
                                    <Shield size={18} className="text-green-600" />
                                    <span>Secured by 256-bit SSL encryption</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Payment Methods & Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-green-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Payment Method</h3>

                                {/* Payment Method Tabs */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {[
                                        { id: 'card', label: 'Credit/Debit Card', icon: <CreditCard size={20} /> },
                                        { id: 'upi', label: 'UPI', icon: <Smartphone size={20} /> },
                                        { id: 'netbanking', label: 'Net Banking', icon: <Landmark size={20} /> },
                                        { id: 'wallet', label: 'Wallet', icon: <Wallet size={20} /> }
                                    ].map((method) => (
                                        <button
                                            key={method.id}
                                            onClick={() => setPaymentMethod(method.id)}
                                            className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 transition-all ${paymentMethod === method.id
                                                    ? 'border-green-600 bg-green-50 text-green-700'
                                                    : 'border-gray-200 text-gray-600 hover:border-green-300'
                                                }`}
                                        >
                                            {method.icon}
                                            <span className="font-medium text-sm">{method.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Payment Form based on selected method */}
                                <div className="space-y-6">
                                    {paymentMethod === 'card' && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                                <input
                                                    type="text"
                                                    placeholder="1234 5678 9012 3456"
                                                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                                    <input
                                                        type="text"
                                                        placeholder="MM/YY"
                                                        className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                                    <input
                                                        type="password"
                                                        placeholder="***"
                                                        maxLength="3"
                                                        className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                                                <input
                                                    type="text"
                                                    placeholder="Aarav Sharma"
                                                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {paymentMethod === 'upi' && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Enter UPI ID</label>
                                                <input
                                                    type="text"
                                                    placeholder="example@okhdfcbank"
                                                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
                                                />
                                            </div>
                                            <p className="text-sm text-gray-500">We'll send a payment request to your UPI app.</p>
                                        </div>
                                    )}

                                    {paymentMethod === 'netbanking' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Bank</label>
                                            <select className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none bg-white">
                                                <option>SBI</option>
                                                <option>HDFC</option>
                                                <option>ICICI</option>
                                                <option>Axis</option>
                                                <option>PNB</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    )}

                                    {paymentMethod === 'wallet' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Wallet</label>
                                            <select className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-300 outline-none bg-white">
                                                <option>Paytm</option>
                                                <option>PhonePe</option>
                                                <option>Google Pay</option>
                                                <option>Amazon Pay</option>
                                                <option>Mobikwik</option>
                                            </select>
                                        </div>
                                    )}

                                    {/* Payment Summary & Submit */}
                                    <div className="border-t border-green-100 pt-6 mt-8">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="font-semibold text-gray-700">Total Amount</span>
                                            <span className="text-2xl font-bold text-green-700">₹{studentData.totalDue}</span>
                                        </div>

                                        <button
                                            onClick={handlePayment}
                                            disabled={processing}
                                            className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg ${processing ? 'opacity-70 cursor-not-allowed' : ''
                                                }`}
                                        >
                                            {processing ? (
                                                <>Processing <span className="animate-spin">⌛</span></>
                                            ) : (
                                                <>Pay Now <ArrowRight size={20} /></>
                                            )}
                                        </button>

                                        <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1">
                                            <Lock size={14} /> Your payment is secure and encrypted
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Payment History Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                        <History className="text-green-600" /> Recent Transactions
                    </h2>

                    <div className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
                        <div className="divide-y divide-green-100">
                            {paymentHistory.map((txn) => (
                                <div key={txn.id} className="flex items-center justify-between p-5 hover:bg-green-50 transition group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                                            <CheckCircle size={18} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{txn.description}</p>
                                            <p className="text-xs text-gray-500">{txn.date} • {txn.receipt}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-bold text-gray-800">₹{txn.amount}</span>
                                        <button className="text-green-600 hover:text-green-800 opacity-0 group-hover:opacity-100 transition flex items-center gap-1 text-sm font-medium">
                                            <Download size={16} /> Receipt
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeePayment;