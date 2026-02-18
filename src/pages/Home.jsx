// import { useEffect, useState } from "react";
// import slide1 from "../assets/slide1.jpg";
// import slide2 from "../assets/slide2.jpg";
// import slide3 from "../assets/slide3.jpg";
// import logo from "../assets/Logo.png";
// import heroBg from "../assets/cover.png";

// export default function Home() {
//     const slides = [slide1, slide2, slide3];
//     const [current, setCurrent] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % slides.length);
//         }, 3500);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="font-sans antialiased bg-pink-50 text-gray-800">
//             {/* SECONDARY NAV */}
//             <nav className="bg-white shadow-sm border-b border-pink-100 sticky top-0 z-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-14 text-sm font-medium">
//                         <div className="flex space-x-8">
//                             {/* <a href="#" className="text-pink-600 border-b-2 border-pink-600 pb-1">Home</a> */}
//                             <div className="relative group">
//                                 {/* <button className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
//                                     <span>Explore Schools</span>
//                                     <span className="text-lg">⌄</span>
//                                 </button> */}
//                                 <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                                     <div className="py-2">
//                                         {["School Gallery", "Academics", "Play Schools", "Branches", "Best Schools"].map((item) => (
//                                             <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">{item}</a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* <a href="#" className="text-gray-700 hover:text-pink-600">Admission</a>
//                             <a href="#" className="text-gray-700 hover:text-pink-600">Compare</a>
//                             <a href="#" className="text-gray-700 hover:text-pink-600">About</a>
//                             <a href="#" className="text-gray-700 hover:text-pink-600">Contact</a> */}
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* HERO SECTION */}
//             <section
//                 className="relative bg-cover bg-center py-16 md:py-24"
//                 style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})` }}
//             >
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex flex-col md:flex-row items-center gap-8 text-white">
//                         <img src={logo} alt="School logo" className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white p-3 shadow-2xl" />
//                         <div>
//                             <h1 className="text-3xl md:text-5xl font-bold mb-3">LG Public School, Barmasia</h1>
//                             <p className="text-lg md:text-xl opacity-90 mb-4">#2 Mahanth Nagar, Barmasia – 560018</p>
//                             <div className="flex flex-wrap gap-3">
//                                 <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full text-sm font-medium">State Board</span>
//                                 <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full text-sm font-medium">Class 1 - 10</span>
//                                 <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full text-sm font-medium">2K+ Views</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* TABS */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-b border-pink-200">
//                 <div className="flex space-x-8 text-sm font-medium">
//                     {["Overview", "Fee Structure", "Photos", "Reviews"].map((tab, idx) => (
//                         <span
//                             key={tab}
//                             className={`pb-3 cursor-pointer ${idx === 0 ? "text-pink-600 border-b-2 border-pink-600" : "text-gray-500 hover:text-pink-600"}`}
//                         >
//                             {tab}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* MAIN CONTENT - ENQUIRY & FORM */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* Enquiry Table */}
//                 <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 border border-pink-100">
//                     <h2 className="text-2xl font-bold text-pink-700 mb-6">Admission Enquiry</h2>
//                     <div className="overflow-x-auto">
//                         <table className="w-full text-left">
//                             <thead className="bg-pink-50 text-pink-800">
//                                 <tr>
//                                     <th className="p-3 font-semibold">Class</th>
//                                     <th className="p-3 font-semibold">Session</th>
//                                     <th className="p-3 font-semibold">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-pink-100">
//                                 {["Class 1", "Class 2", "Class 3"].map((cls) => (
//                                     <tr key={cls} className="hover:bg-pink-50/50">
//                                         <td className="p-3">{cls}</td>
//                                         <td className="p-3">2026-2027</td>
//                                         <td className="p-3">
//                                             <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition">
//                                                 Enquire Now
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* Side Form */}
//                 <div className="bg-white rounded-2xl shadow-md p-6 border border-green-200">
//                     <h3 className="text-xl font-bold text-green-700 mb-4">Talk to an Expert</h3>
//                     <div className="space-y-4">
//                         <input type="text" placeholder="Parent Name" className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" />
//                         <div className="flex items-center border border-pink-200 rounded-lg overflow-hidden">
//                             <span className="bg-pink-50 px-3 py-3 text-gray-600">🇮🇳 +91</span>
//                             <input type="text" placeholder="Mobile Number" className="flex-1 p-3 focus:outline-none" />
//                         </div>
//                         <input type="email" placeholder="Email ID" className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" />
//                         <select className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300">
//                             <option>Select Class</option>
//                             {[1, 2, 3, 4].map(n => <option key={n}>Class {n}</option>)}
//                         </select>
//                         <input type="text" placeholder="Alternate Number (Optional)" className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" />
//                         <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
//                             GET FREE CONSULTATION
//                         </button>
//                         <p className="text-xs text-gray-500 text-center">
//                             By submitting this form, you agree to the <span className="text-pink-600 cursor-pointer">Privacy Policy</span> and <span className="text-pink-600 cursor-pointer">Terms & Conditions</span>
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* FIXED ENQUIRE BUTTON */}
//             <div className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg font-medium cursor-pointer transition z-50">
//                 Enquire Now
//             </div>

