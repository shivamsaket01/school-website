import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, ShieldCheck, AlertCircle, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc, increment } from "firebase/firestore";

const Login = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.email || !formData.password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            setLoading(true);

            // ✅ Firebase Login
            const userCredential = await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            const user = userCredential.user;

            // ✅ Increase login count in Firestore
            const userRef = doc(db, "users", user.uid);

            // await updateDoc(userRef, {
            //     loginCount: increment(1)
            // });

            console.log("Login Success ✅");

            navigate('/admin');

        } catch (err) {
            console.error(err);

            if (err.code === "auth/user-not-found") {
                setError("User not found");
            } else if (err.code === "auth/wrong-password") {
                setError("Wrong password");
            } else if (err.code === "auth/invalid-email") {
                setError("Invalid email format");
            } else {
                setError("Login failed. Try again.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-32 min-h-screen bg-white flex items-center justify-center p-6">
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-green-100 overflow-hidden w-full max-w-5xl grid md:grid-cols-2 min-h-[600px]">

                {/* Left Side - Form */}
                <div className="p-10 md:p-16 flex flex-col justify-center">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                        <p className="text-gray-500">
                            Please enter your email and password to access your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 text-red-500 text-sm p-3 rounded-xl flex items-center gap-2 font-medium border border-red-200"
                            >
                                <AlertCircle size={16} /> {error}
                            </motion.div>
                        )}

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full pl-12 pr-6 py-4 bg-green-50 border border-green-200 rounded-2xl focus:ring-2 focus:ring-green-300 outline-none"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                    className="w-full pl-12 pr-6 py-4 bg-green-50 border border-green-200 rounded-2xl focus:ring-2 focus:ring-green-300 outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Button */}




                        <button
                            disabled={loading}
                            className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-green-200 ${
                                loading ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                        >
                            {loading ? 'Signing In...' : <>Sign In <ArrowRight size={18} /></>}
                        </button>

                        <p className="text-center text-gray-500 text-sm">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-bold text-green-600 hover:text-green-700 inline-flex items-center gap-1"
                            >
                                Sign Up <UserPlus size={14} />
                            </Link>
                        </p>

                    </form>
                </div>

                {/* Right Side */}
                <div className="bg-gradient-to-br from-green-700 to-emerald-800 hidden md:flex flex-col justify-center items-center text-center p-12 relative overflow-hidden">
                    <div className="relative z-10 text-white">
                        <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 mx-auto border border-white/20">
                            <ShieldCheck size={40} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Secure Access</h2>
                        <p className="text-green-100 max-w-sm mx-auto leading-relaxed">
                            Access student records, fee receipts, and academic progress reports safely.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
