import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  LogIn,
  GraduationCap,
  BookOpen,
  Calendar as CalendarIcon,
  Image as ImageIcon,
  FileText,
  Bus,
  CreditCard,
  Trophy,
  Activity,
  LayoutDashboard
} from "lucide-react";

import schoolLogo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerTimeout = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleHamburgerEnter = () => {
    if (hamburgerTimeout.current) clearTimeout(hamburgerTimeout.current);
    setHamburgerOpen(true);
  };

  const handleHamburgerLeave = () => {
    hamburgerTimeout.current = setTimeout(() => {
      setHamburgerOpen(false);
    }, 200); // small delay to allow moving to dropdown
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Academics",
      path: "/academics",
      dropdown: [
        { name: "Academic Overview", path: "/academics", icon: GraduationCap },
        { name: "Study Material", path: "/study-material", icon: BookOpen },
        { name: "Skill Programs", path: "/skill-based-programs", icon: Activity },
        { name: "Beyond The Books", path: "/beyond-the-books", icon: BookOpen },
      ]
    },
    {
      name: "Student Life",
      dropdown: [
        { name: "Sports", path: "/sports", icon: Trophy },
        { name: "Co-Curriculum", path: "/co-curriculum", icon: Activity },
        { name: "Gallery", path: "/gallery", icon: ImageIcon },
        { name: "Calendar", path: "/calendar", icon: CalendarIcon },
        { name: "Transport", path: "/transport", icon: Bus },
        { name: "Notice Board", path: "/notice-board", icon: FileText },
        { name: "Fee Payment", path: "/fees", icon: CreditCard },
      ]
    },
    { name: "Admissions", path: "/admissions" },
    { name: "Faculty", path: "/faculty" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={schoolLogo} alt="LG Public School" className="h-10 w-auto sm:h-12 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-gray-900 leading-tight">LG Public School</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">Excellence in Education</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group px-1">
                  {link.dropdown ? (
                    <button className="flex items-center gap-1 px-3 py-2 text-gray-700 font-medium hover:text-green-700 transition-colors rounded-md hover:bg-green-50">
                      {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 font-medium transition-colors rounded-md hover:bg-green-50 ${location.pathname === link.path ? "text-green-700 bg-green-50" : "text-gray-700 hover:text-green-700"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors group/item"
                          >
                            <div className="p-2 bg-gray-50 rounded-lg group-hover/item:bg-white text-gray-500 group-hover/item:text-green-600 transition-colors">
                              <subItem.icon size={18} />
                            </div>
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Hamburger menu with improved hover handling */}
              <div
                className="relative ml-4"
                onMouseEnter={handleHamburgerEnter}
                onMouseLeave={handleHamburgerLeave}
              >
                <div className="p-2 cursor-pointer bg-green-700 text-white rounded-md hover:bg-green-800 transition">
                  <Menu size={24} />
                </div>

                {hamburgerOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setHamburgerOpen(false)} // optional: close on click
                    >
                      Login
                    </Link>
                    <Link
                      to="/admindashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setHamburgerOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 font-semibold text-gray-900">{link.name}</div>
                      <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-3">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-md text-sm"
                          >
                            <subItem.icon size={16} />
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-3 py-2 font-medium rounded-md ${location.pathname === link.path ? "text-green-700 bg-green-50" : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <Link to="/login" className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                  <LogIn size={18} /> Login
                </Link>
                <Link to="/admin" className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                  <LayoutDashboard size={18} /> Admin
                </Link>
                <Link to="/admissions" className="flex items-center justify-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800">
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}