//             {/* STATS */}
//             <section className="bg-green-100 py-12 mt-8">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//                     {[
//                         { number: "35,000+", label: "Students" },
//                         { number: "2,500+", label: "Teachers" },
//                         { number: "10K+", label: "Alumni" },
//                         { number: "100+", label: "Awards" }
//                     ].map((stat) => (
//                         <div key={stat.label}>
//                             <h2 className="text-3xl md:text-4xl font-bold text-pink-700">{stat.number}</h2>
//                             <p className="text-gray-700 mt-1">{stat.label}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* ABOUT SECTION */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                 <div>
//                     <h2 className="text-3xl font-bold text-pink-700 mb-4">About Our School</h2>
//                     <p className="text-gray-600 mb-4">
//                         Our school is dedicated to nurturing young minds through holistic education, strong values, and academic excellence. We believe in shaping confident leaders who are prepared for the challenges of tomorrow.
//                     </p>
//                     <p className="text-gray-600 mb-6">
//                         With experienced educators, modern facilities, and a student-centric approach, we focus on overall personality development along with academic success.
//                     </p>
//                     <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium transition">
//                         Learn More
//                     </button>
//                 </div>
//                 <div className="rounded-2xl overflow-hidden shadow-lg">
//                     <img src={slide2} alt="Students learning" className="w-full h-full object-cover" />
//                 </div>
//             </section>

