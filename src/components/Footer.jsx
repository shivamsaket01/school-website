import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"; // Import the logo directly
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {  // Removed the 'logo' prop
  return (
    <footer className="bg-[#1f523f] text-white pt-32 pb-12 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">

          {/* Brand Column */}
          <div>
            {/* Use the imported logo directly */}
            <img src={logo} alt="LG Public School" className="w-32 mb-6" />
            <p className="text-gray-300 leading-relaxed mb-8">
              Your trusted partner in providing quality education and shaping
              a brighter future for every student.
            </p>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1f523f] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-green-200 mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Admissions", "Academics", "Gallery", "News"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-green-200 mb-8">
              For Students
            </h4>
            <ul className="space-y-4">
              {["Student Portal", "Results", "Apply Online"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-green-200 mb-8">
              Contact Us
            </h4>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={20} className="text-green-300" />
                <span className="text-gray-300">
                  #2 Mahant Nagar, Barmasia
                </span>
              </li>

              <li className="flex gap-4">
                <Phone size={20} className="text-green-300" />
                <span className="text-gray-300">
                  +91 9876543210
                </span>
              </li>

              <li className="flex gap-4">
                <Mail size={20} className="text-green-300" />
                <span className="text-gray-300">
                  info@lgpublicschool.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} LG Public School. All Rights Reserved.</p>
          <div className="flex gap-10">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;