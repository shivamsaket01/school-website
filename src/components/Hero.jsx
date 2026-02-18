import { motion } from "framer-motion";
import logo from "../assets/Logo.png";
import heroBg from "../assets/cover.png";

export default function Hero() {
  return (
    <div className="font-sans antialiased">
      {/* HERO SECTION */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})` }}>
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 text-white">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={logo}
              alt="School logo"
              className="w-32 h-32 rounded-2xl bg-white p-3 shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">LG Public School, Barmasia</h1>
              <p className="text-xl opacity-90 mb-6">#2 Mahanth Nagar, Barmasia – 560018</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full text-base font-medium">State Board</span>
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full text-base font-medium">Class 1 - 10</span>
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full text-base font-medium">Co-Ed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}