//             {/* VALUES / MOTTO / VISION / MISSION */}
//             <section className="bg-pink-100 py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {[
//                         { icon: "🤝", title: "MOTTO", heading: "Service Before Self", desc: "Our motto reflects the values of responsibility, compassion, and commitment that shape every student’s character." },
//                         { icon: "🎯", title: "VISION", heading: "Education for a Better Future", desc: "We strive to nurture confident learners who are prepared to face global challenges with integrity and knowledge." },
//                         { icon: "🌱", title: "MISSION", heading: "Child Centric Education", desc: "Our mission is to provide a supportive environment that encourages curiosity, creativity, and holistic development." }
//                     ].map((item) => (
//                         <div key={item.title} className="bg-white rounded-2xl p-8 shadow-md border border-pink-200 hover:shadow-lg transition">
//                             <span className="text-4xl">{item.icon}</span>
//                             <h3 className="text-sm font-semibold text-pink-500 mt-4 mb-1">{item.title}</h3>
//                             <h2 className="text-xl font-bold text-gray-800 mb-3">{item.heading}</h2>
//                             <p className="text-gray-600">{item.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* REVIEWS SECTION */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="flex flex-wrap justify-between items-center mb-8">
//                     <h2 className="text-3xl font-bold text-pink-700">Parent & Student Reviews</h2>
//                     <button className="border border-pink-500 text-pink-600 hover:bg-pink-50 px-6 py-2 rounded-full font-medium transition">
//                         Write a Review
//                     </button>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* Rating Summary */}
//                     <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-md border border-pink-100">
//                         <div className="text-center mb-6">
//                             <h1 className="text-5xl font-bold text-pink-600">5</h1>
//                             <div className="text-yellow-400 text-2xl my-1">★★★★★</div>
//                             <p className="text-gray-500">1 Verified Review</p>
//                         </div>
//                         <div className="space-y-3">
//                             {[5, 4, 3, 2, 1].map(star => (
//                                 <div key={star} className="flex items-center gap-2">
//                                     <span className="text-sm w-6">{star}★</span>
//                                     <div className="flex-1 h-2 bg-pink-100 rounded-full overflow-hidden">
//                                         <div className="h-full bg-pink-500 rounded-full" style={{ width: star === 5 ? "100%" : "0%" }}></div>
//                                     </div>
//                                     <span className="text-sm w-6">{star === 5 ? "1" : "0"}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Category Cards */}
//                     <div className="lg:col-span-2">
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
//                             {["Infrastructure", "Admission Process", "Value for Money", "Sports", "Extra-curricular"].map(cat => (
//                                 <div key={cat} className="bg-white p-4 rounded-xl shadow-sm border border-pink-100 text-center">
//                                     <p className="font-medium text-gray-700">{cat}</p>
//                                     <span className="text-yellow-400 text-sm">★★★★★ 5</span>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Single Review Card */}
//                         <div className="bg-white rounded-2xl p-6 shadow-md border border-pink-100">
//                             <div className="flex items-center gap-2 mb-3">
//                                 <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">★ 5</span>
//                                 <h3 className="font-bold text-lg">Highly recommend school</h3>
//                             </div>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {["Infrastructure", "Admission Process", "Value for Money"].map(tag => (
//                                     <span key={tag} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">{tag}</span>
//                                 ))}
//                             </div>
//                             <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
//                                 {["Infrastructure", "Admission Process", "Value for Money", "Sports", "Extra-curricular"].map(item => (
//                                     <div key={item} className="flex items-center gap-1">
//                                         <span>{item}</span>
//                                         <span className="text-yellow-400">★★★★★ 5</span>
//                                     </div>
//                                 ))}
//                             </div>
//                             <p className="text-gray-500 text-sm">Zainab — 24th Feb, 2025</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* OATH SECTION */}
//             <section className="bg-green-100 py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">YES OATH</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                         <div className="space-y-4 text-gray-700">
//                             <p className="text-lg">We, the students of LG Public School, hereby resolve from this day and date to...</p>
//                             <div>
//                                 <p className="font-semibold text-pink-600 mt-4">SAY YES TO</p>
//                                 <ul className="list-disc list-inside space-y-1">
//                                     <li>SERVICE BEFORE SELF</li>
//                                     <li>SAY THE TRUTH AND ONLY THE TRUTH</li>
//                                     <li>HARD WORK AND COMMITMENT</li>
//                                     <li>RESPECT FOR EVERYONE</li>
//                                 </ul>
//                             </div>
//                             <div>
//                                 <p className="font-semibold text-pink-600 mt-4">SAY YES TO</p>
//                                 <ul className="list-disc list-inside space-y-1">
//                                     <li>DIVERSITY AND UNITY</li>
//                                     <li>FRIENDSHIP AND CAMARADERIE</li>
//                                     <li>LOVE AND CARE FOR EACH OTHER</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="rounded-2xl overflow-hidden shadow-lg">
//                             <img src={slide1} alt="Students oath" className="w-full h-full object-cover" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ADMISSION BANNER */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="bg-gradient-to-r from-pink-200 to-green-200 rounded-3xl overflow-hidden shadow-xl">
//                     <div className="grid grid-cols-1 md:grid-cols-2 items-center">
//                         <div className="p-10 md:p-16 text-center md:text-left">
//                             <h1 className="text-4xl md:text-5xl font-bold text-pink-700">ADMISSIONS OPEN</h1>
//                             <h2 className="text-3xl md:text-4xl font-semibold text-green-700 mt-2">2026–27</h2>
//                             <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition shadow-lg">
//                                 ENQUIRE NOW
//                             </button>
//                         </div>
//                         <div className="h-64 md:h-auto">
//                             <img src={slide3} alt="Students" className="w-full h-full object-cover" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* FOOTER REMOVED AS REQUESTED */}
//         </div>
//     );
// }



import { motion } from "framer-motion";
import {
    ChevronRight, Calendar, Users, Award, BookOpen,
    Star, ArrowRight, Phone, Mail, MapPin
} from "lucide-react";
import heroBg from "../assets/cover.png";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import logo from "../assets/Logo.png";

export default function Home() {
    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const stats = [
        { number: "35,000+", label: "Students", icon: <Users className="w-8 h-8" /> },
        { number: "2,500+", label: "Teachers", icon: <Award className="w-8 h-8" /> },
        { number: "10K+", label: "Alumni", icon: <Users className="w-8 h-8" /> },
        { number: "100+", label: "Awards", icon: <Star className="w-8 h-8" /> }
    ];

    const features = [
        {
            icon: "📚",
            title: "Holistic Curriculum",
            description: "Academic excellence combined with sports, arts, and life skills."
        },
        {
            icon: "🏫",
            title: "Modern Infrastructure",
            description: "Smart classrooms, labs, library, and sports complex."
        },
        {
            icon: "👩‍🏫",
            title: "Expert Faculty",
            description: "Dedicated teachers with years of experience."
        },
        {
            icon: "🌍",
            title: "Global Exposure",
            description: "Exchange programs and international collaborations."
        }
    ];

    const events = [
        { date: "15 Mar", title: "Science Fair", description: "Annual science exhibition." },
        { date: "20 Mar", title: "Parent-Teacher Meet", description: "Class 9-12 PTM." },
        { date: "5 Apr", title: "Sports Day", description: "Annual athletic meet." }
    ];

    const testimonials = [
        {
            name: "Anita Sharma",
            role: "Parent",
            text: "The school has transformed my daughter into a confident and curious learner. The teachers are amazing!",
            rating: 5
        },
        {
            name: "Rahul Mehta",
            role: "Student (Class 10)",
            text: "I love the robotics club and the sports facilities. It's a great place to learn and grow.",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                
{/* Background Image without Overlay */}
<div className="absolute inset-0 z-0">
  <img
    src="https://png.pngtree.com/thumb_back/fh260/background/20250425/pngtree-exterior-view-of-a-modern-public-school-image_17225864.jpg"
    alt="School campus"
    className="w-full h-full object-cover"
  />
  {/* <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/80"></div> */}
</div>





                 




                {/* Animated shapes
                <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={logo}
                            alt="LG Public School"
                            className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-2xl"
                        />
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Welcome to <span className="text-green-300">LG Public School</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-10">
                            Nurturing young minds since 1995 – where every child discovers their potential and builds a brighter future.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow-lg shadow-green-500/30 flex items-center gap-2 transition">
                                Explore School <ChevronRight size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div> */}










             {/* Animated shapes */}
<div className="absolute top-2 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-2 right-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>

{/* Foreground Content */}
<div className="relative z-10 container mx-auto px-9 text-center text-white flex flex-col justify-start pt-50">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Logo */}
    <img
      src={logo}
      alt="LG Public School"
      className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-2xl"
    />

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
      Welcome to <span className="text-green-300">LG Public School</span>
    </h1>

    {/* Subtext */}
    <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
      Nurturing young minds since 1995 – where every child discovers their potential and builds a brighter future.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
      <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow-lg shadow-green-500/30 flex items-center gap-2 transition">
        Explore School <ChevronRight size={20} />
      </button>
      <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition">
        Contact Us
      </button>
    </div>
  </motion.div>
</div>



                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center text-green-700 mb-4 group-hover:scale-110 transition">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</h3>
                                <p className="text-gray-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our School</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                LG Public School was established in 1995 with a vision to provide quality education that goes beyond textbooks. We focus on holistic development, nurturing students to become compassionate, innovative, and responsible citizens.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our 15-acre campus features smart classrooms, science labs, a well-stocked library, sports facilities, and a dedicated team of educators who inspire excellence every day.
                            </p>
                            <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition inline-flex items-center gap-2">
                                Learn More <ArrowRight size={18} />
                            </button>
                        </motion.div>
                        {/* <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <img
                                src={slide2}
                                alt="Students in classroom"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                                <p className="text-sm text-gray-500">25+ Years of Excellence</p>
                                <p className="font-bold text-gray-800">#1 School in Barmasia</p>
                            </div>
                        </motion.div> */}







                        <motion.div
                   initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                // className="relative w-1/2 flex justify-end"
                className="absolute right-14 w-[550px] h-[450px] object-cover rounded-3xl shadow-2xl"

                                  >
    <img
        src={slide2}
        alt="Students in classroom"
        className="w-[750px] h-[450px] object-cover rounded-3xl shadow-2xl"
    />
    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
        <p className="text-sm text-gray-500">25+ Years of Excellence</p>
        <p className="font-bold text-gray-800">#1 School in Barmasia</p>
    </div>
</motion.div>






                    </div>
                </div>
            </section>

            {/* Features / Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose LG Public School?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">We provide an environment where every child can thrive academically, socially, and emotionally.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-green-50 p-6 rounded-2xl hover:shadow-xl transition group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-500">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">📅 Upcoming Events</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Stay updated with our latest activities and important dates.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-xl transition"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-700 font-bold text-xl">
                                        {event.date.split(' ')[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{event.date}</p>
                                        <h3 className="font-bold text-gray-800">{event.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm">{event.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">💬 What Parents Say</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Real stories from our school community.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-green-50 p-8 rounded-3xl border border-green-100"
                            >
                                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Admissions Open */}
            <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-800">
                <div className="container mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Admissions Open 2026–27</h2>
                        <p className="text-xl text-green-100 max-w-2xl mx-auto mb-10">
                            Give your child the best start. Limited seats available. Apply now for Nursery to Class 10.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition shadow-lg">
                                Apply Online
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition">
                                Download Prospectus
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-12 bg-white border-t border-green-100">
                <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                        <Phone size={18} className="text-green-600" />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={18} className="text-green-600" />
                        <span>info@lgpublicschool.edu.in</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-green-600" />
                        <span>#2 Mahanth Nagar, Barmasia</span>
                    </div>
                </div>
            </section>
        </div>
    );
}